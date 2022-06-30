"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[26161],{96320:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});var s=e(78e3);const t=[(0,s.uE)('<h2 id="index-文件" tabindex="-1"><a class="header-anchor" href="#index-文件" aria-hidden="true">#</a> Index 文件</h2><p><code>public/index.html</code> 文件是一个会被处理的模板。在构建过程中，资源链接会被自动注入。另外，Vue CLI 也会自动注入打包好的 JavaScript 和 CSS 文件的资源链接。它会最终成为 Vue 应用的页面。</p><h2 id="处理静态资源" tabindex="-1"><a class="header-anchor" href="#处理静态资源" aria-hidden="true">#</a> 处理静态资源</h2><p>静态资源可以通过两种方式进行处理:</p><ul><li><p>在 JavaScript 被导入或在 template/CSS 中通过相对路径被引用。这类引用会被 webpack 处理。</p></li><li><p>放置在 <code>public</code> 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理。</p></li></ul><h3 id="从相对路径导入" tabindex="-1"><a class="header-anchor" href="#从相对路径导入" aria-hidden="true">#</a> 从相对路径导入</h3><p>当您在 JavaScript、CSS 或 <code>*.vue</code> 文件中使用相对路径 (必须以 <code>.</code> 开头) 引用一个静态资源时，该资源将会被包含进入 webpack 的依赖图中。在其编译过程中，所有诸如 <code>&lt;img src=&quot;...&quot;&gt;</code>、<code>background: url(...)</code> 和 CSS <code>@import</code> 的资源 URL <strong>都会被解析为一个模块依赖</strong>。</p><p>例如，<code>url(./image.png)</code> 会被翻译为 <code>require(&#39;./image.png&#39;)</code>，而:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./image.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将会被编译到:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./image.png&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="url-转换规则" tabindex="-1"><a class="header-anchor" href="#url-转换规则" aria-hidden="true">#</a> URL 转换规则</h3><ul><li><p>如果 URL 是一个绝对路径 (例如 <code>/images/foo.png</code>)，它将会被保留不变。</p></li><li><p>如果 URL 以 <code>.</code> 开头，它会作为一个相对模块请求被解释且基于您的文件系统中的目录结构进行解析。</p></li><li><p>如果 URL 以 <code>~</code> 开头，其后的任何内容都会作为一个模块请求被解析。这意味着您甚至可以引用 Node.js 模块中的资源:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>~some-npm-package/foo.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>如果 URL 以 <code>@</code> 开头，它也会作为一个模块请求被解析。它的用处在于 Vue CLI 默认会设置一个指向 <code>&lt;projectRoot&gt;/src</code> 的别名 <code>@</code>。<strong>(仅作用于模版中)</strong></p></li></ul><h3 id="public-文件夹" tabindex="-1"><a class="header-anchor" href="#public-文件夹" aria-hidden="true">#</a> <code>public</code> 文件夹</h3><p>任何放置在 <code>public</code> 文件夹的静态资源都会被简单的复制，而不经过 webpack。您需要通过绝对路径来引用它们。</p><p>注意我们推荐将资源作为您的模块依赖图的一部分导入，这样它们会通过 webpack 的处理并获得如下好处:</p><ul><li>脚本和样式表会被压缩且打包在一起，从而避免额外的网络请求。</li><li>文件丢失会直接在编译时报错，而不是到了用户端才产生 404 错误。</li><li>最终生成的文件名包含了内容哈希，因此您不必担心浏览器会缓存它们的老版本。</li></ul><p><code>public</code> 目录提供的是一个<strong>应急手段</strong>，当您通过绝对路径引用它时，留意应用将会部署到哪里。如果您的应用没有部署在域名的根部，那么您需要为您的 URL 配置 publicPath 前缀:</p><ul><li><p>在 <code>public/index.html</code> 或其它通过 <code>html-webpack-plugin</code> 用作模板的 HTML 文件中，您需要通过 <code>&lt;%= BASE_URL %&gt;</code> 设置链接前缀:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;%= BASE_URL %&gt;favicon.ico<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>在模板中，您首先需要向您的组件传入基础 URL:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>`${publicPath}my-image.png`<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="何时使用-public-文件夹" tabindex="-1"><a class="header-anchor" href="#何时使用-public-文件夹" aria-hidden="true">#</a> 何时使用 <code>public</code> 文件夹</h3><ul><li>您需要在构建输出中指定一个文件的名字。</li><li>您有上千个图片，需要动态引用它们的路径。</li><li>有些库可能和 webpack 不兼容，这时您除了将其用一个独立的 <code>&lt;script&gt;</code> 标签引入没有别的选择。</li></ul>',21)],p={},l=(0,e(13860).Z)(p,[["render",function(a,n){return(0,s.wg)(),(0,s.iD)("div",null,t)}]])},13860:(a,n)=>{n.Z=(a,n)=>{const e=a.__vccOpts||a;for(const[a,s]of n)e[a]=s;return e}},4775:(a,n,e)=>{e.r(n),e.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-b7f95708","path":"/code/vue/cli/file.html","title":"文件处理原则","lang":"zh-CN","frontmatter":{"title":"文件处理原则","icon":"file","category":["Vue"],"tag":["Vue Cli"],"summary":"Index 文件 public/index.html 文件是一个会被处理的模板。在构建过程中，资源链接会被自动注入。另外，Vue CLI 也会自动注入打包好的 JavaScript 和 CSS 文件的资源链接。它会最终成为 Vue 应用的页面。 处理静态资源 静态资源可以通过两种方式进行处理: 在 JavaScript 被导入或在 template/CSS ","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/vue/cli/file.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"文件处理原则"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Vue Cli"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Index 文件","slug":"index-文件","children":[]},{"level":2,"title":"处理静态资源","slug":"处理静态资源","children":[{"level":3,"title":"从相对路径导入","slug":"从相对路径导入","children":[]},{"level":3,"title":"URL 转换规则","slug":"url-转换规则","children":[]},{"level":3,"title":"public 文件夹","slug":"public-文件夹","children":[]},{"level":3,"title":"何时使用 public 文件夹","slug":"何时使用-public-文件夹","children":[]}]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":2.79,"words":838},"filePathRelative":"code/vue/cli/file.md","localizedDate":"2022年6月27日"}')}}]);