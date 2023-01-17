"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[22410],{65834:(e,o,n)=>{n.r(o),n.d(o,{default:()=>y});var c=n(60329);const r=(0,c.uE)('<p>通过上一节的学习，我们了解了<code>Fiber</code>是什么，知道<code>Fiber节点</code>可以保存对应的<code>DOM节点</code>。</p><p>相应的，<code>Fiber节点</code>构成的<code>Fiber树</code>就对应<code>DOM树</code>。</p><p>那么如何更新<code>DOM</code>呢？这需要用到被称为“双缓存”的技术。</p><h2 id="什么是-双缓存" tabindex="-1"><a class="header-anchor" href="#什么是-双缓存" aria-hidden="true">#</a> 什么是“双缓存”</h2><p>当我们用<code>canvas</code>绘制动画，每一帧绘制前都会调用<code>ctx.clearRect</code>清除上一帧的画面。</p><p>如果当前帧画面计算量比较大，导致清除上一帧画面到绘制当前帧画面之间有较长间隙，就会出现白屏。</p><p>为了解决这个问题，我们可以在内存中绘制当前帧动画，绘制完毕后直接用当前帧替换上一帧画面，由于省去了两帧替换间的计算时间，不会出现从白屏到出现画面的闪烁情况。</p>',7),a=(0,c._)("strong",null,"在内存中构建并直接替换",-1),s={href:"https://baike.baidu.com/item/%E5%8F%8C%E7%BC%93%E5%86%B2",target:"_blank",rel:"noopener noreferrer"},t=(0,c.uE)('<p><code>React</code>使用“双缓存”来完成<code>Fiber树</code>的构建与替换——对应着<code>DOM树</code>的创建与更新。</p><h2 id="双缓存fiber树" tabindex="-1"><a class="header-anchor" href="#双缓存fiber树" aria-hidden="true">#</a> 双缓存Fiber树</h2><p>在<code>React</code>中最多会同时存在两棵<code>Fiber树</code>。当前屏幕上显示内容对应的<code>Fiber树</code>称为<code>current Fiber树</code>，正在内存中构建的<code>Fiber树</code>称为<code>workInProgress Fiber树</code>。</p><p><code>current Fiber树</code>中的<code>Fiber节点</code>被称为<code>current fiber</code>，<code>workInProgress Fiber树</code>中的<code>Fiber节点</code>被称为<code>workInProgress fiber</code>，他们通过<code>alternate</code>属性连接。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>currentFiber<span class="token punctuation">.</span>alternate <span class="token operator">===</span> workInProgressFiber<span class="token punctuation">;</span>\nworkInProgressFiber<span class="token punctuation">.</span>alternate <span class="token operator">===</span> currentFiber<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>React</code>应用的根节点通过使<code>current</code>指针在不同<code>Fiber树</code>的<code>rootFiber</code>间切换来完成<code>current Fiber</code>树指向的切换。</p><p>即当<code>workInProgress Fiber树</code>构建完成交给<code>Renderer</code>渲染在页面上后，应用根节点的<code>current</code>指针指向<code>workInProgress Fiber树</code>，此时<code>workInProgress Fiber树</code>就变为<code>current Fiber树</code>。</p><p>每次状态更新都会产生新的<code>workInProgress Fiber树</code>，通过<code>current</code>与<code>workInProgress</code>的替换，完成<code>DOM</code>更新。</p><p>接下来我们以具体例子讲解<code>mount时</code>、<code>update时</code>的构建/替换流程。</p><h2 id="mount时" tabindex="-1"><a class="header-anchor" href="#mount时" aria-hidden="true">#</a> mount时</h2><p>考虑如下例子：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> add<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>p onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">add</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>首次执行<code>ReactDOM.render</code>会创建<code>fiberRootNode</code>（源码中叫<code>fiberRoot</code>）和<code>rootFiber</code>。其中<code>fiberRootNode</code>是整个应用的根节点，<code>rootFiber</code>是<code>&lt;App/&gt;</code>所在组件树的根节点。</li></ol><p>之所以要区分<code>fiberRootNode</code>与<code>rootFiber</code>，是因为在应用中我们可以多次调用<code>ReactDOM.render</code>渲染不同的组件树，他们会拥有不同的<code>rootFiber</code>。但是整个应用的根节点只有一个，那就是<code>fiberRootNode</code>。</p><p><code>fiberRootNode</code>的<code>current</code>会指向当前页面上已渲染内容对应<code>Fiber树</code>，即<code>current Fiber树</code>。</p>',15),d=["src"],i=(0,c.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fiberRootNode<span class="token punctuation">.</span>current <span class="token operator">=</span> rootFiber<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于是首屏渲染，页面中还没有挂载任何<code>DOM</code>，所以<code>fiberRootNode.current</code>指向的<code>rootFiber</code>没有任何<code>子Fiber节点</code>（即<code>current Fiber树</code>为空）。</p><ol start="2"><li>接下来进入<code>render阶段</code>，根据组件返回的<code>JSX</code>在内存中依次创建<code>Fiber节点</code>并连接在一起构建<code>Fiber树</code>，被称为<code>workInProgress Fiber树</code>。（下图中右侧为内存中构建的树，左侧为页面显示的树）</li></ol><p>在构建<code>workInProgress Fiber树</code>时会尝试复用<code>current Fiber树</code>中已有的<code>Fiber节点</code>内的属性，在<code>首屏渲染</code>时只有<code>rootFiber</code>存在对应的<code>current fiber</code>（即<code>rootFiber.alternate</code>）。</p>',4),p=["src"],l=(0,c.uE)('<ol start="3"><li>图中右侧已构建完的<code>workInProgress Fiber树</code>在<code>commit阶段</code>渲染到页面。</li></ol><p>此时<code>DOM</code>更新为右侧树对应的样子。<code>fiberRootNode</code>的<code>current</code>指针指向<code>workInProgress Fiber树</code>使其变为<code>current Fiber 树</code>。</p>',2),u=["src"],b=(0,c._)("h2",{id:"update时",tabindex:"-1"},[(0,c._)("a",{class:"header-anchor",href:"#update时","aria-hidden":"true"},"#"),(0,c.Uk)(" update时")],-1),k=(0,c._)("ol",null,[(0,c._)("li",null,[(0,c.Uk)("接下来我们点击"),(0,c._)("code",null,"p节点"),(0,c.Uk)("触发状态改变，这会开启一次新的"),(0,c._)("code",null,"render阶段"),(0,c.Uk)("并构建一棵新的"),(0,c._)("code",null,"workInProgress Fiber 树"),(0,c.Uk)("。")])],-1),m=["src"],g=(0,c.uE)('<p>和<code>mount</code>时一样，<code>workInProgress fiber</code>的创建可以复用<code>current Fiber树</code>对应的节点数据。</p><blockquote><p>这个决定是否复用的过程就是Diff算法，后面章节会详细讲解</p></blockquote><ol start="2"><li><code>workInProgress Fiber 树</code>在<code>render阶段</code>完成构建后进入<code>commit阶段</code>渲染到页面上。渲染完毕后，<code>workInProgress Fiber 树</code>变为<code>current Fiber 树</code>。</li></ol>',3),F=["src"],h=(0,c._)("h2",{id:"总结",tabindex:"-1"},[(0,c._)("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),(0,c.Uk)(" 总结")],-1),v=(0,c._)("p",null,[(0,c.Uk)("本文介绍了"),(0,c._)("code",null,"Fiber树"),(0,c.Uk)("的构建与替换过程，这个过程伴随着"),(0,c._)("code",null,"DOM"),(0,c.Uk)("的更新。")],-1),f=(0,c._)("code",null,"Fiber节点",-1),w=(0,c._)("code",null,"架构篇",-1),_=(0,c._)("h2",{id:"参考资料",tabindex:"-1"},[(0,c._)("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),(0,c.Uk)(" 参考资料")],-1),U={class:"custom-container details"},I=(0,c.uE)("<summary>Fiber树的创建与切换Demo</summary><p>此<code>Demo</code>会在如下时机在控制台打印信息：</p><ul><li><p>构建<code>WorkInProgrss Fiber</code>时</p></li><li><p>在渲染完毕后，<code>workInProgress Fiber 树</code>变为<code>current Fiber 树</code>时</p></li></ul>",3),P=(0,c._)("strong",null,"812",-1),R={},y=(0,n(13860).Z)(R,[["render",function(e,o){const n=(0,c.up)("ExternalLinkIcon"),R=(0,c.up)("RouterLink");return(0,c.wg)(),(0,c.iD)("div",null,[r,(0,c._)("p",null,[(0,c.Uk)("这种"),a,(0,c.Uk)("的技术叫做"),(0,c._)("a",s,[(0,c.Uk)("双缓存"),(0,c.Wm)(n)]),(0,c.Uk)("。")]),t,(0,c._)("img",{src:e.$withBase("/img/rootfiber.png"),alt:"rootFiber"},null,8,d),i,(0,c._)("img",{src:e.$withBase("/img/workInProgressFiber.png"),alt:"workInProgressFiber"},null,8,p),l,(0,c._)("img",{src:e.$withBase("/img/wipTreeFinish.png"),alt:"workInProgressFiberFinish"},null,8,u),b,k,(0,c._)("img",{src:e.$withBase("/img/wipTreeUpdate.png"),alt:"wipTreeUpdate"},null,8,m),g,(0,c._)("img",{src:e.$withBase("/img/currentTreeUpdate.png"),alt:"currentTreeUpdate"},null,8,F),h,v,(0,c._)("p",null,[(0,c.Uk)("那么在构建过程中每个"),f,(0,c.Uk)("具体是如何创建的呢？我们会在"),w,(0,c.Uk)("的"),(0,c.Wm)(R,{to:"/react/process/reconciler.html"},{default:(0,c.w5)((()=>[(0,c.Uk)("render阶段")])),_:1}),(0,c.Uk)("讲解。")]),_,(0,c._)("details",U,[I,(0,c._)("p",null,[(0,c.Wm)(R,{to:"/react/me.html"},{default:(0,c.w5)((()=>[(0,c.Uk)("关注公众号")])),_:1}),(0,c.Uk)("，后台回复"),P,(0,c.Uk)("获得在线Demo地址")])])])}]])},13860:(e,o)=>{o.Z=(e,o)=>{const n=e.__vccOpts||e;for(const[e,c]of o)n[e]=c;return n}},87036:(e,o,n)=>{n.r(o),n.d(o,{data:()=>c});const c=JSON.parse('{"key":"v-76d57c82","path":"/react/process/doubleBuffer.html","title":"Fiber架构的工作原理","lang":"zh-CN","frontmatter":{"title":"Fiber架构的工作原理","author":"BetaSu","tag":["React"],"summary":"通过上一节的学习，我们了解了Fiber是什么，知道Fiber节点可以保存对应的DOM节点。 相应的，Fiber节点构成的Fiber树就对应DOM树。 那么如何更新DOM呢？这需要用到被称为“双缓存”的技术。 什么是“双缓存” 当我们用canvas绘制动画，每一帧绘制前都会调用ctx.clearRect清除上一帧的画面。 如果当前帧画面计算量比较大，导致清除上","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/react/process/doubleBuffer.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"Fiber架构的工作原理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T09:14:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"BetaSu"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:modified_time","content":"2022-08-29T09:14:21.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"什么是“双缓存”","slug":"什么是-双缓存","children":[]},{"level":2,"title":"双缓存Fiber树","slug":"双缓存fiber树","children":[]},{"level":2,"title":"mount时","slug":"mount时","children":[]},{"level":2,"title":"update时","slug":"update时","children":[]},{"level":2,"title":"总结","slug":"总结","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","children":[]}],"git":{"createdTime":1661764461000,"updatedTime":1661764461000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":3.86,"words":1158},"filePathRelative":"react/process/doubleBuffer.md","localizedDate":"2022年8月29日"}')}}]);