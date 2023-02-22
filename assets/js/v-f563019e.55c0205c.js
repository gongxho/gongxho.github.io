"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[9525],{46630:(e,t,l)=>{l.r(t),l.d(t,{default:()=>o});var a=l(60329);const i=[(0,a.uE)('<h2 id="react-中-keys-的作用是什么" tabindex="-1"><a class="header-anchor" href="#react-中-keys-的作用是什么" aria-hidden="true">#</a> React 中 keys 的作用是什么？</h2><blockquote><p>Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识</p></blockquote><ul><li>在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。在 React Diff 算法中 React 会借助元素的 Key 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染。此外，React 还需要借助 Key 值来判断元素与本地状态的关联关系，因此我们绝不可忽视转换函数中 Key 的重要性</li></ul><h2 id="传入-setstate-函数的第二个参数的作用是什么" tabindex="-1"><a class="header-anchor" href="#传入-setstate-函数的第二个参数的作用是什么" aria-hidden="true">#</a> 传入 setState 函数的第二个参数的作用是什么？</h2><blockquote><p>该函数会在setState函数调用完成并且组件开始重渲染的时候被调用，我们可以用该函数来监听渲染是否完成：</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>this.setState(\n  { username: &#39;tylermcginnis33&#39; },\n  () =&gt; console.log(&#39;setState has finished and the component has re-rendered.&#39;)\n)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>this.setState((prevState, props) =&gt; {\n  return {\n    streak: prevState.streak + props.count\n  }\n})\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-中-refs-的作用是什么" tabindex="-1"><a class="header-anchor" href="#react-中-refs-的作用是什么" aria-hidden="true">#</a> React 中 refs 的作用是什么</h2><ul><li>Refs 是 React 提供给我们的安全访问 DOM 元素或者某个组件实例的句柄</li><li>可以为元素添加ref属性然后在回调函数中接受该元素在 DOM 树中的句柄，该值会作为回调函数的第一个参数返回</li></ul><h2 id="在生命周期中的哪一步你应该发起-ajax-请求" tabindex="-1"><a class="header-anchor" href="#在生命周期中的哪一步你应该发起-ajax-请求" aria-hidden="true">#</a> 在生命周期中的哪一步你应该发起 AJAX 请求</h2><blockquote><p>我们应当将AJAX 请求放到 <code>componentDidMount</code> 函数中执行，主要原因有下</p></blockquote><ul><li>React 下一代调和算法 Fiber 会通过开始或停止渲染的方式优化应用性能，其会影响到 componentWillMount 的触发次数。对于 componentWillMount 这个生命周期函数的调用次数会变得不确定，React 可能会多次频繁调用 componentWillMount。如果我们将 AJAX 请求放到 componentWillMount 函数中，那么显而易见其会被触发多次，自然也就不是好的选择。</li><li>如果我们将 AJAX 请求放置在生命周期的其他函数中，我们并不能保证请求仅在组件挂载完毕后才会要求响应。如果我们的数据请求在组件挂载之前就完成，并且调用了setState函数将数据添加到组件状态中，对于未挂载的组件则会报错。而在 componentDidMount 函数中进行 AJAX 请求则能有效避免这个问题</li></ul><h2 id="shouldcomponentupdate-的作用" tabindex="-1"><a class="header-anchor" href="#shouldcomponentupdate-的作用" aria-hidden="true">#</a> shouldComponentUpdate 的作用</h2><blockquote><p>shouldComponentUpdate 允许我们手动地判断是否要进行组件更新，根据组件的应用场景设置函数的合理返回值能够帮我们避免不必要的更新</p></blockquote><h2 id="如何告诉-react-它应该编译生产环境版" tabindex="-1"><a class="header-anchor" href="#如何告诉-react-它应该编译生产环境版" aria-hidden="true">#</a> 如何告诉 React 它应该编译生产环境版</h2><blockquote><p>通常情况下我们会使用 Webpack 的 DefinePlugin 方法来将 NODE_ENV 变量值设置为 production。编译版本中 React 会忽略 propType 验证以及其他的告警信息，同时还会降低代码库的大小，React 使用了 Uglify 插件来移除生产环境下不必要的注释等信息</p></blockquote><h2 id="概述下-react-中的事件处理逻辑" tabindex="-1"><a class="header-anchor" href="#概述下-react-中的事件处理逻辑" aria-hidden="true">#</a> 概述下 React 中的事件处理逻辑</h2><blockquote><p>为了解决跨浏览器兼容性问题，React 会将浏览器原生事件（Browser Native Event）封装为合成事件（SyntheticEvent）传入设置的事件处理器中。这里的合成事件提供了与原生事件相同的接口，不过它们屏蔽了底层浏览器的细节差异，保证了行为的一致性。另外有意思的是，React 并没有直接将事件附着到子元素上，而是以单一事件监听器的方式将所有的事件发送到顶层进行处理。这样 React 在更新 DOM 的时候就不需要考虑如何去处理附着在 DOM 上的事件监听器，最终达到优化性能的目的</p></blockquote><h2 id="createelement-与-cloneelement-的区别是什么" tabindex="-1"><a class="header-anchor" href="#createelement-与-cloneelement-的区别是什么" aria-hidden="true">#</a> createElement 与 cloneElement 的区别是什么</h2><blockquote><p>createElement 函数是 JSX 编译之后使用的创建 React Element 的函数，而 cloneElement 则是用于复制某个元素并传入新的 Props</p></blockquote><h2 id="redux中间件" tabindex="-1"><a class="header-anchor" href="#redux中间件" aria-hidden="true">#</a> redux中间件</h2><blockquote><p>中间件提供第三方插件的模式，自定义拦截 action -&gt; reducer 的过程。变为 action -&gt; middlewares -&gt; reducer 。这种机制可以让我们改变数据流，实现如异步 action ，action 过滤，日志输出，异常报告等功能</p></blockquote><ul><li><code>redux-logger</code>：提供日志输出</li><li><code>redux-thunk</code>：处理异步操作</li><li><code>redux-promise</code>：处理异步操作，<code>actionCreator</code>的返回值是<code>promise</code></li></ul><h2 id="redux有什么缺点" tabindex="-1"><a class="header-anchor" href="#redux有什么缺点" aria-hidden="true">#</a> redux有什么缺点</h2><ul><li>一个组件所需要的数据，必须由父组件传过来，而不能像flux中直接从store取。</li><li>当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新render，可能会有效率影响，或者需要写复杂的<code>shouldComponentUpdate</code>进行判断。</li></ul><h2 id="react组件的划分业务组件技术组件" tabindex="-1"><a class="header-anchor" href="#react组件的划分业务组件技术组件" aria-hidden="true">#</a> react组件的划分业务组件技术组件？</h2><ul><li>根据组件的职责通常把组件分为UI组件和容器组件。</li><li>UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。</li><li>两者通过<code>React-Redux</code> 提供<code>connect</code>方法联系起来</li></ul><h2 id="react生命周期函数" tabindex="-1"><a class="header-anchor" href="#react生命周期函数" aria-hidden="true">#</a> react生命周期函数</h2><p><strong>初始化阶段</strong></p><ul><li><code>getDefaultProp</code>s:获取实例的默认属性</li><li><code>getInitialState</code>:获取每个实例的初始化状态</li><li><code>componentWillMount</code>：组件即将被装载、渲染到页面上</li><li><code>render</code>:组件在这里生成虚拟的DOM节点</li><li><code>omponentDidMount</code>:组件真正在被装载之后</li></ul><p><strong>运行中状态</strong></p><ul><li><code>componentWillReceiveProps</code>:组件将要接收到属性的时候调用</li><li><code>shouldComponentUpdate</code>:组件接受到新属性或者新状态的时候（可以返回false，接收数据后不更新，阻止<code>render</code>调用，后面的函数不会被继续执行了）</li><li><code>componentWillUpdate</code>:组件即将更新不能修改属性和状态</li><li><code>render</code>:组件重新描绘</li><li><code>componentDidUpdate</code>:组件已经更新</li></ul><p><strong>销毁阶段</strong></p><ul><li><code>componentWillUnmount</code>:组件即将销毁</li></ul><h2 id="react性能优化是哪个周期函数" tabindex="-1"><a class="header-anchor" href="#react性能优化是哪个周期函数" aria-hidden="true">#</a> react性能优化是哪个周期函数</h2><blockquote><p>shouldComponentUpdate 这个方法用来判断是否需要调用render方法重新描绘dom。因为dom的描绘非常消耗性能，如果我们能在shouldComponentUpdate方法中能够写出更优化的dom diff算法，可以极大的提高性能</p></blockquote><h2 id="为什么虚拟dom会提高性能" tabindex="-1"><a class="header-anchor" href="#为什么虚拟dom会提高性能" aria-hidden="true">#</a> 为什么虚拟dom会提高性能</h2><blockquote><p>虚拟dom相当于在js和真实dom中间加了一个缓存，利用dom diff算法避免了没有必要的dom操作，从而提高性能</p></blockquote><p><strong>具体实现步骤如下</strong></p><ul><li>用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中</li><li>当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异</li><li>把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新</li></ul><h2 id="diff算法" tabindex="-1"><a class="header-anchor" href="#diff算法" aria-hidden="true">#</a> diff算法?</h2><ul><li>把树形结构按照层级分解，只比较同级元素。</li><li>给列表结构的每个单元添加唯一的key属性，方便比较。</li><li>React 只会匹配相同 class 的 component（这里面的class指的是组件的名字）</li><li>合并操作，调用 component 的 setState 方法的时候, React 将其标记为 - dirty.到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制.</li><li>选择性子树渲染。开发人员可以重写shouldComponentUpdate提高diff的性能</li></ul><h2 id="react性能优化方案" tabindex="-1"><a class="header-anchor" href="#react性能优化方案" aria-hidden="true">#</a> react性能优化方案</h2><ul><li>重写<code>shouldComponentUpdate</code>来避免不必要的dom操作</li><li>使用 production 版本的react.js</li><li>使用key来帮助React识别列表中所有子组件的最小变化</li></ul>',44)],c={},o=(0,l(13860).Z)(c,[["render",function(e,t){return(0,a.wg)(),(0,a.iD)("div",null,i)}]])},13860:(e,t)=>{t.Z=(e,t)=>{const l=e.__vccOpts||e;for(const[e,a]of t)l[e]=a;return l}},2480:(e,t,l)=>{l.r(t),l.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-f563019e","path":"/Interview/base/react.html","title":"React 相关问题","lang":"zh-CN","frontmatter":{"title":"React 相关问题","icon":null,"date":"2022-12-15T00:00:00.000Z","category":["Interview"],"summary":"React 中 keys 的作用是什么？ --- \\" Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识\\" 在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。在 React Diff 算法中 React 会借助元素的 Key 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染。此外","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/Interview/base/react.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"React 相关问题"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-17T08:24:10.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-12-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-17T08:24:10.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"React 中 keys 的作用是什么？","slug":"react-中-keys-的作用是什么","children":[]},{"level":2,"title":"传入 setState 函数的第二个参数的作用是什么？","slug":"传入-setstate-函数的第二个参数的作用是什么","children":[]},{"level":2,"title":"React 中 refs 的作用是什么","slug":"react-中-refs-的作用是什么","children":[]},{"level":2,"title":"在生命周期中的哪一步你应该发起 AJAX 请求","slug":"在生命周期中的哪一步你应该发起-ajax-请求","children":[]},{"level":2,"title":"shouldComponentUpdate 的作用","slug":"shouldcomponentupdate-的作用","children":[]},{"level":2,"title":"如何告诉 React 它应该编译生产环境版","slug":"如何告诉-react-它应该编译生产环境版","children":[]},{"level":2,"title":"概述下 React 中的事件处理逻辑","slug":"概述下-react-中的事件处理逻辑","children":[]},{"level":2,"title":"createElement 与 cloneElement 的区别是什么","slug":"createelement-与-cloneelement-的区别是什么","children":[]},{"level":2,"title":"redux中间件","slug":"redux中间件","children":[]},{"level":2,"title":"redux有什么缺点","slug":"redux有什么缺点","children":[]},{"level":2,"title":"react组件的划分业务组件技术组件？","slug":"react组件的划分业务组件技术组件","children":[]},{"level":2,"title":"react生命周期函数","slug":"react生命周期函数","children":[]},{"level":2,"title":"react性能优化是哪个周期函数","slug":"react性能优化是哪个周期函数","children":[]},{"level":2,"title":"为什么虚拟dom会提高性能","slug":"为什么虚拟dom会提高性能","children":[]},{"level":2,"title":"diff算法?","slug":"diff算法","children":[]},{"level":2,"title":"react性能优化方案","slug":"react性能优化方案","children":[]}],"git":{"createdTime":1673943850000,"updatedTime":1673943850000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":6.21,"words":1862},"filePathRelative":"Interview/base/react.md","localizedDate":"2022年12月15日"}')}}]);