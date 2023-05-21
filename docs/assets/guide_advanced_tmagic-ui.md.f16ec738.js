import{_ as e,c as a,o as t,a as i}from"./app.7ad72340.js";const s=JSON.parse('{"title":"@tmagic/ui","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6E32\u67D3\u5668","slug":"\u6E32\u67D3\u5668","link":"#\u6E32\u67D3\u5668","children":[]},{"level":2,"title":"\u57FA\u7840\u7EC4\u4EF6","slug":"\u57FA\u7840\u7EC4\u4EF6","link":"#\u57FA\u7840\u7EC4\u4EF6","children":[]},{"level":2,"title":"@tmagic/ui \u793A\u4F8B","slug":"tmagic-ui-\u793A\u4F8B","link":"#tmagic-ui-\u793A\u4F8B","children":[]}],"relativePath":"guide/advanced/tmagic-ui.md"}'),r={name:"guide/advanced/tmagic-ui.md"},c=i('<h1 id="tmagic-ui" tabindex="-1">@tmagic/ui <a class="header-anchor" href="#tmagic-ui" aria-hidden="true">#</a></h1><p>\u5728\u524D\u9762<a href="./../advanced/page.html">\u9875\u9762\u6E32\u67D3</a>\u4E2D\u63D0\u5230\u7684 UI \u6E32\u67D3\u5668\uFF0C\u5C31\u662F\u5305\u542B\u5728 @tmagic/ui \u4E2D\u7684\u6E32\u67D3\u5668\u7EC4\u4EF6\u3002</p><p>tmagic-editor\u7684\u8BBE\u8BA1\u662F\u5E0C\u671B\u53D1\u5E03\u7684\u9875\u9762\u652F\u6301\u591A\u4E2A\u524D\u7AEF\u6846\u67B6\uFF0C\u5373\u5404\u4E2A\u4E1A\u52A1\u65B9\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u719F\u6089\u7684\u8BED\u8A00\u6765\u5F00\u53D1\u7EC4\u4EF6\u3001\u53D1\u5E03\u9875\u9762\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7 <a href="./../runtime.html">\u5B9E\u73B0\u4E00\u4E2A runtime</a> \u7684\u65B9\u5F0F\uFF0C\u6765\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5DF1\u7684 @tmagic/ui\u3002</p><p>\u6240\u4EE5tmagic-editor\u7684\u8BBE\u8BA1\u4E2D\uFF0C\u9488\u5BF9\u6BCF\u4E2A\u524D\u7AEF\u6846\u67B6\uFF0C\u90FD\u9700\u8981\u6709\u4E00\u4E2A\u5BF9\u5E94\u7684 @tmagic/ui \u6765\u627F\u62C5\u6E32\u67D3\u5668\u804C\u8D23\u3002\u540C\u65F6\uFF0C\u4E5F\u9700\u8981\u4E00\u4E2A\u4F7F\u7528\u548C @tmagic/ui \u76F8\u540C\u524D\u7AEF\u6846\u67B6\u7684 runtime \u6765 @tmagic/ui \u548C\u4E1A\u52A1\u7EC4\u4EF6\u7684\uFF0C\u5177\u4F53 runtime \u6982\u5FF5\uFF0C\u53EF\u4EE5\u53C2\u8003<a href="./../publish.html">\u9875\u9762\u53D1\u5E03</a>\u3002</p><p>@tmagic/ui \u5728tmagic-editor\u8BBE\u8BA1\u4E2D\uFF0C\u627F\u62C5\u7684\u662F\u4E1A\u52A1\u903B\u8F91\u65E0\u5173\u7684\uFF0C\u57FA\u7840\u7EC4\u4EF6\u6E32\u67D3\u7684\u529F\u80FD\u3002\u4E00\u5207\u548C\u4E1A\u52A1\u76F8\u5173\u7684\u903B\u8F91\uFF0C\u90FD\u5E94\u8BE5\u5728 <a href="./../runtime.html">runtime</a> \u4E2D\u5B9E\u73B0\u3002\u8FD9\u6837 @tmagic/ui \u5C31\u80FD\u4FDD\u6301\u5176\u901A\u7528\u6027\u3002</p><p>\u6211\u4EEC\u4EE5\u9879\u76EE\u4EE3\u7801\u4E2D\u63D0\u4F9B\u7684 vue3 \u7248\u672C\u7684 @tmagic/ui \u4F5C\u4E3A\u793A\u4F8B\u4ECB\u7ECD\u5176\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u3002</p><h2 id="\u6E32\u67D3\u5668" tabindex="-1">\u6E32\u67D3\u5668 <a class="header-anchor" href="#\u6E32\u67D3\u5668" aria-hidden="true">#</a></h2><p>\u5728 vue3 \u4E2D\uFF0C\u5B9E\u73B0\u6E32\u67D3\u5668\u7684\u5177\u4F53\u5F62\u5F0F\u53C2\u8003<a href="./../advanced/page.html">\u9875\u9762\u6E32\u67D3</a>\u4E2D\u63CF\u8FF0\u7684<a href="./../advanced/page.html#\u5BB9\u5668\u6E32\u67D3">\u5BB9\u5668\u6E32\u67D3</a>\u548C<a href="./../advanced/page.html#\u5BB9\u5668\u6E32\u67D3">\u7EC4\u4EF6\u6E32\u67D3</a>\u3002</p><h2 id="\u57FA\u7840\u7EC4\u4EF6" tabindex="-1">\u57FA\u7840\u7EC4\u4EF6 <a class="header-anchor" href="#\u57FA\u7840\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u5728 @tmagic/ui vue3 \u4E2D\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u51E0\u4E2A\u57FA\u7840\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5728\u9879\u76EE\u6E90\u7801\u4E2D\u627E\u5230\u5BF9\u5E94\u5185\u5BB9\u3002</p><ul><li>page tmagic-editor\u7684\u9875\u9762\u57FA\u7840</li><li>container tmagic-editor\u7684\u5BB9\u5668\u6E32\u67D3\u5668</li><li>Component.vue tmagic-editor\u7684\u7EC4\u4EF6\u6E32\u67D3\u5668</li><li>button/text \u57FA\u7840\u7EC4\u4EF6\u793A\u4F8B</li></ul><p>\u5176\u4E2D page/container/Component \u662F UI \u7684\u57FA\u7840\uFF0C\u662F\u6BCF\u4E2A\u6846\u67B6\u7684 UI \u90FD\u5E94\u8BE5\u5B9E\u73B0\u7684\u3002</p><p>button/text \u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u7EC4\u4EF6\u5F00\u53D1\u7684\u793A\u4F8B\uFF0C\u5177\u4F53\u7EC4\u4EF6\u5F00\u53D1\u76F8\u5173\u89C4\u8303\u53EF\u4EE5\u53C2\u8003<a href="./../component.html">\u7EC4\u4EF6\u5F00\u53D1</a>\u3002</p><h2 id="tmagic-ui-\u793A\u4F8B" tabindex="-1">@tmagic/ui \u793A\u4F8B <a class="header-anchor" href="#tmagic-ui-\u793A\u4F8B" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/Tencent/tmagic-editor/blob/master/packages/ui" target="_blank" rel="noreferrer">vue3 \u6E32\u67D3\u5668</a></li><li><a href="https://github.com/Tencent/tmagic-editor/blob/master/packages/ui-vue2" target="_blank" rel="noreferrer">vue2 \u6E32\u67D3\u5668</a></li><li><a href="https://github.com/Tencent/tmagic-editor/blob/master/packages/ui-react" target="_blank" rel="noreferrer">react \u6E32\u67D3\u5668</a></li></ul>',15),n=[c];function l(m,u,d,h,o,g){return t(),a("div",null,n)}const _=e(r,[["render",l]]);export{s as __pageData,_ as default};
