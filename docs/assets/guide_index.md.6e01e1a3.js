import{_ as s,c as n,o as a,a as p}from"./app.7ad72340.js";const d=JSON.parse('{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":2,"title":"\u5FEB\u901F\u4E0A\u624B","slug":"\u5FEB\u901F\u4E0A\u624B","link":"#\u5FEB\u901F\u4E0A\u624B","children":[]},{"level":2,"title":"\u5F15\u5165 @tmagic/editor","slug":"\u5F15\u5165-tmagic-editor","link":"#\u5F15\u5165-tmagic-editor","children":[]},{"level":2,"title":"\u4F7F\u7528 m-editor \u7EC4\u4EF6","slug":"\u4F7F\u7528-m-editor-\u7EC4\u4EF6","link":"#\u4F7F\u7528-m-editor-\u7EC4\u4EF6","children":[]},{"level":2,"title":"runtimeUrl","slug":"runtimeurl","link":"#runtimeurl","children":[]},{"level":2,"title":"componentGroupList","slug":"componentgrouplist","link":"#componentgrouplist","children":[]},{"level":2,"title":"propsConfigs/propsValues","slug":"propsconfigs-propsvalues","link":"#propsconfigs-propsvalues","children":[]},{"level":2,"title":"\u66F4\u591A","slug":"\u66F4\u591A","link":"#\u66F4\u591A","children":[]}],"relativePath":"guide/index.md"}'),l={name:"guide/index.md"},o=p(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><p>tmagic-editor\u7684\u7F16\u8F91\u5668\u6211\u4EEC\u5DF2\u7ECF\u5C01\u88C5\u6210\u4E00\u4E2A npm \u5305\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5B89\u88C5\u4F7F\u7528\u3002\u7F16\u8F91\u5668\u662F\u4F7F\u7528 vue3 \u5F00\u53D1\u7684\uFF0C\u4F46\u4F7F\u7528\u7F16\u8F91\u5668\u7684\u4E1A\u52A1\u53EF\u4EE5\u4E0D\u9650\u6846\u67B6\uFF0C\u53EF\u4EE5\u7528 vue2\u3001react \u7B49\u5F00\u53D1\u4E1A\u52A1\u7EC4\u4EF6\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p>node.js &gt; 14</p><p>\u53EF\u4EE5\u901A\u8FC7<a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer">Vite</a> \u6216 <a href="https://cli.vuejs.org/zh/" target="_blank" rel="noreferrer">Vue CLI</a>\u5FEB\u901F\u521B\u5EFA\u9879\u76EE\u3002</p><blockquote><p>\u4F7F\u7528Vue CLI\u751F\u6210\u7684\u9879\u76EE\u9700\u8981\u5728vue.config.js\u4E2D\u52A0\u4E0A\u914D\u7F6E\uFF1AtranspileDependencies: [/@tmagic/]</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ npm install @tmagic/editor @tmagic/form -S</span></span>
<span class="line"></span></code></pre></div><p>\u7531\u4E8E\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u9879\u76EE\u5E38\u5E38\u4F1A\u7528\u5230\u4F8B\u5982<a href="https://element-plus.org/" target="_blank" rel="noreferrer">element-plus</a>\u3001<a href="https://tdesign.tencent.com/vue-next/overview" target="_blank" rel="noreferrer">tdesign-vue-next</a>\u7B49UI\u7EC4\u4EF6\u5E93\u3002\u4E3A\u4E86\u80FD\u8BA9\u4F7F\u7528\u8005\u80FD\u591F\u9009\u62E9\u4E0D\u540CUI\u5E93\uFF0C<a href="https://github.com/Tencent/tmagic-editor/tree/master/packages/editor" target="_blank" rel="noreferrer">@tmagic/editor</a>\u5C06\u5176\u4E2D\u4F7F\u7528\u5230\u7684UI\u7EC4\u4EF6\u5C01\u88C5\u5230<a href="https://github.com/Tencent/tmagic-editor/tree/master/packages/design" target="_blank" rel="noreferrer">@tmagic/design</a>\u4E2D\uFF0C\u7136\u540E\u901A\u8FC7\u4E0D\u540C\u7684adapter\u6765\u6307\u5B9A\u4F7F\u7528\u5177\u4F53\u7684\u5BF9\u5E94\u7684UI\u5E93\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<a href="https://github.com/Tencent/tmagic-editor/tree/master/packages/element-plus-adapter" target="_blank" rel="noreferrer">@tmagic/element-plus-adapter</a>\u6765\u652F\u6301<a href="https://element-plus.org/" target="_blank" rel="noreferrer">element-plus</a>\uFF0C\u6240\u4EE5\u8FD8\u9700\u8981\u5B89\u88C5\u76F8\u5173\u7684\u4F9D\u8D56\u3002</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ npm install @tmagic/element-plus-adapter @tmagic/design element-plus -S</span></span>
<span class="line"></span></code></pre></div><p>editor \u4E2D\u8FD8\u5305\u542B\u4E86<a href="https://microsoft.github.io/monaco-editor/" target="_blank" rel="noreferrer">monaco-editor</a>\uFF0C\u6240\u4EE5\u8FD8\u9700\u5B89\u88C5monaco-editor\uFF0C\u53EF\u4EE5\u53C2\u8003 monaco-editor \u7684<a href="https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md" target="_blank" rel="noreferrer">\u914D\u7F6E\u6307\u5F15</a>\u3002</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ npm install monaco-editor -S</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h2><h2 id="\u5F15\u5165-tmagic-editor" tabindex="-1">\u5F15\u5165 @tmagic/editor <a class="header-anchor" href="#\u5F15\u5165-tmagic-editor" aria-hidden="true">#</a></h2><p>\u5728 main.js \u4E2D\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> ElementPlus </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">element-plus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> zhCn </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">element-plus/es/locale/lang/zh-cn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> TMagicDesign </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@tmagic/design</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> MagicEditor </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@tmagic/editor</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> MagicElementPlusAdapter </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@tmagic/element-plus-adapter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> MagicForm </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@tmagic/form</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./App.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">element-plus/dist/index.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@tmagic/editor/dist/style.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@tmagic/form/dist/style.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(ElementPlus</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">locale</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> zhCn</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(TMagicDesign</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> MagicElementPlusAdapter)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(MagicEditor)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(MagicForm)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u4EE5\u4E0A\u4EE3\u7801\u4FBF\u5B8C\u6210\u4E86 @tmagic/editor \u7684\u5F15\u5165\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6837\u5F0F\u6587\u4EF6\u9700\u8981\u5355\u72EC\u5F15\u5165\u3002</p><p>\u53EF\u4EE5\u53C2\u8003\u6211\u4EEC\u63D0\u4F9B\u7684<a href="https://github.com/Tencent/tmagic-editor/blob/master/playground/src/main.ts" target="_blank" rel="noreferrer">Playground</a>\u793A\u4F8B\u5B9E\u73B0\u4EE3\u7801</p><h2 id="\u4F7F\u7528-m-editor-\u7EC4\u4EF6" tabindex="-1">\u4F7F\u7528 m-editor \u7EC4\u4EF6 <a class="header-anchor" href="#\u4F7F\u7528-m-editor-\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u5728 App.vue \u4E2D\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">m-editor</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dsl</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:menu</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">menu</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:runtime-url</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">runtimeUrl</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:props-configs</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">propsConfigs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:props-values</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">propsValues</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:component-group-list</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">componentGroupList</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">m-editor</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineComponent</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">App</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        menu</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          left</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u9876\u90E8\u5DE6\u4FA7\u83DC\u5355\u6309\u94AE</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          center</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u9876\u90E8\u4E2D\u95F4\u83DC\u5355\u6309\u94AE</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          right</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u9876\u90E8\u53F3\u4FA7\u83DC\u5355\u6309\u94AE</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        dsl</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// \u521D\u59CB\u5316\u9875\u9762\u6570\u636E</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        runtimeUrl</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/runtime/vue3/playground/index.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        propsConfigs</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// \u7EC4\u4EF6\u5C5E\u6027\u5217\u8868</span></span>
<span class="line"><span style="color:#F07178;">        ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        propsValues</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// \u7EC4\u4EF6\u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#F07178;">        ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        componentGroupList</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#F07178;">([</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// \u7EC4\u4EF6\u5217\u8868</span></span>
<span class="line"><span style="color:#F07178;">        ])</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">app</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">m-editor</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5173\u4E8E <a href="https://github.com/Tencent/tmagic-editor/tree/master/packages/editor" target="_blank" rel="noreferrer">@tmagic/editor</a> \u7EC4\u4EF6\uFF0C\u66F4\u591A\u7684\u5C5E\u6027\u914D\u7F6E\u8BE6\u60C5\u8BF7\u53C2\u8003<a href="./../api/editor/props.html">\u7F16\u8F91\u5668 API</a>\u3002</p><p>\u5176\u4E2D\uFF0C<strong>\u6709\u56DB\u4E2A\u9700\u8981\u6CE8\u610F\u7684\u5C5E\u6027\u914D\u7F6E\u9879</strong>\uFF1A<code>runtimeUrl</code> <code>values</code> <code>configs</code> <code>componentGroupList</code>\u3002\u8FD9\u662F\u80FD\u8BA9\u6211\u4EEC\u7684\u7F16\u8F91\u5668\u6B63\u5E38\u8FD0\u884C\u7684\u5173\u952E\u3002</p><h2 id="runtimeurl" tabindex="-1">runtimeUrl <a class="header-anchor" href="#runtimeurl" aria-hidden="true">#</a></h2><p>\u8BE5\u914D\u7F6E\u6D89\u53CA\u5230 <a href="./runtime.html">runtime \u6982\u5FF5</a>\uFF0Ctmagic-editor\u7F16\u8F91\u5668\u4E2D\u5FC3\u7684\u6A21\u62DF\u5668\u753B\u5E03\uFF0C\u662F\u4E00\u4E2A iframe\uFF08\u8FD9\u91CC\u7684 <code>runtimeUrl</code> \u914D\u7F6E\u7684\uFF0C\u5C31\u662F\u4F60\u63D0\u4F9B\u7684 iframe \u7684 url\uFF09\uFF0C\u5176\u4E2D\u6E32\u67D3\u4E86\u4E00\u4E2A runtime\uFF0C\u7528\u6765\u54CD\u5E94\u7F16\u8F91\u5668\u4E2D\u7684\u7EC4\u4EF6\u589E\u5220\u6539\u7B49\u64CD\u4F5C\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u5982\u4F55\u5FEB\u901F\u5F97\u5230\u4E00\u4E2A runtime</p><p>\u5982\u679C\u8981\u5FEB\u901F\u542F\u52A8\uFF0C\u53EF\u4EE5\u4F7F\u7528<a href="https://github.com/Tencent/tmagic-editor" target="_blank" rel="noreferrer">tmagic-editor\u9879\u76EE\u6E90\u7801</a>\u4E2D\u7684 runtime\uFF0C\u5728\u63D0\u4F9B\u7684\u4E09\u4E2A\u6846\u67B6 vue2/vue3/react runtime \u76EE\u5F55\u4E2D\u9009\u62E9\u4E00\u4E2A\uFF0C\u6267\u884C <code>npm run build:admin</code> \u5F97\u5230\u4EA7\u7269\uFF0C\u5E76\u5C06\u4EA7\u7269\u653E\u5230\u4F60\u7684\u9879\u76EE\u4E2D\uFF0C\u6B64\u5904\u7684 runtimeUrl \u6307\u5411\u4F60\u653E\u7F6E runtime/playground/index.html \u7684\u8DEF\u5F84\u3002</p></div><h2 id="componentgrouplist" tabindex="-1">componentGroupList <a class="header-anchor" href="#componentgrouplist" aria-hidden="true">#</a></h2><p><code>componentGroupList</code> \u662F\u6307\u5B9A\u5DE6\u4FA7\u7EC4\u4EF6\u5E93\u5185\u5BB9\u7684\u914D\u7F6E\u3002\u6B64\u5904\u5B9A\u4E49\u4E86\u5728\u7F16\u8F91\u5668\u7EC4\u4EF6\u5E93\u4E2D\u6709\u4EC0\u4E48\u7EC4\u4EF6\u3002\u5728\u6DFB\u52A0\u7684\u65F6\u5019\u901A\u8FC7\u7EC4\u4EF6 <code>type</code> \u6765\u786E\u5B9A runtime \u4E2D\u8981\u6E32\u67D3\u4EC0\u4E48\u7EC4\u4EF6\u3002\u53EF\u4EE5\u53C2\u8003 <a href="./../api/editor/props.html#componentgrouplist">componentGroupList \u914D\u7F6E</a>\u3002</p><h2 id="propsconfigs-propsvalues" tabindex="-1">propsConfigs/propsValues <a class="header-anchor" href="#propsconfigs-propsvalues" aria-hidden="true">#</a></h2><p><code>propsConfigs</code> <code>propsValues</code> \u548C <code>componentGroupList</code> \u4E2D\u58F0\u660E\u7684\u7EC4\u4EF6\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\uFF0C\u901A\u8FC7 <code>type</code> \u6765\u8BC6\u522B\u5C5E\u4E8E\u54EA\u4E2A\u7EC4\u4EF6\uFF0C\u8BE5\u914D\u7F6E\u6D89\u53CA\u7684\u5185\u5BB9\uFF0C\u5C31\u662F\u7EC4\u4EF6\u7684\u8868\u5355\u914D\u7F6E\u63CF\u8FF0\uFF0C\u5728<a href="./component.html">\u7EC4\u4EF6\u5F00\u53D1\u4E2D</a>\u4F1A\u901A\u8FC7 formConfig \u914D\u7F6E\u6765\u58F0\u660E\u8FD9\u4EFD\u5185\u5BB9\u3002</p><p><code>configs</code> \u65E2\u53EF\u4EE5\u901A\u8FC7 hardcode \u65B9\u5F0F\u5199\u4E0A\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u8868\u5355\u914D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7EC4\u4EF6\u6253\u5305\u65B9\u5F0F\u5F97\u5230\u5BF9\u5E94\u5185\u5BB9\uFF0C\u7136\u540E\u901A\u8FC7\u5F02\u6B65\u52A0\u8F7D\u6765\u8F7D\u5165\u3002\u6BD4\u5982\uFF1A</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">setup</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">asyncLoadJs</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">/runtime/vue3/assets/config.js</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">propsConfigs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">magicPresetConfigs</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">asyncLoadJs</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">/runtime/vue3/assets/value.js</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">propsValues</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">magicPresetValues</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u5982\u4F55\u5FEB\u901F\u5F97\u5230\u4E00\u4E2A configs/values</p><p>\u4E0A\u8FF0\u7684 runtime \u4EA7\u7269\u4E2D\uFF0Cdist \u76EE\u5F55\u4E2D\u5373\u5305\u542B\u4E00\u4E2A entry \u6587\u4EF6\u5939\uFF0C\u5728\u4F60\u7684\u9879\u76EE\u7EC4\u4EF6\u521D\u59CB\u5316\u4E4B\u540E\uFF0C\u5206\u522B\u5F02\u6B65\u52A0\u8F7D\u91CC\u9762\u7684config/index.umd.js\u3001value/index.umd.js\u3002\u5E76\u5982\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u8D4B\u503C\u7ED9 configs/values \u5373\u53EF\u3002</p></div><h2 id="\u66F4\u591A" tabindex="-1">\u66F4\u591A <a class="header-anchor" href="#\u66F4\u591A" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u53EF\u4EE5\u5FEB\u901F\u5F97\u5230\u4E00\u4E2A\u521D\u59CB\u5316\u7684\u7B80\u5355\u7F16\u8F91\u5668\u3002</p><p>\u9664\u4E86\u4E0A\u8FF0\u5185\u5BB9\u5916\uFF0C\u6587\u6863\u7684\u5176\u4ED6\u7AE0\u8282\u4E2D\uFF0C\u4E5F\u4F1A\u66F4\u6DF1\u5165\u7684\u63CF\u8FF0\u6574\u4E2Atmagic-editor\u7684\u8BBE\u8BA1\u7406\u5FF5\u548C\u5B9E\u73B0\u7EC6\u8282\u3002\u540C\u65F6\u4F60\u4E5F\u53EF\u4EE5\u67E5\u770B\u6211\u4EEC\u7684<a href="https://github.com/Tencent/tmagic-editor" target="_blank" rel="noreferrer">\u9879\u76EE\u6E90\u7801</a>\uFF0C\u4ECE\u6E90\u7801\u63D0\u4F9B\u7684 playground \u548C runtime \u793A\u4F8B\u6765\u5F00\u53D1\u548C\u7406\u89E3tmagic-editor\u3002</p>`,35),e=[o];function t(r,c,D,F,y,i){return a(),n("div",null,e)}const A=s(l,[["render",t]]);export{d as __pageData,A as default};
