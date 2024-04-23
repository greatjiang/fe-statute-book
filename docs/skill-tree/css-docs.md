# CSS

## 文本超出显示省略号
单行文本溢出省略   
```css
.single-line {
  white-space: nowrap; /* 禁止文本换行 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 文本溢出时显示省略号 */
}
```