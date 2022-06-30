"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[51605],{20500:(n,a,s)=>{s.r(a),s.d(a,{default:()=>o});var e=s(78e3);const t=(0,e._)("div",{class:"custom-container tip"},[(0,e._)("p",{class:"custom-container-title"},"提示"),(0,e._)("p",null,"此部分在初步学习小程序的时候直接略过即可。")],-1),i=(0,e._)("p",null,"WXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。",-1),l=(0,e._)("ol",null,[(0,e._)("li",null,"WXS 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行。"),(0,e._)("li",null,"WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。"),(0,e._)("li",null,"WXS 的运行环境和其他 JavaScript 代码是隔离的，WXS 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的 API。"),(0,e._)("li",null,"WXS 函数不能作为组件的事件回调。"),(0,e._)("li",null,"由于运行环境的差异，在 iOS 设备上小程序内的 WXS 会比 JavaScript 代码快 2 ~ 20 倍。在 Android 设备上二者运行效率无差异。")],-1),p=(0,e.uE)('<p>以下是一些使用 WXS 的简单示例，要完整了解 WXS 语法，请参考 WXS 语法参考。</p><h2 id="页面渲染" tabindex="-1"><a class="header-anchor" href="#页面渲染" aria-hidden="true">#</a> 页面渲染</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--wxml--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wxs</span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\nconst msg = &quot;hello world&quot;;\n\nmodule.exports.message = msg;\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wxs</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> {{m1.message}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面输出:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>hello world\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数据处理" tabindex="-1"><a class="header-anchor" href="#数据处理" aria-hidden="true">#</a> 数据处理</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// page.js</span>\n<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">array</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--wxml--&gt;</span>\n<span class="token comment">&lt;!-- 下面的 getMax 函数，接受一个数组，且返回数组中最大的元素的值 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wxs</span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\nconst getMax = array =&gt; {\n  let max = undefined;\n  for (let i = 0; i &lt; array.length; ++i) {\n    max = max === undefined ?\n      array[i] :\n      (max &gt;= array[i] ? max : array[i]);\n  }\n\n  return max;\n};\n\nmodule.exports.getMax = getMax;\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wxs</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 调用 wxs 里面的 getMax 函数，参数为 page.js 里面的 array --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> {{m1.getMax(array)}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面输出:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>5\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',10),c={},o=(0,s(13860).Z)(c,[["render",function(n,a){return(0,e.wg)(),(0,e.iD)("div",null,[t,i,l,(0,e.kq)(" more "),p])}]])},13860:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}},68300:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e=JSON.parse('{"key":"v-55011963","path":"/code/mini-app/guide/view/wxs.html","title":"WXS","lang":"zh-CN","frontmatter":{"title":"WXS","icon":"script","category":["小程序"],"summary":"提示\\n此部分在初步学习小程序的时候直接略过即可。\\n\\nWXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。\\n\\nWXS 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行。\\nWXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。\\nWXS 的运行环境和其他 JavaScript 代码是隔离的，WXS 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的 API。\\nWXS 函数不能作为组件的事件回调。\\n由于运行环境的差异，在 iOS 设备上小程序内的 WXS 会比 JavaScript 代码快 2 ~ 20 倍。在 Android 设备上二者运行效率无差异。\\n\\n","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/mini-app/guide/view/wxs.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"WXS"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"<div class=\\"custom-container tip\\"><p class=\\"custom-container-title\\">提示</p>\\n<p>此部分在初步学习小程序的时候直接略过即可。</p>\\n</div>\\n<p>WXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。</p>\\n<ol>\\n<li>WXS 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行。</li>\\n<li>WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。</li>\\n<li>WXS 的运行环境和其他 JavaScript 代码是隔离的，WXS 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的 API。</li>\\n<li>WXS 函数不能作为组件的事件回调。</li>\\n<li>由于运行环境的差异，在 iOS 设备上小程序内的 WXS 会比 JavaScript 代码快 2 ~ 20 倍。在 Android 设备上二者运行效率无差异。</li>\\n</ol>\\n","headers":[{"level":2,"title":"页面渲染","slug":"页面渲染","children":[]},{"level":2,"title":"数据处理","slug":"数据处理","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":1.22,"words":366},"filePathRelative":"code/mini-app/guide/view/wxs.md","localizedDate":"2022年6月27日"}')}}]);