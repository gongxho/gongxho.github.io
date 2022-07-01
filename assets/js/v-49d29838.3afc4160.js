"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[38025],{45741:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var n=a(78e3);const d=[(0,n.uE)('<h1 id="du" tabindex="-1"><a class="header-anchor" href="#du" aria-hidden="true">#</a> du</h1><p><code>du</code> 命令显示某个文件或目录的磁盘使用量。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">du</span> filename\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-h</code> 参数将返回的大小显示为人类可读的格式，即显示单位为 K、M、G 等。</p><p><code>-s</code> 参数表示总结(summarize)。</p><p><code>-x</code> 参数表示不显示不在当前分区的目录，通常会忽略<code>/dev</code>、<code>/proc</code>、<code>/sys</code> 等目录。</p><p><code>-c</code> 参数表示显示当前目录总共占用的空间大小。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 显示根目录下各级目录占用的空间大小</span>\n$ <span class="token function">sudo</span> <span class="token function">du</span> -shxc /*\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>--exclude</code> 参数用于排除某些目录或文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">du</span> -shxc /* --exclude<span class="token operator">=</span>proc\n<span class="token function">sudo</span> <span class="token function">du</span> -sh --exclude<span class="token operator">=</span>*.iso\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>--max-depth</code> 参数用于设定目录大小统计到第几层。如果设为 <code>-–max-depth=0</code>，那么等同于 <code>-s</code> 参数。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">du</span> /home/ -hc --max-depth<span class="token operator">=</span><span class="token number">2</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',12)],c={},o=(0,a(13860).Z)(c,[["render",function(e,s){return(0,n.wg)(),(0,n.iD)("div",null,d)}]])},13860:(e,s)=>{s.Z=(e,s)=>{const a=e.__vccOpts||e;for(const[e,n]of s)a[e]=n;return a}},16900:(e,s,a)=>{a.r(s),a.d(s,{data:()=>n});const n=JSON.parse('{"key":"v-49d29838","path":"/linux/bash/archives/commands/du.html","title":"du","lang":"zh-CN","frontmatter":{"summary":"du du 命令显示某个文件或目录的磁盘使用量。 -h 参数将返回的大小显示为人类可读的格式，即显示单位为 K、M、G 等。 -s 参数表示总结(summarize)。 -x 参数表示不显示不在当前分区的目录，通常会忽略/dev、/proc、/sys 等目录。 -c 参数表示显示当前目录总共占用的空间大小。 --exclude 参数用于排除某些目录或文件。 ","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/linux/bash/archives/commands/du.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"du"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":0.65,"words":194},"filePathRelative":"linux/bash/archives/commands/du.md","localizedDate":"2022年6月27日"}')}}]);