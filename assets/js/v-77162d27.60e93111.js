"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[2550],{68694:(e,a,i)=>{i.r(a),i.d(a,{default:()=>d});var t=i(60329);const l=[(0,t.uE)('<h1 id="http请求流程-为什么很多站点第二次打开速度会很快" tabindex="-1"><a class="header-anchor" href="#http请求流程-为什么很多站点第二次打开速度会很快" aria-hidden="true">#</a> HTTP请求流程：为什么很多站点第二次打开速度会很快</h1><p>一个TCP连接过程包括了建立连接、传输数据和断开连接三个阶段。</p><p>而HTTP协议，正是建立在TCP连接基础之上的。HTTP是一种允许浏览器向服务器获取资源的协议，是Web的基础，通常由浏览器发起请求，用来获取不同类型的文件，例如HTML文件、CSS文件、JavaScript文件、图片、视频等。此外，HTTP也是浏览器使用最广的协议，所以要想学好浏览器，就要先深入了解HTTP。</p><p>不知道你是否有过下面这些疑问：</p><ol><li>为什么通常在第一次访问一个站点时，打开速度很慢，当再次访问这个站点时，速度就很快了？</li><li>当登录过一个网站之后，下次再访问该站点，就已经处于登录状态了，这是怎么做到的呢？</li></ol><p>这一切的秘密都隐藏在HTTP的请求过程中。所以，在今天这篇文章中，我将通过分析一个HTTP请求过程中每一步的状态来带你了解完整的HTTP请求过程，希望你看完这篇文章后，能够对HTTP协议有个全新的认识</p><h2 id="浏览器端发起http请求流程" tabindex="-1"><a class="header-anchor" href="#浏览器端发起http请求流程" aria-hidden="true">#</a> 浏览器端发起HTTP请求流程</h2><p>如果你在浏览器地址栏里键入地址：http://baidu.com， 那么接下来，浏览器会完成哪些动作呢？下面我们就一步一步详细“追踪”下</p><h3 id="_1-构建请求" tabindex="-1"><a class="header-anchor" href="#_1-构建请求" aria-hidden="true">#</a> 1. 构建请求</h3><p>首先，浏览器构建请求行信息（如下所示），构建好后，浏览器准备发起网络请求</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /index.html HTTP1.1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-查找缓存" tabindex="-1"><a class="header-anchor" href="#_2-查找缓存" aria-hidden="true">#</a> 2. 查找缓存</h3><p>在真正发起网络请求之前，浏览器会先在浏览器缓存中查询是否有要请求的文件。其中，浏览器缓存是一种在本地保存资源副本，以供下次请求时直接使用的技术。</p><p>当浏览器发现请求的资源已经在浏览器缓存中存有副本，它会拦截请求，返回该资源的副本，并直接结束请求，而不会再去源服务器重新下载。这样做的好处有：</p><ul><li>缓解服务器端压力，提升性能（获取资源的耗时更短了）；</li><li>对于网站来说，缓存是实现快速资源加载的重要组成部分。</li></ul><p>当然，如果缓存查找失败，就会进入网络请求过程了。</p><h3 id="_3-准备ip地址和端口" tabindex="-1"><a class="header-anchor" href="#_3-准备ip地址和端口" aria-hidden="true">#</a> 3. 准备IP地址和端口</h3><p>不过，先不急，在了解网络请求之前，我们需要先看看HTTP和TCP的关系。因为浏览器使用HTTP协议作为应用层协议，用来封装请求的文本信息；并使用TCP/IP作传输层协议将它发到网络上，所以在HTTP工作开始之前，浏览器需要通过TCP与服务器建立连接。也就是说HTTP的内容是通过TCP的传输数据阶段来实现的，你可以结合下图更好地理解这二者的关系。</p><p><img src="https://static001.geekbang.org/resource/image/12/80/1277f342174b23f9442d3b27016d7980.png" alt=""></p><p>那接下来你可以思考这么“一连串”问题：</p><ul><li>HTTP网络请求的第一步是做什么呢？结合上图看，是和服务器建立TCP连接。</li><li>那建立连接的信息都有了吗？上一篇文章中，我们讲到建立TCP连接的第一步就是需要准备IP地址和端口号。</li><li>那怎么获取IP地址和端口号呢？这得看看我们现在有什么，我们有一个URL地址，那么是否可以利用URL地址来获取IP和端口信息呢？</li></ul><p>在上一篇文章中，我们介绍过数据包都是通过IP地址传输给接收方的。由于IP地址是数字标识，比如极客时间网站的IP是39.106.233.176, 难以记忆，但使用极客时间的域名（time.geekbang.org）就好记多了，所以基于这个需求又出现了一个服务，负责把域名和IP地址做一一映射关系。这套域名映射为IP的系统就叫做“域名系统”，简称DNS（Domain Name System）。</p><p>所以，这样一路推导下来，你会发现在第一步浏览器会请求DNS返回域名对应的IP。当然浏览器还提供了DNS数据缓存服务，如果某个域名已经解析过了，那么浏览器会缓存解析的结果，以供下次查询时直接使用，这样也会减少一次网络请求</p><p>拿到IP之后，接下来就需要获取端口号了。通常情况下，如果URL没有特别指明端口号，那么HTTP协议默认是80端口。</p><h3 id="_4-等待tcp队列" tabindex="-1"><a class="header-anchor" href="#_4-等待tcp队列" aria-hidden="true">#</a> 4. 等待TCP队列</h3><p>现在已经把端口和IP地址都准备好了，那么下一步是不是可以建立TCP连接了呢？</p><p>答案依然是“不行”。Chrome有个机制，同一个域名同时最多只能建立6个TCP连接，如果在同一个域名下同时有10个请求发生，那么其中4个请求会进入排队等待状态，直至进行中的请求完成。</p><p>当然，如果当前请求数量少于6，会直接进入下一步，建立TCP连接。</p><h3 id="_5-建立tcp连接" tabindex="-1"><a class="header-anchor" href="#_5-建立tcp连接" aria-hidden="true">#</a> 5. 建立TCP连接</h3><p>排队等待结束之后，终于可以快乐地和服务器握手了，在HTTP工作开始之前，浏览器通过TCP与服务器建立连接。而TCP的工作方式，我在上一篇文章中已经做过详细介绍了，如果有必要，你可以自行回顾下，这里我就不再重复讲述了。</p><h3 id="_6-发送http请求" tabindex="-1"><a class="header-anchor" href="#_6-发送http请求" aria-hidden="true">#</a> 6. 发送HTTP请求</h3><p>一旦建立了TCP连接，浏览器就可以和服务器进行通信了。而HTTP中的数据正是在这个通信过程中传输的。</p><p>你可以结合下图来理解，浏览器是如何发送请求信息给服务器的。</p><p><img src="https://static001.geekbang.org/resource/image/b8/d7/b8993c73f7b60feb9b8bd147545c47d7.png" alt=""></p><p>首先浏览器会向服务器发送请求行，它包括了请求方法、请求URI（Uniform Resource Identifier）和HTTP版本协议。</p><p>发送请求行，就是告诉服务器浏览器需要什么资源，最常用的请求方法是Get。比如，直接在浏览器地址栏键入极客时间的域名（time.geekbang.org），这就是告诉服务器要Get它的首页资源。</p><p>另外一个常用的请求方法是POST，它用于发送一些数据给服务器，比如登录一个网站，就需要通过POST方法把用户信息发送给服务器。如果使用POST方法，那么浏览器还要准备数据给服务器，这里准备的数据是通过请求体来发送。</p><p>在浏览器发送请求行命令之后，还要以请求头形式发送其他一些信息，把浏览器的一些基础信息告诉服务器。比如包含了浏览器所使用的操作系统、浏览器内核等信息，以及当前请求的域名信息、浏览器端的Cookie信息，等等</p><h2 id="服务器端处理http请求流程" tabindex="-1"><a class="header-anchor" href="#服务器端处理http请求流程" aria-hidden="true">#</a> 服务器端处理HTTP请求流程</h2><p>历经千辛万苦，HTTP的请求信息终于被送达了服务器。接下来，服务器会根据浏览器的请求信息来准备相应的内容</p><h3 id="_1-返回请求" tabindex="-1"><a class="header-anchor" href="#_1-返回请求" aria-hidden="true">#</a> 1. 返回请求</h3><p>一旦服务器处理结束，便可以返回数据给浏览器了。你可以通过工具软件curl来查看返回请求数据，具体使用方法是在命令行中输入以下命令：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -i  https://time.geekbang.org/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意这里加上了-i是为了返回响应行、响应头和响应体的数据，返回的结果如下图所示，你可以结合这些数据来理解服务器是如何响应浏览器的。</p><p><img src="https://static001.geekbang.org/resource/image/3e/76/3e30476a4bbda49fd7cd4fd0ea09f076.png" alt=""></p><p>首先服务器会返回响应行，包括协议版本和状态码。</p><p>但并不是所有的请求都可以被服务器处理的，那么一些无法处理或者处理出错的信息，怎么办呢？服务器会通过请求行的状态码来告诉浏览器它的处理结果，比如：</p><ul><li>最常用的状态码是200，表示处理成功；</li><li>如果没有找到页面，则会返回404-</li></ul><p>状态码类型很多，这里我就不过多介绍了，网上有很多资料，你可以自行查询和学习。</p><p>随后，正如浏览器会随同请求发送请求头一样，服务器也会随同响应向浏览器发送响应头。响应头包含了服务器自身的一些信息，比如服务器生成返回数据的时间、返回的数据类型（JSON、HTML、流媒体等类型），以及服务器要在客户端保存的Cookie等信息。</p><p>发送完响应头后，服务器就可以继续发送响应体的数据，通常，响应体就包含了HTML的实际内容。</p><p>以上这些就是服务器响应浏览器的具体过程</p><h3 id="_2-断开连接" tabindex="-1"><a class="header-anchor" href="#_2-断开连接" aria-hidden="true">#</a> 2. 断开连接</h3><p>通常情况下，一旦服务器向客户端返回了请求数据，它就要关闭 TCP 连接。不过如果浏览器或者服务器在其头信息中加入了：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Connection:Keep-Alive \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么TCP连接在发送后将仍然保持打开状态，这样浏览器就可以继续通过同一个TCP连接发送请求。保持TCP连接可以省去下次请求时需要建立连接的时间，提升资源加载速度。比如，一个Web页面中内嵌的图片就都来自同一个Web站点，如果初始化了一个持久连接，你就可以复用该连接，以请求其他资源，而不需要重新再建立新的TCP连接。</p><h3 id="_3-重定向" tabindex="-1"><a class="header-anchor" href="#_3-重定向" aria-hidden="true">#</a> 3. 重定向</h3><p>到这里似乎请求流程快结束了，不过还有一种情况你需要了解下，比如当你在浏览器中打开geekbang.org后，你会发现最终打开的页面地址是 https://www.geekbang.org。</p><p>这两个URL之所以不一样，是因为涉及到了一个重定向操作。跟前面一样，你依然可以使用curl来查看下请求geekbang.org 会返回什么内容？</p><p>在控制台输入如下命令：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -I geekbang.org\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意这里输入的参数是-I，和-i不一样，-I表示只需要获取响应头和响应行数据，而不需要获取响应体的数据，最终返回的数据如下图所示：</p><p><img src="https://static001.geekbang.org/resource/image/01/6b/01db98e08233dba5847fab171ce95e6b.png" alt=""></p><p>从图中你可以看到，响应行返回的状态码是301，状态301就是告诉浏览器，我需要重定向到另外一个网址，而需要重定向的网址正是包含在响应头的Location字段中，接下来，浏览器获取Location字段中的地址，并使用该地址重新导航，这就是一个完整重定向的执行流程。这也就解释了为什么输入的是 geekbang.org，最终打开的却是 https://www.geekbang.org 了。</p><p>不过也不要认为这种跳转是必然的。如果你打开 https://12306.cn，你会发现这个站点是打不开的。这是因为12306的服务器并没有处理跳转，所以必须要手动输入完整的 https://www.12306.com 才能打开页面。</p><h2 id="问题解答" tabindex="-1"><a class="header-anchor" href="#问题解答" aria-hidden="true">#</a> 问题解答</h2><p>说了这么多，相信你现在已经了解了HTTP的请求流程，那现在我们再回过头来看看文章开头提出的问题。</p><h3 id="_1-为什么很多站点第二次打开速度会很快" tabindex="-1"><a class="header-anchor" href="#_1-为什么很多站点第二次打开速度会很快" aria-hidden="true">#</a> 1. 为什么很多站点第二次打开速度会很快？</h3><p>如果第二次页面打开很快，主要原因是第一次加载页面过程中，缓存了一些耗时的数据。</p><p>那么，哪些数据会被缓存呢？从上面介绍的核心请求路径可以发现，DNS缓存和页面资源缓存这两块数据是会被浏览器缓存的。其中，DNS缓存比较简单，它主要就是在浏览器本地把对应的IP和域名关联起来，这里就不做过多分析了。</p><p>我们重点看下浏览器资源缓存，下面是缓存处理的过程：</p><p><img src="https://static001.geekbang.org/resource/image/16/02/1670e353bf6cccc096e63e0f102ed502.png" alt=""></p><p>首先，我们看下服务器是通过什么方式让浏览器缓存数据的？</p><p>从上图的第一次请求可以看出，当服务器返回HTTP响应头给浏览器时，浏览器是通过响应头中的Cache-Control字段来设置是否缓存该资源。通常，我们还需要为这个资源设置一个缓存过期时长，而这个时长是通过Cache-Control中的Max-age参数来设置的，比如上图设置的缓存过期时间是2000秒。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Cache-Control:Max-age=2000\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这也就意味着，在该缓存资源还未过期的情况下, 如果再次请求该资源，会直接返回缓存中的资源给浏览器。</p><p>但如果缓存过期了，浏览器则会继续发起网络请求，并且在HTTP请求头中带上：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>If-None-Match:&quot;4f80f-13c-3a1xb12a&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>服务器收到请求头后，会根据If-None-Match的值来判断请求的资源是否有更新。</p><ul><li>如果没有更新，就返回304状态码，相当于服务器告诉浏览器：“这个缓存可以继续使用，这次就不重复发送数据给你了。”</li><li>如果资源有更新，服务器就直接返回最新资源给浏览器。</li></ul><p>简要来说，很多网站第二次访问能够秒开，是因为这些网站把很多资源都缓存在了本地，浏览器缓存直接使用本地副本来回应请求，而不会产生真实的网络请求，从而节省了时间。同时，DNS数据也被浏览器缓存了，这又省去了DNS查询环节</p><h3 id="_2-登录状态是如何保持的" tabindex="-1"><a class="header-anchor" href="#_2-登录状态是如何保持的" aria-hidden="true">#</a> 2. 登录状态是如何保持的？</h3><ul><li>通过上面的介绍，你已经了解了缓存是如何工作的。下面我们再一起看下登录状态是如何保持的。</li><li>用户打开登录页面，在登录框里填入用户名和密码，点击确定按钮。点击按钮会触发页面脚本生成用户登录信息，然后调用POST方法提交用户登录信息给服务器。</li><li>服务器接收到浏览器提交的信息之后，查询后台，验证用户登录信息是否正确，如果正确的话，会生成一段表示用户身份的字符串，并把该字符串写到响应头的<code>Set-Cookie</code>字段里，如下所示，然后把响应头发送给浏览器</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Set-Cookie: UID=3431uad;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>浏览器在接收到服务器的响应头后，开始解析响应头，如果遇到响应头里含有Set-Cookie字段的情况，浏览器就会把这个字段信息保存到本地。比如把UID=3431uad保持到本地。</li><li>当用户再次访问时，浏览器会发起HTTP请求，但在发起请求之前，浏览器会读取之前保存的Cookie数据，并把数据写进请求头里的Cookie字段里（如下所示），然后浏览器再将请求头发送给服务器。</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Cookie: UID=3431uad;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>服务器在收到HTTP请求头数据之后，就会查找请求头里面的“Cookie”字段信息，当查找到包含UID=3431uad的信息时，服务器查询后台，并判断该用户是已登录状态，然后生成含有该用户信息的页面数据，并把生成的数据发送给浏览器。</li><li>浏览器在接收到该含有当前用户的页面数据后，就可以正确展示用户登录的状态信息了</li></ul><p>好了，通过这个流程你可以知道浏览器页面状态是通过使用Cookie来实现的。Cookie流程可以参考下图：</p><p><img src="https://static001.geekbang.org/resource/image/d9/b3/d9d6cefe8d3d6d84a37a626687c6ecb3.png" alt=""></p><p>简单地说，如果服务器端发送的响应头内有 Set-Cookie 的字段，那么浏览器就会将该字段的内容保持到本地。当下次客户端再往该服务器发送请求时，客户端会自动在请求头中加入 Cookie 值后再发送出去。服务器端发现客户端发送过来的Cookie后，会去检查究竟是从哪一个客户端发来的连接请求，然后对比服务器上的记录，最后得到该用户的状态信息。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>本篇文章的内容比较多、比较碎，但是非常重要，所以我先来总结下今天的主要内容。</p><p>为了便于你理解，我画了下面这张详细的“HTTP请求示意图”，用来展现浏览器中的HTTP请求所经历的各个阶段。</p><p><img src="https://static001.geekbang.org/resource/image/1b/6c/1b49976aca2c700883d48d927f48986c.png" alt=""></p><p>从图中可以看到，浏览器中的HTTP请求从发起到结束一共经历了如下八个阶段：构建请求、查找缓存、准备IP和端口、等待TCP队列、建立TCP连接、发起HTTP请求、服务器处理请求、服务器返回请求和断开连接。</p><p>然后我还通过HTTP请求路径解答了两个经常会碰到的问题，一个涉及到了Cache流程，另外一个涉及到如何使用Cookie来进行状态管理。</p><p>通过今天系统的讲解，想必你已经了解了一个HTTP完整的工作流程，相信这些知识点之于你以后的学习或工作会很有帮助。</p>',97)],r={},d=(0,i(13860).Z)(r,[["render",function(e,a){return(0,t.wg)(),(0,t.iD)("div",null,l)}]])},13860:(e,a)=>{a.Z=(e,a)=>{const i=e.__vccOpts||e;for(const[e,t]of a)i[e]=t;return i}},91447:(e,a,i)=>{i.r(a),i.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-77162d27","path":"/bedstone/browser-working-principle/part1/lesson03.html","title":"HTTP请求流程：为什么很多站点第二次打开速度会很快","lang":"zh-CN","frontmatter":{"sidebarDepth":4,"pageClass":"custom-code-highlight","summary":"HTTP请求流程：为什么很多站点第二次打开速度会很快 一个TCP连接过程包括了建立连接、传输数据和断开连接三个阶段。 而HTTP协议，正是建立在TCP连接基础之上的。HTTP是一种允许浏览器向服务器获取资源的协议，是Web的基础，通常由浏览器发起请求，用来获取不同类型的文件，例如HTML文件、CSS文件、JavaScript文件、图片、视频等。此外，HTTP","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/bedstone/browser-working-principle/part1/lesson03.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"HTTP请求流程：为什么很多站点第二次打开速度会很快"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-29T09:56:01.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-29T09:56:01.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"浏览器端发起HTTP请求流程","slug":"浏览器端发起http请求流程","children":[{"level":3,"title":"1. 构建请求","slug":"_1-构建请求","children":[]},{"level":3,"title":"2. 查找缓存","slug":"_2-查找缓存","children":[]},{"level":3,"title":"3. 准备IP地址和端口","slug":"_3-准备ip地址和端口","children":[]},{"level":3,"title":"4. 等待TCP队列","slug":"_4-等待tcp队列","children":[]},{"level":3,"title":"5. 建立TCP连接","slug":"_5-建立tcp连接","children":[]},{"level":3,"title":"6. 发送HTTP请求","slug":"_6-发送http请求","children":[]}]},{"level":2,"title":"服务器端处理HTTP请求流程","slug":"服务器端处理http请求流程","children":[{"level":3,"title":"1. 返回请求","slug":"_1-返回请求","children":[]},{"level":3,"title":"2. 断开连接","slug":"_2-断开连接","children":[]},{"level":3,"title":"3. 重定向","slug":"_3-重定向","children":[]}]},{"level":2,"title":"问题解答","slug":"问题解答","children":[{"level":3,"title":"1. 为什么很多站点第二次打开速度会很快？","slug":"_1-为什么很多站点第二次打开速度会很快","children":[]},{"level":3,"title":"2. 登录状态是如何保持的？","slug":"_2-登录状态是如何保持的","children":[]}]},{"level":2,"title":"总结","slug":"总结","children":[]}],"git":{"createdTime":1672307761000,"updatedTime":1672307761000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":14.85,"words":4454},"filePathRelative":"bedstone/browser-working-principle/part1/lesson03.md","localizedDate":"2022年12月29日"}')}}]);