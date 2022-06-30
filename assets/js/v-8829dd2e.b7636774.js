"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[36977],{42463:(e,s,n)=>{n.r(s),n.d(s,{default:()=>d});var a=n(78e3);const i=[(0,a.uE)('<h1 id="scp" tabindex="-1"><a class="header-anchor" href="#scp" aria-hidden="true">#</a> scp</h1><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2><p><code>scp</code> 是 secure copy 的缩写，用来在两台主机之间加密传送文件。它的底层是 SSH 协议，默认端口是 22。</p><p>它主要用于以下三种复制操作。</p><ul><li>从本地系统到远程系统。</li><li>从远程系统到本地系统。</li><li>在本地系统的两个远程系统之间。</li></ul><p>使用 <code>scp</code> 传输数据时，文件和密码都是加密的，不会泄漏敏感信息。</p><p><code>scp</code> 的语法类似 <code>cp</code> 的语法。</p><p>注意，如果传输的文件在本机和远程系统，有相同的名称和位置，<code>scp</code> 会在没有警告的情况下覆盖文件。</p><h3 id="本地文件复制到远程系统" tabindex="-1"><a class="header-anchor" href="#本地文件复制到远程系统" aria-hidden="true">#</a> 本地文件复制到远程系统</h3><p>复制本机文件到远程系统的基本语法如下。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 语法</span>\n$ <span class="token function">scp</span> SourceFile user@host:directory/TargetFile\n\n<span class="token comment"># 示例</span>\n$ <span class="token function">scp</span> file.txt remote_username@10.10.0.2:/remote/directory\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是复制整个目录。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 将本机的 documents 目录拷贝到远程主机，</span>\n<span class="token comment"># 会在远程主机创建 documents 目录</span>\n$ <span class="token function">scp</span> -r documents username@server_ip:/path_to_remote_directory\n\n<span class="token comment"># 将本机整个目录拷贝到远程目录下</span>\n$ <span class="token function">scp</span> -r localmachine/path_to_the_directory username@server_ip:/path_to_remote_directory/\n\n<span class="token comment"># 将本机目录下的所有内容拷贝到远程目录下</span>\n$ <span class="token function">scp</span> -r localmachine/path_to_the_directory/* username@server_ip:/path_to_remote_directory/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程文件复制到本地" tabindex="-1"><a class="header-anchor" href="#远程文件复制到本地" aria-hidden="true">#</a> 远程文件复制到本地</h3><p>从远程主机复制文件到本地的语法如下。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 语法</span>\n$ <span class="token function">scp</span> user@host:directory/SourceFile TargetFile\n\n<span class="token comment"># 示例</span>\n$ <span class="token function">scp</span> remote_username@10.10.0.2:/remote/file.txt /local/directory\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是复制整个目录的例子。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 拷贝一个远程目录到本机目录下</span>\n$ <span class="token function">scp</span> -r username@server_ip:/path_to_remote_directory local-machine/path_to_the_directory/\n\n<span class="token comment"># 拷贝远程目录下的所有内容，到本机目录下</span>\n$ <span class="token function">scp</span> -r username@server_ip:/path_to_remote_directory/* local-machine/path_to_the_directory/\n$ <span class="token function">scp</span> -r user@host:directory/SourceFolder TargetFolder\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="两个远程系统之间的复制" tabindex="-1"><a class="header-anchor" href="#两个远程系统之间的复制" aria-hidden="true">#</a> 两个远程系统之间的复制</h3><p>本机发出指令，从远程主机 A 拷贝到远程主机 B 的语法如下。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 语法</span>\n$ <span class="token function">scp</span> user@host1:directory/SourceFile user@host2:directory/SourceFile\n\n<span class="token comment"># 示例</span>\n$ <span class="token function">scp</span> user1@host1.com:/files/file.txt user2@host2.com:/files\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>系统将提示您输入两个远程帐户的密码。数据将直接从一个远程主机传输到另一个远程主机。</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p><code>-P</code> 用来指定远程主机的 SSH 端口。如果远程主机使用非默认端口 22，可以在命令中指定。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -P <span class="token number">2222</span> user@host:directory/SourceFile TargetFile\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-p</code> 参数用来保留修改时间(modification time)、访问时间(access time)、文件状态(mode)等原始文件的信息。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -C -p ~/test.txt root@192.168.1.3:/some/path/test.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-l</code> 参数用来限制传输数据的带宽速率，单位是 Kbit/sec。对于多人分享的带宽，这个参数可以留出一部分带宽供其他人使用。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -l <span class="token number">80</span> yourusername@yourserver:/home/yourusername/* <span class="token builtin class-name">.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code>scp</code> 命令占用的带宽限制为每秒 80K 比特位，即每秒 10K 字节。</p><p><code>-c</code> 参数用来指定加密算法。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -c blowfish some_file your_username@remotehost.edu:~\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码指定加密算法为 <code>blowfish</code>。</p><p><code>-C</code> 表示是否在传输时压缩文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -c blowfish -C local_file your_username@remotehost.edu:~\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-q</code> 参数用来关闭显示拷贝的进度条。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -q Label.pdf mrarianto@202.x.x.x:.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-F</code> 参数用来指定 ssh_config 文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -F /home/pungki/proxy_ssh_config Label.pdf\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-v</code> 参数用来显示详细的输出。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -v ~/test.txt root@192.168.1.3:/root/help2356.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-i</code> 参数用来指定密钥。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -vCq -i private_key.pem ~/test.txt root@192.168.1.3:/some/path/test.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-r</code> 参数表示是否以递归方式复制目录。</p>',44)],c={},d=(0,n(13860).Z)(c,[["render",function(e,s){return(0,a.wg)(),(0,a.iD)("div",null,i)}]])},13860:(e,s)=>{s.Z=(e,s)=>{const n=e.__vccOpts||e;for(const[e,a]of s)n[e]=a;return n}},2539:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a=JSON.parse('{"key":"v-8829dd2e","path":"/linux/bash/archives/commands/scp.html","title":"scp","lang":"zh-CN","frontmatter":{"summary":"scp 基本用法 scp 是 secure copy 的缩写，用来在两台主机之间加密传送文件。它的底层是 SSH 协议，默认端口是 22。 它主要用于以下三种复制操作。 从本地系统到远程系统。; 从远程系统到本地系统。; 在本地系统的两个远程系统之间。; 使用 scp 传输数据时，文件和密码都是加密的，不会泄漏敏感信息。 scp 的语法类似 cp 的语法。 ","head":[["meta",{"property":"og:url","content":"https://0808200.xyz/linux/bash/archives/commands/scp.html"}],["meta",{"property":"og:site_name","content":"𝑀𝑟.𝐺𝑜𝑜𝑔𝑥ℎ"}],["meta",{"property":"og:title","content":"scp"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T09:33:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-27T09:33:50.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"基本用法","slug":"基本用法","children":[{"level":3,"title":"本地文件复制到远程系统","slug":"本地文件复制到远程系统","children":[]},{"level":3,"title":"远程文件复制到本地","slug":"远程文件复制到本地","children":[]},{"level":3,"title":"两个远程系统之间的复制","slug":"两个远程系统之间的复制","children":[]}]},{"level":2,"title":"参数","slug":"参数","children":[]}],"git":{"createdTime":1656322430000,"updatedTime":1656322430000,"contributors":[{"name":"googxh","email":"gxh522@qq.com","commits":1}]},"readingTime":{"minutes":2.76,"words":829},"filePathRelative":"linux/bash/archives/commands/scp.md","localizedDate":"2022年6月27日"}')}}]);