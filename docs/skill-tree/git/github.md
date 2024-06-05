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