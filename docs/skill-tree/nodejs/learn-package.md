# package.json常用配置属性解析

## name
设置软件包的名字   

## author
作者名称

## bugs
链接到软件包的问题跟踪器，最常用的是 GitHub 的 issues 页面

## homepage
主页

## version
软件当前版本   

## license
许可证

## keywords
此属性包含与软件包功能相关的关键字数组  

## description
对软件包的简短描述

## repository
仓库位置

## main
软件包的入口点

## private
如果设置为 true，则可以防止应用程序/软件包被意外发布到 npm 上 

## files
指定项目发布时需要包含在发布包中的文件或目录列表

## config
配置你的脚本的选项或参数

## module
指向目标环境支持的语法功能

## bin
随着项目一起被安装的可执行文件   
项目命令  
创建全局命令的时候用得到，比如：vite、creat-vue

## man
命令行工具的使用文档 
```bash
{
  "name": "my-package",
  "version": "1.0.0",
  "man": "./man/my-package.1"
}
```  
可以通过 "man my-package" 命令查看对应的手册页

## scripts
可以定义一组可以运行的 node 脚本   

这些脚本是命令行应用程序。 可以通过调用 npm run XXXX 或 yarn XXXX 来运行它们

## dependencies
设置作为依赖安装的 npm 软件包的列表
 
## devDependencies
设置作为开发依赖安装的 npm 软件包的列表    
它们只需安装在开发机器上，而无需在生产环境中运行代码  

```bash
npm install --save-dev <PACKAGENAME>
yarn add --dev <PACKAGENAME>
```

## engines
设置此软件包/应用程序要运行的 Node.js 或其他命令的版本

## browserslist
用于告知要支持哪些浏览器（及其版本）   
Babel、Autoprefixer 和其他工具会用到它，以将所需的 polyfill 和 fallback 添加到目标浏览器   

## package-lock.json 文件
在版本 5 中，npm 引入了 package-lock.json 文件。   

该文件旨在跟踪被安装的每个软件包的确切版本，以便产品可以以相同的方式被 100％ 复制。   
package-lock.json 会固化当前安装的每个软件包的版本，当运行 npm install时，npm 会使用这些确切的版本。