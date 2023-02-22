---
title: 小程序
icon: 
date: 2023-02-18
category: Interview
---

## （掌握）小程序登录流程

- wx.login获取临时登录凭证code
- 发送code给后端，后端通过code，appid，appsecret调用微信接口，返回openid和session-key；
- 后端通过openid和session-key生成token返回给前端
- 前端把后端返回的token缓存起来

## （掌握）微信小程序双向绑定和vue的异同？

大体相同，但小程序直接this.data的属性是不可以同步到视图的，必须调用this.setData()方法。

## （掌握）小程序应用的生命周期

- onLaunch() 用户首次打开小程序触发（全局只触发一次）
- onShow() 小程序初始化完成后触发，小程序从后台进入前台也会触发
- onHide() 小程序从前台进入后台触发
- onError() 小程序发生脚本错误或者API调用失败时触发

## （掌握）小程序页面的生命周期函数？

- onLoad() 页面加载时触发，只会调用一次，可获取当前页面路径中的参数。
- onShow() 页面显示/切入前台时触发，一般用来发送数据请求；
- onReady() 页面初次渲染完成时触发, 只会调用一次，代表页面已可和视图层进行交互。
- onHide() 页面隐藏/切入后台时触发, 如底部 tab 切换到其他页面或小程序切入后台等。
- onUnload() 页面卸载时触发，如redirectTo或navigateBack到其他页面时。

## （掌握）应用与页面生命周期触发的顺序

首次进入小程序会触发应用生命周期

应用（app）onLaunch -> 应用（app）onShow -> 页面（page）-> onLoad -> 页面（page）onShow -> 页面（page）onReady

## （掌握）简述微信小程序原理

小程序本质就是一个单页面应用，所有的页面渲染和事件处理，都在一个页面内进行，但又可以通过微信客户端调用原生的各种接口；

它的架构，是数据驱动的架构模式，它的UI和数据是分离的，所有的页面更新，都需要通过对数据的更改来实现；

它从技术讲和现有的前端开发差不多，采用JavaScript、WXML、WXSS三种技术进行开发；

功能可分为webview和appService两个部分；

webview用来展现UI，appService有来处理业务逻辑、数据及接口调用；

两个部分在两个进程中运行，通过系统层JSBridge实现通信，实现UI的渲染、事件的处理等。

## （掌握）小程序导入外联样式的方法？

使用 `@import` 标识符来导入外联样式。`@import` 后跟需要导入的外联样式表的相对路径，用`;`表示语句结束

```javascript
@import './base.wxss';
```

## （掌握）哪些方法可以用来提高微信小程序的应用速度

1、提高页面加载速度

2、用户行为预测

3、减少默认 data 的大小

4、组件化方案

## （掌握）webview中的页面怎么跳回小程序中？

首先要引入最新版的jweixin-1.3.2.js，然后：

```javascript
wx.miniProgram.navigateTo({
  url: '/pages/login/login'+'$params'
})
```

## （掌握）如何实现下拉刷新？

首先在全局 config 中的 window配置 enablePullDownRefresh ，在 Page 中定义onPullDownRefresh 钩子函数,到达下拉刷新条件后，该钩子函数执行，发起请求方法 请求返回后，调用wx.stopPullDownRefresh停止下拉刷新。

## （掌握）小程序的事件

1、事件分类

冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递。

非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递。

2、事件的绑定

事件绑定的写法同组件的属性，以 key、value 的形式。

key 以bind或catch开头，然后跟上事件的类型，如bindtap、catchtouchstart。

value 是一个字符串，需要在对应的 Page 中定义同名的函数。不然当触发事件的时候会报错。

bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡。

3、如何实现下拉刷新

监听用户下拉刷新事件。

需要在app.json的window (opens new window)选项中或页面配置中开启enablePullDownRefresh。

可以通过wx.startPullDownRefresh (opens new window)触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。

当处理完数据刷新后，wx.stopPullDownRefresh (opens new window)可以停止当前页面的下拉刷新。

## （掌握）小程序的路由方式

**打开新页面：**调用 API wx.navigateTo

**页面重定向：**调用 API wx.redirectTo

**页面返回：**调用 API wx.navigateBack

**Tab 切换：**调用 API wx.switchTab

**重启动：**调用 API wx.reLaunch

## （掌握）小程序页面间有哪些传递数据的方法

全局变量之中传递参数数据 微信小程序初始化时，首先会加载app.json全局样式配置文件和全局变量文件，例如下面的globalData变量。

在app.js定义全局变量后，可以在各页面间直接加载全局变量，小程序提供了getApp()方法，可以直接获取到App({...})这个全局实例对象。

使用本地缓存的方法保存全局变量,本地缓存是有存储限制的，所以建议手动删除不再需要的缓存数据。wx.setStorage

通过在跳转、重定向等转变页面时候，可以直接通过url来传送数据。

`wx.navigateTo({ url: 'test?id=1' })` 在要接收上一页面传递过来的数据的页面通过onLoad事件的options参数里面包含了上一页面所有传递过来的参数数据 `onLoad:function(options){}`

## （了解）用过云开发吗？简述其功能

云开发有三个基础能力：

- 云函数：运行在微信服务器上的函数，处理微信相关操作有天然优势，如获得用户信息异常方便（以前服务端解析很麻烦）
- 云数据库：一个小程序可以直接操作的JSON数据库，可以直接操作数据库，不在需要服务端了。
- 云存储：用来存储文件和图片
