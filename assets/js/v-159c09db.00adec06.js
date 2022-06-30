"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[93092],{72049:(s,a,n)=>{n.r(a),n.d(a,{default:()=>i});var e=n(78e3);const t=(0,e._)("p",null,"一个脚本语言少不了与用户进行交互，就一定涉及到输入输出。",-1),l=(0,e.uE)('<h2 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h2><p>用 <code>print()</code> 在括号中加上字符串，就可以向屏幕上输出指定的文字。比如输出 <code>&#39;hello, world&#39;</code>，用代码实现如下:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello, world&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>print()</code> 函数也可以接受多个字符串，用逗号 “,” 隔开，就可以连成一串输出:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;The quick brown fox&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jumps over&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;the lazy dog&#39;</span><span class="token punctuation">)</span>\nThe quick brown fox jumps over the lazy dog\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>print()</code> 会依次打印每个字符串，遇到逗号“,”会输出一个空格。</p><p><code>print()</code> 也可以打印整数，或者计算结果:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>\n<span class="token number">300</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">+</span> <span class="token number">200</span><span class="token punctuation">)</span>\n<span class="token number">300</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，我们可以把计算 <code>100 + 200</code> 的结果打印得更漂亮一点:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;100 + 200 =&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">200</span><span class="token punctuation">)</span>\n<span class="token number">100</span> <span class="token operator">+</span> <span class="token number">200</span> <span class="token operator">=</span> <span class="token number">300</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，对于 <code>100 + 200</code>，Python 解释器自动计算出结果 300，但是，<code>&#39;100 + 200 =&#39;</code> 是字符串而非数学公式，Python 把它视为字符串，请自行解释上述打印结果。</p><h2 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入</h2><p>如果需要用户从电脑输入一些字符，Python 提供了一个 <code>input()</code>，可以让用户输入字符串，并存放到一个变量里。比如输入用户的名字:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nMr<span class="token punctuation">.</span>Googxh\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当您输入 <code>name = input()</code> 并按下回车后，Python 交互式命令行就在等待您的输入了。这时，您可以输入任意字符，然后按回车后完成输入。</p><p>输入完成后，不会有任何提示，Python 交互式命令行又回到 <code>&gt;&gt;&gt;</code> 状态了。那我们刚才输入的内容到哪去了? 答案是存放到 <code>name</code> 变量里了。可以直接输入 <code>name</code> 查看变量内容:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> name\n<span class="token string">&#39;Mr.Googxh&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',17),p=(0,e._)("div",{class:"custom-container tip"},[(0,e._)("p",{class:"custom-container-title"},"变量"),(0,e._)("p",null,"请回忆初中数学所学的代数基础知识:"),(0,e._)("p",null,[(0,e.Uk)("设正方形的边长为 "),(0,e._)("span",{class:"katex"},[(0,e._)("span",{class:"katex-mathml"},[(0,e._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,e._)("semantics",null,[(0,e._)("mrow",null,[(0,e._)("mi",null,"a")]),(0,e._)("annotation",{encoding:"application/x-tex"},"a")])])]),(0,e._)("span",{class:"katex-html","aria-hidden":"true"},[(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.4306em"}}),(0,e._)("span",{class:"mord mathnormal"},"a")])])]),(0,e.Uk)(" ，则正方形的面积为 "),(0,e._)("span",{class:"katex"},[(0,e._)("span",{class:"katex-mathml"},[(0,e._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,e._)("semantics",null,[(0,e._)("mrow",null,[(0,e._)("mi",null,"a"),(0,e._)("mo",null,"×"),(0,e._)("mi",null,"a")]),(0,e._)("annotation",{encoding:"application/x-tex"},"a \\times a")])])]),(0,e._)("span",{class:"katex-html","aria-hidden":"true"},[(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),(0,e._)("span",{class:"mord mathnormal"},"a"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,e._)("span",{class:"mbin"},"×"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.4306em"}}),(0,e._)("span",{class:"mord mathnormal"},"a")])])]),(0,e.Uk)(" 。把边长 "),(0,e._)("span",{class:"katex"},[(0,e._)("span",{class:"katex-mathml"},[(0,e._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,e._)("semantics",null,[(0,e._)("mrow",null,[(0,e._)("mi",null,"a")]),(0,e._)("annotation",{encoding:"application/x-tex"},"a")])])]),(0,e._)("span",{class:"katex-html","aria-hidden":"true"},[(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.4306em"}}),(0,e._)("span",{class:"mord mathnormal"},"a")])])]),(0,e.Uk)(" 看做一个变量，我们就可以根据 "),(0,e._)("span",{class:"katex"},[(0,e._)("span",{class:"katex-mathml"},[(0,e._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,e._)("semantics",null,[(0,e._)("mrow",null,[(0,e._)("mi",null,"a")]),(0,e._)("annotation",{encoding:"application/x-tex"},"a")])])]),(0,e._)("span",{class:"katex-html","aria-hidden":"true"},[(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.4306em"}}),(0,e._)("span",{class:"mord mathnormal"},"a")])])]),(0,e.Uk)(" 的值计算正方形的面积，比如:")]),(0,e._)("p",null,[(0,e.Uk)("若 "),(0,e._)("span",{class:"katex"},[(0,e._)("span",{class:"katex-mathml"},[(0,e._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,e._)("semantics",null,[(0,e._)("mrow",null,[(0,e._)("mi",null,"a"),(0,e._)("mo",null,"="),(0,e._)("mn",null,"2")]),(0,e._)("annotation",{encoding:"application/x-tex"},"a = 2")])])]),(0,e._)("span",{class:"katex-html","aria-hidden":"true"},[(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.4306em"}}),(0,e._)("span",{class:"mord mathnormal"},"a"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),(0,e._)("span",{class:"mrel"},"="),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.6444em"}}),(0,e._)("span",{class:"mord"},"2")])])]),(0,e.Uk)(" ，则面积为 "),(0,e._)("span",{class:"katex"},[(0,e._)("span",{class:"katex-mathml"},[(0,e._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,e._)("semantics",null,[(0,e._)("mrow",null,[(0,e._)("mi",null,"a"),(0,e._)("mo",null,"×"),(0,e._)("mi",null,"a"),(0,e._)("mo",null,"="),(0,e._)("mn",null,"2"),(0,e._)("mo",null,"×"),(0,e._)("mn",null,"2"),(0,e._)("mo",null,"="),(0,e._)("mn",null,"4")]),(0,e._)("annotation",{encoding:"application/x-tex"},"a \\times a = 2 \\times 2 = 4")])])]),(0,e._)("span",{class:"katex-html","aria-hidden":"true"},[(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),(0,e._)("span",{class:"mord mathnormal"},"a"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,e._)("span",{class:"mbin"},"×"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.4306em"}}),(0,e._)("span",{class:"mord mathnormal"},"a"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),(0,e._)("span",{class:"mrel"},"="),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,e._)("span",{class:"mord"},"2"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,e._)("span",{class:"mbin"},"×"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.6444em"}}),(0,e._)("span",{class:"mord"},"2"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),(0,e._)("span",{class:"mrel"},"="),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.6444em"}}),(0,e._)("span",{class:"mord"},"4")])])]),(0,e.Uk)(" ；")]),(0,e._)("p",null,[(0,e.Uk)("若 "),(0,e._)("span",{class:"katex"},[(0,e._)("span",{class:"katex-mathml"},[(0,e._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,e._)("semantics",null,[(0,e._)("mrow",null,[(0,e._)("mi",null,"a"),(0,e._)("mo",null,"="),(0,e._)("mn",null,"3.5")]),(0,e._)("annotation",{encoding:"application/x-tex"},"a = 3.5")])])]),(0,e._)("span",{class:"katex-html","aria-hidden":"true"},[(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.4306em"}}),(0,e._)("span",{class:"mord mathnormal"},"a"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),(0,e._)("span",{class:"mrel"},"="),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.6444em"}}),(0,e._)("span",{class:"mord"},"3.5")])])]),(0,e.Uk)("，则面积为 "),(0,e._)("span",{class:"katex"},[(0,e._)("span",{class:"katex-mathml"},[(0,e._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,e._)("semantics",null,[(0,e._)("mrow",null,[(0,e._)("mi",null,"a"),(0,e._)("mo",null,"×"),(0,e._)("mi",null,"a"),(0,e._)("mo",null,"="),(0,e._)("mn",null,"3.5"),(0,e._)("mo",null,"×"),(0,e._)("mn",null,"3.5"),(0,e._)("mo",null,"="),(0,e._)("mn",null,"12.25")]),(0,e._)("annotation",{encoding:"application/x-tex"},"a \\times a = 3.5 \\times 3.5 = 12.25")])])]),(0,e._)("span",{class:"katex-html","aria-hidden":"true"},[(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),(0,e._)("span",{class:"mord mathnormal"},"a"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,e._)("span",{class:"mbin"},"×"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.4306em"}}),(0,e._)("span",{class:"mord mathnormal"},"a"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),(0,e._)("span",{class:"mrel"},"="),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,e._)("span",{class:"mord"},"3.5"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,e._)("span",{class:"mbin"},"×"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.6444em"}}),(0,e._)("span",{class:"mord"},"3.5"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),(0,e._)("span",{class:"mrel"},"="),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.6444em"}}),(0,e._)("span",{class:"mord"},"12.25")])])]),(0,e.Uk)(" 。")]),(0,e._)("p",null,[(0,e.Uk)("在计算机程序中，变量不仅可以为整数或浮点数，还可以是字符串，因此，"),(0,e._)("code",null,"name"),(0,e.Uk)(" 作为一个变量就是一个字符串。")]),(0,e._)("p",null,[(0,e.Uk)("要打印出 "),(0,e._)("code",null,"name"),(0,e.Uk)(" 变量的内容，除了直接写 "),(0,e._)("code",null,"name"),(0,e.Uk)(" 然后按回车外，还可以用 "),(0,e._)("code",null,"print()"),(0,e.Uk)(" 函数:")]),(0,e._)("div",{class:"language-python ext-py line-numbers-mode"},[(0,e._)("pre",{class:"language-python"},[(0,e._)("code",null,[(0,e._)("span",{class:"token operator"},">>"),(0,e._)("span",{class:"token operator"},">"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"print"),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("name"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\nMr"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("Googxh\n")])]),(0,e._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"})])])],-1),o=(0,e.uE)('<p>有了输入和输出，我们就可以把上次打印 <code>&#39;hello, world&#39;</code> 的程序改成有点意义的程序了:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello,&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上面的程序，第一行代码会让用户输入任意字符作为自己的名字，然后存入 <code>name</code> 变量中；第二行代码会根据用户的名字向用户说 <code>hello</code>，比如输入 <code>Mr.Googxh</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>C:/Workspace<span class="token operator">&gt;</span> python hello.py\nMr.Googxh\nhello, Mr.Googxh\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是程序运行的时候，没有任何提示信息告诉用户:“嘿，赶紧输入您的名字”，这样显得很不友好。所以 <code>input()</code> 可以让您显示一个字符串来提示用户，于是我们把代码改成:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;please enter your name: &#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello,&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再次运行这个程序，您会发现，程序一运行，会首先打印出 <code>please enter your name:</code>，这样，用户就可以根据提示，输入名字后，得到 <code>hello, xxx</code> 的输出:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>C:/Workspace<span class="token operator">&gt;</span> python hello.py\nplease enter your name: Mr.Googxh\nhello, Mr.Googxh\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每次运行该程序，根据用户输入的不同，输出结果也会不同。</p><p>在命令行下，输入和输出就是这么简单。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>任何计算机程序都是为了执行一个特定的任务，有了输入，用户才能告诉计算机程序所需的信息，有了输出，程序运行后才能告诉用户任务的结果。</p><p>输入是 Input，输出是 Output，因此，我们把输入输出统称为 Input/Output，或者简写为 IO。</p><p><code>input()</code> 和 <code>print()</code> 是在命令行下面最基本的输入和输出，但是，用户也可以通过其他更高级的图形界面完成输入和输出，比如，在网页上的一个文本框输入自己的名字，点击“确定”后在网页上看到输出信息。</p>',14),c={},i=(0,n(13860).Z)(c,[["render",function(s,a){return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e.kq)(" more "),l,p,o])}]])},13860:(s,a)=>{a.Z=(s,a)=>{const n=s.__vccOpts||s;for(const[s,e]of a)n[s]=e;return n}},71461:(s,a,n)=>{n.r(a),n.d(a,{data:()=>e});const e=JSON.parse('{"key":"v-159c09db","path":"/code/language/python/guide/io.html","title":"输入和输出","lang":"zh-CN","frontmatter":{"title":"输入和输出","icon":"IO","author":"廖雪峰","date":"2020-05-20T00:00:00.000Z","category":["Python"],"summary":"一个脚本语言少不了与用户进行交互，就一定涉及到输入输出。\\n","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/language/python/guide/io.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"输入和输出"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-29T10:08:18.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-29T10:08:18.000Z"}]]},"excerpt":"<p>一个脚本语言少不了与用户进行交互，就一定涉及到输入输出。</p>\\n","headers":[{"level":2,"title":"输出","slug":"输出","children":[]},{"level":2,"title":"输入","slug":"输入","children":[]},{"level":2,"title":"小结","slug":"小结","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656497298000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":2}]},"readingTime":{"minutes":3.49,"words":1048},"filePathRelative":"code/language/python/guide/io.md","localizedDate":"2020年5月20日"}')}}]);