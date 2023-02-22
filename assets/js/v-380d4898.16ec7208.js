"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[76717],{84592:(n,s,e)=>{e.r(s),e.d(s,{default:()=>d});var a=e(60329);const c=(0,a._)("p",null,[(0,a.Uk)("字符串是编程时涉及到的最多的一种数据结构，对字符串进行操作的需求几乎无处不在。比如判断一个字符串是否是合法的 Email 地址，虽然可以编程提取 "),(0,a._)("code",null,"@"),(0,a.Uk)(" 前后的子串，再分别判断是否是单词和域名，但这样做不但麻烦，而且代码难以复用。")],-1),t=(0,a.uE)('<h2 id="正则表达式介绍" tabindex="-1"><a class="header-anchor" href="#正则表达式介绍" aria-hidden="true">#</a> 正则表达式介绍</h2><p>正则表达式是一种用来匹配字符串的强有力的武器。它的设计思想是用一种描述性的语言来给字符串定义一个规则，凡是符合规则的字符串，我们就认为它“匹配”了，否则，该字符串就是不合法的。</p><p>所以我们判断一个字符串是否是合法的 Email 的方法是:</p><ol><li><p>创建一个匹配 Email 的正则表达式；</p></li><li><p>用该正则表达式去匹配用户的输入来判断是否合法。</p></li></ol><p>因为正则表达式也是用字符串表示的，所以，我们要首先了解如何用字符来描述字符。</p><h3 id="数字与字母" tabindex="-1"><a class="header-anchor" href="#数字与字母" aria-hidden="true">#</a> 数字与字母</h3><p>在正则表达式中，如果直接给出字符，就是精确匹配。用 <code>\\d</code> 可以匹配一个数字，<code>\\w</code> 可以匹配一个字母或数字，所以:</p><ul><li><p><code>&#39;00\\d&#39;</code> 可以匹配 <code>&#39;007&#39;</code>，但无法匹配 <code>&#39;00A&#39;</code>；</p></li><li><p><code>&#39;\\d\\d\\d&#39;</code> 可以匹配 <code>&#39;010&#39;</code>；</p></li><li><p><code>&#39;\\w\\w&#39;</code> 可以匹配 <code>&#39;js&#39;</code>；</p></li></ul><h3 id="任意字符" tabindex="-1"><a class="header-anchor" href="#任意字符" aria-hidden="true">#</a> 任意字符</h3><p><code>.</code> 可以匹配任意字符，所以:</p><ul><li><code>&#39;js.&#39;</code> 可以匹配 <code>&#39;jsp&#39;</code>、<code>&#39;jss&#39;</code>、<code>&#39;js!&#39;</code> 等等。</li></ul><h3 id="多个字符匹配" tabindex="-1"><a class="header-anchor" href="#多个字符匹配" aria-hidden="true">#</a> 多个字符匹配</h3><p>要匹配变长的字符，在正则表达式中，用 <code>*</code> 表示任意个字符(包括 0 个)，用 <code>+</code> 表示至少一个字符，用 <code>?</code> 表示 0 个或 1 个字符，用 <code>{n}</code> 表示 n 个字符，用 <code>{n,m}</code> 表示 <code>n-m</code> 个字符:</p><p>来看一个复杂的例子: <code>\\d{3}\\s+\\d{3,8}</code>。</p><p>我们来从左到右解读一下:</p><ol><li><p><code>\\d{3}</code> 表示匹配 3 个数字，例如 <code>&#39;010&#39;</code>；</p></li><li><p><code>\\s</code> 可以匹配一个空格(也包括 Tab 等空白符)，所以 <code>\\s+</code> 表示至少有一个空格，例如匹配 <code>&#39; &#39;</code>，<code>&#39;\\t\\t&#39;</code> 等；</p></li><li><p><code>\\d{3,8}</code> 表示 3-8 个数字，例如 <code>&#39;1234567&#39;</code>。</p></li></ol><p>综合起来，上面的正则表达式可以匹配以任意个空格隔开的带区号的电话号码。</p><p>如果要匹配 <code>&#39;010-12345&#39;</code> 这样的号码呢? 由于 <code>&#39;-&#39;</code> 是特殊字符，在正则表达式中，要用 <code>&#39;\\&#39;</code> 转义，所以，上面的正则是 <code>\\d{3}\\-\\d{3,8}</code>。</p><p>但是，仍然无法匹配 <code>&#39;010 - 12345&#39;</code>，因为带有空格。所以我们需要更复杂的匹配方式。</p><h2 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> 进阶</h2><h3 id="指定匹配范围" tabindex="-1"><a class="header-anchor" href="#指定匹配范围" aria-hidden="true">#</a> 指定匹配范围</h3><p>要做更精确地匹配，可以用 <code>[]</code> 表示范围，比如:</p><ul><li><p><code>[0-9a-zA-Z\\_]</code> 可以匹配一个数字、字母或者下划线；</p></li><li><p><code>[0-9a-zA-Z\\_]+</code> 可以匹配至少由一个数字、字母或者下划线组成的字符串，比如 <code>&#39;a100&#39;</code>，<code>&#39;0_Z&#39;</code>，<code>&#39;js2015&#39;</code> 等等；</p></li><li><p><code>[a-zA-Z\\_\\$][0-9a-zA-Z\\_\\$]*</code> 可以匹配由字母或下划线、<code>$</code> 开头，后接任意个由一个数字、字母或者下划线、<code>$</code> 组成的字符串，也就是 JavaScript 允许的变量名；</p></li><li><p><code>[a-zA-Z\\_\\$][0-9a-zA-Z\\_\\$]{0, 19}</code> 更精确地限制了变量的长度是 1-20 个字符(前面 1 个字符+后面最多 19 个字符)。</p></li></ul><hr><p><code>A|B</code> 可以匹配 <code>A</code> 或 <code>B</code>，所以 <code>(J|j)ava(S|s)cript</code> 可以匹配 <code>&#39;JavaScript&#39;</code>、<code>&#39;Javascript&#39;</code>、<code>&#39;javaScript&#39;</code> 或者 <code>&#39;javascript&#39;</code>。</p><h3 id="头尾匹配" tabindex="-1"><a class="header-anchor" href="#头尾匹配" aria-hidden="true">#</a> 头尾匹配</h3><p><code>^</code> 表示行的开头，<code>^\\d</code> 表示必须以数字开头。</p><p><code>$</code> 表示行的结束，<code>\\d$</code> 表示必须以数字结束。</p><p>您可能注意到了，<code>js</code> 也可以匹配 <code>&#39;jsp&#39;</code>，但是加上 <code>^js$</code> 就变成了整行匹配，就只能匹配 <code>&#39;js&#39;</code> 了。</p><h2 id="正则的使用" tabindex="-1"><a class="header-anchor" href="#正则的使用" aria-hidden="true">#</a> 正则的使用</h2><p>有了准备知识，我们就可以在 JavaScript 中使用正则表达式了。</p><p>JavaScript 有两种方式创建一个正则表达式:</p><ul><li>第一种方式是直接通过/正则表达式/写出来</li><li>第二种方式是通过 <code>new RegExp(&#39;正则表达式&#39;)</code> 创建一个 regular expression 对象。</li></ul><p>两种写法是一样的:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> re1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">ABC\\-001</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> re2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;ABC\\\\-001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nre1<span class="token punctuation">;</span> <span class="token comment">// /ABC\\-001/</span>\nre2<span class="token punctuation">;</span> <span class="token comment">// /ABC\\-001/</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果使用第二种写法，因为字符串的转义问题，字符串的两个 <code>\\\\</code> 实际上是一个 <code>\\</code>。</p></div><p>先看看如何判断正则表达式是否匹配:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\d{3}\\-\\d{3,8}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>\n\nre<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;010-12345&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\nre<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;010-1234x&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\nre<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;010 12345&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Regular expression 对象的 <code>test()</code> 方法用于测试给定的字符串是否符合条件。</p><h3 id="切分字符串" tabindex="-1"><a class="header-anchor" href="#切分字符串" aria-hidden="true">#</a> 切分字符串</h3><p>用正则表达式切分字符串比用固定的字符更灵活，请看正常的切分代码:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;a b   c&quot;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;a&#39;, &#39;b&#39;, &#39;&#39;, &#39;&#39;, &#39;c&#39;]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>嗯，无法识别连续的空格，用正则表达式试试:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;a b   c&quot;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>无论多少个空格都可以正常分割。加入<code>,</code>试试:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;a,b, c  d&quot;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\s\\,]+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再加入 <code>;</code> 试试:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;a,b;; c  d&quot;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\s\\,\\;]+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果用户输入了一组标签，下次记得用正则表达式来把不规范的输入转化成正确的数组。</p><h3 id="分组" tabindex="-1"><a class="header-anchor" href="#分组" aria-hidden="true">#</a> 分组</h3><p>除了简单地判断是否匹配之外，正则表达式还有提取子串的强大功能。用 <code>()</code> 表示的就是要提取的分组 (Group)。比如:</p><p><code>^(\\d{3})-(\\d{3,8})$</code> 分别定义了两个组，可以直接从匹配的字符串中提取出区号和本地号码:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(\\d{3})-(\\d{3,8})$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>\n\nre<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&quot;010-12345&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;010-12345&#39;, &#39;010&#39;, &#39;12345&#39;]</span>\nre<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&quot;010 12345&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果正则表达式中定义了组，就可以在 regular expression 对象上用 <code>exec()</code> 方法提取出子串来。</p><p><code>exec()</code> 方法在匹配成功后，会返回一个 <code>Array</code>，第一个元素是正则表达式匹配到的整个字符串，后面的字符串表示匹配成功的子串。</p><p><code>exec()</code> 方法在匹配失败时返回 <code>null</code>。</p><p>提取子串非常有用。来看一个更凶残的例子:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> re <span class="token operator">=</span>\n  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(0[0-9]|1[0-9]|2[0-3]|[0-9])\\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>\n\nre<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&quot;19:05:30&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;19:05:30&#39;, &#39;19&#39;, &#39;05&#39;, &#39;30&#39;]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个正则表达式可以直接识别合法的时间。但是有些时候，用正则表达式也无法做到完全验证，比如识别日期:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(0[1-9]|1[0-2]|[0-9])-(0[1-9]|1[0-9]|2[0-9]|3[0-1]|[0-9])$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于 <code>&#39;2-30&#39;</code>，<code>&#39;4-31&#39;</code> 这样的非法日期，用正则还是识别不了，或者说写出来非常困难，这时就需要程序配合识别了。</p><h2 id="贪婪匹配" tabindex="-1"><a class="header-anchor" href="#贪婪匹配" aria-hidden="true">#</a> 贪婪匹配</h2><p>需要特别指出的是，正则匹配默认是贪婪匹配，也就是匹配尽可能多的字符。举例如下，匹配出数字后面的 0:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(\\d+)(0*)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>\n\nre<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&quot;102300&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;102300&#39;, &#39;102300&#39;, &#39;&#39;]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 <code>\\d+</code> 采用贪婪匹配，直接把后面的 <code>0</code> 全部匹配了，结果 <code>0*</code> 只能匹配空字符串了。</p><p>必须让 <code>\\d+</code> 采用非贪婪匹配(也就是尽可能少匹配)，才能把后面的 <code>0</code> 匹配出来，加个 <code>?</code> 就可以让 <code>\\d+</code> 采用非贪婪匹配:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(\\d+?)(0*)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>\n\nre<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&quot;102300&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;102300&#39;, &#39;1023&#39;, &#39;00&#39;]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局搜索" tabindex="-1"><a class="header-anchor" href="#全局搜索" aria-hidden="true">#</a> 全局搜索</h2><p>JavaScript 的正则表达式还有几个特殊的标志，最常用的是 <code>g</code>，表示全局匹配:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> r1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">test</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n<span class="token comment">// 等价于:</span>\n<span class="token keyword">const</span> r2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;g&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局匹配可以多次执行 <code>exec()</code> 方法来搜索一个匹配的字符串。当我们指定 <code>g</code> 标志后，每次运行 <code>exec()</code>，正则表达式本身会更新 <code>lastIndex</code> 属性，表示上次匹配到的最后索引:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;JavaScript, VBScript, JScript and ECMAScript&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-zA-Z]+Script</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n\n<span class="token comment">// 使用全局匹配:</span>\nre<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;JavaScript&#39;]</span>\nre<span class="token punctuation">.</span>lastIndex<span class="token punctuation">;</span> <span class="token comment">// 10</span>\n\nre<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;VBScript&#39;]</span>\nre<span class="token punctuation">.</span>lastIndex<span class="token punctuation">;</span> <span class="token comment">// 20</span>\n\nre<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;JScript&#39;]</span>\nre<span class="token punctuation">.</span>lastIndex<span class="token punctuation">;</span> <span class="token comment">// 29</span>\n\nre<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;ECMAScript&#39;]</span>\nre<span class="token punctuation">.</span>lastIndex<span class="token punctuation">;</span> <span class="token comment">// 44</span>\n\nre<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null，直到结束仍没有匹配到</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局匹配类似搜索，因此不能使用 <code>/^...$/</code>，那样只会最多匹配一次。</p><p>正则表达式还可以指定 <code>i</code> 标志，表示忽略大小写，<code>m</code> 标志，表示执行多行匹配。</p><h2 id="正则小结" tabindex="-1"><a class="header-anchor" href="#正则小结" aria-hidden="true">#</a> 正则小结</h2><p>正则表达式非常强大，要在短短的一节里讲完是不可能的。要讲清楚正则的所有内容，可以写一本厚厚的书了。如果您经常遇到正则表达式的问题，您可能需要一本正则表达式的参考书。</p>',76),p={class:"custom-container tip"},o=(0,a._)("p",{class:"custom-container-title"},"提示",-1),l={href:"https://www.runoob.com/regexp/regexp-tutorial.html",target:"_blank",rel:"noopener noreferrer"},i={},d=(0,e(13860).Z)(i,[["render",function(n,s){const e=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[c,(0,a.kq)(" more "),t,(0,a._)("div",p,[o,(0,a._)("p",null,[(0,a.Uk)("有兴趣的同学可以查看"),(0,a._)("a",l,[(0,a.Uk)("菜鸟教程上关于正则表达式的介绍"),(0,a.Wm)(e)]),(0,a.Uk)("。")])])])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const e=n.__vccOpts||n;for(const[n,a]of s)e[n]=a;return e}},49005:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a=JSON.parse('{"key":"v-380d4898","path":"/code/language/js/object/regExp.html","title":"RegExp","lang":"zh-CN","frontmatter":{"title":"RegExp","icon":"regexp","date":"2019-10-13T00:00:00.000Z","category":["JavaScript"],"summary":"字符串是编程时涉及到的最多的一种数据结构，对字符串进行操作的需求几乎无处不在。比如判断一个字符串是否是合法的 Email 地址，虽然可以编程提取 @ 前后的子串，再分别判断是否是单词和域名，但这样做不但麻烦，而且代码难以复用。\\n","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/language/js/object/regExp.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"RegExp"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-10-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"<p>字符串是编程时涉及到的最多的一种数据结构，对字符串进行操作的需求几乎无处不在。比如判断一个字符串是否是合法的 Email 地址，虽然可以编程提取 <code v-pre>@</code> 前后的子串，再分别判断是否是单词和域名，但这样做不但麻烦，而且代码难以复用。</p>\\n","headers":[{"level":2,"title":"正则表达式介绍","slug":"正则表达式介绍","children":[{"level":3,"title":"数字与字母","slug":"数字与字母","children":[]},{"level":3,"title":"任意字符","slug":"任意字符","children":[]},{"level":3,"title":"多个字符匹配","slug":"多个字符匹配","children":[]}]},{"level":2,"title":"进阶","slug":"进阶","children":[{"level":3,"title":"指定匹配范围","slug":"指定匹配范围","children":[]},{"level":3,"title":"头尾匹配","slug":"头尾匹配","children":[]}]},{"level":2,"title":"正则的使用","slug":"正则的使用","children":[{"level":3,"title":"切分字符串","slug":"切分字符串","children":[]},{"level":3,"title":"分组","slug":"分组","children":[]}]},{"level":2,"title":"贪婪匹配","slug":"贪婪匹配","children":[]},{"level":2,"title":"全局搜索","slug":"全局搜索","children":[]},{"level":2,"title":"正则小结","slug":"正则小结","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":7.19,"words":2158},"filePathRelative":"code/language/js/object/regExp.md","localizedDate":"2019年10月13日"}')}}]);