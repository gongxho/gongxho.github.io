"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[72319],{34552:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var e=a(78e3);const t=[(0,e.uE)('<h1 id="检测变化的注意事项" tabindex="-1"><a class="header-anchor" href="#检测变化的注意事项" aria-hidden="true">#</a> 检测变化的注意事项</h1><p>通过前面几节的分析，我们对响应式数据对象以及它的 getter 和 setter 部分做了了解，但是对于一些特殊情况是需要注意的，接下来我们就从源码的角度来看 Vue 是如何处理这些特殊情况的。</p><h2 id="对象添加属性" tabindex="-1"><a class="header-anchor" href="#对象添加属性" aria-hidden="true">#</a> 对象添加属性</h2><p>对于使用 <code>Object.defineProperty</code> 实现响应式的对象，当我们去给这个对象添加一个新的属性的时候，是不能够触发它的 setter 的，比如：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// vm.b 是非响应的</span>\nvm<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是添加新属性的场景我们在平时开发中会经常遇到，那么 Vue 为了解决这个问题，定义了一个全局 API <code>Vue.set</code> 方法，它在 <code>src/core/global-api/index.js</code> 中初始化：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span>set <span class="token operator">=</span> <span class="token keyword">set</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个 <code>set</code> 方法的定义在 <code>src/core/observer/index.js</code> 中：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * Set a property on an object. Adds the new property and\n * triggers change notification if the property doesn&#39;t\n * already exist.\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">set</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token operator">|</span> Object<span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">val</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span>\n    <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isPrimitive</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Cannot set reactive property on undefined, null, or primitive value: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span>target<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isValidArrayIndex</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    target<span class="token punctuation">.</span>length <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>length<span class="token punctuation">,</span> key<span class="token punctuation">)</span>\n    target<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> val\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> target <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val\n    <span class="token keyword">return</span> val\n  <span class="token punctuation">}</span>\n  <span class="token keyword">const</span> ob <span class="token operator">=</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>__ob__\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>_isVue <span class="token operator">||</span> <span class="token punctuation">(</span>ob <span class="token operator">&amp;&amp;</span> ob<span class="token punctuation">.</span>vmCount<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">warn</span><span class="token punctuation">(</span>\n      <span class="token string">&#39;Avoid adding reactive properties to a Vue instance or its root $data &#39;</span> <span class="token operator">+</span>\n      <span class="token string">&#39;at runtime - declare it upfront in the data option.&#39;</span>\n    <span class="token punctuation">)</span>\n    <span class="token keyword">return</span> val\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ob<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val\n    <span class="token keyword">return</span> val\n  <span class="token punctuation">}</span>\n  <span class="token function">defineReactive</span><span class="token punctuation">(</span>ob<span class="token punctuation">.</span>value<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">)</span>\n  ob<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> val\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>set</code> 方法接收 3个参数，<code>target</code> 可能是数组或者是普通对象，<code>key</code> 代表的是数组的下标或者是对象的键值，<code>val</code> 代表添加的值。首先判断如果 <code>target</code> 是数组且 <code>key</code> 是一个合法的下标，则之前通过 <code>splice</code> 去添加进数组然后返回，这里的 <code>splice</code> 其实已经不仅仅是原生数组的 <code>splice</code> 了，稍后我会详细介绍数组的逻辑。接着又判断 <code>key</code> 已经存在于 <code>target</code> 中，则直接赋值返回，因为这样的变化是可以观测到了。接着再获取到 <code>target.__ob__</code> 并赋值给 <code>ob</code>，之前分析过它是在 <code>Observer</code> 的构造函数执行的时候初始化的，表示 <code>Observer</code> 的一个实例，如果它不存在，则说明 <code>target</code> 不是一个响应式的对象，则直接赋值并返回。最后通过 <code> defineReactive(ob.value, key, val)</code> 把新添加的属性变成响应式对象，然后再通过 <code>ob.dep.notify()</code> 手动的触发依赖通知，还记得我们在给对象添加 getter 的时候有这么一段逻辑：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">defineReactive</span> <span class="token punctuation">(</span>\n  <span class="token parameter"><span class="token literal-property property">obj</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>\n  <span class="token literal-property property">key</span><span class="token operator">:</span> string<span class="token punctuation">,</span>\n  <span class="token literal-property property">val</span><span class="token operator">:</span> any<span class="token punctuation">,</span>\n  customSetter<span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">?</span>Function<span class="token punctuation">,</span>\n  shallow<span class="token operator">?</span><span class="token operator">:</span> boolean</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token keyword">let</span> childOb <span class="token operator">=</span> <span class="token operator">!</span>shallow <span class="token operator">&amp;&amp;</span> <span class="token function">observe</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>\n  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>childOb<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          childOb<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">dependArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> value\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 getter 过程中判断了 <code>childOb</code>，并调用了 <code>childOb.dep.depend()</code> 收集了依赖，这就是为什么执行 <code>Vue.set</code> 的时候通过 <code>ob.dep.notify()</code> 能够通知到 <code>watcher </code>，从而让添加新的属性到对象也可以检测到变化。这里如果 <code>value</code> 是个数组，那么就通过 <code>dependArray</code> 把数组每个元素也去做依赖收集。</p><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><p>接着说一下数组的情况，Vue 也是不能检测到以下变动的数组：</p><p>1.当你利用索引直接设置一个项时，例如：<code>vm.items[indexOfItem] = newValue</code></p><p>2.当你修改数组的长度时，例如：<code>vm.items.length = newLength</code></p><p>对于第一种情况，可以使用：<code>Vue.set(example1.items, indexOfItem, newValue)</code>；而对于第二种情况，可以使用 <code>vm.items.splice(newLength)</code>。</p><p>我们刚才也分析到，对于 <code>Vue.set</code> 的实现，当 <code>target</code> 是数组的时候，也是通过 <code>target.splice(key, 1, val)</code> 来添加的，那么这里的 <code>splice</code> 到底有什么黑魔法，能让添加的对象变成响应式的呢。</p><p>其实之前我们也分析过，在通过 <code>observe</code> 方法去观察对象的时候会实例化 <code>Observer</code>，在它的构造函数中是专门对数组做了处理，它的定义在 <code>src/core/observer/index.js</code> 中。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value\n    <span class="token keyword">this</span><span class="token punctuation">.</span>dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>vmCount <span class="token operator">=</span> <span class="token number">0</span>\n    <span class="token function">def</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">&#39;__ob__&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> augment <span class="token operator">=</span> hasProto\n        <span class="token operator">?</span> protoAugment\n        <span class="token operator">:</span> copyAugment\n      <span class="token function">augment</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> arrayMethods<span class="token punctuation">,</span> arrayKeys<span class="token punctuation">)</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">observeArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token comment">// ...</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们只需要关注 <code>value</code> 是 Array 的情况，首先获取 <code>augment</code>，这里的 <code>hasProto</code> 实际上就是判断对象中是否存在 <code>__proto__</code>，如果存在则 <code>augment</code> 指向 <code>protoAugment</code>， 否则指向 <code>copyAugment</code>，来看一下这两个函数的定义：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * Augment an target Object or Array by intercepting\n * the prototype chain using __proto__\n */</span>\n<span class="token keyword">function</span> <span class="token function">protoAugment</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> <span class="token literal-property property">src</span><span class="token operator">:</span> Object<span class="token punctuation">,</span> <span class="token literal-property property">keys</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* eslint-disable no-proto */</span>\n  target<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> src\n  <span class="token comment">/* eslint-enable no-proto */</span>\n<span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/**\n * Augment an target Object or Array by defining\n * hidden properties.\n */</span>\n<span class="token comment">/* istanbul ignore next */</span>\n<span class="token keyword">function</span> <span class="token function">copyAugment</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> Object<span class="token punctuation">,</span> <span class="token literal-property property">src</span><span class="token operator">:</span> Object<span class="token punctuation">,</span> <span class="token literal-property property">keys</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> key <span class="token operator">=</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n    <span class="token function">def</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> src<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>protoAugment</code> 方法是直接把 <code>target.__proto__</code> 原型直接修改为 <code>src</code>，而 <code>copyAugment</code> 方法是遍历 keys，通过 <code>def</code>，也就是 <code>Object.defineProperty</code> 去定义它自身的属性值。对于大部分现代浏览器都会走到 <code>protoAugment</code>，那么它实际上就把 <code>value</code> 的原型指向了 <code>arrayMethods</code>，<code>arrayMethods</code> 的定义在 <code>src/core/observer/array.js</code> 中：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> def <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../util/index&#39;</span>\n\n<span class="token keyword">const</span> arrayProto <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype\n<span class="token keyword">export</span> <span class="token keyword">const</span> arrayMethods <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>arrayProto<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> methodsToPatch <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">&#39;push&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;pop&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;shift&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;unshift&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;splice&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;sort&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;reverse&#39;</span>\n<span class="token punctuation">]</span>\n\n<span class="token doc-comment comment">/**\n * Intercept mutating methods and emit events\n */</span>\nmethodsToPatch<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// cache original method</span>\n  <span class="token keyword">const</span> original <span class="token operator">=</span> arrayProto<span class="token punctuation">[</span>method<span class="token punctuation">]</span>\n  <span class="token function">def</span><span class="token punctuation">(</span>arrayMethods<span class="token punctuation">,</span> method<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">mutator</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">original</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>\n    <span class="token keyword">const</span> ob <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__ob__\n    <span class="token keyword">let</span> inserted\n    <span class="token keyword">switch</span> <span class="token punctuation">(</span>method<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">case</span> <span class="token string">&#39;push&#39;</span><span class="token operator">:</span>\n      <span class="token keyword">case</span> <span class="token string">&#39;unshift&#39;</span><span class="token operator">:</span>\n        inserted <span class="token operator">=</span> args\n        <span class="token keyword">break</span>\n      <span class="token keyword">case</span> <span class="token string">&#39;splice&#39;</span><span class="token operator">:</span>\n        inserted <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n        <span class="token keyword">break</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>inserted<span class="token punctuation">)</span> ob<span class="token punctuation">.</span><span class="token function">observeArray</span><span class="token punctuation">(</span>inserted<span class="token punctuation">)</span>\n    <span class="token comment">// notify change</span>\n    ob<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> result\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<code>arrayMethods</code> 首先继承了 <code>Array</code>，然后对数组中所有能改变数组自身的方法，如 <code>push、pop</code> 等这些方法进行重写。重写后的方法会先执行它们本身原有的逻辑，并对能增加数组长度的 3 个方法 <code>push、unshift、splice</code> 方法做了判断，获取到插入的值，然后把新添加的值变成一个响应式对象，并且再调用 <code> ob.dep.notify()</code> 手动触发依赖通知，这就很好地解释了之前的示例中调用 <code>vm.items.splice(newLength)</code> 方法可以检测到变化。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>通过这一节的分析，我们对响应式对象又有了更全面的认识，如果在实际工作中遇到了这些特殊情况，我们就可以知道如何把它们也变成响应式的对象。其实对于对象属性的删除也会用同样的问题，Vue 同样提供了 <code>Vue.del</code> 的全局 API，它的实现和 <code>Vue.set</code> 大同小异，甚至还要更简单一些，这里我就不去分析了，感兴趣的同学可以自行去了解。</p>',27)],p={},o=(0,a(13860).Z)(p,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,t)}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},82629:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-0fc64f58","path":"/vue2/reactive/questions.html","title":"检测变化的注意事项","lang":"zh-CN","frontmatter":{"author":"ustbhuangyi","summary":"检测变化的注意事项 通过前面几节的分析，我们对响应式数据对象以及它的 getter 和 setter 部分做了了解，但是对于一些特殊情况是需要注意的，接下来我们就从源码的角度来看 Vue 是如何处理这些特殊情况的。 对象添加属性 对于使用 Object.defineProperty 实现响应式的对象，当我们去给这个对象添加一个新的属性的时候，是不能够触发它的","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/vue2/reactive/questions.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"检测变化的注意事项"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T09:14:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"ustbhuangyi"}],["meta",{"property":"article:modified_time","content":"2022-08-29T09:14:21.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"对象添加属性","slug":"对象添加属性","children":[]},{"level":2,"title":"数组","slug":"数组","children":[]},{"level":2,"title":"总结","slug":"总结","children":[]}],"git":{"createdTime":1661764461000,"updatedTime":1661764461000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":5.35,"words":1606},"filePathRelative":"vue2/reactive/questions.md","localizedDate":"2022年8月29日"}')}}]);