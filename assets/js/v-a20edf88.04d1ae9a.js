"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[96660],{15621:(e,a,r)=>{r.r(a),r.d(a,{default:()=>ee});var n=r(78e3);const t=(0,n.uE)('<p>经过之前的学习，我们已经知道<code>React16</code>的架构分为三层：</p><ul><li>Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入<strong>Reconciler</strong></li><li>Reconciler（协调器）—— 负责找出变化的组件</li><li>Renderer（渲染器）—— 负责将变化的组件渲染到页面上</li></ul><p>那么架构是如何体现在源码的文件结构上呢，让我们一起看看吧。</p><h2 id="顶层目录" tabindex="-1"><a class="header-anchor" href="#顶层目录" aria-hidden="true">#</a> 顶层目录</h2><p>除去配置文件和隐藏文件夹，根目录的文件夹包括三个：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>根目录\n├── fixtures        # 包含一些给贡献者准备的小型 React 测试项目\n├── packages        # 包含元数据（比如 package.json）和 React 仓库中所有 package 的源码（子目录 src）\n├── scripts         # 各种工具链的脚本，比如git、jest、eslint等\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们关注<strong>packages</strong>目录</p><h2 id="packages目录" tabindex="-1"><a class="header-anchor" href="#packages目录" aria-hidden="true">#</a> packages目录</h2><p>目录下的文件夹非常多，我们来看下：</p>',9),s={id:"react文件夹",tabindex:"-1"},l=(0,n._)("a",{class:"header-anchor",href:"#react文件夹","aria-hidden":"true"},"#",-1),c=(0,n.Uk)(),i={href:"https://github.com/facebook/react/tree/master/packages/react",target:"_blank",rel:"noopener noreferrer"},d=(0,n.Uk)("react"),o=(0,n.Uk)("文件夹"),p=(0,n._)("p",null,"React的核心，包含所有全局 React API，如：",-1),u=(0,n._)("ul",null,[(0,n._)("li",null,"React.createElement"),(0,n._)("li",null,"React.Component"),(0,n._)("li",null,"React.Children")],-1),h=(0,n.Uk)("这些 API 是全平台通用的，它不包含"),m=(0,n._)("code",null,"ReactDOM",-1),k=(0,n.Uk)("、"),g=(0,n._)("code",null,"ReactNative",-1),v=(0,n.Uk)("等平台特定的代码。在 NPM 上作为"),b={href:"https://www.npmjs.com/package/react",target:"_blank",rel:"noopener noreferrer"},_=(0,n.Uk)("单独的一个包"),f=(0,n.Uk)("发布。"),R={id:"scheduler文件夹",tabindex:"-1"},x=(0,n._)("a",{class:"header-anchor",href:"#scheduler文件夹","aria-hidden":"true"},"#",-1),U=(0,n.Uk)(),y={href:"https://github.com/facebook/react/tree/master/packages/scheduler",target:"_blank",rel:"noopener noreferrer"},E=(0,n.Uk)("scheduler"),T=(0,n.Uk)("文件夹"),w=(0,n._)("p",null,"Scheduler（调度器）的实现。",-1),S={id:"shared文件夹",tabindex:"-1"},C=(0,n._)("a",{class:"header-anchor",href:"#shared文件夹","aria-hidden":"true"},"#",-1),j=(0,n.Uk)(),P={href:"https://github.com/facebook/react/tree/master/packages/shared",target:"_blank",rel:"noopener noreferrer"},A=(0,n.Uk)("shared"),N=(0,n.Uk)("文件夹"),W=(0,n.Uk)("源码中其他模块公用的"),M=(0,n._)("strong",null,"方法",-1),O=(0,n.Uk)("和"),z=(0,n._)("strong",null,"全局变量",-1),D=(0,n.Uk)("，比如在"),Z={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/shared/ReactSymbols.js",target:"_blank",rel:"noopener noreferrer"},I=(0,n.Uk)("shared/ReactSymbols.js"),L=(0,n.Uk)("中保存"),Y=(0,n._)("code",null,"React",-1),q=(0,n.Uk)("不同组件类型的定义。"),B=(0,n.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ...</span>\n<span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token constant">REACT_ELEMENT_TYPE</span> <span class="token operator">=</span> <span class="token number">0xeac7</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token constant">REACT_PORTAL_TYPE</span> <span class="token operator">=</span> <span class="token number">0xeaca</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token constant">REACT_FRAGMENT_TYPE</span> <span class="token operator">=</span> <span class="token number">0xeacb</span><span class="token punctuation">;</span>\n<span class="token comment">// ...</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="renderer相关的文件夹" tabindex="-1"><a class="header-anchor" href="#renderer相关的文件夹" aria-hidden="true">#</a> Renderer相关的文件夹</h3><p>如下几个文件夹为对应的<strong>Renderer</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- react-art\n- react-dom                 # 注意这同时是DOM和SSR（服务端渲染）的入口\n- react-native-renderer\n- react-noop-renderer       # 用于debug fiber（后面会介绍fiber）\n- react-test-renderer\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="试验性包的文件夹" tabindex="-1"><a class="header-anchor" href="#试验性包的文件夹" aria-hidden="true">#</a> 试验性包的文件夹</h3><p><code>React</code>将自己流程中的一部分抽离出来，形成可以独立使用的包，由于他们是试验性质的，所以不被建议在生产环境使用。包括如下文件夹：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- react-server        # 创建自定义SSR流\n- react-client        # 创建自定义的流\n- react-fetch         # 用于数据请求\n- react-interactions  # 用于测试交互相关的内部特性，比如React的事件模型\n- react-reconciler    # Reconciler的实现，你可以用他构建自己的Renderer\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="辅助包的文件夹" tabindex="-1"><a class="header-anchor" href="#辅助包的文件夹" aria-hidden="true">#</a> 辅助包的文件夹</h3><p><code>React</code>将一些辅助功能形成单独的包。包括如下文件夹：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- react-is       # 用于测试组件是否是某类型\n- react-client   # 创建自定义的流\n- react-fetch    # 用于数据请求\n- react-refresh  # “热重载”的React官方实现\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',10),F={id:"react-reconciler文件夹",tabindex:"-1"},G=(0,n._)("a",{class:"header-anchor",href:"#react-reconciler文件夹","aria-hidden":"true"},"#",-1),J=(0,n.Uk)(),H={href:"https://github.com/facebook/react/tree/master/packages/react-reconciler",target:"_blank",rel:"noopener noreferrer"},K=(0,n.Uk)("react-reconciler"),Q=(0,n.Uk)("文件夹"),V=(0,n._)("p",null,[(0,n.Uk)("我们需要重点关注"),(0,n._)("strong",null,"react-reconciler"),(0,n.Uk)("，在接下来源码学习中 80%的代码量都来自这个包。")],-1),X=(0,n._)("p",null,[(0,n.Uk)("虽然他是一个实验性的包，内部的很多功能在正式版本中还未开放。但是他一边对接"),(0,n._)("strong",null,"Scheduler"),(0,n.Uk)("，一边对接不同平台的"),(0,n._)("strong",null,"Renderer"),(0,n.Uk)("，构成了整个 React16 的架构体系。")],-1),$={},ee=(0,r(13860).Z)($,[["render",function(e,a){const r=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[t,(0,n._)("h3",s,[l,c,(0,n._)("a",i,[d,(0,n.Wm)(r)]),o]),p,u,(0,n._)("p",null,[h,m,k,g,v,(0,n._)("a",b,[_,(0,n.Wm)(r)]),f]),(0,n._)("h3",R,[x,U,(0,n._)("a",y,[E,(0,n.Wm)(r)]),T]),w,(0,n._)("h3",S,[C,j,(0,n._)("a",P,[A,(0,n.Wm)(r)]),N]),(0,n._)("p",null,[W,M,O,z,D,(0,n._)("a",Z,[I,(0,n.Wm)(r)]),L,Y,q]),B,(0,n._)("h3",F,[G,J,(0,n._)("a",H,[K,(0,n.Wm)(r)]),Q]),V,X])}]])},13860:(e,a)=>{a.Z=(e,a)=>{const r=e.__vccOpts||e;for(const[e,n]of a)r[e]=n;return r}},7030:(e,a,r)=>{r.r(a),r.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-a20edf88","path":"/react/preparation/file.html","title":"源码的文件结构","lang":"zh-CN","frontmatter":{"title":"源码的文件结构","author":"BetaSu","tag":["React"],"summary":"经过之前的学习，我们已经知道React16的架构分为三层： Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler; Reconciler（协调器）—— 负责找出变化的组件; Renderer（渲染器）—— 负责将变化的组件渲染到页面上; 那么架构是如何体现在源码的文件结构上呢，让我们一起看看吧。 顶层目录 除去配置文件和隐","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/react/preparation/file.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"源码的文件结构"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T09:14:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"BetaSu"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:modified_time","content":"2022-08-29T09:14:21.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"顶层目录","slug":"顶层目录","children":[]},{"level":2,"title":"packages目录","slug":"packages目录","children":[{"level":3,"title":"react文件夹","slug":"react文件夹","children":[]},{"level":3,"title":"scheduler文件夹","slug":"scheduler文件夹","children":[]},{"level":3,"title":"shared文件夹","slug":"shared文件夹","children":[]},{"level":3,"title":"Renderer相关的文件夹","slug":"renderer相关的文件夹","children":[]},{"level":3,"title":"试验性包的文件夹","slug":"试验性包的文件夹","children":[]},{"level":3,"title":"辅助包的文件夹","slug":"辅助包的文件夹","children":[]},{"level":3,"title":"react-reconciler文件夹","slug":"react-reconciler文件夹","children":[]}]}],"git":{"createdTime":1661764461000,"updatedTime":1661764461000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":2.44,"words":733},"filePathRelative":"react/preparation/file.md","localizedDate":"2022年8月29日"}')}}]);