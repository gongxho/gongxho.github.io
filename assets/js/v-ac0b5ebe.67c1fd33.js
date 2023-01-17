"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[22121],{716:(e,n,a)=>{a.r(n),a.d(n,{default:()=>x});var o=a(60329);const c=(0,o._)("code",null,"React",-1),t=(0,o._)("code",null,"Legacy Mode",-1),s=(0,o._)("code",null,"ReactDOM.render",-1),r={href:"https://mp.weixin.qq.com/s/zrrqldzRbcPApga_Cp2b8A",target:"_blank",rel:"noopener noreferrer"},d=(0,o._)("code",null,"v17.0",-1),p=(0,o._)("code",null,"v17.0",-1),l=(0,o._)("code",null,"Concurrent Mode",-1),u=(0,o._)("code",null,"v17",-1),i={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-intro.html",target:"_blank",rel:"noopener noreferrer"},h=(0,o.uE)('<p>一句话概括：</p><blockquote><p>Concurrent 模式是一组 React 的新功能，可帮助应用保持响应，并根据用户的设备性能和网速进行适当的调整。</p></blockquote><p><code>Concurrent Mode</code>是<code>React</code>过去2年重构<code>Fiber架构</code>的源动力，也是<code>React</code>未来的发展方向。</p><p>可以预见，当<code>v17</code>完美支持<code>Concurrent Mode</code>后，<code>v18</code>会迎来一大波基于<code>Concurrent Mode</code>的库。</p><p>底层基础决定了上层<code>API</code>的实现，接下来让我们了解下，<code>Concurrent Mode</code>自底向上都包含哪些组成部分，能够发挥哪些能力？</p><h2 id="底层架构-——-fiber架构" tabindex="-1"><a class="header-anchor" href="#底层架构-——-fiber架构" aria-hidden="true">#</a> 底层架构 —— Fiber架构</h2>',6),k=(0,o._)("code",null,"Concurrent Mode",-1),m=(0,o.uE)('<p>基于这个前提，<code>React</code>花费2年时间重构完成了<code>Fiber</code>架构。</p><p><code>Fiber</code>架构的意义在于，他将单个<code>组件</code>作为<code>工作单元</code>，使以<code>组件</code>为粒度的“异步可中断的更新”成为可能。</p><h2 id="架构的驱动力-——-scheduler" tabindex="-1"><a class="header-anchor" href="#架构的驱动力-——-scheduler" aria-hidden="true">#</a> 架构的驱动力 —— Scheduler</h2><p>如果我们同步运行<code>Fiber</code>架构（通过<code>ReactDOM.render</code>），则<code>Fiber</code>架构与重构前并无区别。</p><p>但是当我们配合<code>时间切片</code>，就能根据宿主环境性能，为每个<code>工作单元</code>分配一个<code>可运行时间</code>，实现“异步可中断的更新”。</p>',5),b={href:"https://github.com/facebook/react/tree/master/packages/scheduler",target:"_blank",rel:"noopener noreferrer"},f=(0,o.uE)('<h2 id="架构运行策略-——-lane模型" tabindex="-1"><a class="header-anchor" href="#架构运行策略-——-lane模型" aria-hidden="true">#</a> 架构运行策略 —— lane模型</h2><p>到目前为止，<code>React</code>可以控制<code>更新</code>在<code>Fiber</code>架构中运行/中断/继续运行。</p><p>基于当前的架构，当一次<code>更新</code>在运行过程中被中断，过段时间再继续运行，这就是“异步可中断的更新”。</p><p>当一次<code>更新</code>在运行过程中被中断，转而重新开始一次新的<code>更新</code>，我们可以说：后一次<code>更新</code>打断了前一次<code>更新</code>。</p><p>这就是<code>优先级</code>的概念：后一次<code>更新</code>的<code>优先级</code>更高，他打断了正在进行的前一次<code>更新</code>。</p><p>多个<code>优先级</code>之间如何互相打断？<code>优先级</code>能否升降？本次<code>更新</code>应该赋予什么<code>优先级</code>？</p><p>这就需要一个模型控制不同<code>优先级</code>之间的关系与行为，于是<code>lane</code>模型诞生了。</p><h2 id="上层实现" tabindex="-1"><a class="header-anchor" href="#上层实现" aria-hidden="true">#</a> 上层实现</h2><p>现在，我们可以说：</p><blockquote><p>从源码层面讲，Concurrent Mode是一套可控的“多优先级更新架构”。</p></blockquote><p>那么基于该架构之上可以实现哪些有意思的功能？我们举几个例子：</p><h3 id="batchedupdates" tabindex="-1"><a class="header-anchor" href="#batchedupdates" aria-hidden="true">#</a> batchedUpdates</h3><p>如果我们在一次事件回调中触发多次<code>更新</code>，他们会被合并为一次<code>更新</code>进行处理。</p><p>如下代码执行只会触发一次<code>更新</code>：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">stateA</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">stateB</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">stateA</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种合并多个<code>更新</code>的优化方式被称为<code>batchedUpdates</code>。</p><p><code>batchedUpdates</code>在很早的版本就存在了，不过之前的实现局限很多（脱离当前上下文环境的<code>更新</code>不会被合并）。</p><p>在<code>Concurrent Mode</code>中，是以<code>优先级</code>为依据对更新进行合并的，使用范围更广。</p><h3 id="suspense" tabindex="-1"><a class="header-anchor" href="#suspense" aria-hidden="true">#</a> Suspense</h3>',19),v={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-suspense.html",target:"_blank",rel:"noopener noreferrer"},g=(0,o._)("code",null,"pending",-1),_=(0,o._)("p",null,[(0,o.Uk)("本质上讲"),(0,o._)("code",null,"Suspense"),(0,o.Uk)("内的组件子树比组件树的其他部分拥有更低的"),(0,o._)("code",null,"优先级"),(0,o.Uk)("。")],-1),U=(0,o._)("h3",{id:"usedeferredvalue",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#usedeferredvalue","aria-hidden":"true"},"#"),(0,o.Uk)(" useDeferredValue")],-1),y={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-reference.html#usedeferredvalue",target:"_blank",rel:"noopener noreferrer"},M=(0,o._)("code",null,"timeoutMs",-1),R=(0,o.uE)('<p>例子：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> deferredValue <span class="token operator">=</span> <span class="token function">useDeferredValue</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">timeoutMs</span><span class="token operator">:</span> <span class="token number">2000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<code>useDeferredValue</code>内部会调用<code>useState</code>并触发一次<code>更新</code>。</p><p>这次<code>更新</code>的<code>优先级</code>很低，所以当前如果有正在进行中的<code>更新</code>，不会受<code>useDeferredValue</code>产生的<code>更新</code>影响。所以<code>useDeferredValue</code>能够返回延迟的值。</p><p>当超过<code>timeoutMs</code>后<code>useDeferredValue</code>产生的<code>更新</code>还没进行（由于<code>优先级</code>太低一直被打断），则会再触发一次高优先级<code>更新</code>。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>除了以上介绍的实现，相信未来<code>React</code>还会开发更多基于<code>Concurrent Mode</code>的玩法。</p><p><code>Fiber</code>架构在之前的章节已经学习了。所以，在本章接下来的部分，我们会按照上文的脉络，自底向上，从架构到实现讲解<code>Concurrent Mode</code>。</p>',8),C={},x=(0,a(13860).Z)(C,[["render",function(e,n){const a=(0,o.up)("RouterLink"),C=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("p",null,[(0,o.Uk)("在"),(0,o.Wm)(a,{to:"/react/state/reactdom.html#react%E7%9A%84%E5%85%B6%E4%BB%96%E5%85%A5%E5%8F%A3%E5%87%BD%E6%95%B0"},{default:(0,o.w5)((()=>[(0,o.Uk)("ReactDOM.render")])),_:1}),(0,o.Uk)("一节我们介绍了"),c,(0,o.Uk)("当前的三种入口函数。日常开发主要使用的是"),t,(0,o.Uk)("（通过"),s,(0,o.Uk)("创建）。")]),(0,o._)("p",null,[(0,o.Uk)("从"),(0,o._)("a",r,[(0,o.Uk)("React v17.0 正式发布！"),(0,o.Wm)(C)]),(0,o.Uk)("一文可以看到，"),d,(0,o.Uk)("没有包含新特性。究其原因，"),p,(0,o.Uk)("主要的工作在于源码内部对"),l,(0,o.Uk)("的支持。所以"),u,(0,o.Uk)("版本也被称为“垫脚石”版本。")]),(0,o._)("p",null,[(0,o.Uk)("你可以从官网"),(0,o._)("a",i,[(0,o.Uk)("Concurrent 模式介绍"),(0,o.Wm)(C)]),(0,o.Uk)("了解其基本概念。")]),h,(0,o._)("p",null,[(0,o.Uk)("从"),(0,o.Wm)(a,{to:"/react/preparation/idea.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("设计理念")])),_:1}),(0,o.Uk)("我们了解到要实现"),k,(0,o.Uk)("，最关键的一点是：实现异步可中断的更新。")]),m,(0,o._)("p",null,[(0,o.Uk)("于是，"),(0,o._)("a",b,[(0,o.Uk)("scheduler"),(0,o.Wm)(C)]),(0,o.Uk)("（调度器）产生了。")]),f,(0,o._)("p",null,[(0,o._)("a",v,[(0,o.Uk)("Suspense"),(0,o.Wm)(C)]),(0,o.Uk)("可以在组件请求数据时展示一个"),g,(0,o.Uk)("状态。请求成功后渲染数据。")]),_,U,(0,o._)("p",null,[(0,o._)("a",y,[(0,o.Uk)("useDeferredValue"),(0,o.Wm)(C)]),(0,o.Uk)("返回一个延迟响应的值，该值可能“延后”的最长时间为"),M,(0,o.Uk)("。")]),R])}]])},13860:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,o]of n)a[e]=o;return a}},62690:(e,n,a)=>{a.r(n),a.d(n,{data:()=>o});const o=JSON.parse('{"key":"v-ac0b5ebe","path":"/react/concurrent/prepare.html","title":"概览","lang":"zh-CN","frontmatter":{"title":"概览","author":"BetaSu","tag":["React"],"summary":"在ReactDOM.render一节我们介绍了React当前的三种入口函数。日常开发主要使用的是Legacy Mode（通过ReactDOM.render创建）。 从React v17.0 正式发布！一文可以看到，v17.0没有包含新特性。究其原因，v17.0主要的工作在于源码内部对Concurrent Mode的支持。所以v17版本也被称为“垫脚石”版本。","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/react/concurrent/prepare.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"概览"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T09:14:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"BetaSu"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:modified_time","content":"2022-08-29T09:14:21.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"底层架构 —— Fiber架构","slug":"底层架构-——-fiber架构","children":[]},{"level":2,"title":"架构的驱动力 —— Scheduler","slug":"架构的驱动力-——-scheduler","children":[]},{"level":2,"title":"架构运行策略 —— lane模型","slug":"架构运行策略-——-lane模型","children":[]},{"level":2,"title":"上层实现","slug":"上层实现","children":[{"level":3,"title":"batchedUpdates","slug":"batchedupdates","children":[]},{"level":3,"title":"Suspense","slug":"suspense","children":[]},{"level":3,"title":"useDeferredValue","slug":"usedeferredvalue","children":[]}]},{"level":2,"title":"总结","slug":"总结","children":[]}],"git":{"createdTime":1661764461000,"updatedTime":1661764461000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":3.98,"words":1194},"filePathRelative":"react/concurrent/prepare.md","localizedDate":"2022年8月29日"}')}}]);