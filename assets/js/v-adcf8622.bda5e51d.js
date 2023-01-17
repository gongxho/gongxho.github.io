"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[55662],{1571:(n,e,a)=>{a.r(e),a.d(e,{default:()=>Cn});var s=a(60329);const t=(0,s._)("p",null,[(0,s.Uk)("经过五章的学习，我们终于回到了"),(0,s._)("code",null,"React"),(0,s.Uk)("应用的起点。")],-1),o=(0,s._)("p",null,[(0,s.Uk)("这一节我们完整的走通"),(0,s._)("code",null,"ReactDOM.render"),(0,s.Uk)("完成页面渲染的整个流程。")],-1),l=(0,s._)("h2",{id:"创建fiber",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#创建fiber","aria-hidden":"true"},"#"),(0,s.Uk)(" 创建fiber")],-1),r=(0,s._)("code",null,"ReactDOM.render",-1),c=(0,s._)("code",null,"fiberRootNode",-1),p=(0,s._)("code",null,"rootFiber",-1),i=(0,s._)("code",null,"fiberRootNode",-1),d=(0,s._)("code",null,"rootFiber",-1),u=(0,s._)("code",null,"根节点",-1),k=(0,s.uE)('<p>这一步发生在调用<code>ReactDOM.render</code>后进入的<code>legacyRenderSubtreeIntoContainer</code>方法中。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// container指ReactDOM.render的第二个参数（即应用挂载的DOM节点）</span>\nroot <span class="token operator">=</span> container<span class="token punctuation">.</span>_reactRootContainer <span class="token operator">=</span> <span class="token function">legacyCreateRootFromDOMContainer</span><span class="token punctuation">(</span>\n  container<span class="token punctuation">,</span>\n  forceHydrate<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\nfiberRoot <span class="token operator">=</span> root<span class="token punctuation">.</span>_internalRoot<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),v={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-dom/src/client/ReactDOMLegacy.js#L193",target:"_blank",rel:"noopener noreferrer"},m=(0,s.uE)('<p><code>legacyCreateRootFromDOMContainer</code>方法内部会调用<code>createFiberRoot</code>方法完成<code>fiberRootNode</code>和<code>rootFiber</code>的创建以及关联。并初始化<code>updateQueue</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createFiberRoot</span><span class="token punctuation">(</span>\n  <span class="token parameter"><span class="token literal-property property">containerInfo</span><span class="token operator">:</span> any<span class="token punctuation">,</span>\n  <span class="token literal-property property">tag</span><span class="token operator">:</span> RootTag<span class="token punctuation">,</span>\n  <span class="token literal-property property">hydrate</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>\n  <span class="token literal-property property">hydrationCallbacks</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> SuspenseHydrationCallbacks<span class="token punctuation">,</span></span>\n<span class="token punctuation">)</span><span class="token operator">:</span> FiberRoot <span class="token punctuation">{</span>\n  <span class="token comment">// 创建fiberRootNode</span>\n  <span class="token keyword">const</span> <span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FiberRootNode</span><span class="token punctuation">(</span>containerInfo<span class="token punctuation">,</span> tag<span class="token punctuation">,</span> hydrate<span class="token punctuation">)</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \n  <span class="token comment">// 创建rootFiber</span>\n  <span class="token keyword">const</span> uninitializedFiber <span class="token operator">=</span> <span class="token function">createHostRootFiber</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 连接rootFiber与fiberRootNode</span>\n  root<span class="token punctuation">.</span>current <span class="token operator">=</span> uninitializedFiber<span class="token punctuation">;</span>\n  uninitializedFiber<span class="token punctuation">.</span>stateNode <span class="token operator">=</span> root<span class="token punctuation">;</span>\n\n  <span class="token comment">// 初始化updateQueue</span>\n  <span class="token function">initializeUpdateQueue</span><span class="token punctuation">(</span>uninitializedFiber<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> root<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),b=(0,s._)("code",null,"rootFiber",-1),_=(0,s._)("code",null,"fiberRootNode",-1),h=["src"],f={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberRoot.new.js#L97",target:"_blank",rel:"noopener noreferrer"},g=(0,s.uE)('<h2 id="创建update" tabindex="-1"><a class="header-anchor" href="#创建update" aria-hidden="true">#</a> 创建update</h2><p>我们已经做好了组件的初始化工作，接下来就等待创建<code>Update</code>来开启一次更新。</p><p>这一步发生在<code>updateContainer</code>方法中。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">updateContainer</span><span class="token punctuation">(</span>\n  <span class="token parameter"><span class="token literal-property property">element</span><span class="token operator">:</span> ReactNodeList<span class="token punctuation">,</span>\n  <span class="token literal-property property">container</span><span class="token operator">:</span> OpaqueRoot<span class="token punctuation">,</span>\n  <span class="token literal-property property">parentComponent</span><span class="token operator">:</span> <span class="token operator">?</span>React$Component<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> any<span class="token operator">&gt;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token operator">?</span>Function<span class="token punctuation">,</span></span>\n<span class="token punctuation">)</span><span class="token operator">:</span> Lane <span class="token punctuation">{</span>\n  <span class="token comment">// ...省略与逻辑不相关代码</span>\n\n  <span class="token comment">// 创建update</span>\n  <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">createUpdate</span><span class="token punctuation">(</span>eventTime<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> suspenseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \n  <span class="token comment">// update.payload为需要挂载在根节点的组件</span>\n  update<span class="token punctuation">.</span>payload <span class="token operator">=</span> <span class="token punctuation">{</span>element<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// callback为ReactDOM.render的第三个参数 —— 回调函数</span>\n  callback <span class="token operator">=</span> callback <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> callback<span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    update<span class="token punctuation">.</span>callback <span class="token operator">=</span> callback<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 将生成的update加入updateQueue</span>\n  <span class="token function">enqueueUpdate</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 调度更新</span>\n  <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// ...省略与逻辑不相关代码</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),y={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberReconciler.new.js#L255",target:"_blank",rel:"noopener noreferrer"},R=(0,s._)("code",null,"updateContainer",-1),U=(0,s._)("p",null,[(0,s.Uk)("值得注意的是其中"),(0,s._)("code",null,"update.payload = {element};")],-1),w=(0,s._)("code",null,"HostRoot",-1),F=(0,s._)("code",null,"payload",-1),O=(0,s._)("code",null,"ReactDOM.render",-1),C=(0,s.uE)('<h2 id="流程概览" tabindex="-1"><a class="header-anchor" href="#流程概览" aria-hidden="true">#</a> 流程概览</h2><p>至此，<code>ReactDOM.render</code>的流程就和我们已知的流程连接上了。</p><p>整个流程如下：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>创建fiberRootNode、rootFiber、updateQueue（<span class="token variable"><span class="token variable">`</span>legacyCreateRootFromDOMContainer<span class="token variable">`</span></span>）\n\n    <span class="token operator">|</span>\n    <span class="token operator">|</span>\n    <span class="token function">v</span>\n\n创建Update对象（<span class="token variable"><span class="token variable">`</span>updateContainer<span class="token variable">`</span></span>）\n\n    <span class="token operator">|</span>\n    <span class="token operator">|</span>\n    <span class="token function">v</span>\n\n从fiber到root（<span class="token variable"><span class="token variable">`</span>markUpdateLaneFromFiberToRoot<span class="token variable">`</span></span>）\n\n    <span class="token operator">|</span>\n    <span class="token operator">|</span>\n    <span class="token function">v</span>\n\n调度更新（<span class="token variable"><span class="token variable">`</span>ensureRootIsScheduled<span class="token variable">`</span></span>）\n\n    <span class="token operator">|</span>\n    <span class="token operator">|</span>\n    <span class="token function">v</span>\n\nrender阶段（<span class="token variable"><span class="token variable">`</span>performSyncWorkOnRoot<span class="token variable">`</span></span> 或 <span class="token variable"><span class="token variable">`</span>performConcurrentWorkOnRoot<span class="token variable">`</span></span>）\n\n    <span class="token operator">|</span>\n    <span class="token operator">|</span>\n    <span class="token function">v</span>\n\ncommit阶段（<span class="token variable"><span class="token variable">`</span>commitRoot<span class="token variable">`</span></span>）\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react的其他入口函数" tabindex="-1"><a class="header-anchor" href="#react的其他入口函数" aria-hidden="true">#</a> React的其他入口函数</h2><p>当前<code>React</code>共有三种模式：</p><ul><li><p><code>legacy</code>，这是当前<code>React</code>使用的方式。当前没有计划删除本模式，但是这个模式可能不支持一些新功能。</p></li><li><p><code>blocking</code>，开启部分<code>concurrent</code>模式特性的中间模式。目前正在实验中。作为迁移到<code>concurrent</code>模式的第一个步骤。</p></li><li><p><code>concurrent</code>，面向未来的开发模式。我们之前讲的<code>任务中断/任务优先级</code>都是针对<code>concurrent</code>模式。</p></li></ul><p>你可以从下表看出各种模式对特性的支持：</p>',8),D=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th",null,"legacy 模式"),(0,s._)("th",null,"blocking 模式"),(0,s._)("th",null,"concurrent 模式")])],-1),j={href:"https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs",target:"_blank",rel:"noopener noreferrer"},M=(0,s._)("td",null,"✅",-1),z=(0,s._)("td",null,"🚫**",-1),W=(0,s._)("td",null,"🚫**",-1),N={href:"https://zh-hans.reactjs.org/docs/legacy-context.html",target:"_blank",rel:"noopener noreferrer"},x=(0,s._)("td",null,"✅",-1),S=(0,s._)("td",null,"🚫**",-1),E=(0,s._)("td",null,"🚫**",-1),B={href:"https://zh-hans.reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage",target:"_blank",rel:"noopener noreferrer"},L=(0,s._)("td",null,"✅",-1),T=(0,s._)("td",null,"🚫**",-1),q=(0,s._)("td",null,"🚫**",-1),A={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly",target:"_blank",rel:"noopener noreferrer"},H=(0,s._)("td",null,"✅",-1),I=(0,s._)("td",null,"✅",-1),Q=(0,s._)("td",null,"✅",-1),P={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#suspenselist",target:"_blank",rel:"noopener noreferrer"},Z=(0,s._)("td",null,"🚫",-1),$=(0,s._)("td",null,"✅",-1),J=(0,s._)("td",null,"✅",-1),V=(0,s._)("tr",null,[(0,s._)("td",null,"Suspense SSR + Hydration"),(0,s._)("td",null,"🚫"),(0,s._)("td",null,"✅"),(0,s._)("td",null,"✅")],-1),G=(0,s._)("tr",null,[(0,s._)("td",null,"Progressive Hydration"),(0,s._)("td",null,"🚫"),(0,s._)("td",null,"✅"),(0,s._)("td",null,"✅")],-1),K=(0,s._)("tr",null,[(0,s._)("td",null,"Selective Hydration"),(0,s._)("td",null,"🚫"),(0,s._)("td",null,"🚫"),(0,s._)("td",null,"✅")],-1),X=(0,s._)("tr",null,[(0,s._)("td",null,"Cooperative Multitasking"),(0,s._)("td",null,"🚫"),(0,s._)("td",null,"🚫"),(0,s._)("td",null,"✅")],-1),Y=(0,s._)("tr",null,[(0,s._)("td",null,"Automatic batching of multiple setStates"),(0,s._)("td",null,"🚫*"),(0,s._)("td",null,"✅"),(0,s._)("td",null,"✅")],-1),nn={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#splitting-high-and-low-priority-state",target:"_blank",rel:"noopener noreferrer"},en=(0,s._)("td",null,"🚫",-1),an=(0,s._)("td",null,"🚫",-1),sn=(0,s._)("td",null,"✅",-1),tn={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-intro.html#interruptible-rendering",target:"_blank",rel:"noopener noreferrer"},on=(0,s._)("td",null,"🚫",-1),ln=(0,s._)("td",null,"🚫",-1),rn=(0,s._)("td",null,"✅",-1),cn={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#transitions",target:"_blank",rel:"noopener noreferrer"},pn=(0,s._)("td",null,"🚫",-1),dn=(0,s._)("td",null,"🚫",-1),un=(0,s._)("td",null,"✅",-1),kn={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#deferring-a-value",target:"_blank",rel:"noopener noreferrer"},vn=(0,s._)("td",null,"🚫",-1),mn=(0,s._)("td",null,"🚫",-1),bn=(0,s._)("td",null,"✅",-1),_n={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#suspense-reveal-train",target:"_blank",rel:"noopener noreferrer"},hn=(0,s._)("td",null,"🚫",-1),fn=(0,s._)("td",null,"🚫",-1),gn=(0,s._)("td",null,"✅",-1),yn=(0,s.uE)("<p>*：<code>legacy</code>模式在合成事件中有自动批处理的功能，但仅限于一个浏览器任务。非<code>React</code>事件想使用这个功能必须使用 <code>unstable_batchedUpdates</code>。在<code>blocking</code>模式和<code>concurrent</code>模式下，所有的<code>setState</code>在默认情况下都是批处理的。</p><p>**：会在开发中发出警告。</p><p>模式的变化影响整个应用的工作方式，所以无法只针对某个组件开启不同模式。</p><p>基于此原因，可以通过不同的<code>入口函数</code>开启不同模式：</p><ul><li><code>legacy</code> -- <code>ReactDOM.render(&lt;App /&gt;, rootNode)</code></li><li><code>blocking</code> -- <code>ReactDOM.createBlockingRoot(rootNode).render(&lt;App /&gt;)</code></li><li><code>concurrent</code> -- <code>ReactDOM.createRoot(rootNode).render(&lt;App /&gt;)</code></li></ul>",5),Rn={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-adoption.html#why-so-many-modes",target:"_blank",rel:"noopener noreferrer"},Un=(0,s._)("code",null,"React",-1),wn=(0,s._)("code",null,"入口函数",-1),Fn=(0,s._)("code",null,"fiber.mode",-1),On={},Cn=(0,a(13860).Z)(On,[["render",function(n,e){const a=(0,s.up)("RouterLink"),On=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[t,o,l,(0,s._)("p",null,[(0,s.Uk)("从"),(0,s.Wm)(a,{to:"/react/process/doubleBuffer.html#mount%E6%97%B6"},{default:(0,s.w5)((()=>[(0,s.Uk)("双缓存机制一节")])),_:1}),(0,s.Uk)("我们知道，首次执行"),r,(0,s.Uk)("会创建"),c,(0,s.Uk)("和"),p,(0,s.Uk)("。其中"),i,(0,s.Uk)("是整个应用的根节点，"),d,(0,s.Uk)("是要渲染组件所在组件树的"),u,(0,s.Uk)("。")]),k,(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s.Uk)("你可以从"),(0,s._)("a",v,[(0,s.Uk)("这里"),(0,s.Wm)(On)]),(0,s.Uk)("看到这一步的代码")])]),m,(0,s._)("p",null,[(0,s.Uk)("根据以上代码，现在我们可以在"),(0,s.Wm)(a,{to:"/react/process/doubleBuffer.html#mount%E6%97%B6"},{default:(0,s.w5)((()=>[(0,s.Uk)("双缓存机制一节")])),_:1}),(0,s.Uk)("基础上补充上"),b,(0,s.Uk)("到"),_,(0,s.Uk)("的引用。")]),(0,s._)("img",{src:n.$withBase("/img/fiberroot.png"),alt:"fiberRoot"},null,8,h),(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s.Uk)("你可以从"),(0,s._)("a",f,[(0,s.Uk)("这里"),(0,s.Wm)(On)]),(0,s.Uk)("看到这一步的代码")])]),g,(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s.Uk)("你可以从"),(0,s._)("a",y,[(0,s.Uk)("这里"),(0,s.Wm)(On)]),(0,s.Uk)("看到"),R,(0,s.Uk)("的代码")])]),U,(0,s._)("p",null,[(0,s.Uk)("这就是我们在"),(0,s.Wm)(a,{to:"/react/state/update.html#update%E7%9A%84%E7%BB%93%E6%9E%84"},{default:(0,s.w5)((()=>[(0,s.Uk)("Update一节")])),_:1}),(0,s.Uk)("介绍的，对于"),w,(0,s.Uk)("，"),F,(0,s.Uk)("为"),O,(0,s.Uk)("的第一个传参。")]),C,(0,s._)("table",null,[D,(0,s._)("tbody",null,[(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("a",j,[(0,s.Uk)("String Refs"),(0,s.Wm)(On)])]),M,z,W]),(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("a",N,[(0,s.Uk)("Legacy Context"),(0,s.Wm)(On)])]),x,S,E]),(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("a",B,[(0,s.Uk)("findDOMNode"),(0,s.Wm)(On)])]),L,T,q]),(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("a",A,[(0,s.Uk)("Suspense"),(0,s.Wm)(On)])]),H,I,Q]),(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("a",P,[(0,s.Uk)("SuspenseList"),(0,s.Wm)(On)])]),Z,$,J]),V,G,K,X,Y,(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("a",nn,[(0,s.Uk)("Priority-based Rendering"),(0,s.Wm)(On)])]),en,an,sn]),(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("a",tn,[(0,s.Uk)("Interruptible Prerendering"),(0,s.Wm)(On)])]),on,ln,rn]),(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("a",cn,[(0,s.Uk)("useTransition"),(0,s.Wm)(On)])]),pn,dn,un]),(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("a",kn,[(0,s.Uk)("useDeferredValue"),(0,s.Wm)(On)])]),vn,mn,bn]),(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("a",_n,[(0,s.Uk)('Suspense Reveal "Train"'),(0,s.Wm)(On)])]),hn,fn,gn])])]),yn,(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s.Uk)("你可以在"),(0,s._)("a",Rn,[(0,s.Uk)("这里"),(0,s.Wm)(On)]),(0,s.Uk)("看到"),Un,(0,s.Uk)("团队解释为什么会有这么多模式")])]),(0,s._)("p",null,[(0,s.Uk)("虽然不同模式的"),wn,(0,s.Uk)("不同，但是他们仅对"),Fn,(0,s.Uk)("变量产生影响，对我们在"),(0,s.Wm)(a,{to:"/react/state/reactdom.html#%E6%B5%81%E7%A8%8B%E6%A6%82%E8%A7%88"},{default:(0,s.w5)((()=>[(0,s.Uk)("流程概览")])),_:1}),(0,s.Uk)("中描述的流程并无影响。")])])}]])},13860:(n,e)=>{e.Z=(n,e)=>{const a=n.__vccOpts||n;for(const[n,s]of e)a[n]=s;return a}},96866:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s=JSON.parse('{"key":"v-adcf8622","path":"/react/state/reactdom.html","title":"ReactDOM.render","lang":"zh-CN","frontmatter":{"title":"ReactDOM.render","author":"BetaSu","tag":["React"],"summary":"经过五章的学习，我们终于回到了React应用的起点。 这一节我们完整的走通ReactDOM.render完成页面渲染的整个流程。 创建fiber 从双缓存机制一节我们知道，首次执行ReactDOM.render会创建fiberRootNode和rootFiber。其中fiberRootNode是整个应用的根节点，rootFiber是要渲染组件所在组件树的根节","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/react/state/reactdom.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"ReactDOM.render"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T09:14:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"BetaSu"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:modified_time","content":"2022-08-29T09:14:21.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"创建fiber","slug":"创建fiber","children":[]},{"level":2,"title":"创建update","slug":"创建update","children":[]},{"level":2,"title":"流程概览","slug":"流程概览","children":[]},{"level":2,"title":"React的其他入口函数","slug":"react的其他入口函数","children":[]}],"git":{"createdTime":1661764461000,"updatedTime":1661764461000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":3.7,"words":1111},"filePathRelative":"react/state/reactdom.md","localizedDate":"2022年8月29日"}')}}]);