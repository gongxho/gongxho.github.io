"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[7216],{19613:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(60329);const e=(0,t._)("p",null,"数组合并了相同类型的对象，而元组(Tuple)合并了不同类型的对象。",-1),p=(0,t._)("p",null,"元组起源于函数编程语言(如 F#)，这些语言中会频繁使用元组。",-1),o=(0,t.uE)('<h2 id="简单的例子" tabindex="-1"><a class="header-anchor" href="#简单的例子" aria-hidden="true">#</a> 简单的例子</h2><p>定义一对值分别为 <code>string</code> 和 <code>number</code> 的元组:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当赋值或访问一个已知索引的元素时，会得到正确的类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\ntom<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>\ntom<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>\n\ntom<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ntom<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以只赋值其中一项:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\ntom<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\ntom <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\ntom <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Property &#39;1&#39; is missing in type &#39;[string]&#39; but required in type &#39;[string, number]&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="越界的元素" tabindex="-1"><a class="header-anchor" href="#越界的元素" aria-hidden="true">#</a> 越界的元素</h2><p>当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\ntom <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\ntom<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;male&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ntom<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Argument of type &#39;true&#39; is not assignable to parameter of type &#39;string | number&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',14),c={href:"http://www.typescriptlang.org/docs/handbook/basic-types.html#tuple",target:"_blank",rel:"noopener noreferrer"},i={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#%E5%85%83%E7%BB%84-tuple",target:"_blank",rel:"noopener noreferrer"},l={},u=(0,a(13860).Z)(l,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[e,p,(0,t.kq)(" more "),o,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",c,[(0,t.Uk)("Basic Types # Tuple"),(0,t.Wm)(a)]),(0,t.Uk)("("),(0,t._)("a",i,[(0,t.Uk)("中文版"),(0,t.Wm)(a)]),(0,t.Uk)(")")])])])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},95320:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-1127c682","path":"/code/language/typescript/advanced/tuple.html","title":"元组","lang":"zh-CN","frontmatter":{"title":"元组","icon":"list","category":["TypeScript"],"summary":"数组合并了相同类型的对象，而元组(Tuple)合并了不同类型的对象。\\n元组起源于函数编程语言(如 F#)，这些语言中会频繁使用元组。\\n","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/language/typescript/advanced/tuple.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"元组"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"<p>数组合并了相同类型的对象，而元组(Tuple)合并了不同类型的对象。</p>\\n<p>元组起源于函数编程语言(如 F#)，这些语言中会频繁使用元组。</p>\\n","headers":[{"level":2,"title":"简单的例子","slug":"简单的例子","children":[]},{"level":2,"title":"越界的元素","slug":"越界的元素","children":[]},{"level":2,"title":"参考","slug":"参考","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":1,"words":299},"filePathRelative":"code/language/typescript/advanced/tuple.md","localizedDate":"2022年6月27日"}')}}]);