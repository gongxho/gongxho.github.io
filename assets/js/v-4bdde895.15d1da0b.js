"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[51715],{62707:(n,a,s)=>{s.r(a),s.d(a,{default:()=>c});var e=s(78e3);const t=(0,e._)("p",null,"高阶函数英文叫 Higher-order function。什么是高阶函数? 把函数作为参数传入，这样的函数称为高阶函数。",-1),o=(0,e.uE)('<p>我们以实际代码为例子，一步一步深入概念。</p><h2 id="变量可以指向函数" tabindex="-1"><a class="header-anchor" href="#变量可以指向函数" aria-hidden="true">#</a> 变量可以指向函数</h2><p>以 Python 内置的求绝对值的函数 <code>abs()</code> 为例，调用该函数用以下代码:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span>\n<span class="token number">10</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，如果只写 <code>abs</code> 呢?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">abs</span>\n<span class="token operator">&lt;</span>built<span class="token operator">-</span><span class="token keyword">in</span> function <span class="token builtin">abs</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可见，<code>abs(-10)</code> 是函数调用，而 <code>abs</code> 是函数本身。</p><p>要获得函数调用结果，我们可以把结果赋值给变量:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x <span class="token operator">=</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x\n<span class="token number">10</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，如果把函数本身赋值给变量呢?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f <span class="token operator">=</span> <span class="token builtin">abs</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f\n<span class="token operator">&lt;</span>built<span class="token operator">-</span><span class="token keyword">in</span> function <span class="token builtin">abs</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论: 函数本身也可以赋值给变量，即: 变量可以指向函数。</p><p>如果一个变量指向了一个函数，那么，可否通过该变量来调用这个函数? 用代码验证一下:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f <span class="token operator">=</span> <span class="token builtin">abs</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span>\n<span class="token number">10</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功! 说明变量 f 现在已经指向了 <code>abs</code> 函数本身。直接调用 <code>abs()</code> 函数和调用变量 <code>f()</code> 完全相同。</p><h2 id="函数名也是变量" tabindex="-1"><a class="header-anchor" href="#函数名也是变量" aria-hidden="true">#</a> 函数名也是变量</h2><p>那么函数名是什么呢? 函数名其实就是指向函数的变量! 对于 <code>abs()</code> 这个函数，完全可以把函数名 <code>abs</code> 看成变量，它指向一个可以计算绝对值的函数!</p><p>如果把 <code>abs</code> 指向其他对象，会有什么情况发生?</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> abs <span class="token operator">=</span> <span class="token number">10</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> abs<span class="token punctuation">(</span>-10<span class="token punctuation">)</span>\nTraceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:\n  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>\nTypeError: <span class="token string">&#39;int&#39;</span> object is not callable\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把 <code>abs</code> 指向 <code>10</code> 后，就无法通过 <code>abs(-10)</code> 调用该函数了! 因为 <code>abs</code> 这个变量已经不指向求绝对值函数而是指向一个整数 10!</p><p>当然实际代码绝对不能这么写，这里是为了说明函数名也是变量。要恢复 <code>abs</code> 函数，请重启 Python 交互环境。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>由于 abs 函数实际上是定义在 <code>import builtins</code> 模块中的，所以要让修改 <code>abs</code> 变量的指向在其它模块也生效，要用 <code>import builtins; builtins.abs = 10</code>。</p></div><h2 id="传入函数" tabindex="-1"><a class="header-anchor" href="#传入函数" aria-hidden="true">#</a> 传入函数</h2><p>既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。</p><p>一个最简单的高阶函数:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> f<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> f<span class="token punctuation">(</span>y<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们调用 <code>add(-5, 6, abs)</code> 时，参数 <code>x</code>，<code>y</code> 和 <code>f</code> 分别接收 <code>-5</code>，<code>6</code> 和 <code>abs</code>，根据函数定义，我们可以推导计算过程为:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">5</span>\ny <span class="token operator">=</span> <span class="token number">6</span>\nf <span class="token operator">=</span> <span class="token builtin">abs</span>\nf<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> f<span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">11</span>\n<span class="token keyword">return</span> <span class="token number">11</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写高阶函数，就是让函数的参数能够接收别的函数。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>把函数作为参数传入，这样的函数称为高阶函数，函数式编程就是指这种高度抽象的编程范式</p>',31),p={},c=(0,s(13860).Z)(p,[["render",function(n,a){return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e.kq)(" more "),o])}]])},13860:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}},15138:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e=JSON.parse('{"key":"v-4bdde895","path":"/code/language/python/functional-programming/high-order-function/intro.html","title":"介绍","lang":"zh-CN","frontmatter":{"title":"介绍","icon":"info","author":"廖雪峰","date":"2020-05-31T00:00:00.000Z","category":["Python"],"summary":"高阶函数英文叫 Higher-order function。什么是高阶函数? 把函数作为参数传入，这样的函数称为高阶函数。\\n","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/language/python/functional-programming/high-order-function/intro.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"介绍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"<p>高阶函数英文叫 Higher-order function。什么是高阶函数? 把函数作为参数传入，这样的函数称为高阶函数。</p>\\n","headers":[{"level":2,"title":"变量可以指向函数","slug":"变量可以指向函数","children":[]},{"level":2,"title":"函数名也是变量","slug":"函数名也是变量","children":[]},{"level":2,"title":"传入函数","slug":"传入函数","children":[]},{"level":2,"title":"小结","slug":"小结","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":2.37,"words":711},"filePathRelative":"code/language/python/functional-programming/high-order-function/intro.md","localizedDate":"2020年5月31日"}')}}]);