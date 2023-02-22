---
title: HTML&CSS
icon: 
date: 2023-02-18
category: Interview
---

## （掌握）行内元素和块级元素都有哪一些？

1）行内元素

```javascript
<span>、<a>、<b>、<strong>、<img>、<input>、<textarea>、<select>、、<em>、<del>
```

2）块级元素

```javascript
<address>、<center>、<h1>~<h6>、<p>、<pre>、<ul>、<ol>、<dl>、<table>、<div>、<form>
```

## （掌握）BFC

BFC全称”Block Formatting Context”, 中文为“块级格式化上下文”。

流体特性：块状水平元素，如div元素（下同），在默认情况下（非浮动、绝对定位等），水平方向会自动填满外部的容器；

BFC元素特性表现原则就是，内部子元素不会影响外部的元素。

## （掌握）什么是弹性布局？

解决某元素中“子元素”的布局方式，为布局提供最大的灵活性。

设为 flex 布局以后，子元素的 float、clear 和vertical-align属性将失效!!!

display:flex; 属性align-self 定义子元素的位置。

## （掌握）html5有哪些新特性？

(1)Canvas绘图

(2)SVG绘图

(3)地理定位

(4)Web Worker

- web worker 是运行在后台的 JS，独立于其他脚本，不会影响页面的性能。
(5)Web Storage

- 1.Cookie技术 （ 兼容性好,数据不能超4kb,操作复杂）
- 2.（兼容性差,数据8MB,操作简单）sessionStorage
- 3.localStorage

(6)Web Socket

- WebSocket协议是基于TCP的一种新的网络协议。它实现了浏览器与服务器全双工(full-duplex)通信——允许服务器主动发送信息给客户端。

## （掌握）position有哪些属性？

1. position: relative;相对定位

2. position: absolute;绝对定位

3. position: fixed;固定定位

4. position:static：默认值

5. position: sticky 粘性定位

6. position: inherit 规定应该从父元素继承 position 属性的值

7. position: initial 设置该属性为默认值

## （掌握）请说出1px，1rem，1vh，1em各自代表的含义？

`rem`

`rem`是全部的长度都相对于根元素`<html>`元素。通常做法是给html元素设置一个字体大小，然后其他元素的长度单位就为`rem`。

em 元素用em的话是相对于该元素的font-size

`vw/vh`

全称是 Viewport Width 和 Viewport Height，视窗的宽度和高度，相当于 屏幕宽度和高度的 1%，不过，处理宽度的时候%单位更合适，处理高度的 话 `vh` 单位更好。

`px`

px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。

一般电脑的分辨率有{1920 *1024}等不同的分辨率，1920* 1024 前者是屏幕宽度总共有1920个像素,后者则是高度为1024个像素

## （掌握）什么是SPA？

单页面Web应用（single page web application,SPA）：SPA是一种特殊的web应用，是加载单个HTML页面并在用户与应用程序交互时动态更新该页面。

它将所有活动局限于一个web页面中，仅在该web页面初始化时加载相应的HTML、JavaScript、css。

一旦页面加载完成，SPA不会因为用户的操作而进行页面的重新加载或者跳转，而是利用JavaScript动态的变换HTML（采用的是div切换显示和隐藏），从而实现UI与用户的交互。

在SPA应用中，应用加载之后就不会再有整页刷新。相反，展示逻辑预先加载，并有赖于内容Region(区域)中的视图切换来展示内容。

**优点：**用户体验好 、良好的前后端分离。

缺点：

1. 不利于SEO。
2. 初次加载耗时相对增多。
3. 导航不可用，如果一定要导航需要自行实现前进、后退。

## （掌握）简述优雅降级与渐进增强

1、渐进增强（progressive enhancement）

针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

2、优雅降级（graceful degradation）

一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

3、区别：

a. 优雅降级是从复杂的现状开始，并试图减少用户体验的供给；渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。

b. 渐进增强观点认为应该关注于内容本身，这使得渐进增强成为一种更为合理的设计范例；优雅降级观点认为应该针对那些最高级、最完善的浏览器来设计网站。

## （掌握）重绘与重排

1、重绘

