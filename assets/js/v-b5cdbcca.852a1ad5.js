"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[18202],{87177:(n,s,a)=>{a.r(s),a.d(s,{default:()=>k});var e=a(78e3);const t=(0,e._)("p",null,"任意值(Any)用来表示允许赋值为任意类型。",-1),p=(0,e.uE)('<h2 id="什么是任意值类型" tabindex="-1"><a class="header-anchor" href="#什么是任意值类型" aria-hidden="true">#</a> 什么是任意值类型</h2><p>如果是一个普通类型，在赋值过程中改变类型是不被允许的:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但如果是 <code>any</code> 类型，则允许被赋值为任意类型。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="任意值的属性和方法" tabindex="-1"><a class="header-anchor" href="#任意值的属性和方法" aria-hidden="true">#</a> 任意值的属性和方法</h2><p>在任意值上访问任何属性都是允许的:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> anyThing<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>anyThing<span class="token punctuation">.</span>myName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>anyThing<span class="token punctuation">.</span>myName<span class="token punctuation">.</span>firstName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也允许调用任何方法:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> anyThing<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>\nanyThing<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nanyThing<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nanyThing<span class="token punctuation">.</span>myName<span class="token punctuation">.</span><span class="token function">setFirstName</span><span class="token punctuation">(</span><span class="token string">&quot;Cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以认为，<strong>声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值</strong>。</p><h2 id="未声明类型的变量" tabindex="-1"><a class="header-anchor" href="#未声明类型的变量" aria-hidden="true">#</a> 未声明类型的变量</h2><p><strong>变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> something<span class="token punctuation">;</span>\nsomething <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>\nsomething <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n\nsomething<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> something<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>\nsomething <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>\nsomething <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n\nsomething<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',17),o={href:"http://www.typescriptlang.org/docs/handbook/basic-types.html#any",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("Basic Types # Any"),c=(0,e.Uk)("("),l={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#%E4%BB%BB%E6%84%8F%E5%80%BC",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("中文版"),u=(0,e.Uk)(")"),d={},k=(0,a(13860).Z)(d,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e.kq)(" more "),p,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",o,[i,(0,e.Wm)(a)]),c,(0,e._)("a",l,[r,(0,e.Wm)(a)]),u])])])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},75660:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-b5cdbcca","path":"/code/language/typescript/basics/any.html","title":"任意值","lang":"zh-CN","frontmatter":{"title":"任意值","icon":"any","category":["TypeScript"],"summary":"任意值(Any)用来表示允许赋值为任意类型。\\n","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/language/typescript/basics/any.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"任意值"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"<p>任意值(Any)用来表示允许赋值为任意类型。</p>\\n","headers":[{"level":2,"title":"什么是任意值类型","slug":"什么是任意值类型","children":[]},{"level":2,"title":"任意值的属性和方法","slug":"任意值的属性和方法","children":[]},{"level":2,"title":"未声明类型的变量","slug":"未声明类型的变量","children":[]},{"level":2,"title":"参考","slug":"参考","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":0.91,"words":273},"filePathRelative":"code/language/typescript/basics/any.md","localizedDate":"2022年6月27日"}')}}]);