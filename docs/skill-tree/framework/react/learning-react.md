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
! 函数式编程技术不仅是React的核心思想，也是React生态系统中很多库的重要编程手段  

函数始终是微积分的一个部分。

## 3.1 函数式编程是什么意思
JavaScript支持函数式编程，因为在JavaScript中，函数是一等成员。  

_ es6+新语法的改变都是为了方便函数式开发？  

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

!_ 纯函数不能有副作用  

!_ 纯函数要返回一个函数或者值，并且没有副作用  

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

! 对象转换成数组

! 如何使用Array.map和Array.filter转换数组  
! 如何结合Object.keys和Array.map把数组变成对象  

reduce和reduceRight函数可用于把数组转换成任何值，包括数字、字符串、布尔值、对象、甚至是函数。  

! reduce接受两个参数：回调函数和初始值  
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

!_ 元素创建与DOM描述  

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

!_ 全局映射&参数props获取

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

!_ 当组件的属性用JSX表达式必须使用花括号（即JavaScript表达式）  

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

!_ 组件就是函数，函数就是组件

使用对象析构可以让组件把这些字段的名称限定在本地作用域中   

## 5.4 React片段
使用React片段fragment渲染两个同辈组件。  

_ 创建的组件中有两个同级元素时会报错，只能创建一个根元素的组件。  

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
React组件的运作离不开数据。  

数据：属性只起到一半的作用，另一半靠状态state。  

如何创建有状态的组件  
如何沿着组件树向下发送状态  
如何沿着组件树向上反馈用户的交互  
收集表单数据的方法  
分离关注点  

## 6.1构建一个星级评价组件
react-icons  

## 6.2 useState钩子【学习】
! Hooks是一组可重用的代码逻辑，放在组件树之外，用于接入组件的功能。  

-c useState 是 React 中的一个钩子（hook），用于在函数组件中添加状态。它是 React 16.8 版本引入的，解决了函数组件无法使用状态的问题。useState 钩子允许你在函数组件中创建和管理状态。

-c useState 返回一个包含两个值的数组：当前状态和一个用于更新状态的函数。

钩子会导致所在的组件重新渲染。  
钩子中的数据发生变化后，钩子会使用新数据重新渲染所在的组件。  

! 函数组件和狗子时React的未来，类组件会退出历史舞台。  

## 6.3 为提高可重用性而重构
所有React元素都支持style属性。  

应该为以后可能使用组件的用户考虑。  

## 6.4 组件树中的状态
在每个组件中都使用状态不是个太好的主意。  

第一种做法是在状态树的根部存储状态，通过属性把状态传给子组件。  

### 6.4.1 沿组件树向下发送状态
? 如果在根组件使用useState那岂不是每次更新整个组件系统都要重新渲染一次。  

纯组件：不含状态的函数组件。  

### 6.4.2 沿组件树向上发送交互
_ 繁琐  

## 6.5 构建表单
通过表单从用户手中收集大量信息。  

在DOM中可用的HTML表单元素全部都有对应的React元素。  

### 6.5.1 ref
构建表单组件有好几种模式，ref是其中一种。  

ref可以直接访问DOM节点。  

使用useRef钩子创建ref。  
ref的值可以在JSX中直接使用ref属性设定。  

？不受控组件、受控组件  

### 6.5.2 受控组件
在受控组件中，表单值由React管理，而非DOM。  
此时，无须使用ref，不用编写命令式代码。  

? event.target.value   

避免在受控组件中添加耗时、耗资源的操作。  

### 6.5.3 自定义钩子
! 复制粘贴表明是重复的，应该提取出来，定义为函数。  

? React钩子函数和自定义钩子函数区别  

### 6.5.4 把颜色添加到状态中

## 6.6 React上下文【重点】
在React的早期版本中，把状态集中放在组件树的根部是一个重要的模式。  

在React中，上下文context就像是数据的飞行装备。  

### 6.6.1 把颜色放入上下文
在React中使用上下文，首先要把数据放入上下文供应组件，并把供应组件添加到组件树中。  

! createContext包含两个组件：一个上下文Provider和一个Consumer。  

上下文供应组件不是总要包含整个应用。有时也会包含部分特定的组件，这样效率更高。
供应组件只为所含的子组件提供上下文值。  

一个应用中可以有多个上下文供应组件。  

