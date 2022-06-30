"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[96441],{36041:(t,a,n)=>{n.r(a),n.d(a,{default:()=>d});var e=n(78e3);const s=(0,e.uE)('<h2 id="前台-后台状态" tabindex="-1"><a class="header-anchor" href="#前台-后台状态" aria-hidden="true">#</a> 前台/后台状态</h2><p>小程序启动后，界面被展示给用户，此时小程序处于前台状态。</p><p>当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有完全终止运行，而是进入了后台状态，小程序还可以运行一小段时间。</p><p>当用户再次进入微信或再次打开小程序，小程序又会从后台进入前台。但如果用户很久没有再进入小程序，或者系统资源紧张，小程序可能被销毁，即完全终止运行。</p><h2 id="小程序启动" tabindex="-1"><a class="header-anchor" href="#小程序启动" aria-hidden="true">#</a> 小程序启动</h2><p>这样，小程序启动可以分为两种情况，一种是冷启动，一种是热启动。</p><ul><li>冷启动: 如果用户首次打开，或小程序销毁后被用户再次打开，此时小程序需要重新加载启动，即冷启动。</li><li>热启动: 如果用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时小程序并未被销毁，只是从后台状态进入前台状态，这个过程就是热启动。</li></ul><h2 id="小程序销毁时机" tabindex="-1"><a class="header-anchor" href="#小程序销毁时机" aria-hidden="true">#</a> 小程序销毁时机</h2><p>通常，只有当小程序进入后台一定时间，或者系统资源占用过高，才会被销毁。具体而言包括以下几种情形:</p><ul><li>当小程序进入后台，可以维持一小段时间的运行状态，如果这段时间内都未进入前台，小程序会被销毁。</li><li>当小程序占用系统资源过高，可能会被系统销毁或被微信客户端主动回收。 <ul><li>在 iOS 上，当微信客户端在一定时间间隔内连续收到系统内存告警时，会根据一定的策略，主动销毁小程序，并提示用户 「运行内存不足，请重新打开该小程序」。具体策略会持续进行调整优化。</li><li>建议小程序在必要时使用 wx.onMemoryWarning 监听内存告警事件，进行必要的内存清理。</li></ul></li></ul><h2 id="启动场景分类" tabindex="-1"><a class="header-anchor" href="#启动场景分类" aria-hidden="true">#</a> 启动场景分类</h2><p>用户打开小程序时，场景可分为以下 A、B 两类:</p><p>A. 保留上次的浏览状态。场景值有以下几项:</p><table><thead><tr><th>场景值 ID</th><th>说明</th></tr></thead><tbody><tr><td>1001</td><td>发现栏小程序主入口，「最近使用」列表(基础库 2.2.4 版本起包含「我的小程序」列表)</td></tr><tr><td>1003</td><td>星标小程序列表</td></tr><tr><td>1023</td><td>系统桌面小图标打开小程序</td></tr><tr><td>1038</td><td>从其他小程序返回小程序</td></tr><tr><td>1056</td><td>聊天顶部音乐播放器右上角菜单，打开小程序</td></tr><tr><td>1080</td><td>客服会话菜单小程序入口，打开小程序</td></tr><tr><td>1083</td><td>公众号会话菜单小程序入口 ，打开小程序(只有腾讯客服小程序有)</td></tr><tr><td>1089</td><td>聊天主界面下拉，打开小程序/微信聊天主界面下拉，「最近使用」栏(基础库 2.2.4 版本起包含「我的小程序」栏)</td></tr><tr><td>1090</td><td>长按小程序右上角菜单，打开小程序</td></tr><tr><td>1103</td><td>发现-小程序主入口我的小程序，打开小程序</td></tr><tr><td>1104</td><td>聊天主界面下拉，从我的小程序，打开小程序</td></tr><tr><td>1113</td><td>安卓手机负一屏，打开小程序</td></tr><tr><td>1114</td><td>安卓手机侧边栏，打开小程序</td></tr><tr><td>1117</td><td>后台运行小程序的管理页中，打开小程序</td></tr></tbody></table><ul><li>若进入的场景中带有 path，则每次打开小程序时都进入对应的 path 页面</li><li>若进入的场景中不带 path:</li><li>若小程序是热启动，则保留原来状态</li><li>若小程序是冷启动，则遵循下一节的重启策略，可能是首页或上次退出的页面</li></ul><p>B. relaunch 到指定页或首页</p><p>包括除 A 类外的其他场景</p><ul><li>若进入的场景中带有 path，则每次点击时都进入对应的 path 页面</li><li>若进入的场景中不带 path，则每次进入都打开首页</li></ul><h2 id="a-类场景的重新启动策略" tabindex="-1"><a class="header-anchor" href="#a-类场景的重新启动策略" aria-hidden="true">#</a> A 类场景的重新启动策略</h2><blockquote><p>基础库 2.8.0 开始支持</p></blockquote><p>小程序被销毁后，下次冷启动如果属于 B 类场景，将会进入特定的页面。</p><p>下次冷启动如果属于 A 类场景，默认情况下将会进入小程序的首页。在页面对应的 json 文件中(也可以全局配置在 app.json 的 <code>window</code> 段中)，指定 <code>restartStrategy</code> 配置项可以改变这个默认的行为，使得从某个页面退出后，下次 A 类场景的冷启动可以回到这个页面。</p><details class="custom-container details"><summary>代码示例</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;restartStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;homePage&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><code>restartStrategy</code> 可选值:</p><table><thead><tr><th>可选值</th><th>含义</th></tr></thead><tbody><tr><td>homePage</td><td>(默认值)如果从这个页面退出小程序，下次将从首页冷启动</td></tr><tr><td>homePageAndLatestPage</td><td>如果从这个页面退出小程序，下次冷启动后立刻加载这个页面，页面的参数保持不变(不可用于 tab 页)</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">提示</p><p>即使不配置为 homePage ，小程序如果退出过久(当前默认一天时间，可以使用退出状态来调整)，下次冷启动时也将不再遵循 <code>restartStrategy</code> 的配置，而是直接从首页冷启动。</p></div><p>无论如何，页面中的状态并不会被保留，如输入框中的文本内容、 checkbox 的勾选状态等都不会还原。如果需要还原或部分还原，需要利用退出状态。</p><h2 id="退出状态" tabindex="-1"><a class="header-anchor" href="#退出状态" aria-hidden="true">#</a> 退出状态</h2><p>每当小程序可能被销毁之前，页面回调函数 <code>onSaveExitState</code> 会被调用。如果想保留页面中的状态，可以在这个回调函数中“保存”一些数据，下次启动时可以通过 <code>exitState</code> 获得这些已保存数据。</p><details class="custom-container details"><summary>代码示例</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;restartStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;homePageAndLatestPage&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> prevExitState <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>exitState<span class="token punctuation">;</span> <span class="token comment">// 尝试获得上一次退出前 onSaveExitState 保存的数据</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>prevExitState <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 如果是根据 restartStrategy 配置进行的冷启动，就可以获取到</span>\n      prevExitState<span class="token punctuation">.</span>myDataField <span class="token operator">===</span> <span class="token string">&quot;myData&quot;</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">onSaveExitState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> exitState <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">myDataField</span><span class="token operator">:</span> <span class="token string">&quot;myData&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 需要保存的数据</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">data</span><span class="token operator">:</span> exitState<span class="token punctuation">,</span>\n      <span class="token literal-property property">expireTimeStamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 超时时刻</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><code>onSaveExitState</code> 返回值可以包含两项:</p><table><thead><tr><th>字段名</th><th>类型</th><th>含义</th></tr></thead><tbody><tr><td>data</td><td>Any</td><td>需要保存的数据(只能是 JSON 兼容的数据)</td></tr><tr><td>expireTimeStamp</td><td>Number</td><td>超时时刻，在这个时刻后，保存的数据保证一定被丢弃，默认为 (当前时刻 + 1 天)</td></tr></tbody></table>',32),p=(0,e.Uk)("一个更完整的示例: "),o={href:"https://developers.weixin.qq.com/s/ELP5uTmN7E8l",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("在开发者工具中预览效果"),l=(0,e.uE)('<div class="custom-container tip"><p class="custom-container-title">提示</p><ul><li>如果超过 <code>expireTimeStamp</code> ，保存的数据将被丢弃，且冷启动时不遵循 <code>restartStrategy</code> 的配置，而是直接从首页冷启动。</li><li><code>expireTimeStamp</code> 有可能被自动提前，如微信客户端需要清理数据的时候。</li><li>在小程序存活期间， <code>onSaveExitState</code> 可能会被多次调用，此时以最后一次的调用结果作为最终结果。</li><li>在某些特殊情况下(如微信客户端直接被系统杀死)，这个方法将不会被调用，下次冷启动也不遵循 <code>restartStrategy</code> 的配置，而是直接从首页冷启动。</li></ul></div>',1),r={},d=(0,n(13860).Z)(r,[["render",function(t,a){const n=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[s,(0,e._)("p",null,[p,(0,e._)("a",o,[i,(0,e.Wm)(n)])]),l])}]])},13860:(t,a)=>{a.Z=(t,a)=>{const n=t.__vccOpts||t;for(const[t,e]of a)n[t]=e;return n}},20223:(t,a,n)=>{n.r(a),n.d(a,{data:()=>e});const e=JSON.parse('{"key":"v-687a9220","path":"/code/mini-app/guide/frame/mechanism.html","title":"小程序运行机制","lang":"zh-CN","frontmatter":{"title":"小程序运行机制","icon":"operate","category":["小程序"],"summary":"前台/后台状态 小程序启动后，界面被展示给用户，此时小程序处于前台状态。 当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有完全终止运行，而是进入了后台状态，小程序还可以运行一小段时间。 当用户再次进入微信或再次打开小程序，小程序又会从后台进入前台。但如果用户很久没有再进入小程序，或者系统资源紧张，小程序可能被销毁，即完全","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/code/mini-app/guide/frame/mechanism.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"小程序运行机制"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"前台/后台状态","slug":"前台-后台状态","children":[]},{"level":2,"title":"小程序启动","slug":"小程序启动","children":[]},{"level":2,"title":"小程序销毁时机","slug":"小程序销毁时机","children":[]},{"level":2,"title":"启动场景分类","slug":"启动场景分类","children":[]},{"level":2,"title":"A 类场景的重新启动策略","slug":"a-类场景的重新启动策略","children":[]},{"level":2,"title":"退出状态","slug":"退出状态","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":5.8,"words":1740},"filePathRelative":"code/mini-app/guide/frame/mechanism.md","localizedDate":"2022年6月27日"}')}}]);