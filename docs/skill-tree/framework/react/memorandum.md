## ? 为什么jsx return时需要加一个小括号  
在 JSX 中，返回时使用小括号是为了确保 JSX 代码能够正确地解析和渲染。这主要是为了防止在编写多行 JSX 代码时遇到自动插入分号的坑（Automatic Semicolon Insertion, ASI）。   

## ? React钩子函数有哪些    
- useState
  用于在函数组件中添加状态。
- useEffect
  允许你在函数组件中执行副作用操作，如数据获取、订阅和手动 DOM 操作。
- useContext
  使你能够在组件中订阅 context 的值。
- useReducer
  用于在函数组件中管理复杂的状态逻辑，类似于 Redux 中的 reducer。
- useCallback
  返回一个记忆的回调函数，只有在依赖项发生变化时才会更新。
- useMemo
  返回一个记忆的值，只有在依赖项发生变化时才会重新计算。
- useRef
  返回一个可变的 ref 对象，其 .current 属性被初始化为传递的参数（initialValue）。ref 对象在组件的整个生命周期内保持不变。
- useImperativeHandle
  自定义使用 ref 时公开给父组件的实例值。在使用 forwardRef 时很有用。
- useLayoutEffect
  类似于 useEffect，但它在所有 DOM 变更之后同步调用 effect。使用它来读取布局并同步重新渲染。
- useDebugValue
  用于在 React DevTools 中显示自定义钩子的标签。

## ? React访问状态的几种方式    
- useState：适用于简单的本地状态管理。
- useReducer：适用于复杂的本地状态逻辑管理。
- useContext：适用于跨组件树共享状态。
- 自定义钩子：适用于封装和复用复杂的状态逻辑。
- 全局状态管理库（Redux、MobX、Recoil）：适用于应用级别的状态管理。