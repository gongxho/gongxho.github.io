"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[58380],{36267:(n,e,a)=>{a.r(e),a.d(e,{default:()=>I});var s=a(60329);const t=(0,s._)("p",null,"在 CSS 中，所有的元素都被一个个的“盒子(box)”包围着。",-1),o=(0,s.uE)('<h2 id="块级与内联" tabindex="-1"><a class="header-anchor" href="#块级与内联" aria-hidden="true">#</a> 块级与内联</h2><p>在 CSS 中我们广泛地使用两种“盒子” —— 块级盒子 (block box) 和 内联盒子 (inline box)。这两种盒子会在页面流(page flow)和元素之间的关系方面表现出不同的行为:</p><p>一个被定义成块级的(block)盒子会表现出以下行为:</p><ul><li>盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽</li><li>每个盒子都会换行</li><li><code>width</code> 和 <code>height</code> 属性可以发挥作用</li><li>内边距 (padding), 外边距 (margin) 和边框 (border) 会将其他元素从当前盒子周围“推开”</li></ul><p>除非特殊指定，诸如标题 (<code>&lt;h1&gt;</code> 等) 和段落 (<code>&lt;p&gt;</code>) 默认情况下都是块级的盒子。</p><p>如果一个盒子对外显示为 <code>inline</code>，那么他的行为如下:</p><ul><li>盒子不会产生换行。</li><li><code>width</code> 和 <code>height</code> 属性将不起作用。</li><li>垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 <code>inline</code> 状态的盒子推开。</li><li>水平方向的内边距、外边距以及边框会被应用而且也会把其他处于 <code>inline</code> 状态的盒子推开。</li></ul><p>用做链接的 <code>&lt;a&gt;</code> 元素、 <code>&lt;span&gt;</code>、 <code>&lt;em&gt;</code> 以及 <code>&lt;strong&gt;</code> 都是默认处于 <code>inline</code> 状态的。</p><p>我们通过对盒子 <code>display</code> 属性的设置，比如 <code>inline</code> 或者 <code>block</code> ，来控制盒子的外部显示类型。</p><div class="custom-container info"><p class="custom-container-title">相关信息</p><p>显示类型分为 <strong>内部</strong> 和 <strong>外部</strong> 显示类型。如上所述， CSS 的 box 模型有一个外部显示类型，来决定盒子是块级还是内联。</p><p>同样盒模型还有内部显示类型，它决定了盒子内部元素是如何布局的。默认情况下是按照正常文档流布局，也意味着它们和其他块元素以及内联元素一样(如上所述).</p><p>但是，我们可以通过使用类似 <code>flex</code> 的 <code>display</code> 属性值来更改内部显示类型。如果设置 <code>display: flex</code>，在一个元素上，外部显示类型是 <code>block</code>，但是内部显示类型修改为 <code>flex</code>。该盒子的所有直接子元素都会成为 <code>flex</code> 元素，会根据 弹性盒子(Flexbox )规则进行布局。同样，我们也可以设置诸如 <code>inline-block</code> <code>inline-flex</code> 这种混合显示类型。</p><p>块级和内联布局是 web 上默认的行为，它被称为正常文档流， 因为如果没有其他说明，我们的盒子布局默认是块级或者内联。</p></div><h2 id="盒模型介绍" tabindex="-1"><a class="header-anchor" href="#盒模型介绍" aria-hidden="true">#</a> 盒模型介绍</h2><p>所有 HTML 元素可以看作盒子，在 CSS 中，&quot;<strong>Box Model</strong>&quot; 这一术语是用来设计和布局时使用。</p><p>CSS 盒模型定义了封装 HTML 元素的方式，它包括: 外边距，边框，内边距，和实际内容。</p><p>完整的 CSS 盒模型应用于块级盒子，内联盒子只使用盒模型中定义的部分内容。</p><p>下面的图片说明了盒子模型 (Box Model):</p><p><img src="data:image/gif;base64,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" alt="Box Model 示意图"></p><p>不同部分的说明:</p><ul><li>Content box (内容) - 盒子的内容，显示文本和图像，可以通过 <code>width</code> 和 <code>height</code> 设置大小。</li><li>Padding box (内边距) - 包围在内容区域外部的空白区域，通过 <code>padding</code> 属性设置。</li><li>Border box (边框) - 围绕在填充和内容外的边框，通过 <code>border</code> 属性设置。</li><li>Margin box (外边距) - 这是最外面的区域，是盒子和其他元素之间的空白区域，通过 <code>margin</code> 属性设置。</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 25px solid green<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了正确设置元素在所有浏览器中的宽度和高度，您需要知道的盒模型是如何工作的。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p><code>padding</code> 和 <code>margin</code> 直译为 “填充” 和 “边距”，有些教程也会这么叫。</p><p>所以您需要清楚 “填充” 和 “内边距”、“边距” 和 “外边距” 说的是一回事。</p></div><h3 id="标准盒模型" tabindex="-1"><a class="header-anchor" href="#标准盒模型" aria-hidden="true">#</a> 标准盒模型</h3><p>当您指定一个 CSS 元素的宽度和高度属性时，您只是设置内容区域(content box)的宽度和高度。<code>padding</code> 和 <code>border</code> 再加上设置的宽高一起决定整个盒子的大小。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>margin 不计入实际大小，但它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止 —— 不会延伸到 margin。</p></div>',24),l=(0,s._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,s._)("pre",{class:"language-html"},[(0,s._)("code",null,[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("div")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"class"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("box"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"/>")]),(0,s.Uk)("\n")])]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"})])],-1),c=(0,s._)("div",{class:"language-css ext-css line-numbers-mode"},[(0,s._)("pre",{class:"language-css"},[(0,s._)("code",null,[(0,s._)("span",{class:"token selector"},"div.box"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"width"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 300px"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"border"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 25px solid green"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"padding"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 25px"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"margin"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 25px"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)("\n")])]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),i=(0,s._)("p",null,"元素盒子的大小为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) = 400px",-1),p=(0,s._)("p",null,"元素占据的空间为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) + 50px (左 + 右边距) = 450px",-1),d=(0,s._)("p",null,"试想一下，您只有 250px 的空间。让我们设置总宽度为 250px 的元素:",-1),r=(0,s._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,s._)("pre",{class:"language-html"},[(0,s._)("code",null,[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("div")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"class"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("box"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"/>")]),(0,s.Uk)("\n")])]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"})])],-1),u=(0,s._)("div",{class:"language-css ext-css line-numbers-mode"},[(0,s._)("pre",{class:"language-css"},[(0,s._)("code",null,[(0,s._)("span",{class:"token selector"},"div.box"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"width"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 220px"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"padding"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 10px"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"border"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 5px solid gray"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"margin"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 0"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)("\n")])]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),k=(0,s.uE)('<p>最终元素的总宽度计算公式是这样的:</p><p>元素的宽度 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框 元素占据的水平空间 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框 + 左边距 + 右边距</p><p>元素的总高度最终计算公式是这样的:</p><p>元素的高度 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框 元素占据的垂直空间 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框 + 上边距 + 下边距</p><h3 id="替代-ie-盒模型" tabindex="-1"><a class="header-anchor" href="#替代-ie-盒模型" aria-hidden="true">#</a> 替代(IE)盒模型</h3><p>您可能会认为盒子的大小还要加上边框和内边距，这样很麻烦，而且您的想法是对的! 因为这个原因，CSS 还有一个替代盒模型。使用这个模型，所有宽度都是可见宽度，所以内容宽度是该宽度减去边框和填充部分。使用上面相同的样式得到 (width = 350px, height = 150px).</p><p>默认浏览器会使用标准模型。如果需要使用替代模型，您可以通过为其设置 <code>box-sizing: border-box</code> 来实现。这样就可以告诉浏览器使用 <code>border-box</code> 来定义区域，从而设定您想要的大小。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您希望所有元素都使用替代模式，而且确实很常用，设置 <code>box-sizing</code> 在 <code>&lt;html&gt;</code> 元素上，然后设置所有元素继承该属性。这是一个很有用的小技巧:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>\n  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">*,\n*::before,\n*::after</span> <span class="token punctuation">{</span>\n  <span class="token property">box-sizing</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用调试工具来查看盒模型" tabindex="-1"><a class="header-anchor" href="#使用调试工具来查看盒模型" aria-hidden="true">#</a> 使用调试工具来查看盒模型</h3><p>浏览器开发者工具 可以使您更容易地理解 box 模型。您可以看到元素的大小以及它的外边距、内边距和边框。这是一个很好的检查元素大小的方式，可以便捷的判断您的盒子大小是否符合预期。</p>',12),m={class:"custom-container info"},b=(0,s._)("p",{class:"custom-container-title"},"相关信息",-1),g={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box_model",target:"_blank",rel:"noopener noreferrer"},h=(0,s.uE)('<h2 id="控制盒模型" tabindex="-1"><a class="header-anchor" href="#控制盒模型" aria-hidden="true">#</a> 控制盒模型</h2><p><code>margin</code>、<code>padding</code> 和 <code>border</code> 是属性的简写，允许我们一次设置盒子的四个边。这些简写等价于分别控制盒子的不同边的普通写法。</p><h3 id="外边距" tabindex="-1"><a class="header-anchor" href="#外边距" aria-hidden="true">#</a> 外边距</h3><p>外边距是盒子周围一圈看不到的空间。它会把其他元素从盒子旁边推开。外边距属性值可以为正也可以为负。设置负值会导致和其他内容重叠。无论使用标准模型还是替代模型，外边距总是在计算可见部分后额外添加。</p><p>我们可以使用 <code>margin</code> 属性一次控制一个元素的所有边距，或者每边单独使用等价的普通属性控制:</p><ul><li><code>margin-top</code></li><li><code>margin-right</code></li><li><code>margin-bottom</code></li><li><code>margin-left</code></li></ul><h4 id="外边距折叠" tabindex="-1"><a class="header-anchor" href="#外边距折叠" aria-hidden="true">#</a> 外边距折叠</h4><p>如果您有两个外边距相接的元素，这些外边距将合并为一个外边距，即最大的单个外边距的大小。</p>',8),v=(0,s._)("p",null,[(0,s.Uk)("我们有两个段落。顶部段落 "),(0,s._)("code",null,"margin-bottom"),(0,s.Uk)(" 为 "),(0,s._)("code",null,"50px"),(0,s.Uk)("。第二段的 "),(0,s._)("code",null,"margin-top"),(0,s.Uk)(" 为 "),(0,s._)("code",null,"30px"),(0,s.Uk)("。因为外边距折叠的概念，所以框之间的实际外边距是 "),(0,s._)("code",null,"50px"),(0,s.Uk)("，而不是两个外边距的总和。")],-1),_=(0,s._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,s._)("pre",{class:"language-html"},[(0,s._)("code",null,[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("div")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"class"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("container"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("p")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"class"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("one"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("I am paragraph one."),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("p")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("p")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"class"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("two"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("I am paragraph two."),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("p")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("div")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),A=(0,s._)("div",{class:"language-css ext-css line-numbers-mode"},[(0,s._)("pre",{class:"language-css"},[(0,s._)("code",null,[(0,s._)("span",{class:"token selector"},".one"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"margin-bottom"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 50px"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)("\n\n"),(0,s._)("span",{class:"token selector"},".two"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"margin-top"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 30px"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)("\n")])]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),C={class:"custom-container info"},x=(0,s._)("p",{class:"custom-container-title"},"外边距重叠",-1),U={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing",target:"_blank",rel:"noopener noreferrer"},q=(0,s.uE)('<h3 id="边框" tabindex="-1"><a class="header-anchor" href="#边框" aria-hidden="true">#</a> 边框</h3><p>边框是在边距和填充框之间绘制的。如果您正在使用标准的盒模型，边框的大小将添加到框的宽度和高度。如果您使用的是替代盒模型，那么边框的大小会使内容框更小，因为它会占用一些可用的宽度和高度。</p><p>为边框设置样式时，有大量的属性可以使用。由于有四个边框，每个边框都有样式、宽度和颜色，我们可能需要对它们进行操作。</p><p>可以使用 <code>border</code> 属性一次设置所有四个边框的宽度、颜色和样式。</p><p>分别设置每边的宽度、颜色和样式，可以使用:</p><ul><li><code>border-top</code></li><li><code>border-right</code></li><li><code>border-bottom</code></li><li><code>border-left</code></li></ul><p>设置所有边的颜色、样式或宽度，请使用以下属性:</p><ul><li><code>border-width</code></li><li><code>border-style</code></li><li><code>border-color</code></li></ul><p>设置单边的颜色、样式或宽度，可以使用最细粒度的普通属性之一:</p><ul><li><code>border-top-width</code></li><li><code>border-top-style</code></li><li><code>border-top-color</code></li><li><code>border-right-width</code></li><li><code>border-right-style</code></li><li><code>border-right-color</code></li><li><code>border-bottom-width</code></li><li><code>border-bottom-style</code></li><li><code>border-bottom-color</code></li><li><code>border-left-width</code></li><li><code>border-left-style</code></li><li><code>border-left-color</code></li></ul><p>设置边框的颜色、样式或宽度，可以使用最细粒度的普通属性或者简写属性。</p>',11),B=(0,s._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,s._)("pre",{class:"language-html"},[(0,s._)("code",null,[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("div")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"class"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("container"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("div")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"class"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("box"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("Change my borders."),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("div")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("div")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),E=(0,s._)("div",{class:"language-css ext-css line-numbers-mode"},[(0,s._)("pre",{class:"language-css"},[(0,s._)("code",null,[(0,s._)("span",{class:"token selector"},".container"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"border-top"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 5px dotted green"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"border-right"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 1px solid black"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"border-bottom"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 20px double "),(0,s._)("span",{class:"token function"},"rgb"),(0,s._)("span",{class:"token punctuation"},"("),(0,s.Uk)("23"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)(" 45"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)(" 145"),(0,s._)("span",{class:"token punctuation"},")"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)("\n\n"),(0,s._)("span",{class:"token selector"},".box"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"border"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 1px solid #333333"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"border-top-style"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" dotted"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"border-right-width"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 20px"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"border-bottom-color"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" hotpink"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)("\n")])]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),w=(0,s.uE)('<h3 id="内边距" tabindex="-1"><a class="header-anchor" href="#内边距" aria-hidden="true">#</a> 内边距</h3><p>内边距位于边框和内容区域之间。与外边距不同，您不能有负数量的内边距，所以值必须是 0 或正的值。应用于元素的任何背景都将显示在内边距后面，内边距通常用于将内容推离边框。</p><p>同 <code>margin</code>，我们可以使用 <code>padding</code> 简写属性控制元素所有边，或者每边单独使用等价的普通属性:</p><ul><li><code>padding-top</code></li><li><code>padding-right</code></li><li><code>padding-bottom</code></li><li><code>padding-left</code></li></ul><h2 id="inline-block" tabindex="-1"><a class="header-anchor" href="#inline-block" aria-hidden="true">#</a> inline-block</h2><p><code>display</code> 有一个特殊的值，它在内联和块之间提供了一个中间状态。这对于以下情况非常有用: 您不希望一个项切换到新行，但希望它可以设定宽度和高度，并避免上面看到的重叠。</p><p>一个元素使用 <code>display: inline-block</code>，实现我们需要的块级的部分效果:</p><ul><li>设置 <code>width</code> 和 <code>height</code> 属性会生效。</li><li><code>padding</code>, <code>margin</code>, 以及 <code>border</code> 会推开其他元素。</li></ul><p>但是，它不会跳转到新行，如果显式添加 <code>width</code> 和 <code>height</code> 属性，它只会变得比其内容更大。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>当您想要通过添加内边距使链接具有更大的命中区域时，这是很有用的。</p><p>比如 <code>&lt;a&gt;</code> 是像 <code>&lt;span&gt;</code> 一样的内联元素；您可以使用 <code>display: inline-block</code> 来设置内边距，让用户更容易点击链接。</p></div>',10),y={},I=(0,a(13860).Z)(y,[["render",function(n,e){const a=(0,s.up)("CodeDemo"),y=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[t,(0,s.kq)(" more "),o,(0,s.Wm)(a,{id:"code-demo-75f3beac",type:"normal",title:"%E5%85%83%E7%B4%A0%E7%9A%84%E5%AE%BD%E5%BA%A6%E4%B8%8E%E9%AB%98%E5%BA%A6",code:"%7B%22html%22%3A%22%3Cdiv%20class%3D%5C%22box%5C%22%20%2F%3E%5Cn%22%2C%22css%22%3A%22div.box%20%7B%5Cn%20%20width%3A%20300px%3B%5Cn%20%20border%3A%2025px%20solid%20green%3B%5Cn%20%20padding%3A%2025px%3B%5Cn%20%20margin%3A%2025px%3B%5Cn%7D%5Cn%22%7D"},{default:(0,s.w5)((()=>[l,c])),_:1}),i,p,d,(0,s.Wm)(a,{id:"code-demo-21af4d1c",type:"normal",title:"%E6%80%BB%E5%AE%BD%E5%BA%A6%20250px%20%E7%9A%84%E5%85%83%E7%B4%A0",code:"%7B%22html%22%3A%22%3Cdiv%20class%3D%5C%22box%5C%22%20%2F%3E%5Cn%22%2C%22css%22%3A%22div.box%20%7B%5Cn%20%20width%3A%20220px%3B%5Cn%20%20padding%3A%2010px%3B%5Cn%20%20border%3A%205px%20solid%20gray%3B%5Cn%20%20margin%3A%200%3B%5Cn%7D%5Cn%22%7D"},{default:(0,s.w5)((()=>[r,u])),_:1}),k,(0,s._)("div",m,[b,(0,s._)("p",null,[(0,s.Uk)("更多盒模型相关内容可见 "),(0,s._)("a",g,[(0,s.Uk)("MDN"),(0,s.Wm)(y)])])]),h,(0,s.Wm)(a,{id:"code-demo-d868e198",type:"normal",title:"%E5%A4%96%E8%BE%B9%E8%B7%9D%E6%8A%98%E5%8F%A0%E6%A1%88%E4%BE%8B",code:"%7B%22html%22%3A%22%3Cdiv%20class%3D%5C%22container%5C%22%3E%5Cn%20%20%3Cp%20class%3D%5C%22one%5C%22%3EI%20am%20paragraph%20one.%3C%2Fp%3E%5Cn%20%20%3Cp%20class%3D%5C%22two%5C%22%3EI%20am%20paragraph%20two.%3C%2Fp%3E%5Cn%3C%2Fdiv%3E%5Cn%22%2C%22css%22%3A%22.one%20%7B%5Cn%20%20margin-bottom%3A%2050px%3B%5Cn%7D%5Cn%5Cn.two%20%7B%5Cn%20%20margin-top%3A%2030px%3B%5Cn%7D%5Cn%22%7D"},{default:(0,s.w5)((()=>[v,_,A])),_:1}),(0,s._)("div",C,[x,(0,s._)("p",null,[(0,s.Uk)("有许多规则规定了什么时候外边距会折叠，什么时候不会折叠。相关更多信息，请参阅 "),(0,s._)("a",U,[(0,s.Uk)("外边距重叠"),(0,s.Wm)(y)]),(0,s.Uk)("。初学时您需要首先记住外边距会折叠，如果您用外边距创建空间而没有得到您想要的效果，请参阅上方链接寻找原因。")])]),q,(0,s.Wm)(a,{id:"code-demo-15751ec0",type:"normal",title:"%E8%BE%B9%E6%A1%86%E6%A1%88%E4%BE%8B",code:"%7B%22html%22%3A%22%3Cdiv%20class%3D%5C%22container%5C%22%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22box%5C%22%3EChange%20my%20borders.%3C%2Fdiv%3E%5Cn%3C%2Fdiv%3E%5Cn%22%2C%22css%22%3A%22.container%20%7B%5Cn%20%20border-top%3A%205px%20dotted%20green%3B%5Cn%20%20border-right%3A%201px%20solid%20black%3B%5Cn%20%20border-bottom%3A%2020px%20double%20rgb(23%2C%2045%2C%20145)%3B%5Cn%7D%5Cn%5Cn.box%20%7B%5Cn%20%20border%3A%201px%20solid%20%23333333%3B%5Cn%20%20border-top-style%3A%20dotted%3B%5Cn%20%20border-right-width%3A%2020px%3B%5Cn%20%20border-bottom-color%3A%20hotpink%3B%5Cn%7D%5Cn%22%7D"},{default:(0,s.w5)((()=>[B,E])),_:1}),w])}]])},13860:(n,e)=>{e.Z=(n,e)=>{const a=n.__vccOpts||n;for(const[n,s]of e)a[n]=s;return a}},88533:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s=JSON.parse('{"key":"v-3fa85cfa","path":"/code/website/css/intro/box.html","title":"盒模型","lang":"zh-CN","frontmatter":{"title":"盒模型","icon":"box","date":"2019-09-06T00:00:00.000Z","category":["CSS"],"summary":"在 CSS 中，所有的元素都被一个个的“盒子(box)”包围着。\\n","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/website/css/intro/box.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"盒模型"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://0808200.xyz/"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"盒模型"}],["meta",{"property":"article:published_time","content":"2019-09-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"<p>在 CSS 中，所有的元素都被一个个的“盒子(box)”包围着。</p>\\n","headers":[{"level":2,"title":"块级与内联","slug":"块级与内联","children":[]},{"level":2,"title":"盒模型介绍","slug":"盒模型介绍","children":[{"level":3,"title":"标准盒模型","slug":"标准盒模型","children":[]},{"level":3,"title":"替代(IE)盒模型","slug":"替代-ie-盒模型","children":[]},{"level":3,"title":"使用调试工具来查看盒模型","slug":"使用调试工具来查看盒模型","children":[]}]},{"level":2,"title":"控制盒模型","slug":"控制盒模型","children":[{"level":3,"title":"外边距","slug":"外边距","children":[]},{"level":3,"title":"边框","slug":"边框","children":[]},{"level":3,"title":"内边距","slug":"内边距","children":[]}]},{"level":2,"title":"inline-block","slug":"inline-block","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":9.59,"words":2876},"filePathRelative":"code/website/css/intro/box.md","localizedDate":"2019年9月6日"}')}}]);