```js
import {createContext} from 'react' 
export const ColorContext = createContext()
 ...
<ColorContext.Provider value={}>
```
### 6.6.2 使用useContext获取颜色  
? React钩子函数有哪些  
? React访问状态的几种方式   

```js
import {userContext} from 'react'

const {xx} = userContext(ColorContext)
```

? 上下文消费组件   

### 6.6.3 有状态的上下文供应组件
当有状态的组件的状态发生变化时，将使用新的上下文数据重新渲染上下文供应组件。  

_ 供应组件可以传数据，也可以传函数。   

把setColors添加到上下文中或许不是个好主意。使用时，你和其他开发人员都可能会犯错。  
更好的方法是在上下文中为每一种操作添加一个函数。  

### 6.6.4 使用上下文自定义钩子
引入钩子之后，我们完全不用把上下文开发给消费组件。  
为了减轻团队成员的负担，我们可以把上下文包装到一个自定义的钩子中。  

? useContext  

_ 状态不需要写在供应组件上而是写钩子函数中   

# 第七章 使用钩子增强组件  
渲染是React应用的中心。  

## 7.1 useEffect介绍【重点】
! 组件就是负责渲染用户界面的函数。  

渲染之后做些事情该怎么办？  

想让渲染产生副作用就使用useEffect。  
副作用可以理解为函数在返回之外所做的其他事情。  

_ useEffect 就是用响应过后的值？

### 7.1.1 依赖数组
_ useEffect 每次渲染后都会调用，这不太好，比如场景 input输入框   

依赖数组可以控制什么时候调用useEffect。  
依赖数组是一个数组，可以检查多个值。  
useEffect第二个值可以是个空数组（没有依赖 ），此时只有在首次渲染后调用效应。   
如果useEffect返回一个函数，该函数将在把组件从组件树上移除时调用   

? 什么时候组件会从组件树上移除   

### 7.1.2 深入检查依赖
_ 依赖数组要通过比较是否新值来调用逻辑，但数组、对象不好比较。   

! 在JavaScript中，对数组、对象和函数来说，仅当完全是同一个实例时才相等。   

避免额外渲染的方式，使用另一个钩子---useMemo   
useMemo调用一个函数，计算得到一个备忘值。   

在计算机中，备忘memoization技术一般用于提升性能。   

对支持备忘的函数来说，调用函数得到的结果会被保存并缓存起来。以后如果使用相同的输入调用函数，返回的是缓存的值。   

React中使用useMemo比较缓存的值与当前值，判断值是不是真的变了。   

! 创建React应用，一定要理解useMemo钩子的作用。   

useCallBack的作用与useMemo类似，不过备忘的是函数而不是值。   

### 7.1.3 何时使用useLayoutEffect
渲染在前，然后各个效应按顺序运行，而且效应可以访问渲染后的所有值。   

! useLayoutEffect在渲染循环的特定时刻调用。  
- 1.渲染
- 2.调用useLayoutEffect 
- 3.浏览器绘制，即把组件元素添加到DOM中。   
- 4.调用useEffect。   


### 7.1.4 钩子的使用规则
钩子只在组件的作用域中运行   
- 钩子不是常规的JavaScript代码，而是一种React模式。   
建议把功能分解到多个钩子中   
- 由于钩子是按顺序调用的，因此最好让钩子保持小的体量。   
钩子应该只在顶层代码中调用   
- 钩子应在在React函数的顶层代码中使用，不能放在条件语句、循环或嵌套函数中。   
  : 可以在钩子函数中嵌套if语句、循环和其他条件语句   
- 异步操作也要嵌套到钩子中。   

Create React App包含一个名为eslint-plugin-react-hooks的ESLint插件   

### 7.1.5 使用useReducer改进代码
reducer函数最简单的定义是，接受当前状态并返回新状态的函数。   

useReducer接受的参数为reducer函数和初始状态false。   
```js
useReducer(checked=> !checked,false)
```

### 7.1.6 使用useReducer处理复杂的状态
! 管理状态时最常见的一个错误是覆盖状态   

### 7.1.7 提升组件性能 
提升组件性能涉及两方面   
- 一是避免不必要的渲染
  : memo/useMemo/useCallback 
- 二是减少渲染传播的时间  

