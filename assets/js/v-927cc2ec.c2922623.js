"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[76217],{18793:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var e=a(78e3);const t=(0,e._)("p",null,[(0,e.Uk)("循环语句用于重复执行某个操作，它有多种形式，JavaScript 的循环有两种: "),(0,e._)("code",null,"while"),(0,e.Uk)(" 循环和 "),(0,e._)("code",null,"for"),(0,e.Uk)(" 循环。")],-1),p=(0,e._)("p",null,[(0,e.Uk)("试设我们想要计算 "),(0,e._)("span",{class:"katex"},[(0,e._)("span",{class:"katex-mathml"},[(0,e._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,e._)("semantics",null,[(0,e._)("mrow",null,[(0,e._)("mn",null,"1"),(0,e._)("mo",null,"+"),(0,e._)("mn",null,"2"),(0,e._)("mo",null,"+"),(0,e._)("mn",null,"3")]),(0,e._)("annotation",{encoding:"application/x-tex"},"1 + 2 + 3")])])]),(0,e._)("span",{class:"katex-html","aria-hidden":"true"},[(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,e._)("span",{class:"mord"},"1"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,e._)("span",{class:"mbin"},"+"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,e._)("span",{class:"mord"},"2"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,e._)("span",{class:"mbin"},"+"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.6444em"}}),(0,e._)("span",{class:"mord"},"3")])])]),(0,e.Uk)("，我们可以直接写表达式:")],-1),o=(0,e.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',1),c=(0,e._)("p",null,[(0,e.Uk)("要计算 "),(0,e._)("span",{class:"katex"},[(0,e._)("span",{class:"katex-mathml"},[(0,e._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,e._)("semantics",null,[(0,e._)("mrow",null,[(0,e._)("mn",null,"1"),(0,e._)("mo",null,"+"),(0,e._)("mn",null,"2"),(0,e._)("mo",null,"+"),(0,e._)("mo",null,"⋯"),(0,e._)("mo",null,"+"),(0,e._)("mn",null,"10")]),(0,e._)("annotation",{encoding:"application/x-tex"},"1 + 2 + \\dots + 10")])])]),(0,e._)("span",{class:"katex-html","aria-hidden":"true"},[(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,e._)("span",{class:"mord"},"1"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,e._)("span",{class:"mbin"},"+"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,e._)("span",{class:"mord"},"2"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,e._)("span",{class:"mbin"},"+"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),(0,e._)("span",{class:"minner"},"⋯"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,e._)("span",{class:"mbin"},"+"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.6444em"}}),(0,e._)("span",{class:"mord"},"10")])])]),(0,e.Uk)("，勉强也能写出来。")],-1),l=(0,e._)("p",null,[(0,e.Uk)("但是，要计算 "),(0,e._)("span",{class:"katex"},[(0,e._)("span",{class:"katex-mathml"},[(0,e._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,e._)("semantics",null,[(0,e._)("mrow",null,[(0,e._)("mn",null,"1"),(0,e._)("mo",null,"+"),(0,e._)("mn",null,"2"),(0,e._)("mo",null,"+"),(0,e._)("mo",null,"⋯"),(0,e._)("mo",null,"+"),(0,e._)("mn",null,"10000")]),(0,e._)("annotation",{encoding:"application/x-tex"},"1 + 2 + \\dots + 10000")])])]),(0,e._)("span",{class:"katex-html","aria-hidden":"true"},[(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,e._)("span",{class:"mord"},"1"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,e._)("span",{class:"mbin"},"+"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,e._)("span",{class:"mord"},"2"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,e._)("span",{class:"mbin"},"+"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),(0,e._)("span",{class:"minner"},"⋯"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,e._)("span",{class:"mbin"},"+"),(0,e._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,e._)("span",{class:"base"},[(0,e._)("span",{class:"strut",style:{height:"0.6444em"}}),(0,e._)("span",{class:"mord"},"10000")])])]),(0,e.Uk)("，直接写表达式就不可能了。")],-1),i=(0,e.uE)('<p>为了让计算机能计算成千上万次的重复运算，我们就需要循环语句。</p><h2 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环" aria-hidden="true">#</a> while 循环</h2><h3 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h3><p><code>while</code> 语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span>\n  语句<span class="token punctuation">;</span>\n<span class="token comment">// 或者</span>\n<span class="token keyword">while</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span> 语句<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>while</code> 语句的循环条件是一个表达式，必须放在圆括号中。代码块部分，如果只有一条语句，可以省略大括号，否则就必须加上大括号。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  语句<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里是一个例子<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>。</p><blockquote><p><code>for</code> 循环在已知循环的初始和结束条件时非常有用。而上述忽略了条件的 <code>for</code> 循环容易让人看不清循环的逻辑，此时用 <code>while</code> 循环更佳。</p></blockquote><h3 id="do-while" tabindex="-1"><a class="header-anchor" href="#do-while" aria-hidden="true">#</a> do ... while</h3><p>while 循环还包含了 <code>do { ... } while()</code> 循环，它和 <code>while</code> 循环的唯一区别在于，不是在每次循环开始的时候判断条件，而是在每次循环完成的时候判断条件:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n<span class="token keyword">do</span> <span class="token punctuation">{</span>\n  n <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nn<span class="token punctuation">;</span> <span class="token comment">// 100</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 <code>do { ... } while()</code> 循环要小心，循环体会至少执行 <code>1</code> 次，而 <code>for</code> 和 <code>while</code> 循环则可能一次都不执行。</p><h2 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h2><p><code>for</code> 语句是循环命令的另一种形式，可以指定循环的起点、终点和终止条件。它的格式如下。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>初始化表达式<span class="token punctuation">;</span> 条件<span class="token punctuation">;</span> 递增表达式<span class="token punctuation">)</span>\n  语句<span class="token punctuation">;</span>\n<span class="token comment">// 或者</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span>初始化表达式<span class="token punctuation">;</span> 条件<span class="token punctuation">;</span> 递增表达式<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  语句<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>for</code> 语句后面的括号里面，有三个表达式。</p><ul><li>初始化表达式(initialize): 确定循环变量的初始值，只在循环开始时执行一次。</li><li>条件表达式(test): 每轮循环开始时，都要执行这个条件表达式，只有值为真，才继续进行循环。</li><li>递增表达式(increment): 每轮循环的最后一个操作，通常用来递增循环变量。</li></ul><p>这里是一个例子<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>。</p><p>for 循环最常用的地方是利用索引来遍历数组:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Google&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Microsoft&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> i<span class="token punctuation">,</span> x<span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  x <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>for</code> 语句的三个部分(initialize、test、increment)，可以省略任何一个，也可以全部省略。</p><p>如果没有退出循环的判断条件，就必须使用 <code>break</code> 语句退出循环，否则就是死循环:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 将无限循环下去</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// 通过if判断来退出循环</span>\n  <span class="token punctuation">}</span>\n  x<span class="token operator">++</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-in" tabindex="-1"><a class="header-anchor" href="#for-in" aria-hidden="true">#</a> for ... in</h3><p>for 循环的一个变体是 <code>for ... in</code> 循环，它可以把一个对象的所有属性依次循环出来:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Jack&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&quot;Beijing&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;name&#39;, &#39;age&#39;, &#39;city&#39;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要过滤掉对象继承的属性，用 <code>hasOwnProperty()</code> 来实现。<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p><p>同时，<code>for ... in</code> 循环可以直接循环 Array。<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup></p><h2 id="break-和-continue-语句" tabindex="-1"><a class="header-anchor" href="#break-和-continue-语句" aria-hidden="true">#</a> break 和 continue 语句</h2><p><code>break</code> 语句和 <code>continue</code> 语句都具有跳转作用，可以让代码不按既有的顺序执行。</p><ul><li><p><code>break</code> 语句用于跳出代码块或循环。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;i 当前为: &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  i<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码只会执行 10 次循环，一旦 <code>i</code> 等于 10，就会跳出循环。 <code>for</code> 循环也可以使用 <code>break</code> 语句跳出循环。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 0</span>\n<span class="token comment">// 1</span>\n<span class="token comment">// 2</span>\n<span class="token comment">// 3</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码执行到 <code>i</code> 等于 3，就会跳出循环。</p></li><li><p><code>continue</code> 语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  i<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;i 当前为: &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码只有在 <code>i</code> 为奇数时，才会输出 <code>i</code> 的值。如果 <code>i</code> 为偶数，则直接进入下一轮循环。</p></li></ul><p>如果存在多重循环，不带参数的 <code>break</code> 语句和 <code>continue</code> 语句都只针对最内层循环。</p><h3 id="标签-label" tabindex="-1"><a class="header-anchor" href="#标签-label" aria-hidden="true">#</a> 标签(label)</h3><p>JavaScript 语言允许，语句的前面有标签(label)，相当于定位符，用于跳转到程序的任意位置，标签的格式如下。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">label</span><span class="token operator">:</span> 语句<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>标签可以是任意的标识符，但不能是保留字，语句部分可以是任意语句。 标签通常与 <code>break</code> 语句和 <code>continue</code> 语句配合使用，跳出特定的循环。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">break</span> top<span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;i=&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;, j=&quot;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// i=0, j=0</span>\n<span class="token comment">// i=0, j=1</span>\n<span class="token comment">// i=0, j=2</span>\n<span class="token comment">// i=1, j=0</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码为一个双重循环区块，<code>break</code> 命令后面加上了 <code>top</code> 标签(注意，<code>top</code> 不用加引号)，满足条件时，直接跳出双层循环。如果 <code>break</code> 语句后面不使用标签，则只能跳出内层循环，进入下一次的外层循环。</p><p>标签也可以用于跳出代码块。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">break</span> foo<span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;本行不会输出&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 1</span>\n<span class="token comment">// 2</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码执行到 <code>break foo</code>，就会跳出区块。</p><p><code>continue</code> 语句也可以与标签配合使用。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">continue</span> top<span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;i=&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;, j=&quot;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// i=0, j=0</span>\n<span class="token comment">// i=0, j=1</span>\n<span class="token comment">// i=0, j=2</span>\n<span class="token comment">// i=1, j=0</span>\n<span class="token comment">// i=2, j=0</span>\n<span class="token comment">// i=2, j=1</span>\n<span class="token comment">// i=2, j=2</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>continue</code> 命令后面有一个标签名，满足条件时，会跳过当前循环，直接进入下一轮外层循环。如果 <code>continue</code> 语句后面不使用标签，则只能进入下一轮的内层循环。</p><h2 id="循环小结" tabindex="-1"><a class="header-anchor" href="#循环小结" aria-hidden="true">#</a> 循环小结</h2><ul><li><p>循环是让计算机做重复任务的有效的方法，有些时候，如果代码写得有问题，会让程序陷入“死循环”，也就是永远循环下去。JavaScript 的死循环会让浏览器无法正常显示或执行当前页面的逻辑，有的浏览器会直接挂掉，有的浏览器会在一段时间后提示您强行终止 JavaScript 的执行，因此，要特别注意死循环的问题。</p></li><li><p>在编写循环代码时，务必小心编写初始条件和判断条件，尤其是边界值。特别注意 <code>i &lt; 100</code> 和 <code>i &lt;= 100</code> 是不同的判断逻辑。</p></li></ul><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>while 循环案例</p><p>比如我们要计算 100 以内所有奇数之和，可以用 <code>while</code> 循环实现:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>\n\n<span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  x <span class="token operator">=</span> x <span class="token operator">+</span> n<span class="token punctuation">;</span>\n  n <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nx<span class="token punctuation">;</span> <span class="token comment">// 2500</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在循环内部变量 <code>n</code> 不断自减，直到变为 <code>-1</code> 时，不再满足 <code>while</code> 条件，循环退出。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p><strong>for 循环案例</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> i<span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  x <span class="token operator">=</span> x <span class="token operator">+</span> i<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nx<span class="token punctuation">;</span> <span class="token comment">// 50005000</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们来分析一下这个例子中 for 循环的控制条件:</p><ul><li><code>i = 1</code> 这是初始条件，将变量 <code>i</code> 置为 <code>1</code>；</li><li><code>i &lt;= 10000</code> 这是判断条件，满足时就继续循环，不满足就退出循环；</li><li><code>i++</code> 这是每次循环后的递增条件，由于每次循环后变量 <code>i</code> 都会加 <code>1</code>，因此它终将在若干次循环后不满足判断条件 <code>i &lt;= 10000</code> 而退出循环。</li></ul><a href="#footnote-ref2" class="footnote-backref">↩︎</a></li><li id="footnote3" class="footnote-item"><p><strong>过滤掉对象继承的属性</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Jack&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&quot;Beijing&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>o<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;name&#39;, &#39;age&#39;, &#39;city&#39;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div> <a href="#footnote-ref3" class="footnote-backref">↩︎</a></li><li id="footnote4" class="footnote-item"><p>Array 也是对象，而它的每个元素的索引被视为对象的属性，因此，<code>for ... in</code> 循环可以直接循环出 Array 的索引:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;0&#39;, &#39;1&#39;, &#39;2&#39;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;A&#39;, &#39;B&#39;, &#39;C&#39;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p><code>for ... in</code> 对 Array 的循环得到的是 <strong><code>String</code></strong> 而不是 <code>Number</code>。</p></div><a href="#footnote-ref4" class="footnote-backref">↩︎</a></li></ol></section>',49),r={},u=(0,a(13860).Z)(r,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e.kq)(" more "),p,o,c,l,i])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},53114:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-927cc2ec","path":"/code/language/js/guide/loop.html","title":"循环","lang":"zh-CN","frontmatter":{"title":"循环","icon":"loop","date":"2019-09-16T00:00:00.000Z","category":["JavaScript"],"tag":["快速上手"],"summary":"循环语句用于重复执行某个操作，它有多种形式，JavaScript 的循环有两种: while 循环和 for 循环。\\n","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/language/js/guide/loop.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"循环"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:published_time","content":"2019-09-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"<p>循环语句用于重复执行某个操作，它有多种形式，JavaScript 的循环有两种: <code v-pre>while</code> 循环和 <code v-pre>for</code> 循环。</p>\\n","headers":[{"level":2,"title":"while 循环","slug":"while-循环","children":[{"level":3,"title":"while","slug":"while","children":[]},{"level":3,"title":"do ... while","slug":"do-while","children":[]}]},{"level":2,"title":"for","slug":"for","children":[{"level":3,"title":"for ... in","slug":"for-in","children":[]}]},{"level":2,"title":"break 和 continue 语句","slug":"break-和-continue-语句","children":[{"level":3,"title":"标签(label)","slug":"标签-label","children":[]}]},{"level":2,"title":"循环小结","slug":"循环小结","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":6.53,"words":1958},"filePathRelative":"code/language/js/guide/loop.md","localizedDate":"2019年9月16日"}')}}]);