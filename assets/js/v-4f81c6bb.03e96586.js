"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[20640],{48717:(t,n,e)=>{e.r(n),e.d(n,{default:()=>h});var o=e(78e3);const l=(0,o.uE)('<p>函数是 Python 内建支持的一种封装，我们通过把大段代码拆成函数，通过一层一层的函数调用，就可以把复杂任务分解成简单的任务，这种分解可以称之为面向过程的程序设计。函数就是面向过程的程序设计的基本单元。</p><p>而函数式编程(请注意多了一个“式”字)——Functional Programming，虽然也可以归结到面向过程的程序设计，但其思想更接近数学计算。</p><p>我们首先要搞明白计算机(Computer)和计算(Compute)的概念。</p><p>在计算机的层次上，CPU 执行的是加减乘除的指令代码，以及各种条件判断和跳转指令，所以，汇编语言是最贴近计算机的语言。</p><p>而计算则指数学意义上的计算，越是抽象的计算，离计算机硬件越远。</p><p>对应到编程语言，就是越低级的语言，越贴近计算机，抽象程度低，执行效率高，比如 C 语言；越高级的语言，越贴近计算，抽象程度高，执行效率低，比如 Lisp 语言。</p><p>函数式编程就是一种抽象程度很高的编程范式，纯粹的函数式编程语言编写的函数没有变量，因此，任意一个函数，只要输入是确定的，输出就是确定的，这种纯函数我们称之为没有副作用。而允许使用变量的程序设计语言，由于函数内部的变量状态不确定，同样的输入，可能得到不同的输出，因此，这种函数是有副作用的。</p><p>函数式编程的一个特点就是，允许把函数本身作为参数传入另一个函数，还允许返回一个函数!</p><p>Python 对函数式编程提供部分支持。由于 Python 允许使用变量，因此，Python 不是纯函数式编程语言。</p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>',10),a=(0,o.Uk)("高阶函数介绍"),r=(0,o.Uk)("map / reduce"),i=(0,o.Uk)("filter"),u=(0,o.Uk)("sorted"),p=(0,o.Uk)("返回函数"),m=(0,o.Uk)("匿名函数"),c=(0,o.Uk)("装饰器"),g=(0,o.Uk)("偏函数"),d={},h=(0,e(13860).Z)(d,[["render",function(t,n){const e=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[l,(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(e,{to:"/code/language/python/functional-programming/high-order-function/intro.html"},{default:(0,o.w5)((()=>[a])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(e,{to:"/code/language/python/functional-programming/high-order-function/map-and-reduce.html"},{default:(0,o.w5)((()=>[r])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(e,{to:"/code/language/python/functional-programming/high-order-function/filter.html"},{default:(0,o.w5)((()=>[i])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(e,{to:"/code/language/python/functional-programming/high-order-function/sorted.html"},{default:(0,o.w5)((()=>[u])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(e,{to:"/code/language/python/functional-programming/return-function.html"},{default:(0,o.w5)((()=>[p])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(e,{to:"/code/language/python/functional-programming/anonymous-function.html"},{default:(0,o.w5)((()=>[m])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(e,{to:"/code/language/python/functional-programming/decorator.html"},{default:(0,o.w5)((()=>[c])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(e,{to:"/code/language/python/functional-programming/parital-function.html"},{default:(0,o.w5)((()=>[g])),_:1})])])])])}]])},13860:(t,n)=>{n.Z=(t,n)=>{const e=t.__vccOpts||t;for(const[t,o]of n)e[t]=o;return e}},435:(t,n,e)=>{e.r(n),e.d(n,{data:()=>o});const o=JSON.parse('{"key":"v-4f81c6bb","path":"/code/language/python/functional-programming/","title":"函数式编程","lang":"zh-CN","frontmatter":{"title":"函数式编程","icon":"function","author":"廖雪峰","date":"2020-05-31T00:00:00.000Z","category":["Python"],"summary":"函数是 Python 内建支持的一种封装，我们通过把大段代码拆成函数，通过一层一层的函数调用，就可以把复杂任务分解成简单的任务，这种分解可以称之为面向过程的程序设计。函数就是面向过程的程序设计的基本单元。 而函数式编程(请注意多了一个“式”字)——Functional Programming，虽然也可以归结到面向过程的程序设计，但其思想更接近数学计算。 我们","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/language/python/functional-programming/"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"函数式编程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"目录","slug":"目录","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":1.83,"words":550},"filePathRelative":"code/language/python/functional-programming/README.md","localizedDate":"2020年5月31日"}')}}]);