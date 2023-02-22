"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[86623],{79880:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var e=a(60329);const t=(0,e._)("p",null,[(0,e.Uk)("在 Python 中，定义一个函数要使用 "),(0,e._)("code",null,"def"),(0,e.Uk)(" 语句，依次写出函数名、括号、括号中的参数和冒号 "),(0,e._)("code",null,":"),(0,e.Uk)("，然后，在缩进块中编写函数体，函数的返回值用 "),(0,e._)("code",null,"return"),(0,e.Uk)(" 语句返回。")],-1),p=(0,e.uE)('<p>我们以自定义一个求绝对值的 <code>my_abs</code> 函数为例:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>\n\n<span class="token keyword">def</span> <span class="token function">my_abs</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> x <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> x\n    <span class="token keyword">else</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> <span class="token operator">-</span>x\n\n<span class="token keyword">print</span><span class="token punctuation">(</span>my_abs<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请自行测试并调用 <code>my_abs</code> 看看返回结果是否正确。</p><p>请注意，函数体内部的语句在执行时，一旦执行到 <code>return</code> 时，函数就执行完毕，并将结果返回。因此，函数内部通过条件判断和循环可以实现非常复杂的逻辑。</p><p>如果没有 <code>return</code> 语句，函数执行完毕后也会返回结果，只是结果为 <code>None</code>。<code>return None</code> 可以简写为 <code>return</code>。</p><p>在 Python 交互环境中定义函数时，注意 Python 会出现 <code>...</code> 的提示。函数定义结束后需要按两次回车重新回到<code>&gt;&gt;&gt;</code> 提示符下:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>┌────────────────────────────────────────────────────────┐\n│Command Prompt - python                           - □ x │\n├────────────────────────────────────────────────────────┤\n│&gt;&gt;&gt; def my_abs(x):                                      │\n│...     if x &gt;= 0:                                      │\n│...         return x                                    │\n│...     else:                                           │\n│...         return -x                                   │\n│...                                                     │\n│&gt;&gt;&gt; my_abs(-9)                                          │\n│9                                                       │\n│&gt;&gt;&gt; _                                                   │\n│                                                        │\n│                                                        │\n└────────────────────────────────────────────────────────┘\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您已经把 <code>my_abs()</code> 的函数定义保存为 <code>abstest.py</code> 文件了，那么，可以在该文件的当前目录下启动 Python 解释器，用 <code>from abstest import my_abs</code> 来导入 <code>my_abs()</code> 函数，注意 <code>abstest</code> 是文件名(不含 .py 扩展名):</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>┌────────────────────────────────────────────────────────┐\n│Command Prompt - python                           - □ x │\n├────────────────────────────────────────────────────────┤\n│&gt;&gt;&gt; from abstest import my_abs                          │\n│&gt;&gt;&gt; my_abs(-9)                                          │\n│9                                                       │\n│&gt;&gt;&gt; _                                                   │\n│                                                        │\n│                                                        │\n│                                                        │\n│                                                        │\n│                                                        │\n│                                                        │\n│                                                        │\n└────────────────────────────────────────────────────────┘\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',9),o=(0,e._)("code",null,"import",-1),c=(0,e.uE)('<h2 id="空函数" tabindex="-1"><a class="header-anchor" href="#空函数" aria-hidden="true">#</a> 空函数</h2><p>如果想定义一个什么事也不做的空函数，可以用 pass 语句:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">nop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">pass</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>pass 语句什么都不做，那有什么用? 实际上 pass 可以用来作为占位符，比如现在还没想好怎么写函数的代码，就可以先放一个 pass，让代码能运行起来。</p><p>pass 还可以用在其他语句里，比如:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>\n    <span class="token keyword">pass</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>缺少了 pass，代码运行就会有语法错误。</p><h2 id="参数检查" tabindex="-1"><a class="header-anchor" href="#参数检查" aria-hidden="true">#</a> 参数检查</h2><p>调用函数时，如果参数个数不对，Python 解释器会自动检查出来，并抛出 <code>TypeError</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_abs<span class="token punctuation">(</span><span class="token number">1</span>, <span class="token number">2</span><span class="token punctuation">)</span>\nTraceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:\n  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>\nTypeError: my_abs<span class="token punctuation">(</span><span class="token punctuation">)</span> takes <span class="token number">1</span> positional argument but <span class="token number">2</span> were given\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果参数类型不对，Python 解释器就无法帮我们检查。试试 <code>my_abs</code> 和内置函数 abs 的差别:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_abs<span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>\nTraceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:\n  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>\n  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">2</span>, <span class="token keyword">in</span> my_abs\nTypeError: unorderable types: str<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> int<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> abs<span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>\nTraceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:\n  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>\nTypeError: bad operand <span class="token builtin class-name">type</span> <span class="token keyword">for</span> abs<span class="token punctuation">(</span><span class="token punctuation">)</span>: <span class="token string">&#39;str&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当传入了不恰当的参数时，内置函数 <code>abs</code> 会检查出参数错误，而我们定义的 <code>my_abs</code> 没有参数检查，会导致 <code>if</code> 语句出错，出错信息和 <code>abs</code> 不一样。所以，这个函数定义不够完善。</p><p>让我们修改一下 <code>my_abs</code> 的定义，对参数类型做检查，只允许整数和浮点数类型的参数。数据类型检查可以用内置函数 <code>isinstance()</code> 实现:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">my_abs</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">float</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">raise</span> TypeError<span class="token punctuation">(</span><span class="token string">&#39;bad operand type&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">if</span> x <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> x\n    <span class="token keyword">else</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> <span class="token operator">-</span>x\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加了参数检查后，如果传入错误的参数类型，函数就可以抛出一个错误:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_abs<span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>\nTraceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:\n  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>\n  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">3</span>, <span class="token keyword">in</span> my_abs\nTypeError: bad operand <span class="token builtin class-name">type</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>错误和异常处理将在后续讲到。</p><h2 id="返回多个值" tabindex="-1"><a class="header-anchor" href="#返回多个值" aria-hidden="true">#</a> 返回多个值</h2><p>函数可以返回多个值吗? 答案是肯定的。</p><p>比如在游戏中经常需要从一个点移动到另一个点，给出坐标、位移和角度，就可以计算出新的坐标:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> math\n\n<span class="token keyword">def</span> <span class="token function">move</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> step<span class="token punctuation">,</span> angle<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    nx <span class="token operator">=</span> x <span class="token operator">+</span> step <span class="token operator">*</span>math<span class="token punctuation">.</span>cos<span class="token punctuation">(</span>angle<span class="token punctuation">)</span>\nny <span class="token operator">=</span> y <span class="token operator">-</span> step<span class="token operator">*</span> math<span class="token punctuation">.</span>sin<span class="token punctuation">(</span>angle<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> nx<span class="token punctuation">,</span> ny\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>import math</code> 语句表示导入 <code>math</code> 包，并允许后续代码引用 <code>math</code> 包里的 <code>sin</code>、<code>cos</code> 等函数。</p><p>然后，我们就可以同时获得返回值:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x<span class="token punctuation">,</span> y <span class="token operator">=</span> move<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> math<span class="token punctuation">.</span>pi <span class="token operator">/</span> <span class="token number">6</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>\n<span class="token number">151.96152422706632</span> <span class="token number">70.0</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但其实这只是一种假象，Python 函数返回的仍然是单一值:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> r <span class="token operator">=</span> move<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> math<span class="token punctuation">.</span>pi <span class="token operator">/</span> <span class="token number">6</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>\n<span class="token punctuation">(</span><span class="token number">151.96152422706632</span><span class="token punctuation">,</span> <span class="token number">70.0</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原来返回值是一个 tuple! 但是，在语法上，返回一个 tuple 可以省略括号，而多个变量可以同时接收一个 tuple，按位置赋给对应的值，所以，Python 的函数返回多值其实就是返回一个 tuple，但写起来更方便。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>定义函数时，需要确定函数名和参数个数；</p><p>如果有必要，可以先对参数的数据类型做检查；</p><p>函数体内部可以用 <code>return</code> 随时返回函数结果；</p><p>函数执行完毕也没有 <code>return</code> 语句时，自动 <code>return None</code>。</p><p>函数可以同时返回多个值，但其实就是一个 tuple。</p>',34),l={},i=(0,a(13860).Z)(l,[["render",function(n,s){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e.kq)(" more "),p,(0,e._)("p",null,[o,(0,e.Uk)(" 的用法在后续 "),(0,e.Wm)(a,{to:"/code/language/python/module/"},{default:(0,e.w5)((()=>[(0,e.Uk)("模块")])),_:1}),(0,e.Uk)(" 一节中会详细介绍。")]),c])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},70630:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-fc30e528","path":"/code/language/python/function/define.html","title":"定义函数","lang":"zh-CN","frontmatter":{"title":"定义函数","icon":"define","author":"廖雪峰","date":"2020-05-26T00:00:00.000Z","category":["Python"],"summary":"在 Python 中，定义一个函数要使用 def 语句，依次写出函数名、括号、括号中的参数和冒号 :，然后，在缩进块中编写函数体，函数的返回值用 return 语句返回。\\n","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/language/python/function/define.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"定义函数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"<p>在 Python 中，定义一个函数要使用 <code v-pre>def</code> 语句，依次写出函数名、括号、括号中的参数和冒号 <code v-pre>:</code>，然后，在缩进块中编写函数体，函数的返回值用 <code v-pre>return</code> 语句返回。</p>\\n","headers":[{"level":2,"title":"空函数","slug":"空函数","children":[]},{"level":2,"title":"参数检查","slug":"参数检查","children":[]},{"level":2,"title":"返回多个值","slug":"返回多个值","children":[]},{"level":2,"title":"小结","slug":"小结","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":3.94,"words":1181},"filePathRelative":"code/language/python/function/define.md","localizedDate":"2020年5月26日"}')}}]);