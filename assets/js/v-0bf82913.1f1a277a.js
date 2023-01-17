"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[74808],{32057:(e,s,n)=>{n.r(s),n.d(s,{default:()=>p});var a=n(60329);const i=[(0,a.uE)('<h1 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep</h1><p><code>grep</code> 命令用于文件内容的搜索，返回所有匹配的行。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">grep</span> pattern filename\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是一个例子。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">grep</span> admin /etc/passwd\n_kadmin_admin:*:218:-2:Kerberos Admin Service:/var/empty:/usr/bin/false\n_kadmin_changepw:*:219:-2:Kerberos Change Password Service:/var/empty:/usr/bin/false\n_krb_kadmin:*:231:-2:Open Directory Kerberos Admin Service:/var/empty:/usr/bin/false\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般情况下，应该使用 <code>grep -R</code>，递归地找出当前目录下符合 <code>someVar</code> 的文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">grep</span> -FR <span class="token string">&#39;someVar&#39;</span> <span class="token builtin class-name">.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>別忘了大小不敏感的参数，因为 grep 默认搜索是大小写敏感的。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">grep</span> -iR <span class="token string">&#39;somevar&#39;</span> <span class="token builtin class-name">.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以用 <code>grep -l</code> 光打印出符合条件的文件名而非文件内容选段。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">grep</span> -lR <span class="token string">&#39;somevar&#39;</span> <span class="token builtin class-name">.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果您写的脚本或批处理任务需要上面的输出内容，可以使用 while 和 read 来处理文件名中的空格和其他特殊字符:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">grep</span> -lR someVar <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span> <span class="token builtin class-name">read</span> -r <span class="token function">file</span><span class="token punctuation">;</span> <span class="token keyword">do</span>\n    <span class="token function">head</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span>\n<span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您在您的项目里使用了版本控制软件，它通常会在 .svn， .git， .hg 目录下包含一些元数据。您也可以很容易地用 grep -v 把这些目录移出搜索范围，当然得用 grep -F 指定一个恰当且确定的字符串，即要移除的目录名:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">grep</span> -R <span class="token string">&#39;someVar&#39;</span> <span class="token builtin class-name">.</span> <span class="token operator">|</span> <span class="token function">grep</span> -vF <span class="token string">&#39;.svn&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>部分版本的 grep 包含了 --exclude 和 --exclude-dir 选项，这看起来更加易读。</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p><code>-i</code> 参数表示忽略大小写。</p><p><code>-r</code> 表示搜索某个目录下面的所有文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">grep</span> -r admin /etc/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-v</code> 过滤包含某个词的行，即 <code>grep</code> 的逆操作。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 显示所有包含 vim，但不包含 grep 的行</span>\n$ <span class="token function">ps</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">vim</span> <span class="token operator">|</span> <span class="token function">grep</span> -v <span class="token function">grep</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',22)],r={},p=(0,n(13860).Z)(r,[["render",function(e,s){return(0,a.wg)(),(0,a.iD)("div",null,i)}]])},13860:(e,s)=>{s.Z=(e,s)=>{const n=e.__vccOpts||e;for(const[e,a]of s)n[e]=a;return n}},14700:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a=JSON.parse('{"key":"v-0bf82913","path":"/linux/bash/archives/commands/grep.html","title":"grep","lang":"zh-CN","frontmatter":{"summary":"grep grep 命令用于文件内容的搜索，返回所有匹配的行。 下面是一个例子。 一般情况下，应该使用 grep -R，递归地找出当前目录下符合 someVar 的文件。 別忘了大小不敏感的参数，因为 grep 默认搜索是大小写敏感的。 也可以用 grep -l 光打印出符合条件的文件名而非文件内容选段。 如果您写的脚本或批处理任务需要上面的输出内容，可以使","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/linux/bash/archives/commands/grep.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"grep"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"参数","slug":"参数","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"linux/bash/archives/commands/grep.md","localizedDate":"2022年6月27日"}')}}]);