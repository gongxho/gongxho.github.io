"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[41348],{55195:(e,a,n)=>{n.r(a),n.d(a,{default:()=>z});var s=n(60329);const o=(0,s.uE)('<p>在上一节我们实现了一个极简的<code>useState</code>，了解了<code>Hooks</code>的运行原理。</p><p>本节我们讲解<code>Hooks</code>的数据结构，为后面介绍具体的<code>hook</code>打下基础。</p><h2 id="dispatcher" tabindex="-1"><a class="header-anchor" href="#dispatcher" aria-hidden="true">#</a> dispatcher</h2><p>在上一节的极简<code>useState</code>实现中，使用<code>isMount</code>变量区分<code>mount</code>与<code>update</code>。</p><p>在真实的<code>Hooks</code>中，组件<code>mount</code>时的<code>hook</code>与<code>update</code>时的<code>hook</code>来源于不同的对象，这类对象在源码中被称为<code>dispatcher</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// mount时的Dispatcher</span>\n<span class="token keyword">const</span> <span class="token literal-property property">HooksDispatcherOnMount</span><span class="token operator">:</span> Dispatcher <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">useCallback</span><span class="token operator">:</span> mountCallback<span class="token punctuation">,</span>\n  <span class="token literal-property property">useContext</span><span class="token operator">:</span> readContext<span class="token punctuation">,</span>\n  <span class="token literal-property property">useEffect</span><span class="token operator">:</span> mountEffect<span class="token punctuation">,</span>\n  <span class="token literal-property property">useImperativeHandle</span><span class="token operator">:</span> mountImperativeHandle<span class="token punctuation">,</span>\n  <span class="token literal-property property">useLayoutEffect</span><span class="token operator">:</span> mountLayoutEffect<span class="token punctuation">,</span>\n  <span class="token literal-property property">useMemo</span><span class="token operator">:</span> mountMemo<span class="token punctuation">,</span>\n  <span class="token literal-property property">useReducer</span><span class="token operator">:</span> mountReducer<span class="token punctuation">,</span>\n  <span class="token literal-property property">useRef</span><span class="token operator">:</span> mountRef<span class="token punctuation">,</span>\n  <span class="token literal-property property">useState</span><span class="token operator">:</span> mountState<span class="token punctuation">,</span>\n  <span class="token comment">// ...省略</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// update时的Dispatcher</span>\n<span class="token keyword">const</span> <span class="token literal-property property">HooksDispatcherOnUpdate</span><span class="token operator">:</span> Dispatcher <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">useCallback</span><span class="token operator">:</span> updateCallback<span class="token punctuation">,</span>\n  <span class="token literal-property property">useContext</span><span class="token operator">:</span> readContext<span class="token punctuation">,</span>\n  <span class="token literal-property property">useEffect</span><span class="token operator">:</span> updateEffect<span class="token punctuation">,</span>\n  <span class="token literal-property property">useImperativeHandle</span><span class="token operator">:</span> updateImperativeHandle<span class="token punctuation">,</span>\n  <span class="token literal-property property">useLayoutEffect</span><span class="token operator">:</span> updateLayoutEffect<span class="token punctuation">,</span>\n  <span class="token literal-property property">useMemo</span><span class="token operator">:</span> updateMemo<span class="token punctuation">,</span>\n  <span class="token literal-property property">useReducer</span><span class="token operator">:</span> updateReducer<span class="token punctuation">,</span>\n  <span class="token literal-property property">useRef</span><span class="token operator">:</span> updateRef<span class="token punctuation">,</span>\n  <span class="token literal-property property">useState</span><span class="token operator">:</span> updateState<span class="token punctuation">,</span>\n  <span class="token comment">// ...省略</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见，<code>mount</code>时调用的<code>hook</code>和<code>update</code>时调用的<code>hook</code>其实是两个不同的函数。</p><p>在<code>FunctionComponent</code> <code>render</code>前，会根据<code>FunctionComponent</code>对应<code>fiber</code>的以下条件区分<code>mount</code>与<code>update</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>current <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> current<span class="token punctuation">.</span>memoizedState <span class="token operator">===</span> <span class="token keyword">null</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>并将不同情况对应的<code>dispatcher</code>赋值给全局变量<code>ReactCurrentDispatcher</code>的<code>current</code>属性。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactCurrentDispatcher<span class="token punctuation">.</span>current <span class="token operator">=</span>\n      current <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> current<span class="token punctuation">.</span>memoizedState <span class="token operator">===</span> <span class="token keyword">null</span>\n        <span class="token operator">?</span> HooksDispatcherOnMount\n        <span class="token operator">:</span> HooksDispatcherOnUpdate<span class="token punctuation">;</span>  \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11),t={href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L409",target:"_blank",rel:"noopener noreferrer"},p=(0,s.uE)("<p>在<code>FunctionComponent</code> <code>render</code>时，会从<code>ReactCurrentDispatcher.current</code>（即当前<code>dispatcher</code>）中寻找需要的<code>hook</code>。</p><p>换言之，不同的调用栈上下文为<code>ReactCurrentDispatcher.current</code>赋值不同的<code>dispatcher</code>，则<code>FunctionComponent</code> <code>render</code>时调用的<code>hook</code>也是不同的函数。</p>",2),c=(0,s._)("code",null,"dispatcher",-1),r={href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L1775",target:"_blank",rel:"noopener noreferrer"},l=(0,s._)("code",null,"dispatcher",-1),d=(0,s.uE)('<h2 id="一个dispatcher使用场景" tabindex="-1"><a class="header-anchor" href="#一个dispatcher使用场景" aria-hidden="true">#</a> 一个dispatcher使用场景</h2><p>当错误的书写了嵌套形式的<code>hook</code>，如：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时<code>ReactCurrentDispatcher.current</code>已经指向<code>ContextOnlyDispatcher</code>，所以调用<code>useState</code>实际会调用<code>throwInvalidHookError</code>，直接抛出异常。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">ContextOnlyDispatcher</span><span class="token operator">:</span> Dispatcher <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">useCallback</span><span class="token operator">:</span> throwInvalidHookError<span class="token punctuation">,</span>\n  <span class="token literal-property property">useContext</span><span class="token operator">:</span> throwInvalidHookError<span class="token punctuation">,</span>\n  <span class="token literal-property property">useEffect</span><span class="token operator">:</span> throwInvalidHookError<span class="token punctuation">,</span>\n  <span class="token literal-property property">useImperativeHandle</span><span class="token operator">:</span> throwInvalidHookError<span class="token punctuation">,</span>\n  <span class="token literal-property property">useLayoutEffect</span><span class="token operator">:</span> throwInvalidHookError<span class="token punctuation">,</span>\n  <span class="token comment">// ...省略</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),i={href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L458",target:"_blank",rel:"noopener noreferrer"},u=(0,s.uE)('<h2 id="hook的数据结构" tabindex="-1"><a class="header-anchor" href="#hook的数据结构" aria-hidden="true">#</a> Hook的数据结构</h2><p>接下来我们学习<code>hook</code>的数据结构。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">hook</span><span class="token operator">:</span> Hook <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">memoizedState</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n\n  <span class="token literal-property property">baseState</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">baseQueue</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">queue</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n\n  <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),k={href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L546",target:"_blank",rel:"noopener noreferrer"},m=(0,s._)("code",null,"hook",-1),v=(0,s._)("code",null,"memoizedState",-1),b=(0,s.uE)('<h2 id="memoizedstate" tabindex="-1"><a class="header-anchor" href="#memoizedstate" aria-hidden="true">#</a> memoizedState</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p><code>hook</code>与<code>FunctionComponent fiber</code>都存在<code>memoizedState</code>属性，不要混淆他们的概念。</p><ul><li><p><code>fiber.memoizedState</code>：<code>FunctionComponent</code>对应<code>fiber</code>保存的<code>Hooks</code>链表。</p></li><li><p><code>hook.memoizedState</code>：<code>Hooks</code>链表中保存的单一<code>hook</code>对应的数据。</p></li></ul></div><p>不同类型<code>hook</code>的<code>memoizedState</code>保存不同类型数据，具体如下：</p>',3),h=(0,s.uE)("<li><p>useState：对于<code>const [state, updateState] = useState(initialState)</code>，<code>memoizedState</code>保存<code>state</code>的值</p></li><li><p>useReducer：对于<code>const [state, dispatch] = useReducer(reducer, {});</code>，<code>memoizedState</code>保存<code>state</code>的值</p></li>",2),y=(0,s._)("code",null,"memoizedState",-1),f=(0,s._)("code",null,"useEffect回调函数",-1),g=(0,s._)("code",null,"依赖项",-1),_=(0,s._)("code",null,"effect",-1),S={href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L1181",target:"_blank",rel:"noopener noreferrer"},H=(0,s._)("code",null,"effect",-1),U=(0,s._)("code",null,"effect",-1),w=(0,s._)("code",null,"fiber.updateQueue",-1),C=(0,s.uE)("<li><p>useRef：对于<code>useRef(1)</code>，<code>memoizedState</code>保存<code>{current: 1}</code></p></li><li><p>useMemo：对于<code>useMemo(callback, [depA])</code>，<code>memoizedState</code>保存<code>[callback(), depA]</code></p></li><li><p>useCallback：对于<code>useCallback(callback, [depA])</code>，<code>memoizedState</code>保存<code>[callback, depA]</code>。与<code>useMemo</code>的区别是，<code>useCallback</code>保存的是<code>callback</code>函数本身，而<code>useMemo</code>保存的是<code>callback</code>函数的执行结果</p></li>",3),E=(0,s._)("p",null,[(0,s.Uk)("有些"),(0,s._)("code",null,"hook"),(0,s.Uk)("是没有"),(0,s._)("code",null,"memoizedState"),(0,s.Uk)("的，比如：")],-1),R=(0,s._)("ul",null,[(0,s._)("li",null,"useContext")],-1),x={},z=(0,n(13860).Z)(x,[["render",function(e,a){const n=(0,s.up)("ExternalLinkIcon"),x=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("div",null,[o,(0,s.kq)(" react17-alpha "),(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s.Uk)("你可以在"),(0,s._)("a",t,[(0,s.Uk)("这里"),(0,s.Wm)(n)]),(0,s.Uk)("看到这行代码")])]),p,(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s.Uk)("除了这两个"),c,(0,s.Uk)("，你可以在"),(0,s._)("a",r,[(0,s.Uk)("这里"),(0,s.Wm)(n)]),(0,s.Uk)("看到其他"),l,(0,s.Uk)("定义")])]),d,(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s.Uk)("你可以在"),(0,s._)("a",i,[(0,s.Uk)("这里"),(0,s.Wm)(n)]),(0,s.Uk)("看到这段逻辑")])]),u,(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s.Uk)("你可以在"),(0,s._)("a",k,[(0,s.Uk)("这里"),(0,s.Wm)(n)]),(0,s.Uk)("看到创建"),m,(0,s.Uk)("的逻辑")])]),(0,s._)("p",null,[(0,s.Uk)("其中除"),v,(0,s.Uk)("以外字段的意义与上一章介绍的"),(0,s.Wm)(x,{to:"/react/state/update.html#updatequeue"},{default:(0,s.w5)((()=>[(0,s.Uk)("updateQueue")])),_:1}),(0,s.Uk)("类似。")]),b,(0,s._)("ul",null,[h,(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("useEffect："),y,(0,s.Uk)("保存包含"),f,(0,s.Uk)("、"),g,(0,s.Uk)("等的链表数据结构"),_,(0,s.Uk)("，你可以在"),(0,s._)("a",S,[(0,s.Uk)("这里"),(0,s.Wm)(n)]),(0,s.Uk)("看到"),H,(0,s.Uk)("的创建过程。"),U,(0,s.Uk)("链表同时会保存在"),w,(0,s.Uk)("中")])]),C]),E,R])}]])},13860:(e,a)=>{a.Z=(e,a)=>{const n=e.__vccOpts||e;for(const[e,s]of a)n[e]=s;return n}},76494:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s=JSON.parse('{"key":"v-75df2bce","path":"/react/hooks/structure.html","title":"Hooks数据结构","lang":"zh-CN","frontmatter":{"title":"Hooks数据结构","author":"BetaSu","tag":["React"],"summary":"在上一节我们实现了一个极简的useState，了解了Hooks的运行原理。 本节我们讲解Hooks的数据结构，为后面介绍具体的hook打下基础。 dispatcher 在上一节的极简useState实现中，使用isMount变量区分mount与update。 在真实的Hooks中，组件mount时的hook与update时的hook来源于不同的对象，这类对象","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/react/hooks/structure.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"Hooks数据结构"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T09:14:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"BetaSu"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:modified_time","content":"2022-08-29T09:14:21.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"dispatcher","slug":"dispatcher","children":[]},{"level":2,"title":"一个dispatcher使用场景","slug":"一个dispatcher使用场景","children":[]},{"level":2,"title":"Hook的数据结构","slug":"hook的数据结构","children":[]},{"level":2,"title":"memoizedState","slug":"memoizedstate","children":[]}],"git":{"createdTime":1661764461000,"updatedTime":1661764461000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":2.54,"words":763},"filePathRelative":"react/hooks/structure.md","localizedDate":"2022年8月29日"}')}}]);