"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[25030],{95922:(n,s,a)=>{a.r(s),a.d(s,{default:()=>H});var e=a(60329);const o=(0,e._)("code",null,"Scheduler",-1),t=(0,e._)("ol",null,[(0,e._)("li",null,[(0,e._)("p",null,"时间切片")]),(0,e._)("li",null,[(0,e._)("p",null,"优先级调度")])],-1),p=(0,e._)("p",null,[(0,e.Uk)("本节我们学习这个两个功能是如何在"),(0,e._)("code",null,"Scheduler"),(0,e.Uk)("中实现的。")],-1),c=(0,e._)("h2",{id:"时间切片原理",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#时间切片原理","aria-hidden":"true"},"#"),(0,e.Uk)(" 时间切片原理")],-1),l=(0,e._)("code",null,"时间切片",-1),r={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback",target:"_blank",rel:"noopener noreferrer"},i=(0,e.uE)('<p>除去“浏览器重排/重绘”，下图是浏览器一帧中可以用于执行<code>JS</code>的时机。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">一个task</span><span class="token punctuation">(</span>宏任务<span class="token punctuation">)</span> <span class="token operator">--</span> <span class="token function">队列中全部job</span><span class="token punctuation">(</span>微任务<span class="token punctuation">)</span> <span class="token operator">--</span> requestAnimationFrame <span class="token operator">--</span> 浏览器重排<span class="token operator">/</span>重绘 <span class="token operator">--</span> requestIdleCallback\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>requestIdleCallback</code>是在“浏览器重排/重绘”后如果当前帧还有空余时间时被调用的。</p><p>浏览器并没有提供其他<code>API</code>能够在同样的时机（浏览器重排/重绘后）调用以模拟其实现。</p><p>唯一能精准控制调用时机的<code>API</code>是<code>requestAnimationFrame</code>，他能让我们在“浏览器重排/重绘”之前执行<code>JS</code>。</p><p>这也是为什么我们通常用这个<code>API</code>实现<code>JS</code>动画 —— 这是浏览器渲染前的最后时机，所以动画能快速被渲染。</p><p>所以，退而求其次，<code>Scheduler</code>的<code>时间切片</code>功能是通过<code>task</code>（宏任务）实现的。</p>',7),u=(0,e._)("code",null,"task",-1),d=(0,e._)("code",null,"setTimeout",-1),k=(0,e._)("code",null,"task",-1),v=(0,e._)("code",null,"setTimeout",-1),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MessageChannel",target:"_blank",rel:"noopener noreferrer"},b=(0,e._)("p",null,[(0,e.Uk)("所以"),(0,e._)("code",null,"Scheduler"),(0,e.Uk)("将需要被执行的回调函数作为"),(0,e._)("code",null,"MessageChannel"),(0,e.Uk)("的回调执行。如果当前宿主环境不支持"),(0,e._)("code",null,"MessageChannel"),(0,e.Uk)("，则使用"),(0,e._)("code",null,"setTimeout"),(0,e.Uk)("。")],-1),h={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L228-L234",target:"_blank",rel:"noopener noreferrer"},y=(0,e._)("code",null,"MessageChannel",-1),f={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L47-L55",target:"_blank",rel:"noopener noreferrer"},g=(0,e._)("code",null,"setTimeout",-1),_=(0,e.uE)('<p>在<code>React</code>的<code>render</code>阶段，开启<code>Concurrent Mode</code>时，每次遍历前，都会通过<code>Scheduler</code>提供的<code>shouldYield</code>方法判断是否需要中断遍历，使浏览器有时间渲染：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">workLoopConcurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Perform work until Scheduler asks us to yield</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">shouldYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是否中断的依据，最重要的一点便是每个任务的剩余时间是否用完。</p><p>在<code>Schdeduler</code>中，为任务分配的初始剩余时间为<code>5ms</code>。</p>',4),w={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L119",target:"_blank",rel:"noopener noreferrer"},U=(0,e._)("p",null,[(0,e.Uk)("随着应用运行，会通过"),(0,e._)("code",null,"fps"),(0,e.Uk)("动态调整分配给任务的可执行时间。")],-1),T={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L172-L187",target:"_blank",rel:"noopener noreferrer"},I=(0,e._)("code",null,"Concurrent Mode",-1),P=["src"],R=(0,e.uE)('<p>那么当<code>shouldYield</code>为<code>true</code>，以至于<code>performUnitOfWork</code>被中断后是如何重新启动的呢？我们会在介绍完&quot;优先级调度&quot;后解答。</p><h2 id="优先级调度" tabindex="-1"><a class="header-anchor" href="#优先级调度" aria-hidden="true">#</a> 优先级调度</h2><p>首先我们来了解<code>优先级</code>的来源。需要明确的一点是，<code>Scheduler</code>是独立于<code>React</code>的包，所以他的<code>优先级</code>也是独立于<code>React</code>的<code>优先级</code>的。</p>',3),j=(0,e._)("code",null,"Scheduler",-1),C={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/Scheduler.js#L217-L237",target:"_blank",rel:"noopener noreferrer"},S=(0,e.uE)('<p>这个方法接受一个<code>优先级</code>与一个<code>回调函数</code>，在<code>回调函数</code>内部调用获取<code>优先级</code>的方法都会取得第一个参数对应的<code>优先级</code>：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">unstable_runWithPriority</span><span class="token punctuation">(</span><span class="token parameter">priorityLevel<span class="token punctuation">,</span> eventHandler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>priorityLevel<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">ImmediatePriority</span><span class="token operator">:</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">UserBlockingPriority</span><span class="token operator">:</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">NormalPriority</span><span class="token operator">:</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">LowPriority</span><span class="token operator">:</span>\n    <span class="token keyword">case</span> <span class="token literal-property property">IdlePriority</span><span class="token operator">:</span>\n      <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span><span class="token operator">:</span>\n      priorityLevel <span class="token operator">=</span> NormalPriority<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">var</span> previousPriorityLevel <span class="token operator">=</span> currentPriorityLevel<span class="token punctuation">;</span>\n  currentPriorityLevel <span class="token operator">=</span> priorityLevel<span class="token punctuation">;</span>\n\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">eventHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n    currentPriorityLevel <span class="token operator">=</span> previousPriorityLevel<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<code>Scheduler</code>内部存在5种优先级。</p><p>在<code>React</code>内部凡是涉及到<code>优先级</code>调度的地方，都会使用<code>unstable_runWithPriority</code>。</p><p>比如，我们知道<code>commit</code>阶段是同步执行的。可以看到，<code>commit</code>阶段的起点<code>commitRoot</code>方法的优先级为<code>ImmediateSchedulerPriority</code>。</p><p><code>ImmediateSchedulerPriority</code>即<code>ImmediatePriority</code>的别名，为最高优先级，会立即执行。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitRoot</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> renderPriorityLevel <span class="token operator">=</span> <span class="token function">getCurrentPriorityLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">runWithPriority</span><span class="token punctuation">(</span>\n    ImmediateSchedulerPriority<span class="token punctuation">,</span>\n    <span class="token function">commitRootImpl</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">,</span> renderPriorityLevel<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优先级的意义" tabindex="-1"><a class="header-anchor" href="#优先级的意义" aria-hidden="true">#</a> 优先级的意义</h2>',8),E=(0,e._)("code",null,"Scheduler",-1),L={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/Scheduler.js#L279-L359",target:"_blank",rel:"noopener noreferrer"},O=(0,e._)("code",null,"优先级",-1),M=(0,e.uE)('<p>比如在<code>React</code>中，之前讲过在<code>commit</code>阶段的<code>beforeMutation</code>阶段会调度<code>useEffect</code>的回调：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>rootDoesHavePassiveEffects<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  rootDoesHavePassiveEffects <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token function">scheduleCallback</span><span class="token punctuation">(</span>NormalSchedulerPriority<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">flushPassiveEffects</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的回调便是通过<code>scheduleCallback</code>调度的，优先级为<code>NormalSchedulerPriority</code>，即<code>NormalPriority</code>。</p><p>不同<code>优先级</code>意味着什么？不同<code>优先级</code>意味着不同时长的任务过期时间：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> timeout<span class="token punctuation">;</span>\n<span class="token keyword">switch</span> <span class="token punctuation">(</span>priorityLevel<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">case</span> <span class="token literal-property property">ImmediatePriority</span><span class="token operator">:</span>\n    timeout <span class="token operator">=</span> <span class="token constant">IMMEDIATE_PRIORITY_TIMEOUT</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token keyword">case</span> <span class="token literal-property property">UserBlockingPriority</span><span class="token operator">:</span>\n    timeout <span class="token operator">=</span> <span class="token constant">USER_BLOCKING_PRIORITY_TIMEOUT</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token keyword">case</span> <span class="token literal-property property">IdlePriority</span><span class="token operator">:</span>\n    timeout <span class="token operator">=</span> <span class="token constant">IDLE_PRIORITY_TIMEOUT</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token keyword">case</span> <span class="token literal-property property">LowPriority</span><span class="token operator">:</span>\n    timeout <span class="token operator">=</span> <span class="token constant">LOW_PRIORITY_TIMEOUT</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token keyword">case</span> <span class="token literal-property property">NormalPriority</span><span class="token operator">:</span>\n  <span class="token keyword">default</span><span class="token operator">:</span>\n    timeout <span class="token operator">=</span> <span class="token constant">NORMAL_PRIORITY_TIMEOUT</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> expirationTime <span class="token operator">=</span> startTime <span class="token operator">+</span> timeout<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Times out immediately</span>\n<span class="token keyword">var</span> <span class="token constant">IMMEDIATE_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token comment">// Eventually times out</span>\n<span class="token keyword">var</span> <span class="token constant">USER_BLOCKING_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">250</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> <span class="token constant">NORMAL_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">5000</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> <span class="token constant">LOW_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span>\n<span class="token comment">// Never times out</span>\n<span class="token keyword">var</span> <span class="token constant">IDLE_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> maxSigned31BitInt<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，如果一个任务的<code>优先级</code>是<code>ImmediatePriority</code>，对应<code>IMMEDIATE_PRIORITY_TIMEOUT</code>为<code>-1</code>，那么</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> expirationTime <span class="token operator">=</span> startTime <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>则该任务的过期时间比当前时间还短，表示他已经过期了，需要立即被执行。</p><h2 id="不同优先级任务的排序" tabindex="-1"><a class="header-anchor" href="#不同优先级任务的排序" aria-hidden="true">#</a> 不同优先级任务的排序</h2><p>我们已经知道<code>优先级</code>意味着任务的过期时间。设想一个大型<code>React</code>项目，在某一刻，存在很多不同<code>优先级</code>的<code>任务</code>，对应不同的过期时间。</p><p>同时，又因为任务可以被延迟，所以我们可以将这些任务按是否被延迟分为：</p><ul><li><p>已就绪任务</p></li><li><p>未就绪任务</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> options <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> options <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> delay <span class="token operator">=</span> options<span class="token punctuation">.</span>delay<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> delay <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">&amp;&amp;</span> delay <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 任务被延迟</span>\n      startTime <span class="token operator">=</span> currentTime <span class="token operator">+</span> delay<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      startTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    startTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，<code>Scheduler</code>存在两个队列：</p><ul><li><p>timerQueue：保存未就绪任务</p></li><li><p>taskQueue：保存已就绪任务</p></li></ul><p>每当有新的未就绪的任务被注册，我们将其插入<code>timerQueue</code>并根据开始时间重新排列<code>timerQueue</code>中任务的顺序。</p><p>当<code>timerQueue</code>中有任务就绪，即<code>startTime &lt;= currentTime </code>，我们将其取出并加入<code>taskQueue</code>。</p><p>取出<code>taskQueue</code>中最早过期的任务并执行他。</p>',20),W=(0,e._)("code",null,"Scheduler",-1),x={href:"https://www.cnblogs.com/lanhaicode/p/10546257.html",target:"_blank",rel:"noopener noreferrer"},q=(0,e._)("code",null,"优先级队列",-1),N={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/SchedulerMinHeap.js",target:"_blank",rel:"noopener noreferrer"},Y=(0,e._)("code",null,"优先级队列",-1),A=(0,e.uE)('<p>至此，我们了解了<code>Scheduler</code>的实现。现在可以回答介绍<code>时间切片</code>时提到的问题：</p><blockquote><p>那么当shouldYield为true，以至于performUnitOfWork被中断后是如何重新启动的呢？</p></blockquote><p>在“取出<code>taskQueue</code>中最早过期的任务并执行他”这一步中有如下关键步骤：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> continuationCallback <span class="token operator">=</span> <span class="token function">callback</span><span class="token punctuation">(</span>didUserCallbackTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span>\ncurrentTime <span class="token operator">=</span> <span class="token function">getCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> continuationCallback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// continuationCallback是函数</span>\n  currentTask<span class="token punctuation">.</span>callback <span class="token operator">=</span> continuationCallback<span class="token punctuation">;</span>\n  <span class="token function">markTaskYield</span><span class="token punctuation">(</span>currentTask<span class="token punctuation">,</span> currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>enableProfiling<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">markTaskCompleted</span><span class="token punctuation">(</span>currentTask<span class="token punctuation">,</span> currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    currentTask<span class="token punctuation">.</span>isQueued <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTask <span class="token operator">===</span> <span class="token function">peek</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 将当前任务清除</span>\n    <span class="token function">pop</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token function">advanceTimers</span><span class="token punctuation">(</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当注册的回调函数执行后的返回值<code>continuationCallback</code>为<code>function</code>，会将<code>continuationCallback</code>作为当前任务的回调函数。</p><p>如果返回值不是<code>function</code>，则将当前被执行的任务清除出<code>taskQueue</code>。</p><p><code>render</code>阶段被调度的函数为<code>performConcurrentWorkOnRoot</code>，在该函数末尾有这样一段代码：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>callbackNode <span class="token operator">===</span> originalCallbackNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// The task node scheduled for this root is the same one that&#39;s</span>\n  <span class="token comment">// currently executed. Need to return a continuation.</span>\n  <span class="token keyword">return</span> <span class="token function">performConcurrentWorkOnRoot</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，在满足一定条件时，该函数会将自己作为返回值。</p>',9),Q={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L850-L854",target:"_blank",rel:"noopener noreferrer"},B=(0,e.uE)('<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>刚才我们讲到，<code>Scheduler</code>与<code>React</code>是两套<code>优先级</code>机制。那么<code>React</code>中的<code>优先级</code>是如何运转的？我们会在下一节介绍。</p>',2),D={},H=(0,a(13860).Z)(D,[["render",function(n,s){const a=(0,e.up)("RouterLink"),D=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[(0,e._)("p",null,[(0,e.Uk)("在"),(0,e.Wm)(a,{to:"/react/preparation/newConstructure.html#react16%E6%9E%B6%E6%9E%84"},{default:(0,e.w5)((()=>[(0,e.Uk)("新的React架构")])),_:1}),(0,e.Uk)("一节我们介绍了"),o,(0,e.Uk)("，他包含两个功能：")]),t,p,c,(0,e._)("p",null,[l,(0,e.Uk)("的本质是模拟实现"),(0,e._)("a",r,[(0,e.Uk)("requestIdleCallback"),(0,e.Wm)(D)]),(0,e.Uk)("。")]),i,(0,e._)("p",null,[(0,e.Uk)("最常见的"),u,(0,e.Uk)("当属"),d,(0,e.Uk)("了。但是有个"),k,(0,e.Uk)("比"),v,(0,e.Uk)("执行时机更靠前，那就是"),(0,e._)("a",m,[(0,e.Uk)("MessageChannel"),(0,e.Wm)(D)]),(0,e.Uk)("。")]),b,(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e.Uk)("你可以在"),(0,e._)("a",h,[(0,e.Uk)("这里"),(0,e.Wm)(D)]),(0,e.Uk)("看到"),y,(0,e.Uk)("的实现。"),(0,e._)("a",f,[(0,e.Uk)("这里"),(0,e.Wm)(D)]),(0,e.Uk)("看到"),g,(0,e.Uk)("的实现")])]),_,(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e.Uk)("你可以从"),(0,e._)("a",w,[(0,e.Uk)("这里"),(0,e.Wm)(D)]),(0,e.Uk)("看到初始剩余时间的定义")])]),U,(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e.Uk)("你可以从"),(0,e._)("a",T,[(0,e.Uk)("这里"),(0,e.Wm)(D)]),(0,e.Uk)("看到动态分配任务时间")])]),(0,e._)("p",null,[(0,e.Uk)("这也解释了为什么"),(0,e.Wm)(a,{to:"/react/preparation/idea.html#cpu%E7%9A%84%E7%93%B6%E9%A2%88"},{default:(0,e.w5)((()=>[(0,e.Uk)("设计理念")])),_:1}),(0,e.Uk)("一节启用"),I,(0,e.Uk)("后每个任务的执行时间大体都是多于5ms的一小段时间 —— 每个时间切片被设定为5ms，任务本身再执行一小段时间，所以整体时间是多于5ms的时间")]),(0,e._)("img",{src:n.$withBase("/img/time-slice.png"),alt:"长任务"},null,8,P),R,(0,e._)("p",null,[j,(0,e.Uk)("对外暴露了一个方法"),(0,e._)("a",C,[(0,e.Uk)("unstable_runWithPriority"),(0,e.Wm)(D)]),(0,e.Uk)("。")]),S,(0,e._)("p",null,[E,(0,e.Uk)("对外暴露最重要的方法便是"),(0,e._)("a",L,[(0,e.Uk)("unstable_scheduleCallback"),(0,e.Wm)(D)]),(0,e.Uk)("。该方法用于以某个"),O,(0,e.Uk)("注册回调函数。")]),M,(0,e._)("p",null,[(0,e.Uk)("为了能在O(1)复杂度找到两个队列中时间最早的那个任务，"),W,(0,e.Uk)("使用"),(0,e._)("a",x,[(0,e.Uk)("小顶堆"),(0,e.Wm)(D)]),(0,e.Uk)("实现了"),q,(0,e.Uk)("。")]),(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e.Uk)("你可以在"),(0,e._)("a",N,[(0,e.Uk)("这里"),(0,e.Wm)(D)]),(0,e.Uk)("看到"),Y,(0,e.Uk)("的实现")])]),A,(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e.Uk)("你可以在"),(0,e._)("a",Q,[(0,e.Uk)("这里"),(0,e.Wm)(D)]),(0,e.Uk)("看到这段代码")])]),B])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},68686:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-4d526dad","path":"/react/concurrent/scheduler.html","title":"Scheduler的原理与实现","lang":"zh-CN","frontmatter":{"title":"Scheduler的原理与实现","author":"BetaSu","tag":["React"],"summary":"在新的React架构一节我们介绍了Scheduler，他包含两个功能： 1. 时间切片 2. 优先级调度 本节我们学习这个两个功能是如何在Scheduler中实现的。 时间切片原理 时间切片的本质是模拟实现requestIdleCallback。 除去“浏览器重排/重绘”，下图是浏览器一帧中可以用于执行JS的时机。 requestIdleCallback是在","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/react/concurrent/scheduler.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"Scheduler的原理与实现"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T09:14:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"BetaSu"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:modified_time","content":"2022-08-29T09:14:21.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"时间切片原理","slug":"时间切片原理","children":[]},{"level":2,"title":"优先级调度","slug":"优先级调度","children":[]},{"level":2,"title":"优先级的意义","slug":"优先级的意义","children":[]},{"level":2,"title":"不同优先级任务的排序","slug":"不同优先级任务的排序","children":[]},{"level":2,"title":"总结","slug":"总结","children":[]}],"git":{"createdTime":1661764461000,"updatedTime":1661764461000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":6.27,"words":1880},"filePathRelative":"react/concurrent/scheduler.md","localizedDate":"2022年8月29日"}')}}]);