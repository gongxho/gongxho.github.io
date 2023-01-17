"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[21189],{5273:(s,n,a)=>{a.r(n),a.d(n,{default:()=>t});var e=a(60329);const l=[(0,e.uE)('<h1 id="shell-的命令" tabindex="-1"><a class="header-anchor" href="#shell-的命令" aria-hidden="true">#</a> Shell 的命令</h1><h2 id="命令的类别" tabindex="-1"><a class="header-anchor" href="#命令的类别" aria-hidden="true">#</a> 命令的类别</h2><p>Bash 可以使用的命令分成四类。</p><ul><li>可执行程序</li><li>Shell 提供的命令</li><li>Shell 函数</li><li>前三类命令的别名</li></ul><h2 id="type-whatis" tabindex="-1"><a class="header-anchor" href="#type-whatis" aria-hidden="true">#</a> type, whatis</h2><p><code>type</code> 命令可以显示命令类型。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">type</span> <span class="token builtin class-name">command</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是几个例子。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">type</span> <span class="token builtin class-name">type</span>\n<span class="token builtin class-name">type</span> is a shell <span class="token builtin class-name">builtin</span>\n\n$ <span class="token builtin class-name">type</span> <span class="token function">ls</span>\n<span class="token function">ls</span> is aliased to `ls --color<span class="token operator">=</span>tty&#39;\n\n$ <span class="token builtin class-name">type</span> <span class="token function">cp</span>\n<span class="token function">cp</span> is /bin/cp\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>whatis</code> 命令显示指定命令的描述。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ whatis <span class="token function">ls</span>\n<span class="token function">ls</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> - list directory contents\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apropos" tabindex="-1"><a class="header-anchor" href="#apropos" aria-hidden="true">#</a> apropos</h2><p><code>apropos</code> 命令返回符合搜索条件的命令列表。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">apropos</span> floppy\ncreate_floppy_devices <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> - udev callout to create all possible\n<span class="token function">fdformat</span> <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> - Low-level formats a floppy disk\nfloppy <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> - <span class="token function">format</span> floppy disks\ngfloppy <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> - a simple floppy formatter <span class="token keyword">for</span> the GNOME\nmbadblocks <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> - tests a floppy disk, and marks the bad\nmformat <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> - <span class="token function">add</span> an MSDOS filesystem to a low-level\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="alias-unalias" tabindex="-1"><a class="header-anchor" href="#alias-unalias" aria-hidden="true">#</a> alias, unalias</h2><p><code>alias</code> 命令用来为命令起别名。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">alias</span> <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token string">&#39;cd /usr; ls; cd -&#39;</span>\n\n$ <span class="token builtin class-name">type</span> foo\nfoo is aliased to `cd /usr<span class="token punctuation">;</span> <span class="token function">ls</span> <span class="token punctuation">;</span> <span class="token builtin class-name">cd</span> -&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令指定 <code>foo</code> 为三个命令的别名。以后，执行 <code>foo</code> 就相当于一起执行这三条命令。</p><p>注意，默认情况下，别名只在当前 Session 有效。当前 Session 结束时，这些别名就会消失。</p><p><code>alias</code> 命令不加参数时，显示所有有效的别名。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">alias</span>\n<span class="token builtin class-name">alias</span> l.<span class="token operator">=</span><span class="token string">&#39;ls -d .* --color=tty&#39;</span>\n<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ll</span><span class="token operator">=</span><span class="token string">&#39;ls -l --color=tty&#39;</span>\n<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ls</span><span class="token operator">=</span><span class="token string">&#39;ls --color=tty&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>unalias</code> 命令用来取消别名。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">unalias</span> foo\n$ <span class="token builtin class-name">type</span> foo\nbash: type: foo: not found\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="which" tabindex="-1"><a class="header-anchor" href="#which" aria-hidden="true">#</a> which</h2><p><code>which</code> 命令显示可执行程序的路径。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">which</span> <span class="token function">ls</span>\n/bin/ls\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>which</code> 命令用于 Shell 内置命令时(比如 <code>cd</code>)，将没有任何输出。</p><h2 id="help-man" tabindex="-1"><a class="header-anchor" href="#help-man" aria-hidden="true">#</a> help，man</h2><p><code>help</code> 命令用于查看 Shell 内置命令的帮助信息，<code>man</code> 命令用于查看可执行命令的帮助信息。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">help</span> <span class="token builtin class-name">cd</span>\n<span class="token function">man</span> <span class="token function">ls</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>man</code> 里面的文档一共有 8 类，如果同一个命令，匹配多个文档，<code>man</code> 命令总是返回第一个匹配。如果想看指定类型的文档，命令可以采用下面的形式。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">man</span> <span class="token number">5</span> <span class="token function">passwd</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="script" tabindex="-1"><a class="header-anchor" href="#script" aria-hidden="true">#</a> script</h2><p><code>script</code> 命令会将输入的命令和它的输出，都保存进一个文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>script <span class="token punctuation">[</span>file<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有指定文件名，则所有结果会保存进当前目录下 <code>typescript</code> 文件。结束录制的时候，可以按下 <code>Ctrl + d</code>。</p><h2 id="export" tabindex="-1"><a class="header-anchor" href="#export" aria-hidden="true">#</a> export</h2><p><code>export</code> 命令用于将当前进程的变量，输出到所有子进程。</p><h2 id="命令的连续执行" tabindex="-1"><a class="header-anchor" href="#命令的连续执行" aria-hidden="true">#</a> 命令的连续执行</h2><p>多个命令可以写在一起。</p><p>Bash 提供三种方式，定义它们如何执行。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 第一个命令执行完，执行第二个命令</span>\ncommand1<span class="token punctuation">;</span> command2\n\n<span class="token comment"># 只有第一个命令成功执行完(退出码0)，才会执行第二个命令</span>\ncommand1 <span class="token operator">&amp;&amp;</span> command2\n\n<span class="token comment"># 只有第一个命令执行失败(退出码非0)，才会执行第二个命令</span>\ncommand1 <span class="token operator">||</span> command2\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面三种执行方法的退出码，都是最后一条执行的命令的退出码。</p><p>bash 允许把命令组合在一起。可以通过两种方式完成；要么用一个 group 命令，要么用一个子 shell。这里是每种方式的语法示例:</p><p>组命令:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span> command1<span class="token punctuation">;</span> command2<span class="token punctuation">;</span> <span class="token punctuation">[</span>command3<span class="token punctuation">;</span> <span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>子 shell</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>command1<span class="token punctuation">;</span> command2<span class="token punctuation">;</span> <span class="token punctuation">[</span>command3<span class="token punctuation">;</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这两种形式的不同之处在于，组命令用花括号把它的命令包裹起来，而子 shell 用括号。值得注意的是，鉴于 bash 实现组命令的方式， 花括号与命令之间必须有一个空格，并且最后一个命令必须用一个分号或者一个换行符终止。</p><p>那么组命令和子 shell 命令对什么有好处呢? 它们都是用来管理重定向的。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span> <span class="token function">ls</span> -l<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Listing of foo.txt&quot;</span><span class="token punctuation">;</span> <span class="token function">cat</span> foo.txt<span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">&gt;</span> output.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用一个子 shell 是相似的。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>ls -l<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Listing of foo.txt&quot;</span><span class="token punctuation">;</span> <span class="token function">cat</span> foo.txt<span class="token punctuation">)</span> <span class="token operator">&gt;</span> output.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>组命令和子 shell 真正闪光的地方是与管道线相结合。当构建一个管道线命令的时候，通常把几个命令的输出结果合并成一个流是很有用的。组命令和子 shell 使这种操作变得很简单。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span> <span class="token function">ls</span> -l<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Listing of foo.txt&quot;</span><span class="token punctuation">;</span> <span class="token function">cat</span> foo.txt<span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">lpr</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里我们已经把我们的三个命令的输出结果合并在一起，并把它们用管道输送给命令 lpr 的输入，以便产生一个打印报告。</p><p>虽然组命令和子 shell 看起来相似，并且它们都能用来在重定向中合并流，但是两者之间有一个很重要的不同。然而，一个组命令在当前 shell 中执行它的所有命令，而一个子 shell(顾名思义)在当前 shell 的一个 子副本中执行它的命令。这意味着运行环境被复制给了一个新的 shell 实例。当这个子 shell 退出时，环境副本会消失， 所以在子 shell 环境(包括变量赋值)中的任何更改也会消失。因此，在大多数情况下，除非脚本要求一个子 shell， 组命令比子 shell 更受欢迎。组命令运行很快并且占用的内存也少。</p><p>当我们发现管道线中的一个 read 命令 不按我们所期望的那样工作的时候。为了重现问题，我们构建一个像这样的管道线:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;foo&quot;</span> <span class="token operator">|</span> <span class="token builtin class-name">read</span>\n<span class="token builtin class-name">echo</span> <span class="token environment constant">$REPLY</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>该 REPLY 变量的内容总是为空，是因为这个 read 命令在一个子 shell 中执行，所以它的 REPLY 副本会被毁掉， 当该子 shell 终止的时候。因为管道线中的命令总是在子 shell 中执行，任何给变量赋值的命令都会遭遇这样的问题。幸运地是，shell 提供了一种奇异的展开方式，叫做进程替换，它可以用来解决这种麻烦。进程替换有两种表达方式:</p><p>一种适用于产生标准输出的进程:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另一种适用于接受标准输入的进程:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里的 list 是一串命令列表:</p><p>为了解决我们的 read 命令问题，我们可以雇佣进程替换，像这样。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token operator">&lt;</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span>\n<span class="token builtin class-name">echo</span> <span class="token environment constant">$REPLY</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进程替换允许我们把一个子 shell 的输出结果当作一个用于重定向的普通文件。事实上，因为它是一种展开形式，我们可以检验它的真实值:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>me@linuxbox ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span>\n/dev/fd/63\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过使用 echo 命令，查看展开结果，我们看到子 shell 的输出结果，由一个名为 /dev/fd/63 的文件提供。</p>',70)],i={},t=(0,a(13860).Z)(i,[["render",function(s,n){return(0,e.wg)(),(0,e.iD)("div",null,l)}]])},13860:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}},57925:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e=JSON.parse('{"key":"v-4180a476","path":"/linux/bash/archives/command.html","title":"Shell 的命令","lang":"zh-CN","frontmatter":{"summary":"Shell 的命令 命令的类别 Bash 可以使用的命令分成四类。 可执行程序; Shell 提供的命令; Shell 函数; 前三类命令的别名; type, whatis type 命令可以显示命令类型。 下面是几个例子。 whatis 命令显示指定命令的描述。 apropos apropos 命令返回符合搜索条件的命令列表。 alias, unalias","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/linux/bash/archives/command.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝑔𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"Shell 的命令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"命令的类别","slug":"命令的类别","children":[]},{"level":2,"title":"type, whatis","slug":"type-whatis","children":[]},{"level":2,"title":"apropos","slug":"apropos","children":[]},{"level":2,"title":"alias, unalias","slug":"alias-unalias","children":[]},{"level":2,"title":"which","slug":"which","children":[]},{"level":2,"title":"help，man","slug":"help-man","children":[]},{"level":2,"title":"script","slug":"script","children":[]},{"level":2,"title":"export","slug":"export","children":[]},{"level":2,"title":"命令的连续执行","slug":"命令的连续执行","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":5.29,"words":1588},"filePathRelative":"linux/bash/archives/command.md","localizedDate":"2022年6月27日"}')}}]);