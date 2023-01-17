"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[12263],{12248:(n,a,s)=>{s.r(a),s.d(a,{default:()=>o});var e=s(60329);const t=[(0,e.uE)('<h1 id="深入响应式原理" tabindex="-1"><a class="header-anchor" href="#深入响应式原理" aria-hidden="true">#</a> 深入响应式原理</h1><p>前面 2 章介绍的都是 Vue 怎么实现数据渲染和组件化的，主要讲的是初始化的过程，把原始的数据最终映射到 DOM 中，但并没有涉及到数据变化到 DOM 变化的部分。而 Vue 的数据驱动除了数据渲染 DOM 之外，还有一个很重要的体现就是数据的变更会触发 DOM 的变化。</p><p>其实前端开发最重要的 2 个工作，一个是把数据渲染到页面，另一个是处理用户交互。Vue 把数据渲染到页面的能力我们已经通过源码分析出其中的原理了，但是由于一些用户交互或者是其它方面导致数据发生变化重新对页面渲染的原理我们还未分析。</p><p>考虑如下示例：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeMsg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  {{ message }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Hello Vue!&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">changeMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;Hello World!&#39;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们去修改 <code>this.message</code> 的时候，模板对应的插值也会渲染成新的数据，那么这一切是怎么做到的呢？</p><p>在分析前，我们先直观的想一下，如果不用 Vue 的话，我们会通过最简单的方法实现这个需求：监听点击事件，修改数据，手动操作 DOM 重新渲染。这个过程和使用 Vue 的最大区别就是多了一步“手动操作 DOM 重新渲染”。这一步看上去并不多，但它背后又潜在的几个要处理的问题：</p><ol><li><p>我需要修改哪块的 DOM？</p></li><li><p>我的修改效率和性能是不是最优的？</p></li><li><p>我需要对数据每一次的修改都去操作 DOM 吗？</p></li><li><p>我需要 case by case 去写修改 DOM 的逻辑吗？</p></li></ol><p>如果我们使用了 Vue，那么上面几个问题 Vue 内部就帮你做了，那么 Vue 是如何在我们对数据修改后自动做这些事情呢，接下来我们将进入一些 Vue 响应式系统的底层的细节。</p>',10)],p={},o=(0,s(13860).Z)(p,[["render",function(n,a){return(0,e.wg)(),(0,e.iD)("div",null,t)}]])},13860:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}},48376:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e=JSON.parse('{"key":"v-0af024ac","path":"/vue2/reactive/","title":"深入响应式原理","lang":"zh-CN","frontmatter":{"author":"ustbhuangyi","summary":"深入响应式原理 前面 2 章介绍的都是 Vue 怎么实现数据渲染和组件化的，主要讲的是初始化的过程，把原始的数据最终映射到 DOM 中，但并没有涉及到数据变化到 DOM 变化的部分。而 Vue 的数据驱动除了数据渲染 DOM 之外，还有一个很重要的体现就是数据的变更会触发 DOM 的变化。 其实前端开发最重要的 2 个工作，一个是把数据渲染到页面，另一个是处","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/vue2/reactive/"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"深入响应式原理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T09:14:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"ustbhuangyi"}],["meta",{"property":"article:modified_time","content":"2022-08-29T09:14:21.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1661764461000,"updatedTime":1661764461000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":1.75,"words":526},"filePathRelative":"vue2/reactive/index.md","localizedDate":"2022年8月29日"}')}}]);