"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[97058],{87425:(t,d,e)=>{e.r(d),e.d(d,{default:()=>a});var p=e(60329);const o=(0,p._)("p",null,"目前体验评分共有 27 条规则，共分为三类: 性能、体验、最佳实践，满足规则要求得分(100 分)，否则不得分(0 分)，最后根据各规则权重和公式计算出总得分。",-1),r=(0,p.uE)('<p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/audits_formula.ba03ca01.png" alt="audits_formula"></p><p>权重为 0 的规则，表示该规则不参与评分，仅作为提示项。开发者可在开发者工具中可以点击“忽略”。</p><p>各规则的得分条件也可能会随小程序的版本更新有一定的调整。</p><h2 id="权重表" tabindex="-1"><a class="header-anchor" href="#权重表" aria-hidden="true">#</a> 权重表</h2><table><thead><tr><th>分类</th><th>规则</th><th>权重</th></tr></thead><tbody><tr><td>性能</td><td>脚本执行时间</td><td>7</td></tr><tr><td></td><td>首屏时间</td><td>6</td></tr><tr><td></td><td>渲染时间</td><td>6</td></tr><tr><td></td><td>setData 调用频率</td><td>6</td></tr><tr><td></td><td>setData 数据大小</td><td>6</td></tr><tr><td></td><td>WXML 节点数</td><td>6</td></tr><tr><td></td><td>请求耗时</td><td>5</td></tr><tr><td></td><td>网络请求数</td><td>5</td></tr><tr><td></td><td>图片请求数</td><td>5</td></tr><tr><td></td><td>图片缓存</td><td>4</td></tr><tr><td></td><td>图片大小</td><td>4</td></tr><tr><td></td><td>避免 setData 数据冗余</td><td>3</td></tr><tr><td></td><td>网络请求缓存</td><td>2</td></tr><tr><td>体验</td><td>开启惯性滚动</td><td>8</td></tr><tr><td></td><td>避免使用:active 伪类来实现点击态</td><td>8</td></tr><tr><td></td><td>保持图片大小比例</td><td>4</td></tr><tr><td></td><td>可点击元素的响应区域</td><td>3</td></tr><tr><td></td><td>iPhone X 兼容</td><td>3</td></tr><tr><td></td><td>合理的颜色搭配</td><td>0</td></tr><tr><td>最佳实践</td><td>避免 JS 异常</td><td>3</td></tr><tr><td></td><td>避免网络请求异常</td><td>3</td></tr><tr><td></td><td>废弃接口</td><td>2</td></tr><tr><td></td><td>使用 HTTPS</td><td>1</td></tr><tr><td></td><td>最低基础库版本</td><td>0</td></tr><tr><td></td><td>移除不可访问到的页面</td><td>0</td></tr><tr><td></td><td>WXSS 使用率</td><td>0</td></tr><tr><td></td><td>及时回收定时器</td><td>0</td></tr></tbody></table><h2 id="性能" tabindex="-1"><a class="header-anchor" href="#性能" aria-hidden="true">#</a> 性能</h2><ol><li><p>首屏时间</p><p>首屏时间是指用户从打开小程序看到第一屏主要内容的时间，首屏时间太长会导致用户长时间看到的都是白屏，影响使用体验。</p><p>优化首屏时间，可以分为以下几种情况:</p><ol><li>首屏渲染的内容较多，需要集合多份数据进行渲染。这种情况需要开发者把内容分优先级，把优先级高的内容做优先展示，缩短白屏时间；</li><li>首屏内容依赖的数据从服务端请求的时间太长。开发者需要从服务端侧具体分析服务端数据返回的时间长的原因；</li><li>一次性渲染数据太大或依赖的计算过于复杂。减少渲染的数据量、优化渲染相关数据的算法可以解决这类问题。</li></ol><p>得分条件: <strong>首屏时间不超过 5 秒</strong></p></li><li><p>渲染时间</p><p>渲染时间指的是首次渲染或因数据变化带来的页面结构变化的渲染花费的时间。</p><p>渲染界面的耗时过长会让用户觉得卡顿，体验较差，出现这一情况时，需要校验下是否同时渲染的区域太大(例如列表过长)，或渲染依赖的计算是否过于复杂。</p><p>得分条件: 渲<strong>染时间不超过 500ms</strong></p></li><li><p>脚本执行时间</p><p>脚本执行时间是指 JS 脚本在一次同步执行中消耗的时间，比如生命周期回调、事件处理函数的同步执行时间。</p><p>执行脚本的耗时过长会让用户觉得卡顿，体验较差，出现这一情况时，需要确认并优化脚本的逻辑</p><p>得分条件: <strong>一个执行周期内脚本运行时间不超过 1 秒</strong></p></li><li><p><code>setData</code> 调用频率</p><p><code>setData</code> 接口的调用涉及逻辑层与渲染层间的线程通信，通信过于频繁可能导致处理队列阻塞，界面渲染不及时而导致卡顿，应避免无用的频繁调用。</p><p>得分条件: <strong>每秒调用 setData 的次数不超过 20 次</strong></p></li><li><p><code>setData</code> 数据大小</p><p>由于小程序运行逻辑线程与渲染线程之上，<code>setData</code> 的调用会把数据从逻辑层传到渲染层，数据太大会增加通信时间。</p><p>得分条件: <strong><code>setData</code> 的数据在 JSON.stringify 后不超过 256KB</strong></p></li><li><p>避免 <code>setData</code> 数据冗余</p><p><code>setData</code> 操作会引起框架处理一些渲染界面相关的工作，一个未绑定的变量意味着与界面渲染无关，传入 set`Data 会造成不必要的性能消耗。</p><p>得分条件: <strong><code>setData</code> 传入的所有数据都在模板渲染中有相关依赖</strong></p></li><li><p>WXML 节点数</p><p>建议一个页面使用少于 1000 个 WXML 节点，节点树深度少于 30 层，子节点数不大于 60 个。一个太大的 WXML 节点树会增加内存的使用，样式重排时间也会更长，影响体验。</p><p>得分条件: <strong>页面 WXML 节点少于 1000 个，节点树深度少于 30 层，子节点数不大于 60 个</strong></p></li><li><p>图片缓存</p><p>开启 HTTP 缓存控制后，下一次加载同样的图片，会直接从缓存读取，大大提升加载速度。</p><p>得分条件: <strong>所有图片均开启 HTTP 缓存</strong></p></li><li><p>图片大小</p><p>图片太大会增加下载时间和内存的消耗，应根据显示区域大小合理控制图片大小。</p><p>得分条件: <strong>图片宽高都不超过实际显示宽高的 3 倍</strong></p></li><li><p>请求耗时</p><p>请求的耗时太长会让用户一直等待甚至离开，应当优化好服务器处理时间、减小回包大小，让请求快速响应。</p><p>得分条件: <strong>所有网络请求都在 1 秒内返回结果</strong></p></li><li><p>网络请求数</p><p>短时间内发起太多请求会触发小程序并行请求数量的限制，同时太多请求也可能导致加载慢等问题，应合理控制请求数量，甚至做请求的合并等。</p><p>得分条件: <strong>每秒通过 wx.request 发起的请求数不超过 10 个</strong></p></li><li><p>图片请求数</p><p>短时间内发起太多图片请求会触发浏览器并行加载的限制，可能导致图片加载慢，用户一直处理等待。应该合理控制数量，可考虑使用雪碧图技术或在屏幕外的图片使用懒加载。</p><p>得分条件: <strong>每秒发起的图片请求数不超过 20 个</strong></p></li><li><p>网络请求缓存</p><p>发起网络请求总会让用户等待，可能造成不好的体验，应尽量避免多余的请求，比如对同样的请求进行缓存</p><p>得分条件: <strong>3 分钟以内同一个 URL 请求不出现两次回包大于 128KB 且一模一样的内容</strong></p></li></ol><h2 id="体验" tabindex="-1"><a class="header-anchor" href="#体验" aria-hidden="true">#</a> 体验</h2><ol><li><p>开启惯性滚动</p><p>惯性滚动会使滚动比较顺畅，在安卓下默认有惯性滚动，而在 iOS 下需要额外设置 <code>-webkit-overflow-scrolling: touch</code> 的样式；</p><p>得分条件: <strong>wxss 中带有 <code>overflow: scroll</code> 的元素，在 iOS 下需要设置 <code>-webkit-overflow-scrolling: touch</code> 样式</strong></p></li><li><p>避免使用 <code>:active</code> 伪类来实现点击态</p><p>使用 CSS <code>:active</code> 伪类来实现点击态，很容易触发，并且滚动或滑动时点击态不会消失，体验较差。建议使用小程序内置组件的 <code>&#39;hover-class&#39;</code> 属性来实现</p><p>得分条件: 不使用 <code>:active</code> 伪类，并使用 <code>hover-class</code> 替换 <code>:active</code></p></li><li><p>保持图片大小比例</p><p>图片若没有按原图宽高比例显示，可能导致图片歪曲，不美观，甚至导致用户识别困难。可根据情况设置 image 组件的 <code>mode</code> 属性，以保持原图宽高比。</p><p>得分条件: <strong>显示的高/宽与原图的高/宽不超过 15%</strong></p></li><li><p>可点击元素的响应区域</p><p>我们应该合理地设置好可点击元素的响应区域大小，如果过小会导致用户很难点中，体验很差。</p><p>得分条件: <strong>可点击元素的宽高都不小于 20px</strong></p></li><li><p>iPhone X 兼容</p><p>对于 <code>position: fixed</code> 的可交互组件，如果渲染在 iPhone X 的安全区域外，容易误触 Home Indicator，应当把可交互的部分都渲染到安全区域内。</p><p>建议使用以下 wxss 进行兼容</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token function">constant</span><span class="token punctuation">(</span>safe-area-inset-bottom<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token function">env</span><span class="token punctuation">(</span>safe-area-inset-bottom<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>得分条件: <code>position: fixed</code> 的可交互组件渲染在安全区域内</p></li><li><p>合理的颜色搭配</p><p>文字颜色与背景色需要搭配得当，适宜的颜色对比度可以让用户更好地阅读，提升小程序的用户体验。</p><p>由于颜色搭配的计算方法较为复杂，目前算法还在不断优化中。因此该指标仅作为评分的提醒项，不计入总分中。</p><p>判断标准:</p><ol><li><p>对于较大字体(font-size &gt;= 24px，或同时满足 font-size &gt;= 19px 与 font-weight &gt;= 700)，文字颜色和背景颜色的对比度不小于 3</p></li><li><p>其他字体，文字颜色和背景颜色的对比度不小于 4.5</p></li></ol></li></ol>',9),s={},a=(0,e(13860).Z)(s,[["render",function(t,d){return(0,p.wg)(),(0,p.iD)("div",null,[o,(0,p.kq)(" more "),r])}]])},13860:(t,d)=>{d.Z=(t,d)=>{const e=t.__vccOpts||t;for(const[t,p]of d)e[t]=p;return e}},89043:(t,d,e)=>{e.r(d),e.d(d,{data:()=>p});const p=JSON.parse('{"key":"v-7ac59094","path":"/code/mini-app/tools/score.html","title":"评分方法","lang":"zh-CN","frontmatter":{"title":"评分方法","icon":"rank","category":["小程序"],"summary":"目前体验评分共有 27 条规则，共分为三类: 性能、体验、最佳实践，满足规则要求得分(100 分)，否则不得分(0 分)，最后根据各规则权重和公式计算出总得分。\\n","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/mini-app/tools/score.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"评分方法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"<p>目前体验评分共有 27 条规则，共分为三类: 性能、体验、最佳实践，满足规则要求得分(100 分)，否则不得分(0 分)，最后根据各规则权重和公式计算出总得分。</p>\\n","headers":[{"level":2,"title":"权重表","slug":"权重表","children":[]},{"level":2,"title":"性能","slug":"性能","children":[]},{"level":2,"title":"体验","slug":"体验","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":7.22,"words":2167},"filePathRelative":"code/mini-app/tools/score.md","localizedDate":"2022年6月27日"}')}}]);