如何使用useMemo和useCallback提升网站的性能。   

纯组件   
- : 对给定的属性，纯组件始终渲染相同的输出。  

? prompt()   
- : 在 JavaScript 中，prompt() 是一个内置函数，用于显示一个对话框，提示用户输入一些文本，并返回用户输入的内容。

! 使用memo函数可以创建只在属性变化时渲染的组件  

? memo函数 

: 断言(predicate)即一个只返回true或false的函数   

### 7.1.8 shouldComponentUpdate和PureComponent
memo函数是一个常见问题的新解决方案，不是React新引进的。   

在React之前版本中，shouldComponentUpdate定义了拿些属性或状态发生变化才应该重新渲染能组件。   

PureComponent的作用与React.memo相同，不过前者只适用于类组件，后者只适用于函数组件。  

### 7.1.9 何时重构
React本身并不慢，深层次的优化应该放在最后。   

# 第八章 处理数据
! 数据是应用的命脉。   
! 数据像水一样具有流动性，用值滋养着组件。   

网络、服务、系统、数据库   

## 8.1 请求数据
HTTP是互联网通信的支柱。  

? fetch  

### 8.1.1 随请求发送数据

### 8.1.2 使用fetch上传文件
上传文件需要使用一种不同的HTTP请求：multipart-formdata请求。   
在JavaScript中发起这种请求，只需要在请求的主体中传送一个Formdata对象。   

### 8.1.3 授权请求 【重点】
一般情况下，我们在每个请求中添加一个唯一的令牌token，供服务识别用户的身份。  
这个令牌通常在Authorization首部中添加。   

! 生成GitHub用户令牌   

useState的作用是把响应存储在状态中。  
useEffect的作用是发起fetch请求。  

? stringify(data,null,2)

### 8.1.4 在本地保存数据
可以使用Web Storage API把数据存储在本地浏览器中。  
localStorage将无限期保存数据，除非主动删除。  
sessionStorage只把数据保存到用户会话中，关闭标签页或重启浏览器，保存的数据都将清空。  

! JSON数据应该以字符串的形式保存到浏览器存储空间中。  

请勿使用Web Storage缓存数据。如果发现性能有波动，可以试着让HTTP处理缓存。  
添加Cache-Control: max-age=<ESP_DATE>  

### 8.1.5 处理Promise状态
HTTP请求和promise均有三种状态：待定、成功和失败。   

## 8.2 渲染属性 【学习】
<!-- ?_ 渲染属性模式创建组件    -->

? toLocalString()?   

-c 在 React 中，渲染属性（Render Props）是一种模式，允许你将组件的渲染逻辑作为一个函数(?!_ 函数还是属性？应该是属性吧？)传递给组件。这种模式可以让你在组件之间共享逻辑，同时保持代码的清晰和可维护性。   

!渲染通过某个属性传入的组件。  

## 8.3 虚拟化列表
浏览器的渲染能力是有限的。  
渲染要耗费时间、占据处理能力及消耗内存。  

一次渲染”指定个“元素，其它数据排队等候，后面在渲染。这种技术成为虚拟化。   

? 虚拟化   

最受欢迎的虚拟化列表组件是react-window和react-virtualized   

```js
npm i faker
应该是用来制造假数据的
```

? width={50} 这里不需要单位么？   
? children属性   

### 8.3.1 创建useFetch钩子
自定义useFetch钩子   

### 8.3.2 创建fetch组件
! 钩子最大的作用是跨组件重用功能。   

### 8.3.3 处理多个请求 【学习】

### 8.3.4 备忘值 【学习】

### 8.3.5 瀑布式请求
react-markdown 把Markdown渲染为HTML   

### 8.3.6 限制网络速度
在开发者工具的“NetWork”标签页中查看。可以查看每一个请求，还可以限制网络速度。   

### 8.3.7 并行请求

### 8.3.8 等待值出现  

### 8.3.9 取消请求

## 8.4 GraphQL简介
_ React和GraphQL都是Facebook设计的。   

同时获得所需的全部数据。   

### 8.4.1 GitHub GraphQL API

### 8.4.2 发起一个GraphQL请求
GraphQL请求是在请求主体中包含查询的HTTP请求。   
可以使用fetch发起GraphQL请求。   

graphql-request   

? GraphQL   


! promise/fetch/HTTP   