重绘是一个元素外观的改变所触发的浏览器行为（例如改变visibility，outline，background等属性），浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。

2、重排

重排时更明显的一种改变，可以理解为渲染树需要重新计算。常见的触发重排的操作：

DOM元素的几何属性变化

DOM树的结构变化（例如节点的增减、移动）

获取某些属性（例如offsetTop，offsetLeft，offsetHeight，offsetWidth，clientWidth，clientHeight等）

改变元素的一些样式（例如调整浏览器窗口大小）

3、两者的区别

重绘不会带来重新布局，并不一定伴随着重排。

在实践中，应该尽量减少重排次数和缩小重排的影响范围。有以下几种方法：

[ ] 将多次改变样式属性的操作合并成一次操作

[ ] 将需要多次重排的元素，position属性设为absolute或fixed，使其脱离文档流，这样它的变化就不会影响到其他元素

[ ] 在内存中多次操作节点，完成后再添加到文档中去

[ ] 如果要对一个元素进行复杂的操作，可以将其display属性设置为none使其隐藏，待操作完成后再显示

[ ] 在需要经常获取那些引起浏览器重排的属性值时，要缓存到变量

## （掌握）解释下浮动和它的工作原理？清除浮动的方法

浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。

1、使用空标签清除浮动

这种方法是在所有浮动标签后面添加一个空标签 定义css clear:both. 弊端就是增加了无意义标签。

2、使用after伪对象清除浮动

该方法只适用于非IE浏览器。具体写法可参照以下示例。使用中需注意以下几点。一、该方法中必须为需要清除浮动元素的伪对象中设置 height:0，否则该元素会比实际高出若干像素；

```css
#parent::after{
  content:"";
  height:0;
  visibility:hidden;
  display:block;
  clear:both;
}
```

3、溢出隐藏

```css
overflow: hidden;
```

4.浮动外部元素

## （掌握）如何让一个盒子在页面垂直水平居中

方法一：已知宽高

```css
div{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
```

方法二：未知宽高

```css
div{
 position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
```

## （掌握）前端性能优化方案

1、减少DOM操作

2、部署前，图片压缩，代码压缩

3、优化js代码结构，减少冗余代码

4、减少http请求，合理设置HTTP缓存

5、使用内容分发cdn加速

6、静态资源缓存

7、图片延迟加载

## （掌握）css选择器优先级顺序

- ID 选择器， 如 #id{}
- 类选择器， 如 .class{}
- 属性选择器， 如 a[href="segmentfault.com"]{}
- 伪类选择器， 如 :hover{}
- 伪元素选择器， 如 ::before{}
- 标签选择器， 如 span{}
- 通配选择器， 如 *{}

## （掌握）CSS3有哪些新特性

- border-radius   圆角
- box-shadow   阴影
- text-shadow   文字阴影
- gradient   线性渐变
- transform  旋转、缩放、移动或倾斜
- scale  缩放
- translate   位移
- 媒体查询   多栏布局   多背景

## （掌握）什么是空元素？

即没有内容的HTML元素，例如：br、meta、hr、link、input、img

## （掌握）如何实现浏览器内多个标签页之间的通讯

1. 定时器setInterval + cookie

在页面A设置一个使用 setInterval 定时器不断刷新，检查 Cookies 的值是否发生变化，如果变化就进行刷新的操作。

由于 Cookies 是在同域可读的，所以在页面 B 审核的时候改变 Cookies 的值，页面 A 自然是可以拿到的。

这样做确实可以实现我想要的功能，但是这样的方法相当浪费资源。虽然在这个性能过盛的时代，浪费不浪费也感觉不出来，但是这种实现方案，确实不够优雅。

**2. 使用localstorage**

