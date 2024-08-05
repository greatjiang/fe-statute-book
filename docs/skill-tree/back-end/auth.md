# API身份验证和授权
(待完善...)
## JWT
JWT（JSON Web Token）：跨域认证解决方案

### 组成部分
三部分组成  
1. Header 头部：包含令牌类型和签名算法
2. Payload 负载： 用来存放实际需要的传递的数据
3. Signature 签名：对前两部分的签名，防止数据篡改

### 工作流
1. 用户使用用户名和密码登录
2. 服务器验证用户凭证。如果有效服务器生成一个JWT
3. 服务器将JWT返回给客户端
4. 客户端将JWT存储在本地存储或cookie中，并在后续的请求中将JWT添加到HTTP头部中
5. 服务器在每次收到请求时验证JWT的有效性。如果JWT有效，服务器处理请求并返回响应。

### Authorization
在HTTP请求中，Authorization 头部用于向服务器提供认证信息，服务器可以根据这些信息来验证客户端的身份。Authorization 头部支持多种认证方案，例如基本认证（Basic）、摘要认证（Digest）、Bearer令牌认证（常用于OAuth 2.0和JWT）等。

### 疑问
1. 前端如何把token写入authorization
```js
axios.get('http://localhost:3000/protected', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
```
2. 前端登录的时候密码密码如何加密  
使用crypto-js  

### 实例
使用Express写一个JWT实例

## OAuth
OAuth 2.0：使用OAuth 2.0进行授权，确保用户只能访问他们有权限访问的资源。

