# RESTful API
RESTful API 是基于 REST 架构风格的 Web API，提供了一种简单、高效的方式来设计网络应用。REST（Representational State Transfer）是一种设计风格和软件架构模式，通常用于构建轻量级、可扩展和维护的网络服务。   

RESTful API 使用HTTP方法（GET、POST、PUT、DELETE）对资源进行操作，数据格式通常为JSON。   
GET: 获取资源   
POST: 创建资源   
PUT: 更新资源   
DELETE: 删除资源   

<!-- ### 前后端分离有几种方式？ -->

## HTTP方法（GET、POST、PUT、DELETE）一共四种，为什么大部分公司只用GET和POST
- 浏览器支持: 早期的一些浏览器对PUT和DELETE方法的支持不完善，这使得开发者更倾向于使用GET和POST，以确保兼容性。   
- GET和POST的普遍使用: GET用于获取数据，POST用于提交数据的模式简单易懂，适用于大多数场景。
- 客户端工具的支持: 很多HTTP客户端（如HTML表单、JavaScript库）对GET和POST有直接的支持，而对PUT和DELETE的支持相对较少。
- 服务器配置: 某些Web服务器或中间件默认只允许GET和POST方法，其他方法需要额外配置。
- 防火墙和代理: 一些防火墙或代理服务器可能会拦截或过滤PUT和DELETE请求，增加了部署和维护的复杂性。
- REST API习惯: 虽然RESTful API提倡使用不同的HTTP方法来表示不同的操作（CRUD），但很多开发者习惯用POST来模拟PUT和DELETE操作。
- 统一接口: 使用GET和POST可以简化客户端代码的实现，不需要处理不同的HTTP方法。
- 权限控制: 某些公司出于安全考虑，更倾向于使用POST来进行数据修改操作，以便更容易地进行权限控制和验证。
