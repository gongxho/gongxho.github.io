"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[84989],{97117:(n,s,a)=>{a.r(s),a.d(s,{default:()=>Cn});var e=a(78e3);const t=(0,e.uE)('<p><code>JSX</code>作为描述组件内容的数据结构，为JS赋予了更多视觉表现力。在<code>React</code>中我们大量使用他。在深入源码之前，有些疑问我们需要先解决：</p><ul><li><code>JSX</code>和<code>Fiber节点</code>是同一个东西么？</li><li><code>React Component</code>、<code>React Element</code>是同一个东西么，他们和<code>JSX</code>有什么关系？</li></ul><p>带着这些疑问，让我们开始这一节的学习。</p><h2 id="jsx简介" tabindex="-1"><a class="header-anchor" href="#jsx简介" aria-hidden="true">#</a> JSX简介</h2>',4),p=(0,e.Uk)("相信作为"),o=(0,e._)("code",null,"React",-1),c=(0,e.Uk)("的使用者，你已经接触过"),l=(0,e._)("code",null,"JSX",-1),i=(0,e.Uk)("。如果你还不了解他，可以看下"),r={href:"https://react.docschina.org/docs/introducing-jsx.html",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("官网对其的描述"),d=(0,e.Uk)("。"),k=(0,e._)("p",null,[(0,e._)("code",null,"JSX"),(0,e.Uk)("在编译时会被"),(0,e._)("code",null,"Babel"),(0,e.Uk)("编译为"),(0,e._)("code",null,"React.createElement"),(0,e.Uk)("方法。")],-1),m={class:"custom-container details"},v=(0,e._)("summary",null,"JSX编译",-1),b=(0,e.Uk)("关注公众号"),g=(0,e.Uk)("，后台回复"),y=(0,e._)("strong",null,"712",-1),h=(0,e.Uk)("获得在线Demo地址"),f=(0,e.uE)('<p>这也是为什么在每个使用<code>JSX</code>的JS文件中，你必须显式的声明</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>否则在运行时该模块内就会报<code>未定义变量 React</code>的错误。</p>',3),_={class:"custom-container warning"},R=(0,e._)("p",{class:"custom-container-title"},"注意",-1),E=(0,e.Uk)("在React17中，已经不需要显式导入React了。详见"),w={href:"https://zh-hans.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html",target:"_blank",rel:"noopener noreferrer"},j=(0,e.Uk)("介绍全新的 JSX 转换"),x=(0,e._)("code",null,"JSX",-1),C=(0,e.Uk)("并不是只能被编译为"),S=(0,e._)("code",null,"React.createElement",-1),U=(0,e.Uk)("方法，你可以通过"),J={href:"https://babeljs.io/docs/en/babel-plugin-transform-react-jsx",target:"_blank",rel:"noopener noreferrer"},X=(0,e.Uk)("@babel/plugin-transform-react-jsx"),F=(0,e.Uk)("插件显式告诉"),T=(0,e._)("code",null,"Babel",-1),A=(0,e.Uk)("编译时需要将"),L=(0,e._)("code",null,"JSX",-1),W=(0,e.Uk)("编译为什么函数的调用（默认为"),$=(0,e._)("code",null,"React.createElement",-1),q=(0,e.Uk)("）。"),N=(0,e.Uk)("比如在"),D={href:"https://github.com/preactjs/preact",target:"_blank",rel:"noopener noreferrer"},P=(0,e.Uk)("preact"),B=(0,e.Uk)("这个类"),z=(0,e._)("code",null,"React",-1),I=(0,e.Uk)("库中，"),K=(0,e._)("code",null,"JSX",-1),M=(0,e.Uk)("会被编译为一个名为"),O=(0,e._)("code",null,"h",-1),Y=(0,e.Uk)("的函数调用。"),Z=(0,e.uE)('<div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// 编译前</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">KaSong</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">// 编译后</span>\n<span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;KaSong&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),V={id:"react-createelement",tabindex:"-1"},G=(0,e._)("a",{class:"header-anchor",href:"#react-createelement","aria-hidden":"true"},"#",-1),Q=(0,e.Uk)(),H={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react/src/ReactElement.js#L348",target:"_blank",rel:"noopener noreferrer"},nn=(0,e.Uk)("React.createElement"),sn=(0,e.uE)('<p>既然<code>JSX</code>会被编译为<code>React.createElement</code>，让我们看看他做了什么：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> config<span class="token punctuation">,</span> children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> propName<span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> ref <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> source <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>config <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 将 config 处理后赋值给 props</span>\n    <span class="token comment">// ...省略</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">const</span> childrenLength <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token comment">// 处理 children，会被赋值给props.children</span>\n  <span class="token comment">// ...省略</span>\n\n  <span class="token comment">// 处理 defaultProps</span>\n  <span class="token comment">// ...省略</span>\n\n  <span class="token keyword">return</span> <span class="token function">ReactElement</span><span class="token punctuation">(</span>\n    type<span class="token punctuation">,</span>\n    key<span class="token punctuation">,</span>\n    ref<span class="token punctuation">,</span>\n    self<span class="token punctuation">,</span>\n    source<span class="token punctuation">,</span>\n    ReactCurrentOwner<span class="token punctuation">.</span>current<span class="token punctuation">,</span>\n    props<span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">ReactElement</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> key<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> self<span class="token punctuation">,</span> source<span class="token punctuation">,</span> owner<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 标记这是个 React Element</span>\n    $$<span class="token keyword">typeof</span><span class="token operator">:</span> <span class="token constant">REACT_ELEMENT_TYPE</span><span class="token punctuation">,</span>\n\n    <span class="token literal-property property">type</span><span class="token operator">:</span> type<span class="token punctuation">,</span>\n    <span class="token literal-property property">key</span><span class="token operator">:</span> key<span class="token punctuation">,</span>\n    <span class="token literal-property property">ref</span><span class="token operator">:</span> ref<span class="token punctuation">,</span>\n    <span class="token literal-property property">props</span><span class="token operator">:</span> props<span class="token punctuation">,</span>\n    <span class="token literal-property property">_owner</span><span class="token operator">:</span> owner<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> element<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到，<code>React.createElement</code>最终会调用<code>ReactElement</code>方法返回一个包含组件数据的对象，该对象有个参数<code>$$typeof: REACT_ELEMENT_TYPE</code>标记了该对象是个<code>React Element</code>。</p><p>所以调用<code>React.createElement</code>返回的对象就是<code>React Element</code>么？</p>',4),an=(0,e._)("code",null,"React",-1),en=(0,e.Uk)("提供了验证合法"),tn=(0,e._)("code",null,"React Element",-1),pn=(0,e.Uk)("的全局API "),on={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react/src/ReactElement.js#L547",target:"_blank",rel:"noopener noreferrer"},cn=(0,e.Uk)("React.isValidElement"),ln=(0,e.Uk)("，我们看下他的实现："),rn=(0,e.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isValidElement</span><span class="token punctuation">(</span><span class="token parameter">object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token keyword">typeof</span> object <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span>\n    object <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>\n    object<span class="token punctuation">.</span>$$<span class="token keyword">typeof</span> <span class="token operator">===</span> <span class="token constant">REACT_ELEMENT_TYPE</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<code>$$typeof === REACT_ELEMENT_TYPE</code>的非<code>null</code>对象就是一个合法的<code>React Element</code>。换言之，在<code>React</code>中，所有<code>JSX</code>在运行时的返回结果（即<code>React.createElement()</code>的返回值）都是<code>React Element</code>。</p><p>那么<code>JSX</code>和<code>React Component</code>的关系呢?</p><h2 id="react-component" tabindex="-1"><a class="header-anchor" href="#react-component" aria-hidden="true">#</a> React Component</h2><p>在<code>React</code>中，我们常使用<code>ClassComponent</code>与<code>FunctionComponent</code>构建组件。</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">AppClass</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">KaSong</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这是ClassComponent：&#39;</span><span class="token punctuation">,</span> AppClass<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这是Element：&#39;</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AppClass</span></span><span class="token punctuation">/&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n<span class="token keyword">function</span> <span class="token function">AppFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">KaSong</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这是FunctionComponent：&#39;</span><span class="token punctuation">,</span> AppFunc<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这是Element：&#39;</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AppFunc</span></span><span class="token punctuation">/&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',6),un={class:"custom-container details"},dn=(0,e._)("summary",null,"React Component 分类 Demo",-1),kn=(0,e.Uk)("关注公众号"),mn=(0,e.Uk)("，后台回复"),vn=(0,e._)("strong",null,"901",-1),bn=(0,e.Uk)("获得在线Demo地址"),gn=(0,e.uE)('<p>我们可以从Demo控制台打印的对象看出，<code>ClassComponent</code>对应的<code>Element</code>的<code>type</code>字段为<code>AppClass</code>自身。</p><p><code>FunctionComponent</code>对应的<code>Element</code>的<code>type</code>字段为<code>AppFunc</code>自身，如下所示：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  $$<span class="token keyword">typeof</span><span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span>react<span class="token punctuation">.</span>element<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">ref</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">type</span><span class="token operator">:</span> ƒ <span class="token function">AppFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">_owner</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">_store</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">validated</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">_self</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">_source</span><span class="token operator">:</span> <span class="token keyword">null</span> \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>值得注意的一点，由于</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>AppClass <span class="token keyword">instanceof</span> <span class="token class-name">Function</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\nAppFunc <span class="token keyword">instanceof</span> <span class="token class-name">Function</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>所以无法通过引用类型区分<code>ClassComponent</code>和<code>FunctionComponent</code>。<code>React</code>通过<code>ClassComponent</code>实例原型上的<code>isReactComponent</code>变量判断是否是<code>ClassComponent</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">ClassComponent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>isReactComponent <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="jsx与fiber节点" tabindex="-1"><a class="header-anchor" href="#jsx与fiber节点" aria-hidden="true">#</a> JSX与Fiber节点</h2><p>从上面的内容我们可以发现，<code>JSX</code>是一种描述当前组件内容的数据结构，他不包含组件<strong>schedule</strong>、<strong>reconcile</strong>、<strong>render</strong>所需的相关信息。</p><p>比如如下信息就不包括在<code>JSX</code>中：</p><ul><li>组件在更新中的<code>优先级</code></li><li>组件的<code>state</code></li><li>组件被打上的用于<strong>Renderer</strong>的<code>标记</code></li></ul><p>这些内容都包含在<code>Fiber节点</code>中。</p><p>所以，在组件<code>mount</code>时，<code>Reconciler</code>根据<code>JSX</code>描述的组件内容生成组件对应的<code>Fiber节点</code>。</p><p>在<code>update</code>时，<code>Reconciler</code>将<code>JSX</code>与<code>Fiber节点</code>保存的数据对比，生成组件对应的<code>Fiber节点</code>，并根据对比结果为<code>Fiber节点</code>打上<code>标记</code>。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',15),yn={href:"https://mp.weixin.qq.com/s/ICjOlJL-fUGRb2S_xqBT7Q",target:"_blank",rel:"noopener noreferrer"},hn=(0,e.Uk)("如何干掉知乎的全部DIV -- 通过这篇文章在运行时修改"),fn=(0,e._)("code",null,"React.createElement",-1),_n=(0,e.Uk)("达到消除页面所有"),Rn=(0,e._)("code",null,"div",-1),En=(0,e.Uk)("元素的效果"),wn={href:"https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html",target:"_blank",rel:"noopener noreferrer"},jn=(0,e.Uk)("React官网Blog，关于React Component, Element, Instance, Reconciliation的简介"),xn={},Cn=(0,a(13860).Z)(xn,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon"),xn=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e._)("p",null,[p,o,c,l,i,(0,e._)("a",r,[u,(0,e.Wm)(a)]),d]),k,(0,e._)("details",m,[v,(0,e._)("p",null,[(0,e.Wm)(xn,{to:"/react/me.html"},{default:(0,e.w5)((()=>[b])),_:1}),g,y,h])]),f,(0,e._)("div",_,[R,(0,e._)("p",null,[E,(0,e._)("a",w,[j,(0,e.Wm)(a)])])]),(0,e._)("p",null,[x,C,S,U,(0,e._)("a",J,[X,(0,e.Wm)(a)]),F,T,A,L,W,$,q]),(0,e._)("p",null,[N,(0,e._)("a",D,[P,(0,e.Wm)(a)]),B,z,I,K,M,O,Y]),Z,(0,e._)("h2",V,[G,Q,(0,e._)("a",H,[nn,(0,e.Wm)(a)])]),sn,(0,e._)("p",null,[an,en,tn,pn,(0,e._)("a",on,[cn,(0,e.Wm)(a)]),ln]),rn,(0,e._)("details",un,[dn,(0,e._)("p",null,[(0,e.Wm)(xn,{to:"/react/me.html"},{default:(0,e.w5)((()=>[kn])),_:1}),mn,vn,bn])]),gn,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("p",null,[(0,e._)("a",yn,[hn,fn,_n,Rn,En,(0,e.Wm)(a)])])]),(0,e._)("li",null,[(0,e._)("p",null,[(0,e._)("a",wn,[jn,(0,e.Wm)(a)])])])])])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},86688:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-6cdedeab","path":"/react/preparation/jsx.html","title":"深入理解JSX","lang":"zh-CN","frontmatter":{"title":"深入理解JSX","author":"BetaSu","tag":["React"],"summary":"JSX作为描述组件内容的数据结构，为JS赋予了更多视觉表现力。在React中我们大量使用他。在深入源码之前，有些疑问我们需要先解决： JSX和Fiber节点是同一个东西么？; React Component、React Element是同一个东西么，他们和JSX有什么关系？; 带着这些疑问，让我们开始这一节的学习。 JSX简介 相信作为React的使用者，你","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/react/preparation/jsx.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"深入理解JSX"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T09:14:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"BetaSu"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:modified_time","content":"2022-08-29T09:14:21.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"JSX简介","slug":"jsx简介","children":[]},{"level":2,"title":"React.createElement","slug":"react-createelement","children":[]},{"level":2,"title":"React Component","slug":"react-component","children":[]},{"level":2,"title":"JSX与Fiber节点","slug":"jsx与fiber节点","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","children":[]}],"git":{"createdTime":1661764461000,"updatedTime":1661764461000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":3.76,"words":1129},"filePathRelative":"react/preparation/jsx.md","localizedDate":"2022年8月29日"}')}}]);