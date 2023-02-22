"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[70600],{94713:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var t=a(60329);const l=[(0,t.uE)('<p><strong>什么是单页面应用(SPA)？</strong></p><ul><li><p>单页面应用(SPA)是指用户在浏览器加载单一的HTML页面，后续请求都无需再离开此页</p></li><li><p>目标：旨在用为用户提供了更接近本地移动APP或桌面应用程序的体验。</p></li><li><p>流程：第一次请求时，将导航页传输到客户端，其余请求通过 REST API 获取 JSON 数据</p></li><li><p>实现：数据的传输通过 Web Socket API 或 RPC(远程过程调用)。</p></li><li><p>优点：用户体验流畅，服务器压力小，前后端职责分离</p></li><li><p>缺点：关键词布局难度加大，不利于 SEO</p></li></ul><p><strong>什么是“前端路由”? 什么时候适用“前端路由”? 有哪些优点和缺点?</strong></p><ul><li>前端路由通过 URL 和 History 来实现页面切换</li><li>应用：前端路由主要适用于“前后端分离”的单页面应用(SPA)项目</li><li>优点：用户体验好，交互流畅</li><li>缺点：浏览器“前进”、“后退”会重新请求，无法合理利用缓存</li></ul><p><strong>模块化开发怎么做？</strong></p><ul><li>封装对象作为命名空间 -- 内部状态可以被外部改写</li><li>立即执行函数(IIFE) -- 需要依赖多个JS文件，并且严格按顺序加载</li><li>使用模块加载器 -- require.js, sea.js, EC6 模块</li></ul><p><strong>通行的 Javascript 模块的规范有哪些？</strong></p><ul><li>CommonJS -- 主要用在服务器端 node.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> math <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./math&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmath<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AMD(异步模块定义) -- require.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./math&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">math</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    math<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>CMD(通用模块定义) -- sea.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> math <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./math&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmath<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ES6 模块</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>math<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./math&#39;</span><span class="token punctuation">;</span>\nmath<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>AMD 与 CMD 规范的区别？</strong></p><ul><li><p>规范化产出：</p><ul><li>AMD 由 RequireJS 推广产出</li><li>CMD 由 SeaJS 推广产出</li></ul></li><li><p>模块的依赖:</p><ul><li>AMD 提前执行，推崇依赖前置</li><li>CMD 延迟执行，推崇依赖就近</li></ul></li><li><p>API 功能:</p><ul><li>AMD 的 API 默认多功能（分全局 require 和局部 require）</li><li>CMD 的 API 推崇职责单一纯粹（没有全局 require）</li></ul></li><li><p>模块定义规则：</p><ul><li>AMD 默认一开始就载入全部依赖模块</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      a<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      b<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>CMD 依赖模块在用到时才就近载入</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      a<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      b<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>requireJS的核心原理是什么？</strong></p><ul><li>每个模块所依赖模块都会比本模块预先加载</li></ul><p><strong>对 Node.js 的优点、缺点提出了自己的看法？ Node.js的特点和适用场景？</strong></p><ul><li>Node.js的特点：单线程，非阻塞I/O，事件驱动</li><li>Node.js的优点：擅长处理高并发；适合I/O密集型应用</li></ul><ul><li><p>Node.js的缺点：不适合CPU密集运算；不能充分利用多核CPU；可靠性低，某个环节出错会导致整个系统崩溃</p></li><li><p>Node.js的适用场景：</p><ul><li>RESTful API</li><li>实时应用：在线聊天、图文直播</li><li>工具类应用：前端部署(npm, gulp)</li><li>表单收集：问卷系统</li></ul></li></ul><p><strong>如何判断当前脚本运行在浏览器还是node环境中？</strong></p><ul><li>判断 Global 对象是否为 window，如果不为 window，当前脚本没有运行在浏览器中</li></ul><p><strong>什么是 npm ？</strong></p><ul><li>npm 是 Node.js 的模块管理和发布工具</li></ul><p><strong>什么是 WebKit ？</strong></p><ul><li>WebKit 是一个开源的浏览器内核，由渲染引擎(WebCore)和JS解释引擎(JSCore)组成</li><li>通常所说的 WebKit 指的是 WebKit(WebCore)，主要工作是进行 HTML/CSS 渲染</li><li>WebKit 一直是 Safari 和 Chrome(之前) 使用的浏览器内核，后来 Chrome 改用Blink 内核</li></ul><p><strong>如何测试前端代码? 知道 Unit Test，BDD, TDD 么? 怎么测试你的前端工程(mocha, jasmin..)?</strong></p><ul><li>通过为前端代码编写单元测试(Unit Test)来测试前端代码</li><li>Unit Test：一段用于测试一个模块或接口是否能达到预期结果的代码</li><li>BDD：行为驱动开发 -- 业务需求描述产出产品代码的开发方法</li><li>TDD：测试驱动开发 -- 单元测试用例代码产出产品代码的开发方法</li><li>单元测试框架：</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// mocha 示例</span>\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;Test add&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;1 + 2 = 3&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>be<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// jasmin 示例</span>\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;Test add&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;1 + 2 = 3&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>介绍你知道的前端模板引擎？</strong></p><ul><li>artTemplate, underscore, handlebars</li></ul><p><strong>什么是 Modernizr？ Modernizr 工作原理？</strong></p><ul><li>Modernizr 是一个开源的 JavaScript 库，用于检测用户浏览器对 HTML5 与 CSS3 的支持情况</li></ul><p><strong>移动端最小触控区域是多大？</strong></p><ul><li>44 * 44 px</li></ul><p><strong>移动端的点击事件的延迟时间是多长，为什么会有延迟？ 如何解决这个延时？</strong></p><ul><li>移动端 click 有 300ms 延迟，浏览器为了区分“双击”（放大页面）还是“单击”而设计</li><li>解决方案： <ul><li>禁用缩放(对safari无效)</li><li>使用指针事件(IE私有特性，且仅IE10+)</li><li>使用 Zepto 的 tap 事件(有点透BUG)</li><li>使用 FastClick 插件(体积大[压缩后8k])</li></ul></li></ul><p><strong>什么是函数式编程？</strong></p><ul><li><p>函数式编程是一种&quot;编程范式&quot;，主要思想是把运算过程尽量写成一系列嵌套的函数调用</p></li><li><p>例如：var result = subtract(multiply(add(1,2), 3), 4);</p></li><li><p>函数式编程的特点：</p><ul><li>函数核心化：函数可以作为变量的赋值、另一函数的参数、另一函数的返回值</li><li>只用“表达式”，不用“语句”：要求每一步都是单纯的运算，都必须有返回值</li><li>没有&quot;副作用&quot;：所有功能只为返回一个新的值，不修改外部变量</li><li>引用透明：运行不依赖于外部变量，只依赖于输入的参数</li></ul></li><li><p>函数式编程的优点：</p><ul><li>代码简洁，接近自然语言，易于理解</li><li>便于维护，利于测试、除错、组合</li><li>易于“并发编程“，不用担心一个线程的数据，被另一个线程修改</li><li>可“热升级”代码，在运行状态下直接升级代码，不需要重启，也不需要停机</li></ul></li></ul><p><strong>什么是函数柯里化Currying)？</strong></p><ul><li><p>柯里化：</p><ul><li>通常也称部分求值，含义是给函数分步传递参数，每次递参部分应用参数，并返回一个更具体的函数，继续接受剩余参数</li><li>期间会连续返回具体函数，直至返回最后结果。因此，函数柯里化是逐步传参，逐步缩小函数的适用范围，逐步求解的过程</li><li>柯里化的作用：延迟计算；参数复用；动态创建函数</li></ul></li><li><p>柯里化的缺点：</p><ul><li>函数柯里化会产生开销（函数嵌套，比普通函数占更多内存），但性能瓶颈首先来自其它原因（DOM 操作等）</li></ul></li></ul><p><strong>什么是依赖注入？</strong></p><ul><li>当一个类的实例依赖另一个类的实例时，自己不创建该实例，由IOC容器创建并注入给自己，因此称为依赖注入。</li><li>依赖注入解决的就是如何有效组织代码依赖模块的问题</li></ul><p><strong>设计模式：什么是 singleton, factory, strategy, decorator？</strong></p><ul><li>Singleton(单例) 一个类只有唯一实例，这个实例在整个程序中有一个全局的访问点</li><li>Factory (工厂) 解决实列化对象产生重复的问题</li><li>Strategy(策略) 将每一个算法封装起来，使它们还可以相互替换，让算法独立于使用</li><li>Observer(观察者) 多个观察者同时监听一个主体，当主体对象发生改变时，所有观察者都将得到通知</li><li>Prototype(原型) 一个完全初始化的实例，用于拷贝或者克隆</li><li>Adapter(适配器) 将不同类的接口进行匹配调整，尽管内部接口不兼容，不同的类还是可以协同工作</li><li>Proxy(代理模式) 一个充当过滤转发的对象用来代表一个真实的对象</li><li>Iterator(迭代器) 在不需要直到集合内部工作原理的情况下，顺序访问一个集合里面的元素</li><li>Chain of Responsibility(职责连) 处理请求组成的对象一条链，请求链中传递，直到有对象可以处理</li></ul><p><strong>什么是前端工程化？</strong></p><ul><li><p>前端工程化就是把一整套前端工作流程使用工具自动化完成</p></li><li><p>前端开发基本流程：</p><ul><li>项目初始化：yeoman, FIS</li><li>引入依赖包：bower, npm</li><li>模块化管理：npm, browserify, Webpack</li><li>代码编译：babel, sass, less</li><li>代码优化(压缩/合并)：Gulp, Grunt</li><li>代码检查：JSHint, ESLint</li><li>代码测试：Mocha</li></ul></li><li><p>目前最知名的构建工具：Gulp, Grunt, npm + Webpack</p></li></ul><p><strong>介绍 Yeoman 是什么？</strong></p><ul><li>Yeoman --前端开发脚手架工具，自动将最佳实践和工具整合起来构建项目骨架</li><li>Yeoman 其实是三类工具的合体，三类工具各自独立： <ul><li>yo --- 脚手架，自动生成工具（相当于一个粘合剂，把 Yeoman 工具粘合在一起）</li><li>Grunt、gulp --- 自动化构建工具 （最初只有grunt，之后加入了gulp）</li><li>Bower、npm --- 包管理工具 （原来是bower，之后加入了npm）</li></ul></li></ul><p><strong>介绍 WebPack 是什么？ 有什么优势？</strong></p><ul><li>WebPack 是一款[模块加载器]兼[打包工具]，用于把各种静态资源（js/css/image等）作为模块来使用</li><li>WebPack 的优势： <ul><li>WebPack 同时支持 commonJS 和 AMD/CMD，方便代码迁移</li><li>不仅仅能被模块化 JS ，还包括 CSS、Image 等</li><li>能替代部分 grunt/gulp 的工作，如打包、压缩混淆、图片base64</li><li>扩展性强，插件机制完善，特别是支持 React 热插拔的功能</li></ul></li></ul><p><strong>介绍类库和框架的区别？</strong></p><ul><li>类库是一些函数的集合，帮助开发者写WEB应用，起主导作用的是开发者的代码</li><li>框架是已实现的特殊WEB应用，开发者只需对它填充具体的业务逻辑，起主导作用是框架</li></ul><p><strong>什么是 MVC/MVP/MVVM/Flux？</strong></p><ul><li><p>MVC(Model-View-Controller)</p><ul><li>V-&gt;C, C-&gt;M, M-&gt;V</li><li>通信都是单向的；C只起路由作用，业务逻辑都部署在V</li><li>Backbone</li></ul></li><li><p>MVP(Model-View-Presenter)</p><ul><li>V&lt;-&gt;P, P&lt;-&gt;M</li><li>通信都是双向的；V和M不发生联系(通过P传)；V非常薄，逻辑都部署在P</li><li>Riot.js</li></ul></li><li><p>MVVM(Model-View-ViewModel)</p><ul><li>V-&gt;VM, VM&lt;-&gt;M</li><li>采用双向数据绑定：View 和 ViewModel 的变动都会相互映射到对象上面</li><li>Angular</li></ul></li><li><p>Flux(Dispatcher-Store-View)</p><ul><li>Action-&gt;Dispatcher-&gt;Store-&gt;View, View-&gt;Action</li><li>Facebook 为了解决在 MVC 应用中碰到的工程性问题提出一个架构思想</li><li>基于一个简单的原则：数据在应用中单向流动（单向数据流）</li><li>React(Flux 中 View，只关注表现层)</li></ul></li></ul><p><strong>Backbone 是什么？</strong></p><ul><li>Backbone 是一个基于 jquery 和 underscore 的前端(MVC)框架</li></ul><p><strong>AngularJS 是什么？</strong></p><ul><li>AngularJS 是一个完善的前端 MVVM 框架，包含模板、数据双向绑定、路由、模块化、服务、依赖注入等</li><li>AngularJS 由 Google 维护，用来协助大型单一页面应用开发。</li></ul><p><strong>React 是什么？</strong></p><ul><li>React 不是 MV* 框架，用于构建用户界面的 JavaScript 库，侧重于 View 层</li><li>React 主要的原理： <ul><li>虚拟 DOM + diff 算法 -&gt; 不直接操作 DOM 对象</li><li>Components 组件 -&gt; Virtual DOM 的节点</li><li>State 触发视图的渲染 -&gt; 单向数据绑定</li><li>React 解决方案：React + Redux + react-router + Fetch + webpack</li></ul></li></ul><p><strong>react-router 路由系统的实现原理？</strong></p><ul><li>实现原理：location 与 components 之间的同步</li></ul><ul><li>路由的职责是保证 UI 和 URL 的同步</li><li>在 react-router 中，URL 对应 Location 对象，UI 由 react components 决定</li><li>因此，路由在 react-router 中就转变成 location 与 components 之间的同步</li></ul><p><strong>Meteor 是什么</strong></p><ul><li>Meteor 是一个全栈开发框架，基础构架是 Node.JS + MongoDB，并把延伸到了浏览器端。</li><li>Meteor 统一了服务器端和客户端的数据访问，使开发者可以轻松完成全栈式开发工作。</li></ul>',71)],p={},i=(0,a(13860).Z)(p,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,l)}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},77380:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-2fa540c0","path":"/Interview/base/Front-end-frame-relative.html","title":"前端模块化","lang":"zh-CN","frontmatter":{"title":"前端模块化","icon":null,"date":"2022-12-15T00:00:00.000Z","category":["Interview"],"summary":"什么是单页面应用(SPA)？ 单页面应用(SPA)是指用户在浏览器加载单一的HTML页面，后续请求都无需再离开此页; 目标：旨在用为用户提供了更接近本地移动APP或桌面应用程序的体验。; 流程：第一次请求时，将导航页传输到客户端，其余请求通过 REST API 获取 JSON 数据; 实现：数据的传输通过 Web Socket API 或 RPC(远程过程调","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/Interview/base/Front-end-frame-relative.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"前端模块化"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-17T08:24:10.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-12-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-17T08:24:10.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1673943850000,"updatedTime":1673943850000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":9.69,"words":2906},"filePathRelative":"Interview/base/Front-end-frame-relative.md","localizedDate":"2022年12月15日"}')}}]);