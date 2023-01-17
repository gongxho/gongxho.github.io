"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[63423],{58538:(n,s,a)=>{a.r(s),a.d(s,{default:()=>v});var e=a(60329);const t=(0,e.uE)('<p>我们从一个简单的例子开始。</p><p>将以下代码复制到 <code>hello.ts</code> 中:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后执行</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tsc hello.ts\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这时候会生成一个编译好的文件 <code>hello.js</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 中，使用 <code>:</code> 指定变量的类型，<code>:</code> 的前后有没有空格都可以。</p><p>上述例子中，我们用 <code>:</code> 指定 <code>person</code> 参数类型为 <code>string</code>。但是编译为 js 之后，并没有什么检查的代码被插入进来。</p><p><strong>TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。</strong></p>',10),p=(0,e._)("code",null,"let",-1),o=(0,e._)("code",null,"var",-1),c={href:"http://es6.ruanyifeng.com/#docs/let",target:"_blank",rel:"noopener noreferrer"},l=(0,e.uE)('<p>下面尝试把这段代码编译一下:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑器中会提示错误，编译的时候也会出错:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>index.ts<span class="token punctuation">(</span><span class="token number">6,22</span><span class="token punctuation">)</span>: error TS2345: Argument of <span class="token builtin class-name">type</span> <span class="token string">&#39;number[]&#39;</span> is not assignable to parameter of <span class="token builtin class-name">type</span> <span class="token string">&#39;string&#39;</span><span class="token builtin class-name">.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是还是生成了 js 文件:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>TypeScript 编译的时候即使报错了，还是会生成编译结果</strong>，我们仍然可以使用这个编译之后的文件。</p>',7),i=(0,e._)("code",null,"tsconfig.json",-1),r=(0,e._)("code",null,"noEmitOnError",-1),u=(0,e._)("code",null,"tsconfig.json",-1),d={href:"http://www.typescriptlang.org/docs/handbook/tsconfig-json.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html",target:"_blank",rel:"noopener noreferrer"},m={},v=(0,a(13860).Z)(m,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e._)("blockquote",null,[(0,e._)("p",null,[p,(0,e.Uk)(" 是 ES6 中的关键字，和 "),o,(0,e.Uk)(" 类似，用于定义一个局部变量，可以参阅 "),(0,e._)("a",c,[(0,e.Uk)("let 和 const 命令"),(0,e.Wm)(a)]),(0,e.Uk)("。")])]),l,(0,e._)("p",null,[(0,e.Uk)("如果要在报错的时候终止 js 文件的生成，可以在 "),i,(0,e.Uk)(" 中配置 "),r,(0,e.Uk)(" 即可。关于 "),u,(0,e.Uk)("，请参阅"),(0,e._)("a",d,[(0,e.Uk)("官方手册"),(0,e.Wm)(a)]),(0,e.Uk)("("),(0,e._)("a",k,[(0,e.Uk)("中文版"),(0,e.Wm)(a)]),(0,e.Uk)(")。")])])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},77782:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-7552317a","path":"/code/language/typescript/intro/hello-typescript.html","title":"Hello TypeScript","lang":"zh-CN","frontmatter":{"title":"Hello TypeScript","icon":"creative","category":["TypeScript"],"tag":["快速上手"],"summary":"我们从一个简单的例子开始。 将以下代码复制到 hello.ts 中: 然后执行 这时候会生成一个编译好的文件 hello.js: TypeScript 中，使用 : 指定变量的类型，: 的前后有没有空格都可以。 上述例子中，我们用 : 指定 person 参数类型为 string。但是编译为 js 之后，并没有什么检查的代码被插入进来。 TypeScript","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/language/typescript/intro/hello-typescript.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"Hello TypeScript"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":1.25,"words":374},"filePathRelative":"code/language/typescript/intro/hello-typescript.md","localizedDate":"2022年6月27日"}')}}]);