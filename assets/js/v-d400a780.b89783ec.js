"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[89093],{33673:(l,i,e)=>{e.r(i),e.d(i,{default:()=>p});var t=e(60329);const o=[(0,t.uE)("<p><strong>如何评价AngularJS和BackboneJS</strong></p><ul><li><p>backbone具有依赖性，依赖underscore.js。Backbone + Underscore + jQuery(or Zepto)就比一个AngularJS 多出了2 次HTTP请求.</p></li><li><p>Backbone的Model没有与UI视图数据绑定，而是需要在View中自行操作DOM来更新或读取UI数据。AngularJS与此相反，Model直接与UI视图绑定，Model与UI视图的关系，通过directive封装，AngularJS内置的通用directive，就能实现大部分操作了，也就是说，基本不必关心Model与UI视图的关系，直接操作Model就行了，UI视图自动更新</p></li><li><p>AngularJS的directive，你输入特定数据，他就能输出相应UI视图。是一个比较完善的前端MVW框架，包含模板，数据双向绑定，路由，模块化，服务，依赖注入等所有功能，模板功能强大丰富，并且是声明式的，自带了丰富的 Angular 指令</p></li></ul><p><strong>谈谈你对重构的理解</strong></p><ul><li><p>网站重构：在不改变外部行为的前提下，简化结构、添加可读性，而在网站前端保持一致的行为。也就是说是在不改变UI的情况下，对网站进行优化， 在扩展的同时保持一致的UI</p></li><li><p>对于传统的网站来说重构通常是：</p><ul><li><p>表格(table)布局改为DIV+CSS</p></li><li><p>使网站前端兼容于现代浏览器(针对于不合规范的CSS、如对IE6有效的)</p></li><li><p>对于移动平台的优化</p></li><li><p>针对于SEO进行优化</p></li><li><p>深层次的网站重构应该考虑的方面</p></li></ul></li></ul><p><strong>说说你对前端架构师的理解</strong></p><ul><li>负责前端团队的管理及与其他团队的协调工作，提升团队成员能力和整体效率；带领团队完成研发工具及平台前端部分的设计、研发和维护； 带领团队进行前端领域前沿技术研究及新技术调研，保证团队的技术领先负责前端开发规范制定、功能模块化设计、公共组件搭建等工作，并组织培训</li></ul><p><strong>什么样的前端代码是好的</strong></p><ul><li>高复用低耦合，这样文件小，好维护，而且好扩展。</li></ul><p><strong>谈谈你对webpack的看法</strong></p><blockquote><p>WebPack 是一个模块打包工具，你可以使用WebPack管理你的模块依赖，并编绎输出模块们所需的静态文件。它能够很好地管理、打包Web开发中所用到的HTML、Javascript、CSS以及各种静态文件（图片、字体等），让开发过程更加高效。对于不同类型的资源，webpack有对应的模块加载器。webpack模块打包器会分析模块间的依赖关系，最后 生成了优化且合并后的静态资源</p></blockquote><p><strong>页面重构怎么操作？</strong></p><ul><li><p>网站重构：不改变UI的情况下，对网站进行优化，在扩展的同时保持一致的UI。</p></li><li><p>页面重构可以考虑的方面：</p><ul><li>升级第三方依赖</li><li>使用HTML5、CSS3、ES6 新特性</li><li>加入响应式布局</li><li>统一代码风格规范</li><li>减少代码间的耦合</li><li>压缩/合并静态资源</li><li>程序的性能优化</li><li>采用CDN来加速资源加载</li><li>对于JS DOM的优化</li><li>HTTP服务器的文件缓存</li></ul></li></ul><p><strong>列举IE与其他浏览器不一样的特性？</strong></p><ul><li>IE 的渲染引擎是 Trident 与 W3C 标准差异较大：例如盒子模型的怪异模式</li><li>JS 方面有很多独立的方法，例如事件处理不同：绑定/删除事件，阻止冒泡，阻止默认事件等</li><li>CSS 方面也有自己独有的处理方式，例如设置透明，低版本IE中使用滤镜的方式</li></ul><p><strong>是否了解公钥加密和私钥加密？</strong></p><ul><li>私钥用于对数据进行签名，公钥用于对签名进行验证</li><li>网站在浏览器端用公钥加密敏感数据，然后在服务器端再用私钥解密</li></ul><p><strong>WEB应用从服务器主动推送Data到客户端有那些方式？</strong></p><ul><li>AJAX 轮询</li><li>html5 服务器推送事件 <code>(new EventSource(SERVER_URL)).addEventListener(&quot;message&quot;, func);</code></li><li>html5 Websocket</li></ul><ul><li><code>(new WebSocket(SERVER_URL)).addEventListener(&quot;message&quot;, func);</code></li></ul><p><strong>你怎么看待 Web App/hybrid App/Native App？（移动端前端 和 Web 前端区别？）</strong></p><ul><li><p>Web App(HTML5)：采用HTML5生存在浏览器中的应用，不需要下载安装</p><ul><li>优点：开发成本低，迭代更新容易，不需用户升级，跨多个平台和终端</li><li>缺点：消息推送不够及时，支持图形和动画效果较差，功能使用限制（相机、GPS等）</li></ul></li><li><p>Hybrid App(混合开发)：UI WebView，需要下载安装</p><ul><li>优点：接近 Native App 的体验，部分支持离线功能</li><li>缺点：性能速度较慢，未知的部署时间，受限于技术尚不成熟</li></ul></li><li><p>Native App(原生开发)：依托于操作系统，有很强的交互，需要用户下载安装使用</p><ul><li>优点：用户体验完美，支持离线工作，可访问本地资源（通讯录，相册）</li><li>缺点：开发成本高（多系统），开发成本高（版本更新），需要应用商店的审核</li></ul></li></ul><p><strong>Web 前端开发的注意事项？</strong></p><ul><li>特别设置 meta 标签 viewport</li><li>百分比布局宽度，结合 box-sizing: border-box;</li><li>使用 rem 作为计算单位。rem 只参照跟节点 html 的字体大小计算</li><li>使用 css3 新特性。弹性盒模型、多列布局、媒体查询等</li><li>多机型、多尺寸、多系统覆盖测试</li></ul><p><strong>在设计 Web APP 时，应当遵循以下几点</strong></p><ul><li>简化不重要的动画/动效/图形文字样式</li><li>少用手势，避免与浏览器手势冲突</li><li>减少页面内容，页面跳转次数，尽量在当前页面显示</li><li>增强 Loading 趣味性，增强页面主次关系</li></ul><p><strong>平时如何管理你的项目？</strong></p><ul><li>规定全局样式、公共脚本</li><li>严格要求代码注释(html/js/css)</li><li>严格要求静态资源存放路径</li><li>Git 提交必须填写说明</li></ul><p><strong>如何设计突发大规模并发架构？</strong></p><ul><li>及时响应(NoSQL缓存)</li><li>数据安全(数据备份)</li><li>负载均衡</li></ul><p><strong>说说最近最流行的一些东西吧？</strong></p><ul><li>ES6、Node、React、Webpack</li></ul>",31)],r={},p=(0,e(13860).Z)(r,[["render",function(l,i){return(0,t.wg)(),(0,t.iD)("div",null,o)}]])},13860:(l,i)=>{i.Z=(l,i)=>{const e=l.__vccOpts||l;for(const[l,t]of i)e[l]=t;return e}},23581:(l,i,e)=>{e.r(i),e.d(i,{data:()=>t});const t=JSON.parse('{"key":"v-d400a780","path":"/Interview/base/other.html","title":"谈谈你对重构的理解","lang":"zh-CN","frontmatter":{"title":"谈谈你对重构的理解","icon":null,"date":"2022-12-15T00:00:00.000Z","category":["Interview"],"summary":"如何评价AngularJS和BackboneJS backbone具有依赖性，依赖underscore.js。Backbone + Underscore + jQuery(or Zepto)就比一个AngularJS 多出了2 次HTTP请求.; Backbone的Model没有与UI视图数据绑定，而是需要在View中自行操作DOM来更新或读取UI数据。An","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/Interview/base/other.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"谈谈你对重构的理解"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-17T08:24:10.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-12-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-17T08:24:10.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1673943850000,"updatedTime":1673943850000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":5.19,"words":1556},"filePathRelative":"Interview/base/other.md","localizedDate":"2022年12月15日"}')}}]);