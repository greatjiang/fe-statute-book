# Fetch

## 网络请求API有哪些   

## Fetch
fetch 是一种现代的网络请求API，提供了一种更简单、更强大且基于Promise的方式来进行HTTP请求。   
它旨在替代传统的XMLHttpRequest（XHR），并提供了一些额外的功能和灵活性。   

## 兼容性
fetch 是现代浏览器中广泛支持的API，但在某些旧版浏览器中可能不被支持。   
- 现代浏览器: 大多数现代浏览器（如Chrome、Firefox、Safari、Edge）都支持fetch。   
- 旧版浏览器: IE11及以下版本不支持fetch。在这些浏览器中使用fetch需要Polyfill，例如whatwg-fetch库。
- Node.js: Node.js不原生支持fetch，但可以使用node-fetch等库来实现

## 优势
与传统的XMLHttpRequest（XHR）相比，fetch具有以下优势：   

- 基于Promise:   
  - fetch 返回一个Promise，使得处理异步操作更加直观和易于管理。
  - 方便使用.then()和.catch()链式调用来处理结果和错误。
- 更简洁的API:
  - fetch 的API设计更加简洁，使用起来更直观。   
  - 不需要处理复杂的状态码和状态变化（如readyState）。
- 灵活性:
  - 支持更丰富的配置选项，如请求头、请求体、请求模式等。   
  - 更好的处理CORS（跨域资源共享）和credentials（凭证）设置。
- 响应流:
  - fetch 允许流式处理响应数据（例如通过.body.getReader()），适合处理大文件和流式数据。
- 取消请求:
  - 尽管fetch本身不直接支持取消请求，但可以结合AbortController实现请求取消，增加了灵活性。   