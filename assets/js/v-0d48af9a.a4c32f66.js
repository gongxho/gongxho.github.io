"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[78460],{9101:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});var e=a(78e3);const t=[(0,e.uE)('<h1 id="路由注册" tabindex="-1"><a class="header-anchor" href="#路由注册" aria-hidden="true">#</a> 路由注册</h1><p>Vue 从它的设计上就是一个渐进式 JavaScript 框架，它本身的核心是解决视图渲染的问题，其它的能力就通过插件的方式来解决。Vue-Router 就是官方维护的路由插件，在介绍它的注册实现之前，我们先来分析一下 Vue 通用的插件注册原理。</p><h2 id="vue-use" tabindex="-1"><a class="header-anchor" href="#vue-use" aria-hidden="true">#</a> <code>Vue.use</code></h2><p>Vue 提供了 <code>Vue.use</code> 的全局 API 来注册这些插件，所以我们先来分析一下它的实现原理，定义在 <code>vue/src/core/global-api/use.js</code> 中：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initUse</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">Vue</span><span class="token operator">:</span> GlobalAPI</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Vue<span class="token punctuation">.</span><span class="token function-variable function">use</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">plugin</span><span class="token operator">:</span> Function <span class="token operator">|</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> installedPlugins <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_installedPlugins <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_installedPlugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>installedPlugins<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token function">toArray</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n    args<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> plugin<span class="token punctuation">.</span>install <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      plugin<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>plugin<span class="token punctuation">,</span> args<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> plugin <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">plugin</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    installedPlugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Vue.use</code> 接受一个 <code>plugin</code> 参数，并且维护了一个 <code>_installedPlugins</code> 数组，它存储所有注册过的 <code>plugin</code>；接着又会判断 <code>plugin</code> 有没有定义 <code>install</code> 方法，如果有的话则调用该方法，并且该方法执行的第一个参数是 <code>Vue</code>；最后把 <code>plugin</code> 存储到 <code>installedPlugins</code> 中。</p><p>可以看到 Vue 提供的插件注册机制很简单，每个插件都需要实现一个静态的 <code>install</code> 方法，当我们执行 <code>Vue.use</code> 注册插件的时候，就会执行这个 <code>install</code> 方法，并且在这个 <code>install</code> 方法的第一个参数我们可以拿到 <code>Vue</code> 对象，这样的好处就是作为插件的编写方不需要再额外去<code>import Vue</code> 了。</p><h2 id="路由安装" tabindex="-1"><a class="header-anchor" href="#路由安装" aria-hidden="true">#</a> 路由安装</h2><p>Vue-Router 的入口文件是 <code>src/index.js</code>，其中定义了 <code>VueRouter</code> 类，也实现了 <code>install</code> 的静态方法：<code>VueRouter.install = install</code>，它的定义在 <code>src/install.js</code> 中。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">let</span> _Vue\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">install</span> <span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>install<span class="token punctuation">.</span>installed <span class="token operator">&amp;&amp;</span> _Vue <span class="token operator">===</span> Vue<span class="token punctuation">)</span> <span class="token keyword">return</span>\n  install<span class="token punctuation">.</span>installed <span class="token operator">=</span> <span class="token boolean">true</span>\n\n  _Vue <span class="token operator">=</span> Vue\n\n  <span class="token keyword">const</span> <span class="token function-variable function">isDef</span> <span class="token operator">=</span> <span class="token parameter">v</span> <span class="token operator">=&gt;</span> v <span class="token operator">!==</span> <span class="token keyword">undefined</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">registerInstance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> callVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> i <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_parentVnode\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>registerRouteInstance<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">i</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> callVal<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function">beforeCreate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>router<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>_routerRoot <span class="token operator">=</span> <span class="token keyword">this</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>_router <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>router\n        <span class="token keyword">this</span><span class="token punctuation">.</span>_router<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n        Vue<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;_route&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_router<span class="token punctuation">.</span>history<span class="token punctuation">.</span>current<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>_routerRoot <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$parent <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$parent<span class="token punctuation">.</span>_routerRoot<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span>\n      <span class="token punctuation">}</span>\n      <span class="token function">registerInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">destroyed</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">registerInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;$router&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_routerRoot<span class="token punctuation">.</span>_router <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;$route&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_routerRoot<span class="token punctuation">.</span>_route <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;RouterView&#39;</span><span class="token punctuation">,</span> View<span class="token punctuation">)</span>\n  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;RouterLink&#39;</span><span class="token punctuation">,</span> Link<span class="token punctuation">)</span>\n\n  <span class="token keyword">const</span> strats <span class="token operator">=</span> Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>optionMergeStrategies\n  strats<span class="token punctuation">.</span>beforeRouteEnter <span class="token operator">=</span> strats<span class="token punctuation">.</span>beforeRouteLeave <span class="token operator">=</span> strats<span class="token punctuation">.</span>beforeRouteUpdate <span class="token operator">=</span> strats<span class="token punctuation">.</span>created\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当用户执行 <code>Vue.use(VueRouter)</code> 的时候，实际上就是在执行 <code>install</code> 函数，为了确保 <code>install</code> 逻辑只执行一次，用了 <code>install.installed</code> 变量做已安装的标志位。另外用一个全局的 <code>_Vue</code> 来接收参数 <code>Vue</code>，因为作为 Vue 的插件对 <code>Vue</code> 对象是有依赖的，但又不能去单独去 <code>import Vue</code>，因为那样会增加包体积，所以就通过这种方式拿到 <code>Vue</code> 对象。</p><p>Vue-Router 安装最重要的一步就是利用 <code>Vue.mixin</code> 去把 <code>beforeCreate</code> 和 <code>destroyed</code> 钩子函数注入到每一个组件中。<code>Vue.mixin</code> 的定义，在 <code>vue/src/core/global-api/mixin.js</code> 中：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initMixin</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">Vue</span><span class="token operator">:</span> GlobalAPI</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Vue<span class="token punctuation">.</span><span class="token function-variable function">mixin</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">mixin</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">,</span> mixin<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的实现实际上非常简单，就是把要混入的对象通过 <code>mergeOptions</code> 合并到 <code>Vue</code> 的 <code>options</code> 中，由于每个组件的构造函数都会在 <code>extend</code> 阶段合并 <code>Vue.options</code> 到自身的 <code>options</code> 中，所以也就相当于每个组件都定义了 <code>mixin</code> 定义的选项。</p><p>回到 <code>Vue-Router</code> 的 <code>install</code> 方法，先看混入的 <code>beforeCreate</code> 钩子函数，对于根 <code>Vue</code> 实例而言，执行该钩子函数时定义了 <code>this._routerRoot</code> 表示它自身；<code>this._router</code> 表示 <code>VueRouter</code> 的实例 <code>router</code>，它是在 <code>new Vue</code> 的时候传入的；另外执行了 <code>this._router.init()</code> 方法初始化 <code>router</code>，这个逻辑之后介绍，然后用 <code>defineReactive</code> 方法把 <code>this._route</code> 变成响应式对象，这个作用我们之后会介绍。而对于子组件而言，由于组件是树状结构，在遍历组件树的过程中，它们在执行该钩子函数的时候 <code>this._routerRoot</code> 始终指向的离它最近的传入了 <code>router</code> 对象作为配置而实例化的父实例。</p><p>对于 <code>beforeCreate</code> 和 <code>destroyed</code> 钩子函数，它们都会执行 <code>registerInstance</code> 方法，这个方法的作用我们也是之后会介绍。</p><p>接着给 Vue 原型上定义了 <code>$router</code> 和 <code>$route</code> 2 个属性的 get 方法，这就是为什么我们可以在组件实例上可以访问 <code>this.$router</code> 以及 <code>this.$route</code>，它们的作用之后介绍。</p><p>接着又通过 <code>Vue.component</code> 方法定义了全局的 <code>&lt;router-link&gt;</code> 和 <code>&lt;router-view&gt;</code> 2 个组件，这也是为什么我们在写模板的时候可以使用这两个标签，它们的作用也是之后介绍。</p><p>最后定义了路由中的钩子函数的合并策略，和普通的钩子函数一样。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>那么到此为止，我们分析了 Vue-Router 的安装过程，Vue 编写插件的时候通常要提供静态的 <code>install</code> 方法，我们通过 <code>Vue.use(plugin)</code> 时候，就是在执行 <code>install</code> 方法。<code>Vue-Router</code> 的 <code>install</code> 方法会给每一个组件注入 <code>beforeCreate</code> 和 <code>destoryed</code> 钩子函数，在 <code>beforeCreate</code> 做一些私有属性定义和路由初始化工作，下一节我们就来分析一下 <code>VueRouter</code> 对象的实现和它的初始化工作。</p>',21)],o={},p=(0,a(13860).Z)(o,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,t)}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},8403:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-0d48af9a","path":"/vue2/vue-router/install.html","title":"路由注册","lang":"zh-CN","frontmatter":{"author":"ustbhuangyi","summary":"路由注册 Vue 从它的设计上就是一个渐进式 JavaScript 框架，它本身的核心是解决视图渲染的问题，其它的能力就通过插件的方式来解决。Vue-Router 就是官方维护的路由插件，在介绍它的注册实现之前，我们先来分析一下 Vue 通用的插件注册原理。 Vue.use Vue 提供了 Vue.use 的全局 API 来注册这些插件，所以我们先来分析一下","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/vue2/vue-router/install.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"路由注册"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T09:14:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"ustbhuangyi"}],["meta",{"property":"article:modified_time","content":"2022-08-29T09:14:21.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Vue.use","slug":"vue-use","children":[]},{"level":2,"title":"路由安装","slug":"路由安装","children":[]},{"level":2,"title":"总结","slug":"总结","children":[]}],"git":{"createdTime":1661764461000,"updatedTime":1661764461000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":4.12,"words":1235},"filePathRelative":"vue2/vue-router/install.md","localizedDate":"2022年8月29日"}')}}]);