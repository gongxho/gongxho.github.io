"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[76935],{72301:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var r=o(78e3);const a=[(0,r.uE)('<h1 id="编译" tabindex="-1"><a class="header-anchor" href="#编译" aria-hidden="true">#</a> 编译</h1><p>之前我们分析过模板到真实 DOM 渲染的过程，中间有一个环节是把模板编译成 <code>render</code> 函数，这个过程我们把它称作编译。</p><p>虽然我们可以直接为组件编写 <code>render</code> 函数，但是编写 <code>template</code> 模板更加直观，也更符合我们的开发习惯。</p><p>Vue.js 提供了 2 个版本，一个是 Runtime + Compiler 的，一个是 Runtime only 的，前者是包含编译代码的，可以把编译过程放在运行时做，后者是不包含编译代码的，需要借助 webpack 的 <code>vue-loader</code> 事先把模板编译成 <code>render </code>函数。</p><p>这一章我们就来分析编译的过程，对编译过程的了解会让我们对 Vue 的指令、内置组件等有更好的理解。不过由于编译的过程是一个相对复杂的过程，我们只要求理解整体的流程、输入和输出即可，对于细节我们不必抠太细。有些细节比如对于 <code>slot</code> 的处理我们可以在之后去分析插槽实现的时候再详细分析。</p>',5)],n={},c=(0,o(13860).Z)(n,[["render",function(e,t){return(0,r.wg)(),(0,r.iD)("div",null,a)}]])},13860:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,r]of t)o[e]=r;return o}},51168:(e,t,o)=>{o.r(t),o.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-5263e946","path":"/vue2/compile/","title":"编译","lang":"zh-CN","frontmatter":{"author":"ustbhuangyi","summary":"编译 之前我们分析过模板到真实 DOM 渲染的过程，中间有一个环节是把模板编译成 render 函数，这个过程我们把它称作编译。 虽然我们可以直接为组件编写 render 函数，但是编写 template 模板更加直观，也更符合我们的开发习惯。 Vue.js 提供了 2 个版本，一个是 Runtime + Compiler 的，一个是 Runtime onl","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/vue2/compile/"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"编译"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T09:14:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"ustbhuangyi"}],["meta",{"property":"article:modified_time","content":"2022-08-29T09:14:21.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1661764461000,"updatedTime":1661764461000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":0.95,"words":285},"filePathRelative":"vue2/compile/index.md","localizedDate":"2022年8月29日"}')}}]);