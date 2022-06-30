"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[65838],{31443:(n,s,e)=>{e.r(s),e.d(s,{default:()=>Y});var a=e(78e3);const t=(0,a.Uk)("JavaScript 的类型分为两种: 原始数据类型("),o={href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("Primitive data types"),l=(0,a.Uk)(")和对象类型(Object types)。"),r=(0,a.Uk)("原始数据类型包括: 布尔值、数值、字符串、"),i=(0,a._)("code",null,"null",-1),c=(0,a.Uk)("、"),d=(0,a._)("code",null,"undefined",-1),u=(0,a.Uk)(" 以及 "),k={href:"http://es6.ruanyifeng.com/#docs/symbol",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("ES6 中的新类型 "),v=(0,a._)("code",null,"Symbol",-1),b=(0,a.Uk)("。"),y=(0,a._)("p",null,[(0,a.Uk)("本节主要介绍"),(0,a._)("strong",null,"前五种"),(0,a.Uk)("原始数据类型在 TypeScript 中的应用。")],-1),g=(0,a.uE)('<h2 id="布尔值" tabindex="-1"><a class="header-anchor" href="#布尔值" aria-hidden="true">#</a> 布尔值</h2><p>布尔值是最基础的数据类型，在 TypeScript 中，使用 <code>boolean</code> 定义布尔值类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> isDone<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 编译通过</span>\n<span class="token comment">// 后面约定，未强调编译错误的代码片段，默认为编译通过</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，使用构造函数 <code>Boolean</code> 创造的对象<strong>不是</strong>布尔值:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> createdByNewBoolean<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Type &#39;Boolean&#39; is not assignable to type &#39;boolean&#39;.</span>\n<span class="token comment">//   &#39;boolean&#39; is a primitive, but &#39;Boolean&#39; is a wrapper object. Prefer using &#39;boolean&#39; when possible.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上 <code>new Boolean()</code> 返回的是一个 <code>Boolean</code> 对象:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> createdByNewBoolean<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>直接调用 <code>Boolean</code> 也可以返回一个 <code>boolean</code> 类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> createdByBoolean<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 TypeScript 中，<code>boolean</code> 是 JavaScript 中的基本类型，而 <code>Boolean</code> 是 JavaScript 中的构造函数。其他基本类型(除了 <code>null</code> 和 <code>undefined</code>)一样，不再赘述。</p><h2 id="数值" tabindex="-1"><a class="header-anchor" href="#数值" aria-hidden="true">#</a> 数值</h2><p>使用 <code>number</code> 定义数值类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> decLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> hexLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span>\n<span class="token comment">// ES6 中的二进制表示法</span>\n<span class="token keyword">let</span> binaryLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span>\n<span class="token comment">// ES6 中的八进制表示法</span>\n<span class="token keyword">let</span> octalLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0o744</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> notANumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">NaN</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> infinityNumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> decLiteral <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> hexLiteral <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span>\n<span class="token comment">// ES6 中的二进制表示法</span>\n<span class="token keyword">var</span> binaryLiteral <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token comment">// ES6 中的八进制表示法</span>\n<span class="token keyword">var</span> octalLiteral <span class="token operator">=</span> <span class="token number">484</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> notANumber <span class="token operator">=</span> <span class="token number">NaN</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> infinityNumber <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',15),h=(0,a.Uk)("其中 "),f=(0,a._)("code",null,"0b1010",-1),w=(0,a.Uk)(" 和 "),E=(0,a._)("code",null,"0o744",-1),B=(0,a.Uk)(" 是 "),_={href:"http://es6.ruanyifeng.com/#docs/number#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%92%8C%E5%85%AB%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},S=(0,a.Uk)("ES6 中的二进制和八进制表示法"),x=(0,a.Uk)("，它们会被编译为十进制数字。"),U=(0,a.uE)('<h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><p>使用 <code>string</code> 定义字符串类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> myAge<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 模板字符串</span>\n<span class="token keyword">let</span> sentence<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.\nI&#39;ll be </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myAge <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old next month.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> myAge <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>\n<span class="token comment">// 模板字符串</span>\n<span class="token keyword">var</span> sentence <span class="token operator">=</span>\n  <span class="token string">&quot;Hello, my name is &quot;</span> <span class="token operator">+</span>\n  myName <span class="token operator">+</span>\n  <span class="token string">&quot;.\\nI&#39;ll be &quot;</span> <span class="token operator">+</span>\n  <span class="token punctuation">(</span>myAge <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span>\n  <span class="token string">&quot; years old next month.&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),A=(0,a.Uk)("其中 "),N=(0,a._)("code",null,"`",-1),T=(0,a.Uk)(" 用来定义 "),q={href:"http://es6.ruanyifeng.com/#docs/string#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2",target:"_blank",rel:"noopener noreferrer"},j=(0,a.Uk)("ES6 中的模板字符串"),C=(0,a.Uk)("，"),W=(0,a._)("code",null,"${expr}",-1),L=(0,a.Uk)(" 用来在模板字符串中嵌入表达式。"),P=(0,a.uE)('<h2 id="空值" tabindex="-1"><a class="header-anchor" href="#空值" aria-hidden="true">#</a> 空值</h2><p>JavaScript 没有空值(Void)的概念，在 TypeScript 中，可以用 <code>void</code> 表示没有任何返回值的函数:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">alertName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;My name is Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>声明一个 <code>void</code> 类型的变量没有什么用，因为您只能将它赋值为 <code>undefined</code> 和 <code>null</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> unusable<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="null-和-undefined" tabindex="-1"><a class="header-anchor" href="#null-和-undefined" aria-hidden="true">#</a> Null 和 Undefined</h2><p>在 TypeScript 中，可以使用 <code>null</code> 和 <code>undefined</code> 来定义这两个原始数据类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> n<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>与 <code>void</code> 的区别是，<code>undefined</code> 和 <code>null</code> 是所有类型的子类型。也就是说 <code>undefined</code> 类型的变量，可以赋值给 <code>number</code> 类型的变量:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 这样不会报错</span>\n<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 这样也不会报错</span>\n<span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而 <code>void</code> 类型的变量不能赋值给 <code>number</code> 类型的变量:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>\n\n<span class="token comment">// Type &#39;void&#39; is not assignable to type &#39;number&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',14),z={href:"http://www.typescriptlang.org/docs/handbook/basic-types.html",target:"_blank",rel:"noopener noreferrer"},D=(0,a.Uk)("Basic Types"),J=(0,a.Uk)("("),F={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html",target:"_blank",rel:"noopener noreferrer"},I=(0,a.Uk)("中文版"),O=(0,a.Uk)(")"),Z={href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive",target:"_blank",rel:"noopener noreferrer"},$=(0,a.Uk)("Primitive data types"),G={href:"http://es6.ruanyifeng.com/#docs/symbol",target:"_blank",rel:"noopener noreferrer"},H=(0,a.Uk)("ES6 中的新类型 "),M=(0,a._)("code",null,"Symbol",-1),R={href:"http://es6.ruanyifeng.com/#docs/number#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%92%8C%E5%85%AB%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},V=(0,a.Uk)("ES6 中的二进制和八进制表示法"),K={href:"http://es6.ruanyifeng.com/#docs/string#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2",target:"_blank",rel:"noopener noreferrer"},Q=(0,a.Uk)("ES6 中的模板字符串"),X={},Y=(0,e(13860).Z)(X,[["render",function(n,s){const e=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",null,[t,(0,a._)("a",o,[p,(0,a.Wm)(e)]),l]),(0,a._)("p",null,[r,i,c,d,u,(0,a._)("a",k,[m,v,(0,a.Wm)(e)]),b]),y,(0,a.kq)(" more "),g,(0,a._)("p",null,[h,f,w,E,B,(0,a._)("a",_,[S,(0,a.Wm)(e)]),x]),U,(0,a._)("p",null,[A,N,T,(0,a._)("a",q,[j,(0,a.Wm)(e)]),C,W,L]),P,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",z,[D,(0,a.Wm)(e)]),J,(0,a._)("a",F,[I,(0,a.Wm)(e)]),O]),(0,a._)("li",null,[(0,a._)("a",Z,[$,(0,a.Wm)(e)])]),(0,a._)("li",null,[(0,a._)("a",G,[H,M,(0,a.Wm)(e)])]),(0,a._)("li",null,[(0,a._)("a",R,[V,(0,a.Wm)(e)])]),(0,a._)("li",null,[(0,a._)("a",K,[Q,(0,a.Wm)(e)])])])])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const e=n.__vccOpts||n;for(const[n,a]of s)e[n]=a;return e}},37181:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a=JSON.parse('{"key":"v-85f3d8a2","path":"/code/language/typescript/basics/primitive-data-types.html","title":"原始数据类型","lang":"zh-CN","frontmatter":{"title":"原始数据类型","icon":"type","category":["TypeScript"],"summary":"JavaScript 的类型分为两种: 原始数据类型([Primitive data types][])和对象类型(Object types)。\\n原始数据类型包括: 布尔值、数值、字符串、null、undefined 以及 [ES6 中的新类型 Symbol][]。\\n本节主要介绍前五种原始数据类型在 TypeScript 中的应用。\\n","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/language/typescript/basics/primitive-data-types.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"原始数据类型"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"<p>JavaScript 的类型分为两种: 原始数据类型([Primitive data types][])和对象类型(Object types)。</p>\\n<p>原始数据类型包括: 布尔值、数值、字符串、<code v-pre>null</code>、<code v-pre>undefined</code> 以及 [ES6 中的新类型 <code v-pre>Symbol</code>][]。</p>\\n<p>本节主要介绍<strong>前五种</strong>原始数据类型在 TypeScript 中的应用。</p>\\n","headers":[{"level":2,"title":"布尔值","slug":"布尔值","children":[]},{"level":2,"title":"数值","slug":"数值","children":[]},{"level":2,"title":"字符串","slug":"字符串","children":[]},{"level":2,"title":"空值","slug":"空值","children":[]},{"level":2,"title":"Null 和 Undefined","slug":"null-和-undefined","children":[]},{"level":2,"title":"参考","slug":"参考","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":2.74,"words":821},"filePathRelative":"code/language/typescript/basics/primitive-data-types.md","localizedDate":"2022年6月27日"}')}}]);