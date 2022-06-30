"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[88206],{12110:(e,l,i)=>{i.r(l),i.d(l,{default:()=>O});var t=i(78e3);const p=(0,t._)("p",null,"小程序开发框架的逻辑层 (App Service) 使用 JavaScript 引擎为小程序提供开发者 JavaScript 代码的运行环境以及微信小程序的特有功能。",-1),n=(0,t._)("p",null,"逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈。",-1),a=(0,t._)("p",null,"开发者写的所有代码最终将会打包成一份 JavaScript 文件，并在小程序启动的时候运行，直到小程序销毁。这一行为类似 ServiceWorker，所以逻辑层也称之为 App Service。",-1),u=(0,t._)("p",null,"在 JavaScript 的基础上，我们增加了一些功能，以方便小程序的开发:",-1),c=(0,t.Uk)("增加 "),r=(0,t._)("code",null,"App",-1),o=(0,t.Uk)(" 和 "),d=(0,t._)("code",null,"Page",-1),m=(0,t.Uk)(" 方法，进行 "),_=(0,t.Uk)("程序注册"),s=(0,t.Uk)(" 和 "),g=(0,t.Uk)("页面注册"),v=(0,t.Uk)("。"),k=(0,t._)("li",null,[(0,t.Uk)("增加 "),(0,t._)("code",null,"getApp"),(0,t.Uk)(" 和 "),(0,t._)("code",null,"getCurrentPages"),(0,t.Uk)(" 方法，分别用来获取 "),(0,t._)("code",null,"App"),(0,t.Uk)(" 实例和当前页面栈。")],-1),U=(0,t.Uk)("提供丰富的 "),h=(0,t.Uk)("API"),f=(0,t.Uk)("，如微信用户数据，扫一扫，支付等微信特有能力。"),w=(0,t.Uk)("提供 "),S=(0,t.Uk)("模块化能力"),W=(0,t.Uk)("，每个页面有独立的作用域。"),y=(0,t._)("div",{class:"custom-container warning"},[(0,t._)("p",{class:"custom-container-title"},"注意"),(0,t._)("p",null,[(0,t.Uk)("小程序框架的逻辑层并非运行在浏览器中，因此 JavaScript 在 web 中一些能力都无法使用，如 "),(0,t._)("code",null,"window"),(0,t.Uk)("，"),(0,t._)("code",null,"document"),(0,t.Uk)(" 等。")])],-1),A=(0,t._)("h2",{id:"文档",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#文档","aria-hidden":"true"},"#"),(0,t.Uk)(" 文档")],-1),J=(0,t.Uk)("生命周期"),b=(0,t.Uk)("路由"),P=(0,t.Uk)("注册"),x=(0,t.Uk)("App()"),C=(0,t.Uk)("Page()"),T=(0,t.Uk)("运行"),z=(0,t.Uk)("模块化"),Z=(0,t.Uk)("API"),q=(0,t.Uk)("路由"),D=(0,t.Uk)("数据缓存"),N=(0,t.Uk)("交互"),R=(0,t.Uk)("网络"),E=(0,t.Uk)("系统信息"),I={},O=(0,i(13860).Z)(I,[["render",function(e,l){const i=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[p,n,a,(0,t.kq)(" more "),u,(0,t._)("ul",null,[(0,t._)("li",null,[c,r,o,d,m,(0,t.Wm)(i,{to:"/code/mini-app/guide/service/app.html"},{default:(0,t.w5)((()=>[_])),_:1}),s,(0,t.Wm)(i,{to:"/code/mini-app/guide/service/page.html"},{default:(0,t.w5)((()=>[g])),_:1}),v]),k,(0,t._)("li",null,[U,(0,t.Wm)(i,{to:"/code/mini-app/guide/service/api/"},{default:(0,t.w5)((()=>[h])),_:1}),f]),(0,t._)("li",null,[w,(0,t.Wm)(i,{to:"/code/mini-app/guide/service/module.html"},{default:(0,t.w5)((()=>[S])),_:1}),W])]),y,A,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/lifetime.html"},{default:(0,t.w5)((()=>[J])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/route.html"},{default:(0,t.w5)((()=>[b])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/register.html"},{default:(0,t.w5)((()=>[P])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/app.html"},{default:(0,t.w5)((()=>[x])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/page.html"},{default:(0,t.w5)((()=>[C])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/run.html"},{default:(0,t.w5)((()=>[T])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/module.html"},{default:(0,t.w5)((()=>[z])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/api/"},{default:(0,t.w5)((()=>[Z])),_:1})]),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/api/route.html"},{default:(0,t.w5)((()=>[q])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/api/storage.html"},{default:(0,t.w5)((()=>[D])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/api/interact.html"},{default:(0,t.w5)((()=>[N])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/api/network.html"},{default:(0,t.w5)((()=>[R])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/api/system.html"},{default:(0,t.w5)((()=>[E])),_:1})])])])])])])}]])},13860:(e,l)=>{l.Z=(e,l)=>{const i=e.__vccOpts||e;for(const[e,t]of l)i[e]=t;return i}},34641:(e,l,i)=>{i.r(l),i.d(l,{data:()=>t});const t=JSON.parse('{"key":"v-184003f0","path":"/code/mini-app/guide/service/","title":"逻辑层","lang":"zh-CN","frontmatter":{"title":"逻辑层","icon":"process","category":["小程序"],"summary":"小程序开发框架的逻辑层 (App Service) 使用 JavaScript 引擎为小程序提供开发者 JavaScript 代码的运行环境以及微信小程序的特有功能。\\n逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈。\\n开发者写的所有代码最终将会打包成一份 JavaScript 文件，并在小程序启动的时候运行，直到小程序销毁。这一行为类似 ServiceWorker，所以逻辑层也称之为 App Service。\\n","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/mini-app/guide/service/"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"逻辑层"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"<p>小程序开发框架的逻辑层 (App Service) 使用 JavaScript 引擎为小程序提供开发者 JavaScript 代码的运行环境以及微信小程序的特有功能。</p>\\n<p>逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈。</p>\\n<p>开发者写的所有代码最终将会打包成一份 JavaScript 文件，并在小程序启动的时候运行，直到小程序销毁。这一行为类似 ServiceWorker，所以逻辑层也称之为 App Service。</p>\\n","headers":[{"level":2,"title":"文档","slug":"文档","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":1.12,"words":336},"filePathRelative":"code/mini-app/guide/service/README.md","localizedDate":"2022年6月27日"}')}}]);