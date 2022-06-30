"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[45921],{26355:(t,n,a)=>{a.r(n),a.d(n,{default:()=>o});var s=a(78e3);const e=[(0,s.uE)('<p><code>Behavior</code> 注册一个 behavior，接受一个 Object 类型的参数。</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>定义段</th><th>类型</th><th>是否必填</th><th>描述</th><th>最低版本</th></tr></thead><tbody><tr><td>properties</td><td>Object Map</td><td>否</td><td>同组件的属性</td><td></td></tr><tr><td>data</td><td>Object</td><td>否</td><td>同组件的数据</td><td></td></tr><tr><td>methods</td><td>Object</td><td>否</td><td>同自定义组件的方法</td><td></td></tr><tr><td>behaviors</td><td>String Array</td><td>否</td><td>引入其它的 behavior</td><td></td></tr><tr><td>created</td><td>Function</td><td>否</td><td>生命周期函数</td><td></td></tr><tr><td>attached</td><td>Function</td><td>否</td><td>生命周期函数</td><td></td></tr><tr><td>ready</td><td>Function</td><td>否</td><td>生命周期函数</td><td></td></tr><tr><td>moved</td><td>Function</td><td>否</td><td>生命周期函数</td><td></td></tr><tr><td>detached</td><td>Function</td><td>否</td><td>生命周期函数</td><td></td></tr></tbody></table><details class="custom-container details"><summary>代码示例</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// my-behavior.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Behavior</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">behaviors</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">myBehaviorProperty</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">myBehaviorData</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">myBehaviorMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>',4)],p={},o=(0,a(13860).Z)(p,[["render",function(t,n){return(0,s.wg)(),(0,s.iD)("div",null,e)}]])},13860:(t,n)=>{n.Z=(t,n)=>{const a=t.__vccOpts||t;for(const[t,s]of n)a[t]=s;return a}},55057:(t,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-e0cabd72","path":"/code/mini-app/guide/custom-component/behavior.html","title":"Behavior","lang":"zh-CN","frontmatter":{"title":"Behavior","category":["小程序"],"summary":"Behavior 注册一个 behavior，接受一个 Object 类型的参数。 参数 定义段 类型 是否必填 描述 最低版本 ---------- ------------ -------- ------------------- -------- properties Object Map 否 同组件的属性 data Object 否 同组件的数据 m","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/mini-app/guide/custom-component/behavior.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"Behavior"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"参数","slug":"参数","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":0.49,"words":147},"filePathRelative":"code/mini-app/guide/custom-component/behavior.md","localizedDate":"2022年6月27日"}')}}]);