# Vue需要掌握的知识点

## 必备
1. 创建一个Vue项目
2. 状态管理
3. 路由管理
4. 组件开发

## 不常用
1. 指令

## 实战项目
1. 管理后台
2. 活动页面

## 详细
```text
1. 基础知识
a. Vue 核心概念
Vue 实例：理解 Vue 实例的生命周期，如何创建和管理 Vue 实例。
模板语法：掌握模板中的指令（如 v-if、v-for、v-bind、v-model）。
计算属性和侦听器：理解计算属性的缓存特性和侦听器的使用场景。
Class 与 Style 绑定：动态绑定 CSS 类和内联样式。
b. 组件
组件基础：创建和使用组件，组件的注册（全局和局部）。
组件通信：使用 props 和 events 在父子组件间传递数据和事件。
插槽：使用插槽（slots）实现组件内容分发。
动态组件和异步组件：根据条件动态渲染不同组件，按需加载组件。
2. 高级知识
a. 路由
Vue Router：掌握 Vue Router 的基本使用，定义路由、嵌套路由、动态路由、命名路由。
导航守卫：使用导航守卫控制路由访问权限（全局守卫、路由守卫、组件守卫）。
路由元信息：在路由配置中使用元信息（meta）存储附加信息。
b. 状态管理
Vuex：理解 Vuex 的核心概念（state、getter、mutation、action、module）。
模块化：在大型项目中将 Vuex 状态管理模块化。
c. 服务器通信
Axios：使用 Axios 或其他 HTTP 库进行 API 请求。
异步操作：掌握异步数据请求的处理方式（async/await，Promise）。
3. 生态系统和工具
a. CLI 工具
Vue CLI：使用 Vue CLI 脚手架工具初始化、开发和构建 Vue 项目。
项目结构：理解和优化 Vue 项目的目录结构和配置。
b. 插件和库
Vuetify/Element UI：掌握常用 UI 组件库的使用，快速构建美观的用户界面。
Vue Router 和 Vuex 插件：如 Vuex Persisted State、Vue Router Transitions 等。
c. 单文件组件（SFC）
单文件组件：理解 .vue 文件的结构（template、script、style）。
预处理器：使用预处理器（如 Sass、Less、TypeScript）增强开发体验。
4. 实践与优化
a. 性能优化
懒加载和按需加载：使用代码分割和懒加载优化性能。
虚拟列表：在处理长列表时使用虚拟滚动提高性能。
响应式优化：避免不必要的响应式数据更新，优化数据流。
b. 测试
单元测试：使用 Jest 或 Mocha 进行组件的单元测试。
端到端测试：使用 Cypress 或 Nightwatch.js 进行端到端测试。
5. 最新特性
Vue 3：掌握 Vue 3 中的新特性和变化，包括 Composition API、Teleport、Fragments 等。
TypeScript 支持：在 Vue 项目中使用 TypeScript，提高代码的类型安全性和可维护性。

```

