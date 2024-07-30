# reduce
Array.prototype.reduce 方法是在 ECMAScript 5.1（也称为 ES5）中引入的。ES5 是在 2009 年发布的，因此 reduce 方法在现代浏览器中都可以使用。

## 概念
reduce方法是JavaScript中数组的一个高阶函数，用于对数组中的每个元素执行一个提供的函数（称为“归约函数”），将其结果汇总为单个值。

```js
array.reduce(callback(accumulator,currentValue,currentIndex,array),initialValue)
```
callback: 用于每个数组元素的函数，包含四个参数：   
- accumulator: 累加器，用于累积计算结果。
- currentValue: 当前处理的数组元素。
- currentIndex（可选）: 当前处理元素的索引。
- array（可选）: 调用 reduce 的数组。
- initialValue（可选）: 作为第一次调用 callback 的 accumulator 的初始值。如果提供了 initialValue，则 accumulator 会在第一次调用时被赋予该值，否则 accumulator 会在第一次调用时被赋予数组的第一个元素，且 currentValue 会从第二个元素开始。


## 高阶函数
高阶函数指用于处理其他函数的函数，其参数可以使函数，也可以返回函数，或者二者兼而有之。

## 使用场景
reduce方法可以处理各种复杂的累加逻辑，是数组操作中非常强大且灵活的工具。

使用场景： 
1. 数组求和  
2. 数组扁平化
3. 统计数组中每个元素出现的次数
4. 数组最大值

## 注意事项
1. 建议总是提供初始值
2. 如果不提供初始值，第一个元素会作为初始值，从第二个开始迭代
3. 空数组使用不带初始值的reduce会抛出TypeError

## 功能
reduce对数组中的每个元素按顺序执行一个 reducer 函数（将其结果累积为单个值）。  
reduce 的主要作用是将数组中的所有元素计算为一个值。
