import { h } from 'vue';
import {
  Badge as TBadge,
  Button as TButton,
  Card as TCard,
  Cascader as TCascader,
  Checkbox as TCheckbox,
  CheckboxGroup as TCheckboxGroup,
  Col as TCol,
  Collapse as TCollapse,
  CollapsePanel as TCollapsePanel,
  ColorPicker as TColorPicker,
  Dialog as TDialog,
  DialogPlugin,
  Divider as TDivider,
  Drawer as TDrawer,
  Dropdown as TDropdown,
  DropdownItem as TDropdownItem,
  Form as TForm,
  FormItem as TFormItem,
  InputNumber as TInputNumber,
  MessagePlugin,
  Option as TOption,
  OptionGroup as TOptionGroup,
  Pagination as TPagination,
  Popup as TPopup,
  Radio as TRadio,
  RadioButton as TRadioButton,
  RadioGroup as TRadioGroup,
  Row as TRow,
  Select as TSelect,
  StepItem as TStepItem,
  Steps as TSteps,
  Switch as TSwitch,
  Table as TTable,
  TabPanel as TTabPanel,
  Tabs as TTabs,
  Tag as TTag,
  TimePicker as TTimePicker,
  Tooltip as TTooltip,
  TreeNodeModel,
  Upload as TUpload,
} from 'tdesign-vue-next';

import DatePicker from './DatePicker.vue';
import Icon from './Icon.vue';
import Input from './Input.vue';
import { vLoading } from './loading';
import Scrollbar from './Scrollbar.vue';
import TableColumn from './TableColumn.vue';
import Tree from './Tree.vue';

