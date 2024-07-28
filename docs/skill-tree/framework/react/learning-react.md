# 第一章 初始 React
[github](https://github.com/MoonHighway/learning-react)

## 1.1坚实的基础
熟悉JavaScript  
数组  
对象 
函数  
ES6+语法  
函数式编程  
组件  
属性和状态  
React Hooks  
Suspense  
路由  
测试  
服务器渲染  

## 1.2React的过去和未来

## 1.3资源文件

### 1.3.2React开发者工具

# 第二章 JavaScript新特性

# 第三章 JavaScript函数式编程【重要】
!函数式编程技术不仅是React的核心思想，也是React生态系统中很多库的重要编程手段  

函数始终是微积分的一个部分。

## 3.1 函数式编程是什么意思
JavaScript支持函数式编程，因为在JavaScript中，函数是一等成员。  

_es6+新语法的改变都是为了方便函数式开发？  

由于函数是变量，那就可以把函数添加到对象中。  

函数是数据  

## 3.2命令式和声明式
函数式编程是一个更大编程范式的一部分，即声明式编程。  

声明式：重点描述该做什么，而不管怎么做。  
命令式：只关注如何使用代码得到结果。  

## 3.3函数式编程基本概念
不可变性、纯函数、数据转换、高阶函数和递归。

### 3.3.1 不可变性
我们不直接更改原始数据结构，而是创建数据结构的副本，所有操作都是用副本。  

-展开运算符复制功能 浅拷贝  
-箭头函数不能指向一个对象的花括号，需要加一个小括号。需要return  

### 3.3.2 纯函数
纯函数指基于参数做计算，并返回一个值的函数。  

!_纯函数不能有副作用  

!_纯函数要返回一个函数或者值，并且没有副作用  

在React中，UI使用纯函数表达。  

纯函数是函数式编程的核心概念。   

三条编写函数规则：  
1.函数应该至少接受一个参数  
2.函数应该返回一个值或另一个函数  
3.函数不应该更改任何参数  

### 3.3.3 数据转换
js函数式编程必须掌握的两个核心函数：Array.map和Array.reduce  

把数据从一种类型转换成另一种类型  

Array.join  
Array.filter根据原数组产出一个新数组。  

?断言predicate
  返回布尔值

Array.pop  
Array.splice   

Array.map接受的参数不是断言，而是一个函数。  
这个函数在数组的每个元素上调用一次，不管返回什么都添加到新数组中。  
map函数可以产出任何js类型的数组  

!对象转换成数组

!如何使用Array.map和Array.filter转换数组  
!如何结合Object.keys和Array.map把数组变成对象  

reduce和reduceRight函数可用于把数组转换成任何值，包括数字、字符串、布尔值、对象、甚至是函数。  

reduce接受两个参数：回调参数和初始值  
从数组开头开始  

Array.reduceRight的作用与reduce相同，只不过是从数组末尾开始。  

### 3.3.4 高阶函数【重要】
高阶函数指用于处理其他函数的函数，其参数可以使函数，也可以返回函数，或者二者兼而有之。  

map/filter/reduce 接受函数作为参数，因此他们是高阶函数  

高阶函数有助于我们处理js复杂的异步操作。   

柯里化就是需要用到高阶函数的一种函数式技术。   

### 3.3.5 递归
递归技术指创建调用自身的函数。  

递归模式特别适合在异步操作中使用。

递归是一项强大的函数式技术，实现起来是一种享受。  

### 3.3.6 合成【学习】
在js中函数可以使用点号记法串接在一起，依次处理前一个函数的返回值。  

### 3.3.7 综合应用

## 总结【重要】
1. 函数式编程
2. 命令式和函数式
3. 函数式编程的基本概念
4. 纯函数
5. Array.map和Array.reduce
6. 高阶函数
7. 柯里化
8. 递归

# 第四章 React运行机制
JSX  
React元素  
React组件  

## 4.1 页面设置 
React 创建视图  
ReactDOM 负责在浏览器中渲染UI  

## 4.2 React元素
React是更新浏览器DOM的一个库。  
有了React我们不再直接与DOM API交互  

React元素是对真正的DOM元素的描述。  

React.createElement("元素类型",{属性},指定元素的子节点)  

React组件其实就是JavaScript字面量，告知React如何构建DOM元素。  

React元素的type属性告知React要创建的是什么类型的HTML或SVG元素。  
props属性表示构建一个DOM元素所需要的数据和子元素。  

!_元素创建与DOM描述  

## 4.3 ReactDOM
ReactDOM.render(渲染的元素,目标节点)  

在React16之前的版本中，只能在DOM中渲染一个元素。  
而现在可以渲染数组。  

### 子元素  
React使用props.children渲染渲染子元素。  

!传给createElement函数的各个额外参数就是一个子元素。React将创建一个由子元素构成的数组，
把props.children的值设为这个数组。  

!class是JavaScript的保留字，所以使用className定义HTML元素的class属性。  

### 使用数据构建元素
Array.map  

## 4.4 React组件
组件方便重用相同的结构，只需在结构中填充不同的数据即可。   

!_全局映射&参数props获取

### React组件历史回顾
1. React.createClass
2. 类组件React.Component

# 第五章 在React中使用JSX
是对JavaScript的扩展【重要】  
使用一种基于标签的语法直接在JavaScript代码中定义React元素。  

## 5.1 使用JSX创建React元素
组件的属性有两种类型：字符串或者JavaScript表达式。  
JavaScript表达式可以是数组、对象，甚至是函数。  
传入的表达式必须放入一对花括号内。  

!_当组件的属性用JSX表达式必须使用花括号（即JavaScript表达式）  

### 5.1.1 JSX小贴士
嵌套组件  
className  
JavaScript表达式放在一对花括号内，表示要对变量求值，并返回得到的值。  
求值 一对花括号之间的JavaScript代码会做求值。  

### 5.1.2 使用JSX映射数组
JSX是JavaScript，可以直接在JavaScript函数中使用。【重要】   

<!-- _JSX允许你在JavaScript文件中编写类似HTML的语法，最终这些JSX会被编译成JavaScript函数调用。  
_JSX会被编译成React.creatElement()   -->

JSX需要Babel编译。

## 5.2 Babel
在HTML中使用Babel  
```js
<script type="text/babel">
编写JSX代码
</script>
```

## 5.3 使用JSX编写菜谱应用
JSX的缺点是浏览器读不懂。  

!_组件就是函数，函数就是组件

使用对象析构可以让组件把这些字段的名称限定在本地作用域中   

## 5.4 React片段
使用React片段fragment渲染两个同辈组件。  

_创建的组件中有两个同级元素时会报错，只能创建一个根元素的组件。  

使用React片段，我们可以模拟容器的行为，但不真正创建新标签。【重要】  

```js
<React.Fragment>
  <h1></h1>
  <h2></h2>
<React.Fragment>
```

简写：  
```js
<>
  <h1></h1>
  <h2></h2>
</>
```

React.Fragment 是在 React 16.2.0 版本中发布的。【重要】  

## 5.5 webpack简介
使用React开发真正的项目时，需要考虑很多问题：  
如何转换JSX和ESNext  
如何管理依赖  
如何优化图像和CSS  

工具：  
create-react-app  
Gatsby  


webpack在宣传上称自己为模块打包工具。  
打包的好处主要体现在两方面：模块化和网络性能。  

webpack处理事项：  
代码拆分  
代码简化  
特性标记  
模块热替换  

好处：  
模块化  
合成  
速度  
一致性  

### 5.5.1 创建项目
1. 创建项目
2. 写组件
3. 设置webpack，与babel协同构建

#### 1.创建项目
```js
npm init -y
npm install react react-dom serve
```

[npm install安装时一直idealTree:npm: sill idealTree buildDeps解决方案](https://developer.aliyun.com/article/1486669?spm=5176.26934562.main.2.56976130mCOJwl)  

#### 2.按模块划分组件
只要使用JSX，就要在文件顶部导入React【重要】  

?组件属性展开运算符   

react-dom渲染组件  

#### 3.使用webpack构建
```js
npm install --save-dev webpack webpack-cli
```

webpack默认使用的配置文件名为webpack.config.js  

```js
npm install babel-loader @babel/core --save-dev  
```

### 5.5.2 加载构建包

### 5.5.3 源码映射
config.js配置项devtool  

### 5.5.4 Create React App
```js
npm install -g create-react-app
```

使用：  
```js
create-react-app my-project
```

# 第六章 React 状态管理
