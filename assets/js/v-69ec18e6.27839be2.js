"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[66663],{865:(n,e,s)=>{s.r(e),s.d(e,{default:()=>B});var a=s(78e3);const o=(0,a.uE)('<p>在<a href="/process/reconciler">流程概览一节</a>我们了解组件在<code>render阶段</code>会经历<code>beginWork</code>与<code>completeWork</code>。</p><p>上一节我们讲解了组件执行<code>beginWork</code>后会创建<code>子Fiber节点</code>，节点上可能存在<code>effectTag</code>。</p><p>这一节让我们看看<code>completeWork</code>会做什么工作。</p>',3),t=(0,a.Uk)("你可以从"),p={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCompleteWork.new.js#L673",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("这里"),r=(0,a.Uk)("看到"),l=(0,a._)("code",null,"completeWork",-1),i=(0,a.Uk)("方法定义。"),d=(0,a.uE)('<h2 id="流程概览" tabindex="-1"><a class="header-anchor" href="#流程概览" aria-hidden="true">#</a> 流程概览</h2><p>类似<code>beginWork</code>，<code>completeWork</code>也是针对不同<code>fiber.tag</code>调用不同的处理逻辑。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">completeWork</span><span class="token punctuation">(</span>\n  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>\n  <span class="token literal-property property">renderLanes</span><span class="token operator">:</span> Lanes<span class="token punctuation">,</span></span>\n<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> newProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>\n\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">IndeterminateComponent</span><span class="token operator">:</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">LazyComponent</span><span class="token operator">:</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">SimpleMemoComponent</span><span class="token operator">:</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">FunctionComponent</span><span class="token operator">:</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">ForwardRef</span><span class="token operator">:</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">Fragment</span><span class="token operator">:</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">Mode</span><span class="token operator">:</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">Profiler</span><span class="token operator">:</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">ContextConsumer</span><span class="token operator">:</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">MemoComponent</span><span class="token operator">:</span>\n      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">// ...省略</span>\n      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">// ...省略</span>\n      <span class="token function">updateHostContainer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">// ...省略</span>\n      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token comment">// ...省略</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们重点关注页面渲染所必须的<code>HostComponent</code>（即原生<code>DOM组件</code>对应的<code>Fiber节点</code>），其他类型<code>Fiber</code>的处理留在具体功能实现时讲解。</p><h2 id="处理hostcomponent" tabindex="-1"><a class="header-anchor" href="#处理hostcomponent" aria-hidden="true">#</a> 处理HostComponent</h2><p>和<code>beginWork</code>一样，我们根据<code>current === null ?</code>判断是<code>mount</code>还是<code>update</code>。</p><p>同时针对<code>HostComponent</code>，判断<code>update</code>时我们还需要考虑<code>workInProgress.stateNode != null ?</code>（即该<code>Fiber节点</code>是否存在对应的<code>DOM节点</code>）</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token function">popHostContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> rootContainerInstance <span class="token operator">=</span> <span class="token function">getRootHostContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> type <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> workInProgress<span class="token punctuation">.</span>stateNode <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// update的情况</span>\n    <span class="token comment">// ...省略</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token comment">// mount的情况</span>\n    <span class="token comment">// ...省略</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="update时" tabindex="-1"><a class="header-anchor" href="#update时" aria-hidden="true">#</a> update时</h2><p>当<code>update</code>时，<code>Fiber节点</code>已经存在对应<code>DOM节点</code>，所以不需要生成<code>DOM节点</code>。需要做的主要是处理<code>props</code>，比如：</p><ul><li><code>onClick</code>、<code>onChange</code>等回调函数的注册</li><li>处理<code>style prop</code></li><li>处理<code>DANGEROUSLY_SET_INNER_HTML prop</code></li><li>处理<code>children prop</code></li></ul><p>我们去掉一些当前不需要关注的功能（比如<code>ref</code>）。可以看到最主要的逻辑是调用<code>updateHostComponent</code>方法。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> workInProgress<span class="token punctuation">.</span>stateNode <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// update的情况</span>\n  <span class="token function">updateHostComponent</span><span class="token punctuation">(</span>\n    current<span class="token punctuation">,</span>\n    workInProgress<span class="token punctuation">,</span>\n    type<span class="token punctuation">,</span>\n    newProps<span class="token punctuation">,</span>\n    rootContainerInstance<span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',13),u=(0,a.Uk)("你可以从"),k={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCompleteWork.new.js#L225",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("这里"),v=(0,a.Uk)("看到"),b=(0,a._)("code",null,"updateHostComponent",-1),f=(0,a.Uk)("方法定义。"),g=(0,a.uE)('<p>在<code>updateHostComponent</code>内部，被处理完的<code>props</code>会被赋值给<code>workInProgress.updateQueue</code>，并最终会在<code>commit阶段</code>被渲染在页面上。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>workInProgress<span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> <span class="token punctuation">(</span>updatePayload<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中<code>updatePayload</code>为数组形式，他的偶数索引的值为变化的<code>prop key</code>，奇数索引的值为变化的<code>prop value</code>。</p>',3),y=(0,a.Uk)("具体渲染过程见"),h=(0,a.Uk)("mutation阶段一节"),w={class:"custom-container details"},C=(0,a.uE)("<summary>updatePayload属性 Demo</summary><p><code>updateHostComponent</code>方法内打印了<code>Fiber节点</code>对应的<code>type</code>与<code>updatePayload</code>。</p><p>你可以直观的感受<code>updatePayload</code>的数据结构</p>",3),W=(0,a.Uk)("关注公众号"),_=(0,a.Uk)("，后台回复"),P=(0,a._)("strong",null,"431",-1),F=(0,a.Uk)("获得在线Demo地址"),x=(0,a.uE)('<h2 id="mount时" tabindex="-1"><a class="header-anchor" href="#mount时" aria-hidden="true">#</a> mount时</h2><p>同样，我们省略了不相关的逻辑。可以看到，<code>mount</code>时的主要逻辑包括三个：</p><ul><li>为<code>Fiber节点</code>生成对应的<code>DOM节点</code></li><li>将子孙<code>DOM节点</code>插入刚生成的<code>DOM节点</code>中</li><li>与<code>update</code>逻辑中的<code>updateHostComponent</code>类似的处理<code>props</code>的过程</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// mount的情况</span>\n\n<span class="token comment">// ...省略服务端渲染相关逻辑</span>\n\n<span class="token keyword">const</span> currentHostContext <span class="token operator">=</span> <span class="token function">getHostContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 为fiber创建对应DOM节点</span>\n<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">createInstance</span><span class="token punctuation">(</span>\n    type<span class="token punctuation">,</span>\n    newProps<span class="token punctuation">,</span>\n    rootContainerInstance<span class="token punctuation">,</span>\n    currentHostContext<span class="token punctuation">,</span>\n    workInProgress<span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 将子孙DOM节点插入刚生成的DOM节点中</span>\n<span class="token function">appendAllChildren</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// DOM节点赋值给fiber.stateNode</span>\nworkInProgress<span class="token punctuation">.</span>stateNode <span class="token operator">=</span> instance<span class="token punctuation">;</span>\n\n<span class="token comment">// 与update逻辑中的updateHostComponent类似的处理props的过程</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>\n  <span class="token function">finalizeInitialChildren</span><span class="token punctuation">(</span>\n    instance<span class="token punctuation">,</span>\n    type<span class="token punctuation">,</span>\n    newProps<span class="token punctuation">,</span>\n    rootContainerInstance<span class="token punctuation">,</span>\n    currentHostContext<span class="token punctuation">,</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">markUpdate</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),U=(0,a.Uk)("还记得"),I=(0,a.Uk)("上一节"),D=(0,a.uE)("我们讲到：<code>mount</code>时只会在<code>rootFiber</code>存在<code>Placement effectTag</code>。那么<code>commit阶段</code>是如何通过一次插入<code>DOM</code>操作（对应一个<code>Placement effectTag</code>）将整棵<code>DOM树</code>插入页面的呢？",15),j=(0,a.uE)('<p>原因就在于<code>completeWork</code>中的<code>appendAllChildren</code>方法。</p><p>由于<code>completeWork</code>属于“归”阶段调用的函数，每次调用<code>appendAllChildren</code>时都会将已生成的子孙<code>DOM节点</code>插入当前生成的<code>DOM节点</code>下。那么当“归”到<code>rootFiber</code>时，我们已经有一个构建好的离屏<code>DOM树</code>。</p><h2 id="effectlist" tabindex="-1"><a class="header-anchor" href="#effectlist" aria-hidden="true">#</a> effectList</h2><p>至此<code>render阶段</code>的绝大部分工作就完成了。</p><p>还有一个问题：作为<code>DOM</code>操作的依据，<code>commit阶段</code>需要找到所有有<code>effectTag</code>的<code>Fiber节点</code>并依次执行<code>effectTag</code>对应操作。难道需要在<code>commit阶段</code>再遍历一次<code>Fiber树</code>寻找<code>effectTag !== null</code>的<code>Fiber节点</code>么？</p><p>这显然是很低效的。</p><p>为了解决这个问题，在<code>completeWork</code>的上层函数<code>completeUnitOfWork</code>中，每个执行完<code>completeWork</code>且存在<code>effectTag</code>的<code>Fiber节点</code>会被保存在一条被称为<code>effectList</code>的单向链表中。</p><p><code>effectList</code>中第一个<code>Fiber节点</code>保存在<code>fiber.firstEffect</code>，最后一个元素保存在<code>fiber.lastEffect</code>。</p><p>类似<code>appendAllChildren</code>，在“归”阶段，所有有<code>effectTag</code>的<code>Fiber节点</code>都会被追加在<code>effectList</code>中，最终形成一条以<code>rootFiber.firstEffect</code>为起点的单向链表。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>                       nextEffect         nextEffect\nrootFiber<span class="token punctuation">.</span>firstEffect <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">&gt;</span> fiber <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">&gt;</span> fiber\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，在<code>commit阶段</code>只需要遍历<code>effectList</code>就能执行所有<code>effect</code>了。</p>',11),H=(0,a.Uk)("你可以在"),O={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1744",target:"_blank",rel:"noopener noreferrer"},M=(0,a.Uk)("这里"),L=(0,a.Uk)("看到这段代码逻辑。"),E=(0,a.uE)('<p>借用<code>React</code>团队成员<strong>Dan Abramov</strong>的话：<code>effectList</code>相较于<code>Fiber树</code>，就像圣诞树上挂的那一串彩灯。</p><h2 id="流程结尾" tabindex="-1"><a class="header-anchor" href="#流程结尾" aria-hidden="true">#</a> 流程结尾</h2><p>至此，<code>render阶段</code>全部工作完成。在<code>performSyncWorkOnRoot</code>函数中<code>fiberRootNode</code>被传递给<code>commitRoot</code>方法，开启<code>commit阶段</code>工作流程。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">commitRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',4),R=(0,a.Uk)("代码见"),T={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1107",target:"_blank",rel:"noopener noreferrer"},N=(0,a.Uk)("这里"),S=(0,a.Uk)("。"),z=(0,a._)("h2",{id:"参考资料",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),(0,a.Uk)(" 参考资料")],-1),A=(0,a._)("p",null,[(0,a._)("code",null,"completeWork"),(0,a.Uk)("流程图")],-1),Z=["src"],q={},B=(0,s(13860).Z)(q,[["render",function(n,e){const s=(0,a.up)("ExternalLinkIcon"),q=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[o,(0,a._)("p",null,[t,(0,a._)("a",p,[c,(0,a.Wm)(s)]),r,l,i]),d,(0,a._)("p",null,[u,(0,a._)("a",k,[m,(0,a.Wm)(s)]),v,b,f]),g,(0,a._)("blockquote",null,[(0,a._)("p",null,[y,(0,a.Wm)(q,{to:"/react/renderer/mutation.html#hostcomponent-mutation"},{default:(0,a.w5)((()=>[h])),_:1})])]),(0,a._)("details",w,[C,(0,a._)("p",null,[(0,a.Wm)(q,{to:"/react/me.html"},{default:(0,a.w5)((()=>[W])),_:1}),_,P,F])]),x,(0,a._)("p",null,[U,(0,a.Wm)(q,{to:"/react/process/beginWork.html#effecttag"},{default:(0,a.w5)((()=>[I])),_:1}),D]),j,(0,a._)("p",null,[H,(0,a._)("a",O,[M,(0,a.Wm)(s)]),L]),E,(0,a._)("p",null,[R,(0,a._)("a",T,[N,(0,a.Wm)(s)]),S]),z,A,(0,a._)("img",{src:n.$withBase("/img/completeWork.png"),alt:"completeWork流程图"},null,8,Z)])}]])},13860:(n,e)=>{e.Z=(n,e)=>{const s=n.__vccOpts||n;for(const[n,a]of e)s[n]=a;return s}},63971:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a=JSON.parse('{"key":"v-69ec18e6","path":"/react/process/completeWork.html","title":"completeWork","lang":"zh-CN","frontmatter":{"title":"completeWork","author":"BetaSu","tag":["React"],"summary":"在流程概览一节我们了解组件在render阶段会经历beginWork与completeWork。 上一节我们讲解了组件执行beginWork后会创建子Fiber节点，节点上可能存在effectTag。 这一节让我们看看completeWork会做什么工作。 你可以从这里看到completeWork方法定义。 流程概览 类似beginWork，complete","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/react/process/completeWork.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"completeWork"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T09:14:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"BetaSu"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:modified_time","content":"2022-08-29T09:14:21.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"流程概览","slug":"流程概览","children":[]},{"level":2,"title":"处理HostComponent","slug":"处理hostcomponent","children":[]},{"level":2,"title":"update时","slug":"update时","children":[]},{"level":2,"title":"mount时","slug":"mount时","children":[]},{"level":2,"title":"effectList","slug":"effectlist","children":[]},{"level":2,"title":"流程结尾","slug":"流程结尾","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","children":[]}],"git":{"createdTime":1661764461000,"updatedTime":1661764461000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":4.15,"words":1244},"filePathRelative":"react/process/completeWork.md","localizedDate":"2022年8月29日"}')}}]);