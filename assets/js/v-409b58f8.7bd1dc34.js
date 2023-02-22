"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[60013],{71570:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var t=a(60329);const e=[(0,t.uE)('<p><strong>你觉得jQuery或zepto源码有哪些写的好的地方</strong></p><ul><li>jquery源码封装在一个匿名函数的自执行环境中，有助于防止变量的全局污染，然后通过传入window对象参数，可以使window对象作为局部变量使用，好处是当jquery中访问window对象的时候，就不用将作用域链退回到顶层作用域了，从而可以更快的访问window对象。同样，传入undefined参数，可以缩短查找undefined时的作用域链</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> (function( window, undefined ) {\n\n         //用一个函数域包起来，就是所谓的沙箱\n\n         //在这里边var定义的变量，属于这个函数域内的局部变量，避免污染全局\n\n         //把当前沙箱需要的外部变量通过函数参数引入进来\n\n         //只要保证参数对内提供的接口的一致性，你还可以随意替换传进来的这个参数\n\n        window.jQuery = window.$ = jQuery;\n\n    })( window );\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>jquery将一些原型属性和方法封装在了jquery.prototype中，为了缩短名称，又赋值给了jquery.fn，这是很形象的写法</li><li>有一些数组或对象的方法经常能使用到，jQuery将其保存为局部变量以提高访问速度</li><li>jquery实现的链式调用可以节约代码，所返回的都是同一个对象，可以提高代码效率</li></ul><p><strong>jQuery 的实现原理？</strong></p><ul><li><p><code>(function(window, undefined) {})(window);</code></p></li><li><p>jQuery 利用 JS 函数作用域的特性，采用立即调用表达式包裹了自身，解决命名空间和变量污染问题</p></li><li><p><code>window.jQuery = window.$ = jQuery;</code></p></li><li><p>在闭包当中将 jQuery 和 $ 绑定到 window 上，从而将 jQuery 和 $ 暴露为全局变量</p></li></ul><p><strong>jQuery.fn 的 init 方法返回的 this 指的是什么对象？ 为什么要返回 this？</strong></p><ul><li>jQuery.fn 的 init 方法 返回的 this 就是 jQuery 对象</li><li>用户使用 jQuery() 或 $() 即可初始化 jQuery 对象，不需要动态的去调用 init 方法</li></ul><p><strong>jQuery.extend 与 jQuery.fn.extend 的区别？</strong></p><ul><li>$.fn.extend() 和 $.extend() 是 jQuery 为扩展插件提拱了两个方法</li><li>$.extend(object); // 为jQuery添加“静态方法”（工具方法）</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$.extend({\n　　min: function(a, b) { return a &lt; b ? a : b; },\n　　max: function(a, b) { return a &gt; b ? a : b; }\n});\n$.min(2,3); //  2\n$.max(4,5); //  5\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>$.extend([true,] targetObject, object1[, object2]); // 对targt对象进行扩展</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var settings = {validate:false, limit:5};\nvar options = {validate:true, name:&quot;bar&quot;};\n$.extend(settings, options);  // 注意：不支持第一个参数传 false\n// settings == {validate:true, limit:5, name:&quot;bar&quot;}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>$.fn.extend(json); // 为jQuery添加“成员函数”（实例方法）</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\n$.fn.extend({\n   alertValue: function() {\n      $(this).click(function(){\n        alert($(this).val());\n      });\n   }\n});\n\n$(&quot;#email&quot;).alertValue();\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？</strong></p><ul><li><p>浅拷贝（只复制一份原始对象的引用） <code>var newObject = $.extend({}, oldObject);</code></p></li><li><p>深拷贝（对原始对象属性所引用的对象进行进行递归拷贝） <code>var newObject = $.extend(true, {}, oldObject);</code></p></li></ul><p><strong>jQuery 的队列是如何实现的？队列可以用在哪些地方？</strong></p><ul><li>jQuery 核心中有一组队列控制方法，由 queue()/dequeue()/clearQueue() 三个方法组成。</li><li>主要应用于 animate()，ajax，其他要按时间顺序执行的事件中</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">func1</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;事件1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n<span class="token keyword">var</span> <span class="token function-variable function">func2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;事件2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n<span class="token keyword">var</span> <span class="token function-variable function">func3</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;事件3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n<span class="token keyword">var</span> <span class="token function-variable function">func4</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;事件4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n\n<span class="token comment">// 入栈队列事件</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">queue</span><span class="token punctuation">(</span><span class="token string">&quot;queue1&quot;</span><span class="token punctuation">,</span> func1<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// push func1 to queue1</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">queue</span><span class="token punctuation">(</span><span class="token string">&quot;queue1&quot;</span><span class="token punctuation">,</span> func2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// push func2 to queue1</span>\n\n<span class="token comment">// 替换队列事件</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">queue</span><span class="token punctuation">(</span><span class="token string">&quot;queue1&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// delete queue1 with empty array</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">queue</span><span class="token punctuation">(</span><span class="token string">&quot;queue1&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>func3<span class="token punctuation">,</span> func4<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// replace queue1</span>\n\n<span class="token comment">// 获取队列事件（返回一个函数数组）</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">queue</span><span class="token punctuation">(</span><span class="token string">&quot;queue1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// [func3(), func4()]</span>\n\n<span class="token comment">// 出栈队列事件并执行</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token string">&quot;queue1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return func3 and do func3</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token string">&quot;queue1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return func4 and do func4</span>\n\n<span class="token comment">// 清空整个队列</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clearQueue</span><span class="token punctuation">(</span><span class="token string">&quot;queue1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// delete queue1 with clearQueue</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>jQuery 中的 bind(), live(), delegate(), on()的区别？</strong></p><ul><li>bind 直接绑定在目标元素上</li><li>live 通过冒泡传播事件，默认document上，支持动态数据</li><li>delegate 更精确的小范围使用事件代理，性能优于 live</li><li>on 是最新的1.9版本整合了之前的三种方式的新事件绑定机制</li></ul><p><strong>是否知道自定义事件？ jQuery 里的 fire 函数是什么意思，什么时候用？</strong></p><ul><li>事件即“发布/订阅”模式，自定义事件即“消息发布”，事件的监听即“订阅订阅”</li><li>JS 原生支持自定义事件，示例：</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  document<span class="token punctuation">.</span><span class="token function">createEvent</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建事件</span>\n  event<span class="token punctuation">.</span><span class="token function">initEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> canBubble<span class="token punctuation">,</span> prevent<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化事件</span>\n  target<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;dataavailable&#39;</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 监听事件</span>\n  target<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 触发事件</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>jQuery 里的 fire 函数用于调用 jQuery 自定义事件列表中的事件</li></ul><p><strong>jQuery 通过哪个方法和 Sizzle 选择器结合的？</strong></p><ul><li>Sizzle 选择器采取 Right To Left 的匹配模式，先搜寻所有匹配标签，再判断它的父节点</li><li>jQuery 通过 $(selecter).find(selecter); 和 Sizzle 选择器结合</li></ul><p><strong>jQuery 中如何将数组转化为 JSON 字符串，然后再转化回来？</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 通过原生 JSON.stringify/JSON.parse 扩展 jQuery 实现</span>\n $<span class="token punctuation">.</span><span class="token function-variable function">array2json</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n\n $<span class="token punctuation">.</span><span class="token function-variable function">json2array</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// $.parseJSON(array); // 3.0 开始，已过时</span>\n    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n\n <span class="token comment">// 调用</span>\n <span class="token keyword">var</span> json <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">array2json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token keyword">var</span> array <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">json2array</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>jQuery 一个对象可以同时绑定多个事件，这是如何实现的？</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;mouseover mouseout&quot;</span><span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token literal-property property">mouseover</span><span class="token operator">:</span> func1<span class="token punctuation">,</span>\n      <span class="token literal-property property">mouseout</span><span class="token operator">:</span> func2<span class="token punctuation">,</span>\n      <span class="token literal-property property">click</span><span class="token operator">:</span> func3\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>针对 jQuery 的优化方法？</strong></p><ul><li>缓存频繁操作DOM对象</li><li>尽量使用id选择器代替class选择器</li><li>总是从#id选择器来继承</li><li>尽量使用链式操作</li><li>使用时间委托 on 绑定事件</li><li>采用jQuery的内部函数data()来存储数据</li><li>使用最新版本的 jQuery</li></ul><p><strong>jQuery 的 slideUp 动画，当鼠标快速连续触发, 动画会滞后反复执行，该如何处理呢?</strong></p><ul><li>在触发元素上的事件设置为延迟处理：使用 JS 原生 setTimeout 方法</li><li>在触发元素的事件时预先停止所有的动画，再执行相应的动画事件：$(&#39;.tab&#39;).stop().slideUp();</li></ul><p><strong>jQuery UI 如何自定义组件？</strong></p><ul><li>通过向 $.widget() 传递组件名称和一个原型对象来完成</li><li><code>$.widget(&quot;ns.widgetName&quot;, [baseWidget], widgetPrototype);</code></li></ul><p><strong>jQuery 与 jQuery UI、jQuery Mobile 区别？</strong></p><ul><li><p>jQuery 是 JS 库，兼容各种PC浏览器，主要用作更方便地处理 DOM、事件、动画、AJAX</p></li><li><p>jQuery UI 是建立在 jQuery 库上的一组用户界面交互、特效、小部件及主题</p></li><li><p>jQuery Mobile 以 jQuery 为基础，用于创建“移动Web应用”的框架</p></li></ul><p><strong>jQuery 和 Zepto 的区别？ 各自的使用场景？</strong></p><ul><li>jQuery 主要目标是PC的网页中，兼容全部主流浏览器。在移动设备方面，单独推出 jQuery Mobile</li><li>Zepto 从一开始就定位移动设备，相对更轻量级。它的 API 基本兼容 jQuery，但对PC浏览器兼容不理想</li></ul>',42)],p={},i=(0,a(13860).Z)(p,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,e)}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},89422:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-409b58f8","path":"/Interview/base/jQuery.html","title":"JQuery 基础","lang":"zh-CN","frontmatter":{"title":"JQuery 基础","icon":null,"date":"2022-12-15T00:00:00.000Z","category":["Interview"],"summary":"你觉得jQuery或zepto源码有哪些写的好的地方 jquery源码封装在一个匿名函数的自执行环境中，有助于防止变量的全局污染，然后通过传入window对象参数，可以使window对象作为局部变量使用，好处是当jquery中访问window对象的时候，就不用将作用域链退回到顶层作用域了，从而可以更快的访问window对象。同样，传入undefined参数，","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/Interview/base/jQuery.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"JQuery 基础"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-17T08:24:10.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-12-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-17T08:24:10.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1673943850000,"updatedTime":1673943850000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":5.43,"words":1629},"filePathRelative":"Interview/base/jQuery.md","localizedDate":"2022年12月15日"}')}}]);