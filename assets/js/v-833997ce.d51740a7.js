"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[914],{50881:(e,n,s)=>{s.r(n),s.d(n,{default:()=>m});var a=s(78e3);const d=(0,a._)("p",null,"在前面的所有章节中，我们编写的 JavaScript 代码都是在浏览器中运行的，因此，我们可以直接在浏览器中敲代码，然后直接运行。",-1),t=(0,a._)("p",null,"从本章开始，我们编写的 JavaScript 代码将不能在浏览器环境中执行了，而是在 Node.js 环境中执行，因此，JavaScript 代码将直接在您的计算机上以命令行的方式运行，所以，我们要先选择一个文本编辑器来编写 JavaScript 代码，并且把它保存到本地硬盘的某个目录，才能够执行。",-1),o=(0,a._)("p",null,"那么问题来了: 文本编辑器到底哪家强?",-1),c={class:"custom-container warning"},p=(0,a._)("p",{class:"custom-container-title"},"注意",-1),l=(0,a._)("p",null,"千万不要使用 Windows 自带的记事本编辑任何文本文件。",-1),i=(0,a.Uk)("具体详情请见 "),r=(0,a.Uk)("记事本遗留问题"),u=(0,a.uE)('<p>如果您的电脑上已经安装了<strong>Sublime Text</strong>，或者<strong>Notepad++</strong>，也可以用来编写 JavaScript 代码，注意用 UTF-8 格式保存。</p><p>最方便的，当然是 Mr.Googxh 强力安利的 VS Code 了。</p><p>输入以下代码:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一行总是写上 <code>&#39;use strict&#39;;</code> 是因为我们总是以严格模式运行 JavaScript 代码，避免各种潜在陷阱。</p><p>然后，选择一个目录，例如 <code>C:\\Workspace</code>，把文件保存为 <code>hello.js</code>，就可以打开命令行窗口，把当前目录切换到 hello.js 所在目录，然后输入以下命令运行这个程序了:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Workspace<span class="token operator">&gt;</span>node hello.js\nHello, world.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以保存为别的名字，比如 <code>first.js</code>，但是必须要以 <code>.js</code> 结尾。此外，文件名只能是英文字母、数字和下划线的组合。</p><p>如果当前目录下没有 <code>hello.js</code> 这个文件，运行 <code>node hello.js</code> 就会报错:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Workspace<span class="token operator">&gt;</span>node hello.js\nmodule.js:338\n    throw err<span class="token punctuation">;</span>\n          ^\nError: Cannot <span class="token function">find</span> module <span class="token string">&#39;C:\\Workspace\\hello.js&#39;</span>\n    at Function.Module._resolveFilename\n    at Function.Module._load\n    at Function.Module.runMain\n    at startup\n    at node.js\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错的意思就是，没有找到 <code>hello.js</code> 这个文件，因为文件不存在。这个时候，就要检查一下当前目录下是否有这个文件了。</p><h2 id="命令行模式和-node-js-交互模式" tabindex="-1"><a class="header-anchor" href="#命令行模式和-node-js-交互模式" aria-hidden="true">#</a> 命令行模式和 Node.js 交互模式</h2><p>请注意区分命令行模式和 Node.js 交互模式。</p><p>看到类似 <code>C:\\&gt;</code> 是在 Windows 提供的命令行模式:</p><p><img src="data:image/png;base64,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" alt="run-node-hello"></p><p>在命令行模式下，可以执行 Node.js 进入 Node.js 交互式环境，也可以执行 Node.js <code>hello.js</code> 运行一个 <code>.js</code> 文件。</p><p>看到<code>&gt;</code> 是在 Node.js 交互式环境下:</p><p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfUAAAC7BAMAAACOQxqKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAMFBMVEX///82MDcAAADAwMDi5OecnJycuNW40evF2OxlaXLRz9HloZK/aUkdzOmrxeHu7u7Ljip0AAAAAWJLR0QAiAUdSAAAAAd0SU1FB+QGEQIvHCN9hiIAAAneSURBVHja7ZtNbBxJFYCbLAglpx2HDPKiDJMqrSUffHCV9wAXC7lD8Eqw8h/gIBFZi2aJFM0BLVg57GElxJoDyOCfZEI0OWR9YC45w54cThHkyo2RosGrtTS0sPAe5mTq/6enezxe99g9rnqe9vRU95TfV+/Vq3pV7SAICk5KOSBSmApclO8Q+C8tVpyUn/2CsH/XTfbKh0Fw1VH0ys/LwdecZX89eN1V9vc8u2f37EMpd2uWVCr25+3KnD2p++EFYt8ITZnZvjtlFXyrcq1hyk7RYF8SMqzsm2um/Hr77vesgtnKG5+Y8leT/cf0jocPt+j5yhj7TS7f254HoLgCiBTfnais/LPrb94r5oR91ZT3t+/esgpS2SMit4UvkNPWOGqSt8JuFLXry9FePWLSBmAE3KhGtrSLUS4kxl7fp+y/pF19i7FHjH259hPyouwl+iXBPg+YvBlFn45UI/JaKRGsEUDKS7z2uZXK9etdfzPX7PdpunbZYF8PauvBn9LZR+aIg99oT8xV55um3bdb1+qT1eFmrwWXg8vd7OVLoMzYuRSivWJUuPcH0iZXR2ir3KguR5Fkb42CeguAKjmKLTCeX/Zabd1k/8t6ENQ+6WK/VC5z9ldg7DkQ1pwcE6zkM2kLzX5jbwzV22Oo+ao4WZ1snj/7QxrwxFBOspT6/m/ooH+0XXnSoVd+G33jH1RqR53H9P3vlP0/ih0AYnrK3tx+uVdsU1u/O7rFLP6iVXwRzY+z8wiBKmmLVnG32rq+W20XnwNQzwn7OvVxkz2s1TZnDfYXm2FYS2AnZtfspehT4tgkzkftZrRXapVeNUeLu9FkJP2AsEf0aJd2c9HfGfsmncZY7ERM9lo4G84+7mInRgeXgjfpWDb2gsT2yYn5Kh3j2mBistoqUdp2yWQnPl9CzUly7Fdzwv6IDtMmO/38Z4P9UaP2qNHNruJ8m9idliByub0x8rgZvSSWj+ZonzfZaaxrg/HSHpjIg93pr2Xa339KTj6r7/+evO2x8Z1ekXavPSavdHYiL/mAHkXP/9h8TsJ4m/Zowj4/HuVVNq1P/67v/8AqmBWxTopip4OAnM+vDqnExrgH92Nz2tWrFvvfvk4KPxDswy4PrLTt1oP771sF91djedxFYo/l7+/9Kpa/r8by9x9dIPYvIp7dWfayEebdka8S9jJjX645JpsGO8hUkDgABDmTL79zxORwQOyQckPsKjvECDjLrk6HgB0DiOgrUbAut+7jfh27Fyt2iJnYdUB5GykgL0ivQ/69c2NHOJUdIixCV4wdJLEzZiiYVavFv0LroWWsPpxS11mxY4xSfRhp3bHVQCns5AWZMSGEsTuxwY7ZO2n1HLBD5oPUFTGQ51C4g/RdZi96j/BXdi7K+mHXJ4KdV3Cm7Adxdsh9GXOLIAyMH6M7mPfpH8ju1z6PBDuCqq8YbSNPWJeHZ+/zhSfJsQ6zGMVZeH/Ets8nsUPed7XdKTP9EoAqthltIzsSb9czZz8YXerBLpi1H2h25qkJ7EZA0OyIkqNkdszLMDpz9toSnk5h1/bWHi17ZzI7FD3EYqedno1kULNjxBHFu6r9vGMdi1dYxDFgxTqM9WgFWRzk8YD2DR4Lecyzxnducagm9owX8Zgp2KGIl7zs/Ngzntch5vNuzmmRCHLOsdMOjLivDwm7yLmhmYQjmYznRLpmyLaO0HC9lGZPYlc5NwvOfJQXuUqe2DFW8TdBR0N3dDJ2HqrF6AR4mgV4KoZzwq8mDVzNuI5Cd8j5E2u4wlfrbsfZRdtxdtTtSOcuEAh2gRnXUerOriXr/RVm93AniZ20Xw92bPU2qPIZPb73uw5w7HieVIdih4nsSvde7JQ8fGqzy5ybVckcCSFZI47pg/Ucnc/qdC7T7zqAkQEkh7Sky5gveZApNKLZUpeOUvdj2N9uxNhl3onF95EILGbsj7WBmNMicej1mBOvAxxvciM/Zp4FknQUurPO35Mdp7Ajxc7eoWZnpwxNJyQ0/2aHwd7fOgBQ92CIrfsxxsZ8WjcEjI9ccR2l7qwRTsAucm662gChUS/SPq/yO6ALaA7HcljJ1O86AADqHur/8lx5hJEvKVQIsZj7S3NbOirdqQ4nsjvPO9X3WV9CYq3dZLc6PMu/WQ4O7Vh37DqAZKf5kGTHvA3T2IVb6tw4pqPBDr8IO4J6WwWJH7O/Y6NDMibELZfI3mMdQMZHXtbdRha7GljEIpju75aOWneeUSQFjlR2MTyY7PE4j1UD2HHeXH/tbx2gF7u9RqBsCMUimPZ5W0eDXR0nZBcxBXbP8bGKWSKuGeO7sfbcxzoAkOucfE3bOIdy3Z7XYbGrcV3+snVUuqeP8SnsSKyxAZRU7yCna6jPG+Tg1oMdycsg1ecPGwnscjqsJlCiXjhg9r6XbOQYJ3y+S0dzTgtTY13YeGqzq5wbQqMhkZEm5mI+z9lV2hrTsUv35Pl82GjsHA5s/z2/8hrP4xZcZB/0mpVn9+ye3bPnkX3NSfaP1n5H2dc+cpB9zbN7ds/u2T27Z/fsnt2ze/aLw24sluKU5/zMvXVztxXGt50hHip2uR8OU9j5NqeGtFlR7LHI4WLn+0rI2GuNsSN7b72L3SoYNnZgPeca30Pne656bx0ae+ucW+wxG8/VDxW7sGHsOWGk9lLNvXWsdxrlximOPVU/dOzGninfa5SRAMf2l/leOd/0RwDEuDHGQ9ffpf3MPXRtV5tdWVf09/xbvUec530Ux/fMBQm299a1j8s4P6w+b4zvML5nLuIWtPbWmc+L5+cxRuq5AfbZ+N8hP6/z7J7ds3t2z+7Zz4U9DG8tH/uc14VjD8PvC/Ycp52DZ3fE8Insjhg+md0Nw3u7+/7u47we33FeF5sG2t89u2d3k93N8d2ze3bP7tk9u2e/eOwur1X6/5fx7J7ds3t2z+7ZPbtn9+ye3bN7ds/u2T27Z/fsnt2ze3bP7tk9u2f37J7ds3v2U7MXCqN3XGXv1Bbc9fmtZ+6yf+5qfz9yONZ5ds/u2Z1mDxyRowT2UMpbS3mVhTAD6cm+eJRXuZkZeAr7O3dyy/55lpWZ7KrQUfZOxuwHT0YPnmSn7WnZv9mLfTRj9s6drc50ZrWFp2Uf7cF+cI2zh1lJZ3qjM51Zbadn1z54Jc5e2GLsYSMrmZ3amJ3KrLbGzmnZl9TpTJy9s0CLF9++qOzXnvXo71mz35xauJkj9g158t9nXT5/9D/Gnp2yMx9/e+bjzGp7elp2FcUPp2eSx/fFpzgrYSpnVhveGeT4ztlxXiUr9itJPs/kdiOv8lZG7DOHd1J8fie/edzAfd4RMdgXQ9dEswfOiWZ3Ujy7Z/fsnt0R9ol/uSrlADgr5f8DKm9CSZy6uFkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDYtMTdUMDI6NDc6MTYrMDA6MDB2PLbDAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA2LTE3VDAyOjQ3OjE2KzAwOjAwB2EOfwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=" alt="node-interactive-env"></p><p>在 Node.js 交互式环境下，我们可以输入 JavaScript 代码并立刻执行。</p><p>此外，在命令行模式运行.js 文件和在 Node.js 交互式环境下直接运行 JavaScript 代码有所不同。Node.js 交互式环境会把每一行 JavaScript 代码的结果自动打印出来，但是，直接运行 JavaScript 文件却不会。</p><p>例如，在 Node.js 交互式环境下，输入:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">100</span> + <span class="token number">200</span> + <span class="token number">300</span><span class="token punctuation">;</span>\n<span class="token number">600</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>直接可以看到结果 600。</p><p>但是，写一个 <code>calc.js</code> 的文件，内容如下:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">100</span> <span class="token operator">+</span> <span class="token number">200</span> <span class="token operator">+</span> <span class="token number">300</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后在命令行模式下执行:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Workspace<span class="token operator">&gt;</span>node calc.js\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>发现什么输出都没有。</p><p>这是正常的。想要输出结果，必须自己用 <code>console.log()</code> 打印出来。把 <code>calc.js</code> 改造一下:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">+</span> <span class="token number">200</span> <span class="token operator">+</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再执行，就可以看到结果:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Workspace<span class="token operator">&gt;</span>node calc.js\n<span class="token number">600</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用严格模式" tabindex="-1"><a class="header-anchor" href="#使用严格模式" aria-hidden="true">#</a> 使用严格模式</h2><p>如果在 JavaScript 文件开头写上 <code>&#39;use strict&#39;;</code>，那么 Node.js 在执行该 JavaScript 时将使用严格模式。但是，在服务器环境下，如果有很多 JavaScript 文件，每个文件都写上 <code>&#39;use strict&#39;;</code> 很麻烦。我们可以给 Node.js 传递一个参数，让 Node.js 直接为所有 js 文件开启严格模式:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">node</span> --use_strict calc.js\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>后续代码，如无特殊说明，我们都会直接给 Node.js 传递 <code>--use_strict</code> 参数来开启严格模式。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>用文本编辑器写 JavaScript 程序，然后保存为后缀为 <code>.js</code> 的文件，就可以用 Node.js 直接运行这个程序了。</p><p>Node.js 的交互模式和直接运行 <code>.js</code> 文件有什么区别呢?</p><p>直接输入 Node.js 进入交互模式，相当于启动了 Node.js 解释器，但是等待您一行一行地输入源代码，每输入一行就执行一行。</p><p>直接运行 <code>node hello.js</code> 文件相当于启动了 Node.js 解释器，然后一次性把 <code>hello.js</code> 文件的源代码给执行了，您是没有机会以交互的方式输入源代码的。</p><p>在编写 JavaScript 代码的时候，完全可以一边在文本编辑器里写代码，一边开一个 Node.js 交互式命令窗口，在写代码的过程中，把部分代码粘到命令行去验证，事半功倍! 前提是得有个 27 寸的超大显示器!</p>',42),A={},m=(0,s(13860).Z)(A,[["render",function(e,n){const s=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[d,t,(0,a.kq)(" more "),o,(0,a._)("div",c,[p,l,(0,a._)("ul",null,[(0,a._)("li",null,[i,(0,a.Wm)(s,{to:"/code/windows/notepad.html"},{default:(0,a.w5)((()=>[r])),_:1})])])]),u])}]])},13860:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}},25156:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-833997ce","path":"/code/node-js/program.html","title":"第一个 Node 程序","lang":"zh-CN","frontmatter":{"title":"第一个 Node 程序","icon":"shell","category":["Node.js"],"tag":["Node.js","软件"],"summary":"在前面的所有章节中，我们编写的 JavaScript 代码都是在浏览器中运行的，因此，我们可以直接在浏览器中敲代码，然后直接运行。\\n从本章开始，我们编写的 JavaScript 代码将不能在浏览器环境中执行了，而是在 Node.js 环境中执行，因此，JavaScript 代码将直接在您的计算机上以命令行的方式运行，所以，我们要先选择一个文本编辑器来编写 JavaScript 代码，并且把它保存到本地硬盘的某个目录，才能够执行。\\n","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/node-js/program.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"第一个 Node 程序"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://0808200.xyz/"}],["meta",{"property":"og:updated_time","content":"2022-06-29T10:08:18.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"第一个 Node 程序"}],["meta",{"property":"article:tag","content":"Node.js"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2022-06-29T10:08:18.000Z"}]]},"excerpt":"<p>在前面的所有章节中，我们编写的 JavaScript 代码都是在浏览器中运行的，因此，我们可以直接在浏览器中敲代码，然后直接运行。</p>\\n<p>从本章开始，我们编写的 JavaScript 代码将不能在浏览器环境中执行了，而是在 Node.js 环境中执行，因此，JavaScript 代码将直接在您的计算机上以命令行的方式运行，所以，我们要先选择一个文本编辑器来编写 JavaScript 代码，并且把它保存到本地硬盘的某个目录，才能够执行。</p>\\n","headers":[{"level":2,"title":"命令行模式和 Node.js 交互模式","slug":"命令行模式和-node-js-交互模式","children":[]},{"level":2,"title":"使用严格模式","slug":"使用严格模式","children":[]},{"level":2,"title":"小结","slug":"小结","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656497298000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":2}]},"readingTime":{"minutes":3.91,"words":1173},"filePathRelative":"code/node-js/program.md","localizedDate":"2022年6月27日"}')}}]);