localstorage是浏览器多个标签共用的存储空间，所以可以用来实现多标签之间的通信(ps：session是会话级的存储空间，每个标签页都是单独的）。

直接在window对象上添加监听即可：

```javascript
window.onstorage = (e) => {console.log(e)}
// 或者这样
window.addEventListener('storage', (e) => console.log(e))
```

onstorage以及storage事件，针对都是非当前页面对localStorage进行修改时才会触发，当前页面修改localStorage不会触发监听函数。

然后就是在对原有的数据的值进行修改时才会触发，比如原本已经有一个key会a值为b的localStorage，你再执行：localStorage.setItem('a', 'b')代码，同样是不会触发监听函数的。

## （掌握）为什么要初始化css样式

1.浏览器差异

不同浏览器对有些标签的默认值是不同的，如果没对css初始化会出现浏览器之间的页面显示差异

2.提高编码质量

如果不初始化，整个页面做完会很糟糕，重复的css样式很多

## （掌握）CSS3新增的伪类有哪些？

p:first-of-type 选择属于其父元素的首个元素

p:last-of-type 选择属于其父元素的最后元素

p:only-of-type 选择属于其父元素唯一的元素

p:only-child 选择属于其父元素的唯一子元素

p:nth-child(2) 选择属于其父元素的第二个子元素

## （掌握）说说对canvas，svg，webgl的理解

Canvas 是HTML5新增的一个元素对象，名副其实就是一个画布，浏览器 js 配有相应的操作api，可以不再依赖其他的API或组件而直接绘图，相当于2D的API。

Canvas 适用于位图，高数据量高绘制频率（帧率）的场景，如动画、游戏；

SVG 是给数据就可以绘制点、线、图形的，基于 XML 的标记语言；

SVG 适用于矢量图，低数据量低绘制频率的场景，如图形、图表；

WebGL（全写Web Graphics Library）是一种3D绘图标准，通俗说WebGL是canvas绘图中的3D版本。

因为原生的WebGL很复杂，我们经常会使用一些三方的库，如three.js等，WebGL 主要用来做 3D 展示、动画、游戏。

## （掌握）浏览器是如何渲染UI的？

- 浏览器获取HTML文件，然后对文件进行解析，形成DOM Tree
- 与此同时，进行CSS解析，生成Style Rules
- 接着将DOM Tree与Style Rules合成为 Render Tree
- 接着进入布局（Layout）阶段，也就是为每个节点分配一个应出现在屏幕上的确切坐标
- 随后调用GPU进行绘制（Paint），遍历Render Tree的节点，并将元素呈现出来

## （掌握）em、`rem`的区别

em是相对长度单位，相对于当前对象内文本的字体尺寸。

如当前对行内文本的字体尺寸未被人为设置，则相对浏览器的默认字体尺寸。

它会继承父级元素的字体大小，因此并不是一个固定的值。

`rem`是CSS3新增的一个相对单位(root em,根em),使用`rem`为元素设定字体大小事，仍然是相对大小但相对的只是HTML根元素。

## （掌握）解释csssprites，如何使用

Css精灵把一堆小的图片整合到一张大的图片上，减轻服务器对图片的请求数量。

## （掌握）伪类和伪元素的区别

1）伪类(pseudo-classes)

其核⼼就是⽤来选择DOM树之外的信息,不能够被普通选择器选择的⽂档之外的元素，⽤来添加⼀些选择器的特殊效果。

⽐如:hover :active :visited :link :visited :first-child :focus :lang等

由于状态的变化是⾮静态的，所以元素达到⼀个特定状态时，它可能得到⼀个伪类的样式；当状态改变时，它⼜会失去这个样式。

由此可以看出，它的功能和class有些类似，但它是基于⽂档之外的抽象，所以叫 伪类。

2）伪元素(Pseudo-elements)

DOM树没有定义的虚拟元素

核⼼就是需要创建通常不存在于⽂档中的元素，

⽐如::before ::after 它选择的是元素指定内容，表示选择元素内容的之前内容或之后内容。

伪元素控制的内容和元素是没有差别的，但是它本身只是基于元素的抽象，并不存在于⽂档中，所以称为伪元素。⽤于将特殊的效果添加到某些选择器

2）伪类与伪元素的区别

表示⽅法

- CSS2 中伪类、伪元素都是以单冒号:表示,
- CSS2.1 后规定伪类⽤单冒号表示,伪元素⽤双冒号::表示，
- 浏览器同样接受 CSS2 时代已经存在的伪元素(:before, :after, :first�line, :first-letter 等)的单冒号写法。
- CSS2 之后所有新增的伪元素(如::selection)，应该采⽤双冒号的写法。
- CSS3中，伪类与伪元素在语法上也有所区别，伪元素修改为以::开头。浏览器对以:开头的伪元素也继续⽀持，但建议规范书写为::开头

定义不同

- 伪类即假的类，可以添加类来达到效果
- 伪元素即假元素，需要通过添加元素才能达到效果

总结:

- 伪类和伪元素都是⽤来表示⽂档树以外的"元素"。
- 伪类和伪元素分别⽤单冒号:和双冒号::来表示。
- 伪类和伪元素的区别，关键点在于如果没有伪元素(或伪类)，
- 是否需要添加元素才能达到效果，如果是则是伪元素，反之则是伪类。

4）相同之处：

- 伪类和伪元素都不出现在源⽂件和DOM树中。也就是说在html源⽂件中是看不到伪类和伪元素的。 不同之处：
- 伪类其实就是基于普通DOM元素⽽产⽣的不同状态，他是DOM元素的某⼀特征。
- 伪元素能够创建在DOM树中不存在的抽象对象，⽽且这些抽象对象是能够访问到的。

## （掌握） 浏览器工作原理

1. 用户界面
2. 网络
3. UI后端
4. 数据存储
5. 浏览器引擎
6. 渲染引擎
7. js解释器

## （掌握）介绍一下你对浏览器内核的理解？

主要分成两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎。

渲染引擎：

负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。

浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。

所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

JS引擎则：

解析和执行javascript来实现网页的动态效果。最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

## （掌握）常见的浏览器内核有哪些？

- Trident内核：IE,360，傲游，搜狗，世界之窗，腾讯等。[又称MSHTML]
- Gecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等
- Presto内核：Opera7及以上。 [Opera内核原为：Presto，现为：Blink;]
- Webkit内核：Safari,Chrome等。 [ Chrome的：Blink（WebKit的分支）]

## （掌握）一个页面上有大量的图片，加载很慢，你有哪些方法优化这些图片的加载，给用户更好的体验

（1）图片懒加载，在页面上的未可视区域可以添加一个滚动条事件，判断图片位置与浏览器顶端的距离与页面的距离，如果前者小于后者，优先加载。

（2）如果为幻灯片、相册等，可以使用图片预加载技术，将当前展示图片的前一张和后一张优先下载。

（3）如果图片过大，可以使用特殊编码的图片，加载时会先加载一张压缩的特别厉害的缩略图，以提高用户体验。

（4）如果图片展示区域小于图片的真实大小，则因在服务器端根据业务需要先行进行图片压缩，图片压缩后大小与展示一致。

## （掌握）如何进行seo优化？

1、合理的title、description、keywords：搜索对着三项的权重逐个减小，title值强调重点即可；description把页面内容高度概括，不可过分堆砌关键词；keywords列举出重要关键词。

2、语义化的HTML代码，符合W3C规范：语义化代码让搜索引擎容易理解网页

3、重要内容HTML代码放在最前：搜索引擎抓取HTML顺序是从上到下，保证重要内容一定会被抓取

4、重要内容不要用js输出：爬虫不会执行js获取内容

5、少用iframe：搜索引擎不会抓取iframe中的内容

6、非装饰性图片必须加alt属性

7、提高网站速度：网站速度是搜索引擎排序的一个重要指标。

## （掌握）如何实现0.5px边框

1、border+border-image+linear-gradient的方式

```javascript
  <div class="border"></div>
  .border{
        width:200px;
        height: 200px;
        background-color: red;
        margin: 0 auto ;
        border-bottom:  1px solid blue;
        border-image: linear-gradient( to bottom,transparent  50%,Green 50%) 0 0 100% 0 ;
    }
```

2、伪元素+background-image的方式

```javascript
 <div class="border"></div>
 .border {
        width: 200px;
        height: 200px;
        background-color: red;
        margin: 0 auto;
        position: relative;
    }

    .border:before {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100px;
        height: 1px;
        background-color: blue;
        background-image: linear-gradient(to bottom transparent 50%, blue 50%);
    }
```

3、定位+伪元素+transfrom缩放(scale)的方式

```javascript
 <div class="border"></div>

 .border {
        width: 200px;
        height: 200px;
        background-color: red;
        margin: 0 auto;
        position: relative;
    }
```

## （掌握）less和sass的区别

Less是基于JavaScript，是在客户端处理的；Sass是基于Ruby的，是在服务器端处理的。

关于变量在Less和Sass中的唯一区别就是`Less用@`，`Sass用$`。

输出设置，Less没有输出设置，Sass提供4中输出选项：nested, compact, compressed 和 expanded。

Sass支持条件语句，可以使用if{}else{},for{}循环等等，而Less不支持。

## （了解）xhtml和html有什么区别

HTML与XHTML之间的差别，主要分为功能上的差别和书写习惯的差别两方面。

关于功能上的差别，主要是XHTML可兼容各大浏览器、手机以及PDA，并且浏览器也能快速正确地编译网页。

由于XHTML的语法较为严谨，所以如果你是习惯松散结构的HTML编写者，那需要注意XHTML的规则。

下面列出了几条容易犯的错误，供理解。

所有标签都必须小写

在XHTML中，所有的标签都必须小写，不能大小写穿插其中，也不能全部都是大写。

标签必须成双成对

像是`<p>...</p>、<a>...</a>、<div>...</div>`标签等，当出现一个标签时，必须要有对应的结束标签，缺一不可，就像在任何程序语言中的括号一样

标签顺序必须正确

标签由外到内，一层层包覆着，所以假设你先写div后写h1，结尾就要先写h1后写div。只要记住一个原则“先进后出”，先弹出的标签要后结尾。

所有属性都必须使用双引号

在XHTML 1.0中规定连单引号也不能使用，所以全程都得用双引号。

不允许使用`target="_blank"`

从XHTML 1.1开始全面禁止target属性，如果想要有开新窗口的功能，就必须改写为`rel="external"`，并搭配JavaScript实现此效果。

## （了解）img标签上title与alt属性的区别是什么?

alt：当图片不显示是用文字代表

title：为该属性提供信息

## （了解）a标签中 active hover link visited 正确的设置顺序是什么?

按照 lvha 顺序排列 a:link a:visited a:hover a:active

而引用CSS文件的`@import`就是造成这个问题的罪魁祸首。

IE会先加载整个HTML文档的DOM，然后再去导入外部的CSS文件，因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。

解决方法：只要在`<head>`之间加入一个`<link>`或者`<script>`元素就可以了。

## （了解）如何处理HTML5新标签的浏览器兼容性问题

方法一 :

1、使用静态资源的html5shiv包

```javascript
<!--[if lt IE9]>
<script src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
<![endif]-->
```

2、载入后，初始化新标签的css

```css
header, section, footer, aside, nav, main, article, figure { display: block; }
```

方法二：

IE6/IE7/IE8支持通过document方法产生的标签，利用这一特性让这些浏览器支持HTML5新标签

## （了解）HTML5的离线储存怎么使用，工作原理能不能解析一下？

在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。

原理：

HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。

之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

更新缓存：一旦应用被缓存，它就会保持缓存直到发生下列情况：

- 用户清空浏览器缓存
- manifest 文件被修改
- 由程序来更新应用缓存

如何使用：

1、页面头部像下面一样加入一个manifest的属性；

2、在cache.manifest文件的编写离线存储的资源；

3、在离线状态时，操作window.applicationCache进行需求实现。

## （了解）页面导入样式时，使用link和@import有什么区别

1、`link`属于XHTML标签，除了加载CSS外，还能用于定义RSS（简易信息聚合，是一种基于XML标准，在互联网上被广泛采用的内容包装和投递协议），rel连接属性等作用；`@import`是CSS提供的，只能用于加载CSS；

2、页面被加载时，`link`会同时被加载；而`@import`引用的CSS会等到页面被加载完成后再加载；

3、`link`是XHTML标签，没有兼容问题；而`@import`只有在IE5以上才能被识别；

4、`link`支持使用JavaScript控制DOM修改样式；而`@import`不支持。
