<template>
  <content-menu :menu-data="menuData" ref="menu"></content-menu>
</template>

<script lang="ts" setup name="MEditorViewerMenu">
import { computed, inject, markRaw, ref, watch } from 'vue';
import { Bottom, CopyDocument, Delete, DocumentCopy, Top } from '@element-plus/icons-vue';

import { NodeType } from '@tmagic/schema';
import { isPage } from '@tmagic/utils';

import ContentMenu from '@editor/components/ContentMenu.vue';
import storageService from '@editor/services/storage';
import { LayerOffset, Layout, MenuButton, MenuComponent, Services } from '@editor/type';
import { COPY_STORAGE_KEY } from '@editor/utils/editor';

const props = withDefaults(
  defineProps<{ isMultiSelect?: boolean; stageContentMenu: (MenuButton | MenuComponent)[] }>(),
  { isMultiSelect: false },
);

const services = inject<Services>('services');
const editorService = services?.editorService;
const menu = ref<InstanceType<typeof ContentMenu>>();
const canPaste = ref(false);
const canCenter = ref(false);

const node = computed(() => editorService?.get('node'));
const nodes = computed(() => editorService?.get('nodes'));
const parent = computed(() => editorService?.get('parent'));
const stage = computed(() => editorService?.get('stage'));

const menuData = computed<(MenuButton | MenuComponent)[]>(() => [
  {
    type: 'button',
    text: '水平居中',
    display: () => canCenter.value,
    handler: () => {
      if (!nodes.value) return;
      editorService?.alignCenter(nodes.value);
    },
  },
  {
    type: 'button',
    text: '复制',
    icon: markRaw(CopyDocument),
    handler: () => {
      nodes.value && editorService?.copy(nodes.value);
      canPaste.value = true;
    },
  },
  {
    type: 'button',
    text: '粘贴',
    icon: markRaw(DocumentCopy),
    display: () => canPaste.value,
    handler: () => {
      const rect = menu.value?.$el.getBoundingClientRect();
      const parentRect = stage.value?.container?.getBoundingClientRect();
      const initialLeft = (rect?.left || 0) - (parentRect?.left || 0);
      const initialTop = (rect?.top || 0) - (parentRect?.top || 0);

      if (!nodes.value || nodes.value.length === 0) return;
      editorService?.paste({ left: initialLeft, top: initialTop });
    },
  },
  {
    type: 'divider',
    direction: 'horizontal',
    display: () => {
      if (!node.value) return false;
      return !isPage(node.value);
    },
  },
  {
    type: 'button',
    text: '上移一层',
    icon: markRaw(Top),
    display: () => !isPage(node.value) && !props.isMultiSelect,
    handler: () => {
      editorService?.moveLayer(1);
    },
  },
  {
    type: 'button',
    text: '下移一层',
    icon: markRaw(Bottom),
    display: () => !isPage(node.value) && !props.isMultiSelect,
    handler: () => {
      editorService?.moveLayer(-1);
    },
  },
  {
    type: 'button',
    text: '置顶',
    display: () => !isPage(node.value) && !props.isMultiSelect,
    handler: () => {
      editorService?.moveLayer(LayerOffset.TOP);
    },
  },
  {
    type: 'button',
    text: '置底',
    display: () => !isPage(node.value) && !props.isMultiSelect,
    handler: () => {
      editorService?.moveLayer(LayerOffset.BOTTOM);
    },
  },
  {
    type: 'divider',
    direction: 'horizontal',
    display: () => !isPage(node.value) && !props.isMultiSelect,
  },
  {
    type: 'button',
    text: '删除',
    icon: Delete,
    display: () => !isPage(node.value),
    handler: () => {
      nodes.value && editorService?.remove(nodes.value);
    },
  },
  {
    type: 'divider',
    direction: 'horizontal',
  },
  {
    type: 'button',
    text: '清空参考线',
    handler: () => {
      editorService?.get('stage')?.clearGuides();
    },
  },
  ...props.stageContentMenu,
]);

watch(
  parent,
  async () => {
    if (!parent.value || !editorService) return (canCenter.value = false);
    const layout = await editorService.getLayout(parent.value);
    const isLayoutConform = [Layout.ABSOLUTE, Layout.FIXED].includes(layout);
    const isTypeConform = nodes.value?.every(
      (selectedNode) => ![NodeType.ROOT, NodeType.PAGE, 'pop'].includes(`${selectedNode?.type}`),
    );
    canCenter.value = isLayoutConform && !!isTypeConform;
  },
  { immediate: true },
);

const show = async (e: MouseEvent) => {
  menu.value?.show(e);
  const data = await storageService.getItem(COPY_STORAGE_KEY);
  canPaste.value = data !== 'undefined' && !!data;
};

defineExpose({ show });
</script>
