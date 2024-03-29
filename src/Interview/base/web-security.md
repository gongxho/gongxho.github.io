---
title: 常见web 安全及防护原理
icon: 
date: 2022-12-15
category: Interview
---

**常见web安全及防护原理**

- sql注入原理
  - 就是通过把SQL命令插入到Web表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令
  
- 总的来说有以下几点
  - 永远不要信任用户的输入，要对用户的输入进行校验，可以通过正则表达式，或限制长度，对单引号和双"-"进行转换等
  - 永远不要使用动态拼装SQL，可以使用参数化的SQL或者直接使用存储过程进行数据查询存取
  - 永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接
  - 不要把机密信息明文存放，请加密或者hash掉密码和敏感的信息
  
**XSS原理及防范**

- Xss(cross-site scripting)攻击指的是攻击者往Web页面里插入恶意html标签或者javascript代码。比如：攻击者在论坛中放一个看似安全的链接，骗取用户点击后，窃取cookie中的用户私密信息；或者攻击者在论坛中加一个恶意表单，当用户提交表单的时候，却把信息传送到攻击者的服务器中，而不是用户原本以为的信任站点

**XSS防范方法**

- 首先代码里对用户输入的地方和变量都需要仔细检查长度和对”<”,”>”,”;”,”’”等字符做过滤；其次任何内容写到页面之前都必须加以encode，避免不小心把html tag 弄出来。这一个层面做好，至少可以堵住超过一半的XSS 攻击

**XSS与CSRF有什么区别吗？**

- XSS是获取信息，不需要提前知道其他用户页面的代码和数据包。CSRF是代替用户完成指定的动作，需要知道其他用户页面的代码和数据包。要完成一次CSRF攻击，受害者必须依次完成两个步骤

- 登录受信任网站A，并在本地生成Cookie
- 在不登出A的情况下，访问危险网站B

**CSRF的防御**

- 服务端的CSRF方式方法很多样，但总的思想都是一致的，就是在客户端页面增加伪随机数
- 通过验证码的方法

**是否了解 Web 注入攻击（最常见 XSS 和 CSRF）？**

* SQL注入
  - 把SQL命令插入到表单或输入URL查询字符串提交，欺骗服务器达到执行恶意的SQL目的

* XSS(Cross Site Script)，跨站脚本攻击
  - 攻击者在页面里插入恶意代码，当用户浏览该页之时，执行嵌入的恶意代码达到攻击目的

* CSRF(Cross Site Request Forgery)，跨站点伪造请求
  - 伪造合法请求，让用户在不知情的情况下以登录的身份访问，利用用户信任达到攻击目的
  
**如何防范 Web 前端攻击？**

* 不要信任任何外部传入的数据
  - 针对用户输入作相关的格式检查、过滤等操作

* 不要信任在任何传入的第三方数据
  - 使用 CORS，设置 Access-Control-Allow-Origin

* 更安全地使用 Cookie
  - 设置Cookie为HttpOnly，禁止了JavaScript操作Cookie

* 防止网页被其他网站内嵌为iframe
  - 服务器端设置 X-Frame-Options 响应头，防止页面被内嵌