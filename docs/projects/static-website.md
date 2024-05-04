# 静态网站搭建
使用VitePress和github快速搭建一个静态网站

## 1.github创建一个项目   
登录github创建一个项目   
并把项目clone到本地   
```txt
git clone git@github.com:username/your-repositories.git
```

## 2.初始化项目  
```txt
npm init
```
添加 .gitignore

## 3.创建vitepress
```txt
npx vitepress init
```

其中这一项最好不要选择根目录，起一个你喜欢的名字，比如：docs
```txt
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
```

安装vitepress包
```txt
npm install vitepress
```

启动项目
```txt
npm run docs:dev
```

## 4.发布到github
执行git命令
```txt
git add .
git commit -m '提交项目'
git push
```

## 5.配置github pages
1. 找到Settings中的pages选项
2. 设置Build and deployment的source选项Deploy from a branch
3. Branch设置master/docs目录    

这个时候静态网站已经可以访问了，默认访问的是根目录下的readme

## 6.配置action
配置vitepress的config文件   
选项中添加base: "/test/",   

### GitHub Pages
在根目录中创建文件夹.github/workflows   
创建main.yml文件  
添加如下代码：   

```txt
# 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程
#
name: Deploy VitePress site to Pages

on:
  # 在针对 `main` 分支的推送上运行。如果你
  # 使用 `master` 分支作为默认分支，请将其更改为 `master`
  push:
    branches: [main]

  # 允许你从 Actions 选项卡手动运行此工作流程
  workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      # - uses: pnpm/action-setup@v3 # 如果使用 pnpm，请取消注释
      # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm # 或 pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci # 或 pnpm install / yarn install / bun install
      - name: Build with VitePress
        run: npm run docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

在存储库设置中的“Pages”菜单项下，选择“Build and deployment > Source > GitHub Actions”。

这样访问的就是docs中vitepress生成的内容了，而且每次上传代码都会自动打包部署。

### 资料
https://vitepress.dev/zh/guide/deploy#setting-a-public-base-path