# 第九章 Suspense

# 第十章 React测试
函数式编程技术的一个优势是写出的代码易于测试。  

## 10.1 ESLint 
eslint-plugin-react插件   

eslint --init 创建一个ESLint配置文件   
.eslintrc.json   

eslint . 对整个目录执行lint操作。   

### ESLint插件 
eslint-plugin-react-hooks   

eslint-pluginjsx-a11y   

## 10.2 Prettier
代码格式化工具。   

ESLint负责保证代码质量，Prettier负责处理代码格式化。   

### 10.2.1 在项目中配置Prettier
.prettierrc配置文件   

eslint-config-prettier   
eslint-plugin-prettier   

### 10.2.2 在VSCode中使用Prettier
在保存时自动格式化代码。   
Code->Preferences->Settings   

可以把Prettier的配置添加到编辑器的设置中。  

## 10.3 对React应用做的类型检查
主要有三种方式：prop-types/Flow/TypeScript   

### 10.3.1 PropTypes
prop-types   

### 10.3.2 Flow
Flow是一个类型检查库，Facebook开发和维护。  

### 10.3.3 TypeScript
由Microsoft开发   
旨在帮助开发者找出大兴应用的bug，并快速迭代项目。   

? Jest?   

TypeScript的作用不止验证属性，还可以做类型推导对钩子值做类型检查。      

## 10.4 测试驱动开发
Test-driven development TDD 测试驱动开发   
是一种实践方式，不是一项工程技术。   

测试的步骤是 遇红（失败）、变绿（通过）和镀金（重构）   

! TDD特别适合用于开发React应用，尤其方便测试钩子。   

### 边学习边践行TDD

## 10.5 Jest
React官方推荐使用的测试框架Jest   

### Create React App和测试
被测系统system under test SUT   

expect()   
.toBe   
.toEqual   

describe()   

## 10.6 测试React组件   
对组件的测试首先要渲染能组件，然后检查得到的DOM。   

组件测试不在浏览器中运行，而是在终端里使用Nodejs运行。   

Jest集成的jsdom包可以再Node.js中模拟浏览器环境   

testing-library增强测试工具的功能   

### 10.6.1 查询

### 10.6.2 测试事件

### 10.6.3 代码覆盖度
指具体对多少行代码做了测试的统计，通过这个指标可以判断有没有编写足够的测试。   

Istanbul   

超过85就算不错了   

# 第十一章 React Router

## 11.1 使用React Router
安装React Router和React Router DOM   

入口文件不再渲染App组件，而是渲染Router组件。   
Router组件只能使用一次，而且应该放在组件树中靠近根的位置上。  

要渲染的各个路由嵌套在名为Routes的组件中。   
在Routers中，一个页面使用一个Route组件设置。   

react-router-dom   

## 11.2 React Router属性

### 嵌套路由

Outlet组件   

### 11.3 重定向

#### 路由参数
react-router-dom   
useParams   
useNavigate   

路由参数是获取影响用户界面呈现内容所需数据的理想工具。   

# 第十二章 React服务器端渲染
借助服务器端渲染，可以提升性能、增进可移植性、提高安全性。   

## 12.1 同构与普适
同构和普适通常都指在客户端和服务器端均可以运行的应用。   
同构应用指可以在多个平台上渲染的应用   
普适代码指同一套代码可在多个环境中运行   

普适JavaScript代码既可以在服务器端运行，也能在浏览器中运行。   

### 客户端和服务端范畴

Node.js与浏览器不同，没有内置fetch函数。   

## 12.2 服务器端渲染React
使用ReactDOM.renderToString方法可以在服务器端渲染UI。   

把ReactDOM.render换成ReactDOM.hydrate。   
ReactDOMServer   

## 12.3 使用Next.js做服务器端渲染

构建应用方面的一些重要的术语：   
- CSR client-side rendering 客户端渲染
- SSR server-side rendering 服务端渲染
- 再输送
  在客户端加载JavaScript视图，重用服务器端渲染的HTML DOM树和数据。
- 与渲染
  在构建时运行客户端应用，把初始状态生成为静态HTML

## 12.4 Gatsby

静态内容网站。   

功能：  
- 静态内容
- CDN支持
- 响应式和渐进式图像
- 预获取链接的页面

## 12.5 React未来展望

























