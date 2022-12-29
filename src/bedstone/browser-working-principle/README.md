---
title: 浏览器工作原理与实践
icon: 
category: 浏览器
tag:
  - 浏览器
---

## 宏观视角上的浏览器
::: tip 章节速览
Chrome架构：仅仅打开了1个页面，为什么有4个进程

TCP协议：如何保证页面文件能被完整送达浏览器

HTTP请求流程：为什么很多站点第二次打开速度会很快

导航流程：从输入URL到页面展示这中间发生了什么

渲染流程（上）：HTML、CSS和JavaScript是如何变成页面的

渲染流程（下）：HTML、CSS和JavaScript是如何变成页面的
:::

## 浏览器中的JavaScript执行机制
::: tip 章节速览
变量提升：JavaScript代码是按顺序执行的吗

调用栈：为什么JavaScript代码会出现栈溢出

块级作用域：var缺陷以及为什么要引入let和const

作用域链和闭包：代码中出现相同的变量，JavaScript引擎如何选择

this：从JavaScript执行上下文视角讲this
:::

## V8工作原理
::: tip 章节速览
栈空间和堆空间：数据是如何存储的

垃圾回收：垃圾数据如何自动回收

编译器和解析器：V8如何执行一段JavaScript代码的
:::

## 浏览器中的页面循环系统
::: tip 章节速览
消息队列和事件循环：页面是怎么活起来的

Webapi：setTimeout是怎么实现的

Webapi：XMLHttpRequest是怎么实现的

宏任务和微任务：不是所有的任务都是一个待遇

使用Promise告别回调函数

async await使用同步方式写异步代码
:::

## 浏览器中的页面
::: tip 章节速览
页面性能分析：利用chrome做web性能分析

DOM树：JavaScript是如何影响DOM树构建的

渲染流水线：CSS如何影响首次加载时的白屏时间？

分层和合成机制：为什么css动画比JavaScript高效

页面性能：如何系统优化页面

虚拟DOM：虚拟DOM和实际DOM有何不同

PWA：解决了web应用哪些问题

webComponent：像搭积木一样构建web应用
:::

## 浏览器中的网络
::: tip 章节速览
HTTP1：HTTP性能优化

HTTP2：如何提升网络速度

HTTP3：甩掉TCP、TCL包袱 构建高效网络

同源策略：为什么XMLHttpRequst不能跨域请求资源

跨站脚本攻击XSS：为什么cookie中有httpOnly属性

CSRF攻击：陌生链接不要随便点

沙盒：页面和系统之间的隔离墙

HTTPS：让数据传输更安全
:::