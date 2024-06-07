# Github

## GitHub上的自动发布流程更改为手动发布
找到github工作流配置文件   
```text
.github/workflows
```
找到on这一项
```sh
on:
  push:
    branches: main
```

改成
```sh
on:
  workflow_dispatch:
```

提交到github上。
以后的工作流都需要手动发布了。

## 如何提交问题
找到项目，点击 “New issue”创建  
issue不能被删除只能标记已解决或者是关闭问题（需要权限）  

## 合并branch