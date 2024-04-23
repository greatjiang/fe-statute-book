# JavaScript

## 浅拷贝
```javascript
// 使用 Object.assign() 进行浅拷贝
const shallowCopy = (obj) => Object.assign({}, obj);

// 使用展开运算符进行浅拷贝
const shallowCopy = (obj) => ({ ...obj });

```

## 深拷贝
```javascript
// 使用 JSON.parse() 和 JSON.stringify() 进行深拷贝
const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

// 递归地进行深拷贝
const deepCopy = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj; // 如果是基本类型或 null，则直接返回
  }

  const copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    copy[key] = deepCopy(obj[key]); // 递归调用深拷贝函数
  }
  return copy;
};

```

## 防抖
防抖: n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时

## 节流
节流: n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效

## 判断可视区

## 闭包

## 柯里化函数

## 数据类型判断

## bind、call、apply 区别
