# Vue3组件库开发教程
## 流程
1.搭建  
2.实现  
3.打包  
4.发布  
5.文档  

## 1.创建Vue3组件库项目
Vite  
  npm create vite@latest  
  选择vue JavaScript方式  

### 目录结构修改
components 组件目录  
  css      组件样式  
  lib  
    xxx  
      src  
        main.vue 组件  
      index.js   组件install  

    index.js 全部组件安装入口      

src改成examples 入口模版  
  修改完记得修改下根目录下index.html引入入口文件的地址，不用重新配置入口文件，应该是vite内部做好了。

_感觉是自己会自动去找根目录上html中的引入的js文件，不用单独配置入口文件了

<!-- ### vite配置
自定义配置入口文件 -->

### vite配置scss
vite sass好像不用配置 安装sass就行 sass-loader都不用按

Vite 不需要额外的配置来支持 Sass。只需安装 sass 和 sass-loader 依赖，Vite 就会自动检测到并使用它们来处理 SCSS 文件。

### vite改写main.js
改成可use模式

const app = createApp(App)

## 2.Vue3组件实现 【重点】
### 写组件
```js
export default {
  name: "g-button",
  props: {
    // ...
  },
};
```
注意 组件中使用export default的形式可以导出组件名  
script setup不能导出组件名  

使用插件形式  
必须要包含一个install函数【重点】  

单独导出  
```javascript
import GButton from './src/main.vue';
GButton.install = (app, options) => {
  app.component('g-button', GButton)
}
export default GButton
```
整体导出  
也是一样的原理要保证有install  

注意export时候别出错  
### Vue3如何安装使用组件
整体导入  
```js
import GreatVue from '../components/lib'
```

单个导入  
```js
import GButton from '../components/lib/button'
```

使用
```js
app.use(GreatVue)
app.use(GButton)
```

_注意export导出规则【重点】  

## 3.打包 【重点】
### 配置文件
配置vite build  

### 打包js
把各个组件js打包到dist目录中  
把全部组件入口index.js打包到dist目录中  

fast-glob  
### 打包css 【重点】
把css打包到dist目录中  
```js
import dartSass from 'sass'  
import gulpSass from 'gulp-sass'  
import minifyCSS from 'gulp-minify-css'  
const sass = gulpSass(dartSass)  
```

## 4.发布【重点】
修改package.json   
指定发布文件目录  

npm login  
npm publish  

## 5.文档
### 搭建vitepress站点
1.直接在根目录中执行 npx vitepress init  
2.根据选项建站  
3.在github上创建个人站点  
https://docs.github.com/  
https://docs.github.com/zh/pages/quickstart  
4 .部署到github上  
修改vitepress config.js文件  
  base: "/greatbrick/",  
[vitepress-github部署]https://vitepress.dev/zh/guide/deploy#setting-a-public-base-path【重点】