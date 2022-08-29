"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[22747],{11367:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(78e3);const p=[(0,t.uE)('<h1 id="new-vue-发生了什么" tabindex="-1"><a class="header-anchor" href="#new-vue-发生了什么" aria-hidden="true">#</a> new Vue 发生了什么</h1><p>从入口代码开始分析，我们先来分析 <code>new Vue</code> 背后发生了哪些事情。我们都知道，<code>new</code> 关键字在 Javascript 语言中代表实例化是一个对象，而 <code>Vue</code> 实际上是一个类，类在 Javascript 中是用 Function 来实现的，来看一下源码，在<code>src/core/instance/index.js</code> 中。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Vue</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span>\n    <span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Vue</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;Vue is a constructor and should be called with the `new` keyword&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 <code>Vue</code> 只能通过 new 关键字初始化，然后会调用 <code>this._init</code> 方法， 该方法在 <code>src/core/instance/init.js</code> 中定义。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token operator">?</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token literal-property property">vm</span><span class="token operator">:</span> Component <span class="token operator">=</span> <span class="token keyword">this</span>\n  <span class="token comment">// a uid</span>\n  vm<span class="token punctuation">.</span>_uid <span class="token operator">=</span> uid<span class="token operator">++</span>\n\n  <span class="token keyword">let</span> startTag<span class="token punctuation">,</span> endTag\n  <span class="token comment">/* istanbul ignore if */</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    startTag <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">vue-perf-start:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vm<span class="token punctuation">.</span>_uid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n    endTag <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">vue-perf-end:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vm<span class="token punctuation">.</span>_uid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n    <span class="token function">mark</span><span class="token punctuation">(</span>startTag<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// a flag to avoid this being observed</span>\n  vm<span class="token punctuation">.</span>_isVue <span class="token operator">=</span> <span class="token boolean">true</span>\n  <span class="token comment">// merge options</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>options <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>_isComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// optimize internal component instantiation</span>\n    <span class="token comment">// since dynamic options merging is pretty slow, and none of the</span>\n    <span class="token comment">// internal component options needs special treatment.</span>\n    <span class="token function">initInternalComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> options<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>\n      <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      vm\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">/* istanbul ignore else */</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">initProxy</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    vm<span class="token punctuation">.</span>_renderProxy <span class="token operator">=</span> vm\n  <span class="token punctuation">}</span>\n  <span class="token comment">// expose real self</span>\n  vm<span class="token punctuation">.</span>_self <span class="token operator">=</span> vm\n  <span class="token function">initLifecycle</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n  <span class="token function">initEvents</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n  <span class="token function">initRender</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">)</span>\n  <span class="token function">initInjections</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token comment">// resolve injections before data/props</span>\n  <span class="token function">initState</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n  <span class="token function">initProvide</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token comment">// resolve provide after data/props</span>\n  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;created&#39;</span><span class="token punctuation">)</span>\n\n  <span class="token comment">/* istanbul ignore if */</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    vm<span class="token punctuation">.</span>_name <span class="token operator">=</span> <span class="token function">formatComponentName</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n    <span class="token function">mark</span><span class="token punctuation">(</span>endTag<span class="token punctuation">)</span>\n    <span class="token function">measure</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">vue </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vm<span class="token punctuation">.</span>_name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> init</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> startTag<span class="token punctuation">,</span> endTag<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue 初始化主要就干了几件事情，合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化 data、props、computed、watcher 等等。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>Vue 的初始化逻辑写的非常清楚，把不同的功能逻辑拆成一些单独的函数执行，让主线逻辑一目了然，这样的编程思想是非常值得借鉴和学习的。</p><p>由于我们这一章的目标是弄清楚模板和数据如何渲染成最终的 DOM，所以各种初始化逻辑我们先不看。在初始化的最后，检测到如果有 <code>el</code> 属性，则调用 <code>vm.$mount</code> 方法挂载 <code>vm</code>，挂载的目标就是把模板渲染成最终的 DOM，那么接下来我们来分析 Vue 的挂载过程。</p>',9)],e={},o=(0,a(13860).Z)(e,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,p)}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},13844:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-2903aa1c","path":"/vue2/data-driven/new-vue.html","title":"new Vue 发生了什么","lang":"zh-CN","frontmatter":{"author":"ustbhuangyi","summary":"new Vue 发生了什么 从入口代码开始分析，我们先来分析 new Vue 背后发生了哪些事情。我们都知道，new 关键字在 Javascript 语言中代表实例化是一个对象，而 Vue 实际上是一个类，类在 Javascript 中是用 Function 来实现的，来看一下源码，在src/core/instance/index.js 中。 可以看到 Vu","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/vue2/data-driven/new-vue.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"new Vue 发生了什么"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T09:14:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"ustbhuangyi"}],["meta",{"property":"article:modified_time","content":"2022-08-29T09:14:21.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"总结","slug":"总结","children":[]}],"git":{"createdTime":1661764461000,"updatedTime":1661764461000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":1.71,"words":512},"filePathRelative":"vue2/data-driven/new-vue.md","localizedDate":"2022年8月29日"}')}}]);