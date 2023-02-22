"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[43919],{80907:(n,a,s)=>{s.r(a),s.d(a,{default:()=>i});var t=s(60329);const p=(0,t._)("p",null,"高阶函数英文叫 Higher-order function。",-1),e=(0,t._)("p",null,"JavaScript 的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。",-1),o=(0,t.uE)('<p>一个最简单的高阶函数:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> f</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者写作</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们调用 <code>add(-5, 6, Math.abs)</code> 时，参数 <code>x</code>，<code>y</code> 和 <code>f</code> 分别接收 <code>-5</code>，<code>6</code> 和函数 <code>Math.abs</code>，根据函数定义，我们可以推导计算过程为:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">;</span>\ny <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>\nf <span class="token operator">=</span> Math<span class="token punctuation">.</span>abs<span class="token punctuation">;</span>\n<span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">&gt;</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">11</span><span class="token punctuation">;</span>\n<span class="token keyword">return</span> <span class="token number">11</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用代码验证一下:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> f</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span>abs<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写高阶函数，就是让函数的参数能够接收别的函数。</p>',9),c={},i=(0,s(13860).Z)(c,[["render",function(n,a){return(0,t.wg)(),(0,t.iD)("div",null,[p,e,(0,t.kq)(" more "),o])}]])},13860:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}},41183:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-43034483","path":"/code/language/js/function/higher-order-function.html","title":"高阶函数","lang":"zh-CN","frontmatter":{"title":"高阶函数","icon":"advance","date":"2019-10-05T00:00:00.000Z","category":["JavaScript"],"summary":"高阶函数英文叫 Higher-order function。\\nJavaScript 的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。\\n","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/language/js/function/higher-order-function.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"高阶函数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-10-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"<p>高阶函数英文叫 Higher-order function。</p>\\n<p>JavaScript 的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。</p>\\n","headers":[],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":0.74,"words":222},"filePathRelative":"code/language/js/function/higher-order-function.md","localizedDate":"2019年10月5日"}')}}]);