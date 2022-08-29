"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[21174],{19077:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var e=a(78e3);const t=[(0,e.uE)('<h1 id="组件注册" tabindex="-1"><a class="header-anchor" href="#组件注册" aria-hidden="true">#</a> 组件注册</h1><p>在 Vue.js 中，除了它内置的组件如 <code>keep-alive</code>、<code>component</code>、<code>transition</code>、<code>transition-group</code> 等，其它用户自定义组件在使用前必须注册。很多同学在开发过程中可能会遇到如下报错信息：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;Unknown custom element: &lt;xxx&gt; - did you register the component correctly?\n For recursive components, make sure to provide the &quot;name&quot; option.&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一般报这个错的原因都是我们使用了未注册的组件。Vue.js 提供了 2 种组件的注册方式，全局注册和局部注册。接下来我们从源码分析的角度来分析这两种注册方式。</p><h2 id="全局注册" tabindex="-1"><a class="header-anchor" href="#全局注册" aria-hidden="true">#</a> 全局注册</h2><p>要注册一个全局组件，可以使用 <code>Vue.component(tagName, options)</code>。例如：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;my-component&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 选项</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么，<code>Vue.component</code> 函数是在什么时候定义的呢，它的定义过程发生在最开始初始化 Vue 的全局函数的时候，代码在 <code>src/core/global-api/assets.js</code> 中：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ASSET_TYPES</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;shared/constants&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> isPlainObject<span class="token punctuation">,</span> validateComponentName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../util/index&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initAssetRegisters</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">Vue</span><span class="token operator">:</span> GlobalAPI</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token doc-comment comment">/**\n   * Create asset registration methods.\n   */</span>\n  <span class="token constant">ASSET_TYPES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">type</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    Vue<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>\n      <span class="token parameter"><span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">,</span>\n      <span class="token literal-property property">definition</span><span class="token operator">:</span> Function <span class="token operator">|</span> Object</span>\n    <span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token operator">|</span> Object <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>definition<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">[</span>type <span class="token operator">+</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span>id<span class="token punctuation">]</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token comment">/* istanbul ignore if */</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> type <span class="token operator">===</span> <span class="token string">&#39;component&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token function">validateComponentName</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;component&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isPlainObject</span><span class="token punctuation">(</span>definition<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          definition<span class="token punctuation">.</span>name <span class="token operator">=</span> definition<span class="token punctuation">.</span>name <span class="token operator">||</span> id\n          definition <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>_base<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>definition<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;directive&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> definition <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          definition <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">bind</span><span class="token operator">:</span> definition<span class="token punctuation">,</span> <span class="token literal-property property">update</span><span class="token operator">:</span> definition <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">[</span>type <span class="token operator">+</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> definition\n        <span class="token keyword">return</span> definition\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数首先遍历 <code>ASSET_TYPES</code>，得到 <code>type</code> 后挂载到 Vue 上 。<code>ASSET_TYPES</code> 的定义在 <code>src/shared/constants.js</code> 中：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">ASSET_TYPES</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">&#39;component&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;directive&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;filter&#39;</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以实际上 Vue 是初始化了 3 个全局函数，并且如果 <code>type</code> 是 <code>component</code> 且 <code>definition</code> 是一个对象的话，通过 <code>this.opitons._base.extend</code>， 相当于 <code>Vue.extend</code> 把这个对象转换成一个继承于 Vue 的构造函数，最后通过 <code>this.options[type + &#39;s&#39;][id] = definition</code> 把它挂载到 <code>Vue.options.components</code> 上。</p><p>由于我们每个组件的创建都是通过 <code>Vue.extend</code> 继承而来，我们之前分析过在继承的过程中有这么一段逻辑：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Sub<span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>\n  Super<span class="token punctuation">.</span>options<span class="token punctuation">,</span>\n  extendOptions\n<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说它会把 <code>Vue.options</code> 合并到 <code>Sub.options</code>，也就是组件的 <code>options</code> 上， 然后在组件的实例化阶段，会执行 <code>merge options</code> 逻辑，把 <code>Sub.options.components</code> 合并到 <code>vm.$options.components</code> 上。</p><p>然后在创建 <code>vnode</code> 的过程中，会执行 <code>_createElement</code> 方法，我们再来回顾一下这部分的逻辑，它的定义在 <code>src/core/vdom/create-element.js</code> 中：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">_createElement</span> <span class="token punctuation">(</span>\n  <span class="token parameter"><span class="token literal-property property">context</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>\n  tag<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> Class<span class="token operator">&lt;</span>Component<span class="token operator">&gt;</span> <span class="token operator">|</span> Function <span class="token operator">|</span> Object<span class="token punctuation">,</span>\n  data<span class="token operator">?</span><span class="token operator">:</span> VNodeData<span class="token punctuation">,</span>\n  children<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">,</span>\n  normalizationType<span class="token operator">?</span><span class="token operator">:</span> number</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> VNode <span class="token operator">|</span> Array<span class="token operator">&lt;</span>VNode<span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token keyword">let</span> vnode<span class="token punctuation">,</span> ns\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> tag <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> Ctor\n    ns <span class="token operator">=</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>$vnode <span class="token operator">&amp;&amp;</span> context<span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>ns<span class="token punctuation">)</span> <span class="token operator">||</span> config<span class="token punctuation">.</span><span class="token function">getTagNamespace</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">isReservedTag</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// platform built-in elements</span>\n      vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>\n        config<span class="token punctuation">.</span><span class="token function">parsePlatformTagName</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">,</span>\n        <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>Ctor <span class="token operator">=</span> <span class="token function">resolveAsset</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>$options<span class="token punctuation">,</span> <span class="token string">&#39;components&#39;</span><span class="token punctuation">,</span> tag<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// component</span>\n      vnode <span class="token operator">=</span> <span class="token function">createComponent</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">,</span> tag<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token comment">// unknown or unlisted namespaced elements</span>\n      <span class="token comment">// check at runtime because it may get assigned a namespace when its</span>\n      <span class="token comment">// parent normalizes children</span>\n      vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>\n        tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">,</span>\n        <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token comment">// direct component options / constructor</span>\n    vnode <span class="token operator">=</span> <span class="token function">createComponent</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有一个判断逻辑 <code>isDef(Ctor = resolveAsset(context.$options, &#39;components&#39;, tag))</code>，先来看一下 <code>resolveAsset</code> 的定义，在 <code>src/core/utils/options.js</code> 中：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * Resolve an asset.\n * This function is used because child instances need access\n * to assets defined in its ancestor chain.\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">resolveAsset</span> <span class="token punctuation">(</span>\n  <span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>\n  <span class="token literal-property property">type</span><span class="token operator">:</span> string<span class="token punctuation">,</span>\n  <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">,</span>\n  warnMissing<span class="token operator">?</span><span class="token operator">:</span> boolean</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>\n  <span class="token comment">/* istanbul ignore if */</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> id <span class="token operator">!==</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">const</span> assets <span class="token operator">=</span> options<span class="token punctuation">[</span>type<span class="token punctuation">]</span>\n  <span class="token comment">// check local registration variations first</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>assets<span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> assets<span class="token punctuation">[</span>id<span class="token punctuation">]</span>\n  <span class="token keyword">const</span> camelizedId <span class="token operator">=</span> <span class="token function">camelize</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>assets<span class="token punctuation">,</span> camelizedId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> assets<span class="token punctuation">[</span>camelizedId<span class="token punctuation">]</span>\n  <span class="token keyword">const</span> PascalCaseId <span class="token operator">=</span> <span class="token function">capitalize</span><span class="token punctuation">(</span>camelizedId<span class="token punctuation">)</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>assets<span class="token punctuation">,</span> PascalCaseId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> assets<span class="token punctuation">[</span>PascalCaseId<span class="token punctuation">]</span>\n  <span class="token comment">// fallback to prototype chain</span>\n  <span class="token keyword">const</span> res <span class="token operator">=</span> assets<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">||</span> assets<span class="token punctuation">[</span>camelizedId<span class="token punctuation">]</span> <span class="token operator">||</span> assets<span class="token punctuation">[</span>PascalCaseId<span class="token punctuation">]</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> warnMissing <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">warn</span><span class="token punctuation">(</span>\n      <span class="token string">&#39;Failed to resolve &#39;</span> <span class="token operator">+</span> type<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;: &#39;</span> <span class="token operator">+</span> id<span class="token punctuation">,</span>\n      options\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> res\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段逻辑很简单，先通过 <code>const assets = options[type]</code> 拿到 <code>assets</code>，然后再尝试拿 <code>assets[id]</code>，这里有个顺序，先直接使用 <code>id</code> 拿，如果不存在，则把 <code>id</code> 变成驼峰的形式再拿，如果仍然不存在则在驼峰的基础上把首字母再变成大写的形式再拿，如果仍然拿不到则报错。这样说明了我们在使用 <code>Vue.component(id, definition)</code> 全局注册组件的时候，id 可以是连字符、驼峰或首字母大写的形式。</p><p>那么回到我们的调用 <code>resolveAsset(context.$options, &#39;components&#39;, tag)</code>，即拿 <code>vm.$options.components[tag]</code>，这样我们就可以在 <code>resolveAsset</code> 的时候拿到这个组件的构造函数，并作为 <code>createComponent</code> 的钩子的参数。</p><h2 id="局部注册" tabindex="-1"><a class="header-anchor" href="#局部注册" aria-hidden="true">#</a> 局部注册</h2><p>Vue.js 也同样支持局部注册，我们可以在一个组件内部使用 <code>components</code> 选项做组件的局部注册，例如：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">&#39;./components/HelloWorld&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    HelloWorld\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实理解了全局注册的过程，局部注册是非常简单的。在组件的 Vue 的实例化阶段有一个合并 <code>option</code> 的逻辑，之前我们也分析过，所以就把 <code>components</code> 合并到 <code>vm.$options.components</code> 上，这样我们就可以在 <code>resolveAsset</code> 的时候拿到这个组件的构造函数，并作为 <code>createComponent</code> 的钩子的参数。</p><p>注意，局部注册和全局注册不同的是，只有该类型的组件才可以访问局部注册的子组件，而全局注册是扩展到 <code>Vue.options</code> 下，所以在所有组件创建的过程中，都会从全局的 <code>Vue.options.components</code> 扩展到当前组件的 <code>vm.$options.components</code> 下，这就是全局注册的组件能被任意使用的原因。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>通过这一小节的分析，我们对组件的注册过程有了认识，并理解了全局注册和局部注册的差异。其实在平时的工作中，当我们使用到组件库的时候，往往更通用基础组件都是全局注册的，而编写的特例场景的业务组件都是局部注册的。了解了它们的原理，对我们在工作中到底使用全局注册组件还是局部注册组件是有这非常好的指导意义的。</p>',28)],p={},o=(0,a(13860).Z)(p,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,t)}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},79831:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-3d581092","path":"/vue2/components/component-register.html","title":"组件注册","lang":"zh-CN","frontmatter":{"author":"ustbhuangyi","summary":"组件注册 在 Vue.js 中，除了它内置的组件如 keep-alive、component、transition、transition-group 等，其它用户自定义组件在使用前必须注册。很多同学在开发过程中可能会遇到如下报错信息： 一般报这个错的原因都是我们使用了未注册的组件。Vue.js 提供了 2 种组件的注册方式，全局注册和局部注册。接下来我们从源","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/vue2/components/component-register.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"组件注册"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T09:14:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"ustbhuangyi"}],["meta",{"property":"article:modified_time","content":"2022-08-29T09:14:21.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"全局注册","slug":"全局注册","children":[]},{"level":2,"title":"局部注册","slug":"局部注册","children":[]},{"level":2,"title":"总结","slug":"总结","children":[]}],"git":{"createdTime":1661764461000,"updatedTime":1661764461000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":4.58,"words":1375},"filePathRelative":"vue2/components/component-register.md","localizedDate":"2022年8月29日"}')}}]);