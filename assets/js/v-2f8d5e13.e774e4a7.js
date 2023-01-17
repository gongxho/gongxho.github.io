"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[13911],{43126:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var e=a(60329);const t=(0,e.uE)('<h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2><p>闭包(closure)是 JavaScript 语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。</p><p>理解闭包，首先必须理解变量作用域。前面提到，JavaScript 有两种作用域: 全局作用域和函数作用域。函数内部可以直接读取全局变量。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 999</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，函数 <code>f1</code> 可以读取全局变量 <code>n</code>。</p><p>但是，函数外部无法读取函数内部声明的变量。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Uncaught ReferenceError: n is not defined(</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，函数 <code>f1</code> 内部声明的变量 <code>n</code>，函数外是无法读取的。</p><p>如果出于种种原因，需要得到函数内的局部变量。正常情况下，这是办不到的，只有通过变通方法才能实现。那就是在函数的内部，再定义一个函数。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>\n  <span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 999</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，函数 <code>f2</code> 就在函数 <code>f1</code> 内部，这时 <code>f1</code> 内部的所有局部变量，对 <code>f2</code> 都是可见的。但是反过来就不行，<code>f2</code> 内部的局部变量，对 <code>f1</code> 就是不可见的。这就是 JavaScript 语言特有的&quot;链式作用域&quot;结构(chain scope)，子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。</p><p>既然 <code>f2</code> 可以读取 <code>f1</code> 的局部变量，那么只要把 <code>f2</code> 作为返回值，我们不就可以在 <code>f1</code> 外部读取它的内部变量了吗!</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>\n  <span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> f2<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 999</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，函数 <code>f1</code> 的返回值就是函数 <code>f2</code>，由于 <code>f2</code> 可以读取 <code>f1</code> 的内部变量，所以就可以在外部获得 <code>f1</code> 的内部变量了。</p><p>闭包就是函数 <code>f2</code>，即能够读取其他函数内部变量的函数。由于在 JavaScript 语言中，只有函数内部的子函数才能读取内部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数”。闭包最大的特点，就是它可以“记住”诞生的环境，比如 <code>f2</code> 记住了它诞生的环境 <code>f1</code>，所以从 <code>f2</code> 可以得到 <code>f1</code> 的内部变量。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。</p><p>闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。请看下面的例子，闭包使得内部变量记住上一次调用时的运算结果。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createIncrementor</span><span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> start<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> inc <span class="token operator">=</span> <span class="token function">createIncrementor</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">inc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>\n<span class="token function">inc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>\n<span class="token function">inc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 7</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>start</code> 是函数 <code>createIncrementor</code> 的内部变量。通过闭包，<code>start</code> 的状态被保留了，每一次调用都是在上一次调用的基础上进行计算。从中可以看到，闭包 <code>inc</code> 使得函数 <code>createIncrementor</code> 的内部环境，一直存在。所以，闭包可以看作是函数内部作用域的一个接口。</p><p>为什么会这样呢? 原因就在于 <code>inc</code> 始终在内存中，而 <code>inc</code> 的存在依赖于 <code>createIncrementor</code>，因此也始终在内存中，不会在调用结束后，被垃圾回收机制回收。</p><p>闭包的另一个用处，是封装对象的私有属性和私有方法。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> _age<span class="token punctuation">;</span>\n  <span class="token keyword">function</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    _age <span class="token operator">=</span> n<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">function</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> _age<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span>\n    <span class="token literal-property property">getAge</span><span class="token operator">:</span> getAge<span class="token punctuation">,</span>\n    <span class="token literal-property property">setAge</span><span class="token operator">:</span> setAge<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\np1<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\np1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，函数 <code>Person</code> 的内部变量 <code>_age</code>，通过闭包 <code>getAge</code> 和 <code>setAge</code>，变成了返回对象 <code>p1</code> 的私有变量。</p><p>注意，外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题。</p><h2 id="立即调用的函数表达式-iife" tabindex="-1"><a class="header-anchor" href="#立即调用的函数表达式-iife" aria-hidden="true">#</a> 立即调用的函数表达式(IIFE)</h2><p>在 JavaScript 中，圆括号 <code>()</code> 是一种运算符，跟在函数名之后，表示调用该函数。比如，<code>print()</code> 就表示调用 <code>print</code> 函数。</p><p>有时，我们需要在定义函数之后，立即调用该函数。这时，您不能在函数的定义之后加上圆括号，这会产生语法错误。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// SyntaxError: Unexpected token (</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>产生这个错误的原因是，<code>function</code> 这个关键字即可以当作语句，也可以当作表达式。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 语句</span>\n<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// 表达式</span>\n<span class="token keyword">const</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了避免解析上的歧义，JavaScript 引擎规定，如果 <code>function</code> 关键字出现在行首，一律解释成语句。因此，JavaScript 引擎看到行首是 <code>function</code> 关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾，所以就报错了。</p><p>解决方法就是不要让 <code>function</code> 出现在行首，让引擎将其理解成一个表达式。最简单的处理，就是将其放在一个圆括号里面。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* code */</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 或者</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* code */</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面两种写法都是以圆括号开头，引擎就会认为后面跟的是一个表示式，而不是函数定义语句，所以就避免了错误。这就叫做“立即调用的函数表达式”(Immediately-Invoked Function Expression)，简称 IIFE。</p><p>注意，上面两种写法最后的分号都是必须的。如果省略分号，遇到连着两个 IIFE，可能就会报错。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 报错</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* code */</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">/* code */</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的两行之间没有分号，JavaScript 会将它们连在一起解释，将第二行解释为第一行的参数。</p><p>推而广之，任何让解释器以表达式来处理函数定义的方法，都能产生同样的效果，比如下面三种写法。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> i <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span>\n  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">/* code */</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">/* code */</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>甚至像下面这样写，也是可以的。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* code */</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">~</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* code */</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* code */</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* code */</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。它的目的有两个: 一是不必为函数命名，避免了污染全局变量；二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 写法一</span>\n<span class="token keyword">const</span> tmp <span class="token operator">=</span> newData<span class="token punctuation">;</span>\n\n<span class="token function">processData</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">storeData</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 写法二</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> tmp <span class="token operator">=</span> newData<span class="token punctuation">;</span>\n\n  <span class="token function">processData</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">storeData</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，写法二比写法一更好，因为完全避免了污染全局变量。</p><h2 id="eval-命令" tabindex="-1"><a class="header-anchor" href="#eval-命令" aria-hidden="true">#</a> eval 命令</h2><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3><p><code>eval</code> 命令接受一个字符串作为参数，并将这个字符串当作语句执行。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;const a = 1;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\na<span class="token punctuation">;</span> <span class="token comment">// 1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码将字符串当作语句运行，生成了变量 <code>a</code>。</p><p>如果参数字符串无法当作语句运行，那么就会报错。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;3x&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught SyntaxError: Invalid or unexpected token</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>放在 <code>eval</code> 中的字符串，应该有独自存在的意义，不能用来与 <code>eval</code> 以外的命令配合使用。举例来说，下面的代码将会报错。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;return;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught SyntaxError: Illegal return statement</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码会报错，因为 <code>return</code> 不能单独使用，必须在函数中使用。</p><p>如果 <code>eval</code> 的参数不是字符串，那么会原样返回。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>eval</code> 没有自己的作用域，都在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;a = 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\na<span class="token punctuation">;</span> <span class="token comment">// 2</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>eval</code> 命令修改了外部变量 <code>a</code> 的值。由于这个原因，<code>eval</code> 有安全风险。</p><p>为了防止这种风险，JavaScript 规定，如果使用严格模式，<code>eval</code> 内部声明的变量，不会影响到外部作用域。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n  <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;const foo = 123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError: foo is not defined</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，函数 <code>f</code> 内部是严格模式，这时 <code>eval</code> 内部声明的 <code>foo</code> 变量，就不会影响到外部。</p><p>不过，即使在严格模式下，<code>eval</code> 依然可以读写当前作用域的变量。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n  <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;foo = 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，严格模式下，<code>eval</code> 内部还是改写了外部变量，可见安全风险依然存在。</p><p>总之，<code>eval</code> 的本质是在当前作用域之中，注入代码。由于安全风险和不利于 JavaScript 引擎优化执行速度，所以一般不推荐使用。通常情况下，<code>eval</code> 最常见的场合是解析 JSON 数据的字符串，不过正确的做法应该是使用原生的 <code>JSON.parse</code> 方法。</p><h3 id="eval-的别名调用" tabindex="-1"><a class="header-anchor" href="#eval-的别名调用" aria-hidden="true">#</a> eval 的别名调用</h3><p>前面说过 <code>eval</code> 不利于引擎优化执行速度。更麻烦的是，还有下面这种情况，引擎在静态代码分析的阶段，根本无法分辨执行的是 <code>eval</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> eval<span class="token punctuation">;</span>\n<span class="token function">m</span><span class="token punctuation">(</span><span class="token string">&quot;const x = 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nx<span class="token punctuation">;</span> <span class="token comment">// 1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，变量 <code>m</code> 是 <code>eval</code> 的别名。静态代码分析阶段，引擎分辨不出 <code>m(&#39;const x = 1&#39;)</code> 执行的是 <code>eval</code> 命令。</p><p>为了保证 <code>eval</code> 的别名不影响代码优化，JavaScript 的标准规定，凡是使用别名执行 <code>eval</code>，<code>eval</code> 内部一律是全局作用域。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> e <span class="token operator">=</span> eval<span class="token punctuation">;</span>\n  <span class="token function">e</span><span class="token punctuation">(</span><span class="token string">&quot;console.log(a)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>eval</code> 是别名调用，所以即使它是在函数中，它的作用域还是全局作用域，因此输出的 <code>a</code> 为全局变量。这样的话，引擎就能确认 <code>e()</code> 不会对当前的函数作用域产生影响，优化的时候就可以把这一行排除掉。</p><p><code>eval</code> 的别名调用的形式五花八门，只要不是直接调用，都属于别名调用，因为引擎只能分辨 <code>eval()</code> 这一种形式是直接调用。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nwindow<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> eval<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>eval<span class="token punctuation">,</span> eval<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这些形式都是 <code>eval</code> 的别名调用，作用域都是全局作用域。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>',76),p={href:"http://benalman.com/news/2010/11/immediately-invoked-function-expression/",target:"_blank",rel:"noopener noreferrer"},c={href:"http://markdaggett.com/blog/2013/02/15/functions-explained/",target:"_blank",rel:"noopener noreferrer"},o={href:"http://kangax.github.com/nfe/",target:"_blank",rel:"noopener noreferrer"},i={href:"http://docs.nodejitsu.com/articles/javascript-conventions/what-is-the-arguments-object",target:"_blank",rel:"noopener noreferrer"},l={href:"http://perfectionkills.com/global-eval-what-are-the-options/",target:"_blank",rel:"noopener noreferrer"},u={href:"http://www.2ality.com/2014/01/eval.html",target:"_blank",rel:"noopener noreferrer"},d={},r=(0,a(13860).Z)(d,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Uk)("Ben Alman, "),(0,e._)("a",p,[(0,e.Uk)("Immediately-Invoked Function Expression (IIFE)"),(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e.Uk)("Mark Daggett, "),(0,e._)("a",c,[(0,e.Uk)("Functions Explained"),(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e.Uk)("Juriy Zaytsev, "),(0,e._)("a",o,[(0,e.Uk)("Named function expressions demystified"),(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e.Uk)("Marco Rogers polotek, "),(0,e._)("a",i,[(0,e.Uk)("What is the arguments object?"),(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e.Uk)("Juriy Zaytsev, "),(0,e._)("a",l,[(0,e.Uk)("Global eval. What are the options?"),(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e.Uk)("Axel Rauschmayer, "),(0,e._)("a",u,[(0,e.Uk)("Evaluating JavaScript code via eval() and new Function()"),(0,e.Wm)(a)])])])])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},29860:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-2f8d5e13","path":"/code/language/js/types/function.html","title":"函数","lang":"zh-CN","frontmatter":{"title":"函数","icon":"function","date":"2019-09-23T00:00:00.000Z","category":["JavaScript"],"summary":"闭包 闭包(closure)是 JavaScript 语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。 理解闭包，首先必须理解变量作用域。前面提到，JavaScript 有两种作用域: 全局作用域和函数作用域。函数内部可以直接读取全局变量。 上面代码中，函数 f1 可以读取全局变量 n。 但是，函数外部无法读取函数内部声明的变量。 上面代码中，函","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/language/js/types/function.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"函数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-09-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"闭包","slug":"闭包","children":[]},{"level":2,"title":"立即调用的函数表达式(IIFE)","slug":"立即调用的函数表达式-iife","children":[]},{"level":2,"title":"eval 命令","slug":"eval-命令","children":[{"level":3,"title":"基本用法","slug":"基本用法","children":[]},{"level":3,"title":"eval 的别名调用","slug":"eval-的别名调用","children":[]}]},{"level":2,"title":"参考链接","slug":"参考链接","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":8.62,"words":2587},"filePathRelative":"code/language/js/types/function.md","localizedDate":"2019年9月23日"}')}}]);