const adapter: any = {
  message: MessagePlugin,
  messageBox: {
    alert: (msg: string) => {
      DialogPlugin.alert({
        body: msg,
      });
    },
    confirm: (msg: string) => {
      DialogPlugin.confirm({
        body: msg,
      });
    },
    close: (msg: string) => {
      console.log(msg);
    },
  },
  loading: vLoading,
  components: {
    badge: {
      component: TBadge,
      props: (props: any) => ({
        count: props.value,
        dot: props.isDot,
        maxCount: props.max,
      }),
    },

    button: {
      component: TButton,
      props: (props: any) => ({
        theme: props.type,
        size: props.size === 'default' ? 'medium' : props.size,
        icon: () => (props.icon ? h(props.icon) : null),
        variant: props.text ? 'text' : 'base',
      }),
    },

    card: {
      component: TCard,
      props: (props: any) => ({
        shadow: props.shadow !== 'never',
        hoverShadow: props.shadow === 'hover',
        header: props.header,
      }),
    },

    cascader: {
      component: TCascader,
      props: (props: any) => ({
        modelValue: props.modelValue,
        placeholder: props.placeholder,
        disabled: props.disabled,
        clearable: props.clearable,
        filterable: props.filterable,
        options: props.options,
        size: props.size === 'default' ? 'medium' : props.size,
        trigger: props.props.expandTrigger,
        multiple: props.props.multiple,
        checkStrictly: props.props.checkStrictly,
        valueType: typeof props.props.emitPath === 'undefined' || props.props.emitPath === true ? 'full' : 'single',
        lazy: props.props.lazy,
      }),
    },

    checkbox: {
      component: TCheckbox,
      props: (props: any) => ({
        modelValue: props.modelValue,
        label: props.label,
        value: props.value,
        disabled: props.disabled,
      }),
    },

    checkboxGroup: {
      component: TCheckboxGroup,
      props: (props: any) => ({
        modelValue: props.modelValue,
        label: props.label,
        disabled: props.disabled,
      }),
    },

    col: {
      component: TCol,
      props: (props: any) => ({
        span: props.span,
      }),
    },

    collapse: {
      component: TCollapse,
      props: (props: any) => ({
        value: props.modelValue,
        expandIconPlacement: 'right',
      }),
    },

    collapseItem: {
      component: TCollapsePanel,
      props: (props: any) => ({
        value: props.name,
        header: props.title,
        disabled: props.disabled,
      }),
    },

    colorPicker: {
      component: TColorPicker,
      props: (props: any) => ({
        modelValue: props.modelValue,
        disabled: props.disabled,
        size: props.size === 'default' ? 'medium' : props.size,
        enableAlpha: props.showAlpha,
        formate: props.showAlpha ? 'RGBA' : 'RGB',
      }),
    },

    datePicker: {
      component: DatePicker,
      props: (props: any) => props,
    },

    dialog: {
      component: TDialog,
      props: (props: any) => ({
        visible: props.modelValue,
        attach: props.appendToBody ? 'body' : '',
        header: props.title,
        width: props.width,
        mode: props.fullscreen ? 'full-screen' : 'modal',
        closeOnOverlayClick: props.closeOnClickModal,
      }),
    },

    divider: {
      component: TDivider,
      props: (props: any) => ({
        layout: props.direction,
        content: props.contentPosition,
      }),
    },

    drawer: {
      component: TDrawer,
      props: (props: any) => ({
        visible: props.modelValue,
        size: props.size,
        closeOnEscKeydown: props.closeOnPressEscape,
        closeOnOverlayClick: props.closeOnClickModal,
        attach: props.appendToBody ? 'body' : undefined,
        placement: {
          rtl: 'right',
          ltr: 'left',
          ttb: 'top',
          bt: 'bottom',
        }[props.direction as string],
      }),
    },

    dropdown: {
      component: TDropdown,
      props: (props: any) => ({
        maxHeight: props.maxHeight,
        disabled: props.disable,
        direction: props.placement,
        trigger: props.trigger,
        hideAfterItemClick: props.hideOnClick,
        popupProps: {
          overlayClassName: props.popperClass,
          ...(props.popperOptions || {}),
        },
      }),
    },

    dropdownItem: {
      component: TDropdownItem,
      props: (props: any) => ({
        disabled: props.disabled,
        divider: props.divided,
        prefixIcon: props.icon && (() => h(props.icon)),
        onClick: props.command?.(),
      }),
    },

    dropdownMenu: {
      component: TDropdown,
      props: (props: any) => props,
    },

    form: {
      component: TForm,
      props: (props: any) => ({
        data: props.model,
        labelWidth: props.labelWidth,
        disabled: props.disabled,
        labelAlign: props.labelPosition,
        layout: props.inline ? 'inline' : 'vertical',
      }),
    },

    formItem: {
      component: TFormItem,
      props: (props: any) => ({
        labelWidth: props.labelWidth,
        name: props.prop,
        rules: props.rules,
      }),
    },

    icon: {
      component: Icon,
      props: (props: any) => props,
    },

    input: {
      component: Input,
      props: (props: any) => props,
    },

    inputNumber: {
      component: TInputNumber,
      props: (props: any) => ({
        modelValue: props.modelValue,
        align: props.controlsPosition,
        disabled: props.disabled,
        placeholder: props.placeholder,
        step: props.step,
        min: props.min,
        max: props.max,
        size: props.size === 'default' ? 'medium' : props.size,
      }),
    },

    option: {
      component: TOption,
      props: (props: any) => ({
        value: props.value,
        label: props.label,
        disabled: props.disabled,
      }),
    },

    optionGroup: {
      component: TOptionGroup,
      props: (props: any) => props,
    },

    pagination: {
      component: TPagination,
      props: (props: any) => ({
        current: props.curPage,
        pageSizeOptions: props.pageSizes,
        pageSize: props.pagesize,
        total: props.total,
      }),
    },

    popover: {
      component: TPopup,
      props: (props: any) => ({
        placement: props.placement,
        trigger: props.trigger,
        content: props.content,
        disabled: props.disabled,
        overlayClassName: props.popperClass,
      }),
    },

    radio: {
      component: TRadio,
      props: (props: any) => ({
        label: props.label,
      }),
    },

    radioButton: {
      component: TRadioButton,
      props: (props: any) => ({
        label: props.label,
      }),
    },

    radioGroup: {
      component: TRadioGroup,
      props: (props: any) => ({
        modelValue: props.modelValue,
        disabled: props.disabled,
        size: props.size === 'default' ? 'medium' : props.size,
      }),
    },

    row: {
      component: TRow,
    },

    scrollbar: {
      component: Scrollbar,
      props: (props: any) => props,
    },

    select: {
      component: TSelect,
      props: (props: any) => ({
        modelValue: props.modelValue,
        clearable: props.clearable,
        filterable: props.filterable,
        disabled: props.disabled,
        placeholder: props.placeholder,
        multiple: props.multiple,
        valueType: props.valueKey,
        remoteMethod: props.onSearch,
        size: props.size === 'default' ? 'medium' : props.size,
        popupProps: {
          overlayClassName: props.popperClass,
        },
      }),
    },

    step: {
      component: TStepItem,
      props: (props: any) => ({
        title: props.props,
        value: props.status,
      }),
    },

    steps: {
      component: TSteps,
      props: (props: any) => ({
        current: props.active,
      }),
    },

    switch: {
      component: TSwitch,
      props: (props: any) => ({
        modelValue: props.modelValue,
        disabled: props.disabled,
        label: props.label,
        customValue: [props.activeValue ?? true, props.inactiveValue ?? false],
        size: props.size === 'default' ? 'medium' : props.size,
      }),
    },

    table: {
      component: TTable,
      props: (props: any) => props,
    },

    tableColumn: {
      component: TableColumn,
      props: (props: any) => props,
    },

    tabPane: {
      component: TTabPanel,
      props: (props: any) => ({
        label: props.label,
        value: props.name,
      }),
    },

    tabs: {
      component: TTabs,
      props: (props: any) => ({
        addable: props.editable,
        theme: props.type === 'card' ? 'card' : 'normal',
        placement: props.tabPosition,
        value: props.modelValue,
      }),
    },

    tag: {
      component: TTag,
      props: (props: any) => ({
        theme: props.type ? props.type : 'default',
      }),
    },

    timePicker: {
      component: TTimePicker,
      props: (props: any) => ({
        modelValue: props.modelValue,
        disabled: props.disabled,
        size: props.size === 'default' ? 'medium' : props.size,
        placeholder: props.placeholder,
      }),
    },

    tooltip: {
      component: TTooltip,
      props: (props: any) => ({
        placement: props.placement,
        content: props.content,
      }),
    },

    tree: {
      component: Tree,
      props: (props: any) => ({
        ...props,
        data: props.data,
        draggable: props.draggable,
        activable: props.highlightCurrent,
        activeMultiple: props.highlightCurrent,
        defaultActived: props.defaultCheckedKeys,
        checkable: props.showCheckbox,
        empty: props.emptyText,
        expandAll: props.defaultExpandAll,
        checkStrictly: props.checkStrictly,
        load: props.load,
        keys: props.props,
      }),
      listeners: {
        click(context: { node: TreeNodeModel<any>; e: MouseEvent }) {
          return {
            node: context.node,
            data: context.node.data,
          };
        },
      },
    },

    upload: {
      component: TUpload,
      props: (props: any) => ({
        action: props.action,
        disabled: props.disabled,
        autoUpload: props.autoUpload,
      }),
    },
  },
};

export default adapter;
