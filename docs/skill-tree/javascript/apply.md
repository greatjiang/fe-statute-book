# apply
Function.prototype.apply(thisArg[, argsArray])   
可以指定this   

## null
在使用时，比较迷惑的就是this传入null   

```js
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
```

有两点需要注意：   
- 非严格模式下null就会指代全局变量window/global
- 严格模式下null还是null

应用场景：   
- 函数不需要使用 this 时：   
  当函数内部不使用 this，可以传入 null 来简化调用。  
- 避免硬编码全局对象：   
  在某些场景下，传入 null 可以避免硬编码全局对象，从而使代码更通用

## apply()方法是如何将数组转为函数的参数的
apply 方法能够将数组转为函数的参数，这是因为它将数组中的每个元素作为单独的参数传递给函数。   
这背后涉及到 JavaScript 的内部机制，使得函数可以接收任意数量的参数。   

## 补充
硬编码全局对象（hardcoding global objects）是指在代码中直接使用特定的全局对象，如 window（在浏览器中）或 global（在 Node.js 中）。   
这种做法会使代码变得不够灵活和不易维护，因为它依赖于特定的执行环境。   
硬编码全局对象使得代码在不同的运行环境中不易复用或移植。   