"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[48359],{21673:(n,s,a)=>{a.r(s),a.d(s,{default:()=>_});var t=a(78e3);const e=(0,t.uE)('<h2 id="替换元素" tabindex="-1"><a class="header-anchor" href="#替换元素" aria-hidden="true">#</a> 替换元素</h2><p>图像和视频被描述为替换元素。 这意味着 CSS 不能影响这些元素的内部布局，仅影响它们在页面上于其他元素中的位置。</p><div class="custom-container info"><p class="custom-container-title">可替换元素</p><p>在 CSS 中，可替换元素(replaced element)的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。</p><p>简单来说，它们的内容不受当前文档的样式的影响。CSS 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。某些可替换元素，例如 <code>&lt;iframe&gt;</code> 元素，可能具有自己的样式表，但它们不会继承父文档的样式。</p><p>CSS 能对可替换元素产生的唯一影响在于，部分属性支持控制元素内容在其框中的位置或定位方式。</p></div><p>某些替换元素(例如图像和视频)也被描述为具有宽高比。这意味着它在水平(x)和垂直(y)尺寸上均具有大小，并且默认情况下将使用文件的固有尺寸进行显示。</p><h2 id="调整图像大小" tabindex="-1"><a class="header-anchor" href="#调整图像大小" aria-hidden="true">#</a> 调整图像大小</h2><p>一个常用的技术是将一张图片的 <code>max-width</code> 设为 100%。这将会允许图片尺寸上小于但不大于盒子。这个技术也会对其他替换元素(例如 <code>&lt;video&gt;</code>，或者 <code>&lt;iframe&gt;</code>)起作用。</p><p>为了把一张图像调整到能够完全盖住一个盒子的大小，您可以使用 <code>object-fit</code> 属性。使用 <code>object-fit</code> 时，替换元素可以以多种方式被调整到合乎盒子的大小。</p><ul><li><code>cover</code> 会缩小图像，维持图像的比例。图像可以整齐地充满盒子，同时由于比例保持不变，图像的一部分将会被盒子裁切掉。</li><li><code>contain</code> 会缩放图片到足以放到盒子里面的大小。如果它和盒子的比例不同，会在某侧留白。</li><li><code>fill</code> 可以让图像充满盒子，但是不会维持比例。</li></ul>',8),c=(0,t._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,t._)("pre",{class:"language-html"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("wrapper"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("box"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("img")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"src"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("/assets/img/balloons.jpg"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"alt"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("balloons"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("cover"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"/>")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("box"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("img")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"src"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("/assets/img/balloons.jpg"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"alt"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("balloons"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("contain"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"/>")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"})])],-1),l=(0,t._)("div",{class:"language-css ext-css line-numbers-mode"},[(0,t._)("pre",{class:"language-css"},[(0,t._)("code",null,[(0,t._)("span",{class:"token selector"},".box"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"width"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 200px"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"height"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 200px"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token selector"},"img"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"height"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 100%"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"width"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 100%"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token selector"},".cover"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"object-fit"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" cover"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token selector"},".contain"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"object-fit"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" contain"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"})])],-1),o=(0,t._)("h2",{id:"布局中的替换元素",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#布局中的替换元素","aria-hidden":"true"},"#"),(0,t.Uk)(" 布局中的替换元素")],-1),p=(0,t._)("p",null,"替换元素使用各式 CSS 布局技巧时，他们的展现略微与其他元素不同。",-1),i=(0,t._)("p",null,"在一个 flex 或者 grid 布局中，元素默认会把拉伸到充满整块区域。图像不会拉伸，而是会被对齐到网格区域或者弹性容器的起始处。",-1),u=(0,t._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,t._)("pre",{class:"language-html"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("wrapper"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("img")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"src"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("/assets/img/star.png"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"alt"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("star"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"/>")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"/>")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"/>")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"/>")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"})])],-1),r=(0,t._)("div",{class:"language-css ext-css line-numbers-mode"},[(0,t._)("pre",{class:"language-css"},[(0,t._)("code",null,[(0,t._)("span",{class:"token selector"},".wrapper"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"display"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" grid"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"grid-template-columns"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 1fr 1fr"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"grid-template-rows"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 200px 200px"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"gap"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 20px"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token selector"},".wrapper > div"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"background-color"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" rebeccapurple"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"border-radius"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 0.5em"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"})])],-1),k=(0,t.uE)('<h2 id="form-元素" tabindex="-1"><a class="header-anchor" href="#form-元素" aria-hidden="true">#</a> form 元素</h2><h3 id="表单元素的继承" tabindex="-1"><a class="header-anchor" href="#表单元素的继承" aria-hidden="true">#</a> 表单元素的继承</h3><p>在一些浏览器中，表单元素默认不会继承字体样式，因此如果您想要确保您的表单填入区域使用 body 中或者一个父元素中定义的字体，您需要向您的 CSS 中加入这条规则。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">button,\ninput,\nselect,\ntextarea</span> <span class="token punctuation">{</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="form-的-box-sizing" tabindex="-1"><a class="header-anchor" href="#form-的-box-sizing" aria-hidden="true">#</a> form 的 box-sizing</h3><p>form 元素可能会针对不同元素使用不同的盒子约束规则。</p><p>为了保证统一，将所有元素的内外边距均设为 0 是个好主意，然后在单独进行样式化控制的时候将这些加回来。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">button,\ninput,\nselect,\ntextarea</span> <span class="token punctuation">{</span>\n  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他有用的设置" tabindex="-1"><a class="header-anchor" href="#其他有用的设置" aria-hidden="true">#</a> 其他有用的设置</h3><p>除了上面提到的规则以外，您也应该在 <code>&lt;textarea&gt;</code> 上设置 <code>overflow: auto</code> 以避免 IE 在不需要滚动条的时候显示滚动条:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">textarea</span> <span class="token punctuation">{</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11),d={},_=(0,a(13860).Z)(d,[["render",function(n,s){const a=(0,t.up)("CodeDemo");return(0,t.wg)(),(0,t.iD)("div",null,[e,(0,t.Wm)(a,{id:"code-demo-53d539e6",type:"normal",title:"%E8%B0%83%E6%95%B4%E5%9B%BE%E5%83%8F%E5%A4%A7%E5%B0%8F",code:"%7B%22html%22%3A%22%3Cdiv%20class%3D%5C%22wrapper%5C%22%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22box%5C%22%3E%5Cn%20%20%20%20%3Cimg%20src%3D%5C%22%2Fassets%2Fimg%2Fballoons.jpg%5C%22%20alt%3D%5C%22balloons%5C%22%20class%3D%5C%22cover%5C%22%20%2F%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22box%5C%22%3E%5Cn%20%20%20%20%3Cimg%20src%3D%5C%22%2Fassets%2Fimg%2Fballoons.jpg%5C%22%20alt%3D%5C%22balloons%5C%22%20class%3D%5C%22contain%5C%22%20%2F%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Fdiv%3E%5Cn%22%2C%22css%22%3A%22.box%20%7B%5Cn%20%20width%3A%20200px%3B%5Cn%20%20height%3A%20200px%3B%5Cn%7D%5Cn%5Cnimg%20%7B%5Cn%20%20height%3A%20100%25%3B%5Cn%20%20width%3A%20100%25%3B%5Cn%7D%5Cn%5Cn.cover%20%7B%5Cn%20%20object-fit%3A%20cover%3B%5Cn%7D%5Cn%5Cn.contain%20%7B%5Cn%20%20object-fit%3A%20contain%3B%5Cn%7D%5Cn%22%7D"},{default:(0,t.w5)((()=>[c,l])),_:1}),o,p,(0,t.Wm)(a,{id:"code-demo-601ed154",type:"normal",title:"%E5%B8%83%E5%B1%80%E4%B8%AD%E7%9A%84%E6%9B%BF%E6%8D%A2%E5%85%83%E7%B4%A0",code:"%7B%22html%22%3A%22%3Cdiv%20class%3D%5C%22wrapper%5C%22%3E%5Cn%20%20%3Cimg%20src%3D%5C%22%2Fassets%2Fimg%2Fstar.png%5C%22%20alt%3D%5C%22star%5C%22%20%2F%3E%5Cn%20%20%3Cdiv%20%2F%3E%5Cn%20%20%3Cdiv%20%2F%3E%5Cn%20%20%3Cdiv%20%2F%3E%5Cn%3C%2Fdiv%3E%5Cn%22%2C%22css%22%3A%22.wrapper%20%7B%5Cn%20%20display%3A%20grid%3B%5Cn%20%20grid-template-columns%3A%201fr%201fr%3B%5Cn%20%20grid-template-rows%3A%20200px%20200px%3B%5Cn%20%20gap%3A%2020px%3B%5Cn%7D%5Cn%5Cn.wrapper%20%3E%20div%20%7B%5Cn%20%20background-color%3A%20rebeccapurple%3B%5Cn%20%20border-radius%3A%200.5em%3B%5Cn%7D%5Cn%22%7D"},{default:(0,t.w5)((()=>[i,u,r])),_:1}),k])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},35839:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-69be0f1d","path":"/code/website/css/intro/replaced.html","title":"可替换元素","lang":"zh-CN","frontmatter":{"title":"可替换元素","icon":"change","date":"2019-09-06T00:00:00.000Z","category":["CSS"],"summary":"替换元素 图像和视频被描述为替换元素。 这意味着 CSS 不能影响这些元素的内部布局，仅影响它们在页面上于其他元素中的位置。 可替换元素 在 CSS 中，可替换元素(replaced element)的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。 简单来说，它们的内容不受当前文档的样式的影响。CSS 可以影","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/website/css/intro/replaced.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"可替换元素"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-09-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"替换元素","slug":"替换元素","children":[]},{"level":2,"title":"调整图像大小","slug":"调整图像大小","children":[]},{"level":2,"title":"布局中的替换元素","slug":"布局中的替换元素","children":[]},{"level":2,"title":"form 元素","slug":"form-元素","children":[{"level":3,"title":"表单元素的继承","slug":"表单元素的继承","children":[]},{"level":3,"title":"form 的 box-sizing","slug":"form-的-box-sizing","children":[]},{"level":3,"title":"其他有用的设置","slug":"其他有用的设置","children":[]}]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":3.15,"words":945},"filePathRelative":"code/website/css/intro/replaced.md","localizedDate":"2019年9月6日"}')}}]);