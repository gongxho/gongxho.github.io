"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[9807],{24098:(n,s,a)=>{a.r(s),a.d(s,{default:()=>k});var e=a(78e3);const t=(0,e._)("p",null,[(0,e.Uk)("由于 Node.js 需要编码、运行、调试，我们需要一个 IDE 集成开发环境，这样就可以大大提升开发效率。综合考察后，Mr.Googxh 隆重向大家推荐 Node.js 集成开发环境: "),(0,e._)("strong",null,"Visual Studio Code"),(0,e.Uk)("。它启动速度快，执行简单，调试方便这三点上。当然，免费使用是一个加分项。")],-1),o={class:"custom-container info"},p=(0,e._)("p",{class:"custom-container-title"},"相关信息",-1),l=(0,e.Uk)("有关 VS Code 使用教程请"),r=(0,e.Uk)("访问这里"),c=(0,e.uE)('<h2 id="运行和调试-javascript" tabindex="-1"><a class="header-anchor" href="#运行和调试-javascript" aria-hidden="true">#</a> 运行和调试 JavaScript</h2><p>在 VS Code 中，我们可以非常方便地运行 JavaScript 文件。</p><p>VS Code 以文件夹作为工程目录 (Workspace Dir)，所有的 JavaScript 文件都存放在该目录下。此外，VS Code 在工程目录下还需要一个 <code>.vscode</code> 的配置目录，里面存放里 VS Code 需要的配置文件。</p><p>假设我们在 <code>C:\\Work\\</code> 目录下创建了一个 hello 目录作为工程目录，并编写了一个 <code>hello.js</code> 文件，则该工程目录的结构如下:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hello/ &lt;-- workspace dir\n|\n├─ hello.js &lt;-- JavaScript file\n|\n└─ .vscode/ &lt;-- VS Code config\n      |\n      └ launch.json &lt;-- VS Code config file for JavaScript\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以用 VS Code 快速创建 <code>launch.json</code>，然后修改如下:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Run hello.js&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;program&quot;</span><span class="token operator">:</span> <span class="token string">&quot;${workspaceRoot}/hello.js&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;stopOnEntry&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;cwd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;${workspaceRoot}&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;preLaunchTask&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;runtimeExecutable&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;runtimeArgs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;--nolazy&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;NODE_ENV&quot;</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;externalConsole&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;sourceMaps&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了配置文件，即可使用 VS Code 调试 JavaScript。</p><h2 id="视频演示" tabindex="-1"><a class="header-anchor" href="#视频演示" aria-hidden="true">#</a> 视频演示</h2>',9),i={href:"https://www.bilibili.com/video/av5827351/",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("视频演示"),d={},k=(0,a(13860).Z)(d,[["render",function(n,s){const a=(0,e.up)("RouterLink"),d=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e.kq)(" more "),(0,e._)("div",o,[p,(0,e._)("p",null,[l,(0,e.Wm)(a,{to:"/software/vscode/"},{default:(0,e.w5)((()=>[r])),_:1})])]),c,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",i,[u,(0,e.Wm)(d)])])])])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},33748:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-647e802c","path":"/code/node-js/environment.html","title":"搭建 Node 开发环境","lang":"zh-CN","frontmatter":{"title":"搭建 Node 开发环境","icon":"leaf","order":3,"category":["Node.js"],"tag":["Node.js","软件"],"summary":"由于 Node.js 需要编码、运行、调试，我们需要一个 IDE 集成开发环境，这样就可以大大提升开发效率。综合考察后，Mr.Googxh 隆重向大家推荐 Node.js 集成开发环境: Visual Studio Code。它启动速度快，执行简单，调试方便这三点上。当然，免费使用是一个加分项。\\n","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/node-js/environment.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"搭建 Node 开发环境"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-29T10:08:18.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Node.js"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2022-06-29T10:08:18.000Z"}]]},"excerpt":"<p>由于 Node.js 需要编码、运行、调试，我们需要一个 IDE 集成开发环境，这样就可以大大提升开发效率。综合考察后，Mr.Googxh 隆重向大家推荐 Node.js 集成开发环境: <strong>Visual Studio Code</strong>。它启动速度快，执行简单，调试方便这三点上。当然，免费使用是一个加分项。</p>\\n","headers":[{"level":2,"title":"运行和调试 JavaScript","slug":"运行和调试-javascript","children":[]},{"level":2,"title":"视频演示","slug":"视频演示","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656497298000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":2}]},"readingTime":{"minutes":1.15,"words":344},"filePathRelative":"code/node-js/environment.md","localizedDate":"2022年6月27日"}')}}]);