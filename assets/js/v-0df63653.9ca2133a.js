"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[99597],{79511:(n,s,a)=>{a.r(s),a.d(s,{default:()=>x});var e=a(78e3);const t=(0,e._)("div",{class:"custom-container warning"},[(0,e._)("p",{class:"custom-container-title"},"本章为选读章节"),(0,e._)("p",null,"是否学习该章对后续章节的学习没有影响。")],-1),o=(0,e.Uk)("在"),p=(0,e.Uk)("beginWork一节"),c=(0,e.Uk)("我们提到"),l=(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e.Uk)("对于"),(0,e._)("code",null,"update"),(0,e.Uk)("的组件，他会将当前组件与该组件在上次更新时对应的Fiber节点比较（也就是俗称的Diff算法），将比较的结果生成新Fiber节点。")])],-1),i=(0,e._)("p",null,[(0,e.Uk)("这一章我们讲解"),(0,e._)("code",null,"Diff算法"),(0,e.Uk)("的实现。")],-1),d=(0,e.Uk)("你可以从"),r={href:"https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("这里"),k=(0,e.Uk)("看到"),m=(0,e._)("code",null,"Diff算法",-1),v=(0,e.Uk)("的介绍。"),b=(0,e.uE)('<div class="custom-container warning"><p class="custom-container-title">为了防止概念混淆，这里再强调下</p><p>一个<code>DOM节点</code>在某一时刻最多会有4个节点和他相关。</p><ol><li><p><code>current Fiber</code>。如果该<code>DOM节点</code>已在页面中，<code>current Fiber</code>代表该<code>DOM节点</code>对应的<code>Fiber节点</code>。</p></li><li><p><code>workInProgress Fiber</code>。如果该<code>DOM节点</code>将在本次更新中渲染到页面中，<code>workInProgress Fiber</code>代表该<code>DOM节点</code>对应的<code>Fiber节点</code>。</p></li><li><p><code>DOM节点</code>本身。</p></li><li><p><code>JSX对象</code>。即<code>ClassComponent</code>的<code>render</code>方法的返回结果，或<code>FunctionComponent</code>的调用结果。<code>JSX对象</code>中包含描述<code>DOM节点</code>的信息。</p></li></ol><p><code>Diff算法</code>的本质是对比1和4，生成2。</p></div><h2 id="diff的瓶颈以及react如何应对" tabindex="-1"><a class="header-anchor" href="#diff的瓶颈以及react如何应对" aria-hidden="true">#</a> Diff的瓶颈以及React如何应对</h2><p>由于<code>Diff</code>操作本身也会带来性能损耗，React文档中提到，即使在最前沿的算法中，将前后两棵树完全比对的算法的复杂程度为 O(n 3 )，其中<code>n</code>是树中元素的数量。</p><p>如果在<code>React</code>中使用了该算法，那么展示1000个元素所需要执行的计算量将在十亿的量级范围。这个开销实在是太过高昂。</p><p>为了降低算法复杂度，<code>React</code>的<code>diff</code>会预设三个限制：</p><ol><li><p>只对同级元素进行<code>Diff</code>。如果一个<code>DOM节点</code>在前后两次更新中跨越了层级，那么<code>React</code>不会尝试复用他。</p></li><li><p>两个不同类型的元素会产生出不同的树。如果元素由<code>div</code>变为<code>p</code>，React会销毁<code>div</code>及其子孙节点，并新建<code>p</code>及其子孙节点。</p></li><li><p>开发者可以通过 <code>key prop</code>来暗示哪些子元素在不同的渲染下能保持稳定。考虑如下例子：</p></li></ol><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// 更新前</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ka<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">ka</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>song<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">song</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">// 更新后</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>song<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">song</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ka<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">ka</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有<code>key</code>，<code>React</code>会认为<code>div</code>的第一个子节点由<code>p</code>变为<code>h3</code>，第二个子节点由<code>h3</code>变为<code>p</code>。这符合限制2的设定，会销毁并新建。</p><p>但是当我们用<code>key</code>指明了节点前后对应关系后，<code>React</code>知道<code>key === &quot;ka&quot;</code>的<code>p</code>在更新后还存在，所以<code>DOM节点</code>可以复用，只是需要交换下顺序。</p><p>这就是<code>React</code>为了应对算法性能瓶颈做出的三条限制。</p><h2 id="diff是如何实现的" tabindex="-1"><a class="header-anchor" href="#diff是如何实现的" aria-hidden="true">#</a> Diff是如何实现的</h2><p>我们从<code>Diff</code>的入口函数<code>reconcileChildFibers</code>出发，该函数会根据<code>newChild</code>（即<code>JSX对象</code>）类型调用不同的处理函数。</p>',12),f=(0,e.Uk)("你可以从"),g={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactChildFiber.new.js#L1280",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("这里"),y=(0,e.Uk)("看到"),w=(0,e._)("code",null,"reconcileChildFibers",-1),_=(0,e.Uk)("的源码。"),C=(0,e.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 根据newChild类型选择不同diff函数处理</span>\n<span class="token keyword">function</span> <span class="token function">reconcileChildFibers</span><span class="token punctuation">(</span>\n  <span class="token parameter"><span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>\n  <span class="token literal-property property">currentFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">newChild</span><span class="token operator">:</span> any<span class="token punctuation">,</span></span>\n<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">const</span> isObject <span class="token operator">=</span> <span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> newChild <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>isObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// object类型，可能是 REACT_ELEMENT_TYPE 或 REACT_PORTAL_TYPE</span>\n    <span class="token keyword">switch</span> <span class="token punctuation">(</span>newChild<span class="token punctuation">.</span>$$<span class="token keyword">typeof</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">case</span> <span class="token constant">REACT_ELEMENT_TYPE</span><span class="token operator">:</span>\n        <span class="token comment">// 调用 reconcileSingleElement 处理</span>\n      <span class="token comment">// // ...省略其他case</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 调用 reconcileSingleTextNode 处理</span>\n    <span class="token comment">// ...省略</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>newChild<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 调用 reconcileChildrenArray 处理</span>\n    <span class="token comment">// ...省略</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 一些其他情况调用处理函数</span>\n  <span class="token comment">// ...省略</span>\n\n  <span class="token comment">// 以上都没有命中，删除节点</span>\n  <span class="token keyword">return</span> <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> currentFirstChild<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以从同级的节点数量将Diff分为两类：</p><ol><li><p>当<code>newChild</code>类型为<code>object</code>、<code>number</code>、<code>string</code>，代表同级只有一个节点</p></li><li><p>当<code>newChild</code>类型为<code>Array</code>，同级有多个节点</p></li></ol><p>在接下来两节我们会分别讨论这两类节点的<code>Diff</code>。</p>',4),D={},x=(0,a(13860).Z)(D,[["render",function(n,s){const a=(0,e.up)("RouterLink"),D=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e._)("p",null,[o,(0,e.Wm)(a,{to:"/react/process/beginWork.html#reconcilechildren"},{default:(0,e.w5)((()=>[p])),_:1}),c]),l,i,(0,e._)("blockquote",null,[(0,e._)("p",null,[d,(0,e._)("a",r,[u,(0,e.Wm)(D)]),k,m,v])]),b,(0,e._)("blockquote",null,[(0,e._)("p",null,[f,(0,e._)("a",g,[h,(0,e.Wm)(D)]),y,w,_])]),C])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},86562:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-0df63653","path":"/react/diff/prepare.html","title":"diff概览","lang":"zh-CN","frontmatter":{"title":"diff概览","author":"BetaSu","tag":["React"],"summary":"本章为选读章节 是否学习该章对后续章节的学习没有影响。 在beginWork一节我们提到 \\" 对于update的组件，他会将当前组件与该组件在上次更新时对应的Fiber节点比较（也就是俗称的Diff算法），将比较的结果生成新Fiber节点。\\" 这一章我们讲解Diff算法的实现。 \\" 你可以从这里看到Diff算法的介绍。\\" 为了防止概念混淆，这里再强调下 一个","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/react/diff/prepare.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"diff概览"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T09:14:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"BetaSu"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:modified_time","content":"2022-08-29T09:14:21.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Diff的瓶颈以及React如何应对","slug":"diff的瓶颈以及react如何应对","children":[]},{"level":2,"title":"Diff是如何实现的","slug":"diff是如何实现的","children":[]}],"git":{"createdTime":1661764461000,"updatedTime":1661764461000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":3.17,"words":952},"filePathRelative":"react/diff/prepare.md","localizedDate":"2022年8月29日"}')}}]);