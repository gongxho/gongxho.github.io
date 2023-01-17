"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[73047],{48313:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var e=a(60329);const t=[(0,e.uE)('<h1 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h1><p>Vue 的 <code>_render</code> 方法是实例的一个私有方法，它用来把实例渲染成一个虚拟 Node。它的定义在 <code>src/core/instance/render.js</code> 文件中：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_render</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> VNode <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token literal-property property">vm</span><span class="token operator">:</span> Component <span class="token operator">=</span> <span class="token keyword">this</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> _parentVnode <span class="token punctuation">}</span> <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options\n\n  <span class="token comment">// reset _rendered flag on slots for duplicate slot check</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> vm<span class="token punctuation">.</span>$slots<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// $flow-disable-line</span>\n      vm<span class="token punctuation">.</span>$slots<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>_rendered <span class="token operator">=</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>_parentVnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    vm<span class="token punctuation">.</span>$scopedSlots <span class="token operator">=</span> _parentVnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>scopedSlots <span class="token operator">||</span> emptyObject\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// set parent vnode. this allows render functions to have access</span>\n  <span class="token comment">// to the data on the placeholder node.</span>\n  vm<span class="token punctuation">.</span>$vnode <span class="token operator">=</span> _parentVnode\n  <span class="token comment">// render self</span>\n  <span class="token keyword">let</span> vnode\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    vnode <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_renderProxy<span class="token punctuation">,</span> vm<span class="token punctuation">.</span>$createElement<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">render</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n    <span class="token comment">// return error render result,</span>\n    <span class="token comment">// or previous vnode to prevent render error causing blank component</span>\n    <span class="token comment">/* istanbul ignore else */</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>renderError<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">try</span> <span class="token punctuation">{</span>\n          vnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span><span class="token function">renderError</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_renderProxy<span class="token punctuation">,</span> vm<span class="token punctuation">.</span>$createElement<span class="token punctuation">,</span> e<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">renderError</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n          vnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>_vnode\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        vnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>_vnode\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      vnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>_vnode\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// return empty vnode in case the render function errored out</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>vnode <span class="token keyword">instanceof</span> <span class="token class-name">VNode</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">warn</span><span class="token punctuation">(</span>\n        <span class="token string">&#39;Multiple root nodes returned from render function. Render function &#39;</span> <span class="token operator">+</span>\n        <span class="token string">&#39;should return a single root node.&#39;</span><span class="token punctuation">,</span>\n        vm\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    vnode <span class="token operator">=</span> <span class="token function">createEmptyVNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// set parent</span>\n  vnode<span class="token punctuation">.</span>parent <span class="token operator">=</span> _parentVnode\n  <span class="token keyword">return</span> vnode\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码最关键的是 <code>render</code> 方法的调用，我们在平时的开发工作中手写 <code>render</code> 方法的场景比较少，而写的比较多的是 <code>template</code> 模板，在之前的 <code>mounted</code> 方法的实现中，会把 <code>template</code> 编译成 <code>render</code> 方法，但这个编译过程是非常复杂的，我们不打算在这里展开讲，之后会专门花一个章节来分析 Vue 的编译过程。</p><p>在 Vue 的官方文档中介绍了 <code>render</code> 函数的第一个参数是 <code>createElement</code>，那么结合之前的例子：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  {{ message }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相当于我们编写如下 <code>render</code> 函数：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n     <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;app&#39;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再回到 <code>_render</code> 函数中的 <code>render</code> 方法的调用：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>vnode <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_renderProxy<span class="token punctuation">,</span> vm<span class="token punctuation">.</span>$createElement<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到，<code>render</code> 函数中的 <code>createElement</code> 方法就是 <code>vm.$createElement</code> 方法：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initRender</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token comment">// bind the createElement fn to this instance</span>\n  <span class="token comment">// so that we get proper render context inside it.</span>\n  <span class="token comment">// args order: tag, data, children, normalizationType, alwaysNormalize</span>\n  <span class="token comment">// internal version is used by render functions compiled from templates</span>\n  vm<span class="token punctuation">.</span><span class="token function-variable function">_c</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">createElement</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n  <span class="token comment">// normalization is always applied for the public version, used in</span>\n  <span class="token comment">// user-written render functions.</span>\n  vm<span class="token punctuation">.</span><span class="token function-variable function">$createElement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">createElement</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，<code>vm.$createElement</code> 方法定义是在执行 <code>initRender</code> 方法的时候，可以看到除了 <code>vm.$createElement</code> 方法，还有一个 <code>vm._c</code> 方法，它是被模板编译成的 <code>render</code> 函数使用，而 <code>vm.$createElement</code> 是用户手写 <code>render</code> 方法使用的， 这俩个方法支持的参数相同，并且内部都调用了 <code>createElement</code> 方法。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><code>vm._render</code> 最终是通过执行 <code>createElement</code> 方法并返回的是 <code>vnode</code>，它是一个虚拟 Node。Vue 2.0 相比 Vue 1.0 最大的升级就是利用了 Virtual DOM。因此在分析 <code>createElement</code> 的实现前，我们先了解一下 Virtual DOM 的概念。</p>',15)],p={},o=(0,a(13860).Z)(p,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,t)}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},8930:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-45a5f871","path":"/vue2/data-driven/render.html","title":"render","lang":"zh-CN","frontmatter":{"author":"ustbhuangyi","summary":"render Vue 的 _render 方法是实例的一个私有方法，它用来把实例渲染成一个虚拟 Node。它的定义在 src/core/instance/render.js 文件中： 这段代码最关键的是 render 方法的调用，我们在平时的开发工作中手写 render 方法的场景比较少，而写的比较多的是 template 模板，在之前的 mounted 方","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/vue2/data-driven/render.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"render"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T09:14:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"ustbhuangyi"}],["meta",{"property":"article:modified_time","content":"2022-08-29T09:14:21.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"总结","slug":"总结","children":[]}],"git":{"createdTime":1661764461000,"updatedTime":1661764461000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":2.19,"words":657},"filePathRelative":"vue2/data-driven/render.md","localizedDate":"2022年8月29日"}')}}]);