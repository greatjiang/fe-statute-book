# 全栈日记项目教程
更新中...

## 开发流程
1.需求分析和规划   
2.技术选型   
3.项目架构设计   
4.前端开发   
5.数据模型设计与开发   
6.后端开发   
7.部署和发布   

## 1.需求分析和规划
编写一个后端管理系统和前端网站。   

**后台管理系统功能包括：**   
```txt
系统登录、系统登出；   
博客管理：包括博客的新增、修改、删除、列表展示、分页、搜索、编辑博客、发布、撤销、恢复等功能；    
专题管理：专题是对一些列文章的管理。功能包括：新增、修改、删除、展示、分页、搜索、发布、撤销等功能；   
标签管理：标签是给单个文章做分类的。功能包括：新增、删除、搜索等功能；    
```

**前端网站功能包括：**
```txt
专题展示；
文章列表；
文章搜索；
标签选择；
```

至此一个简单的系统分析就做完了。   

## 2.技术选型
整体项目分为：后台管理系统+前端网站   
后台管理系统的主要技术：Vite、Vue3、Vue-router、element-plus、wangeditor富文本插件、Axios、Express、Mysql等技术     
前端网站的主要技术：Vite、Vue3、Vue-router、Bootstrap、Axios、Koa等技术   

## 3.项目架构设计
管理系统页面和前端网站页面选用Vite搭建；   
管理系统后端接口选用Express+Mysql；   
前端网站后端接口选用Koa+Mysql；   

## 4.前端开发

### 后台管理系统
1.创建项目   
```javascript
npm create vite@4.2.0 project-name
```
2.项目结构
```javascript
project-root/
  ├── src/
  |    ├── assets/ #静态资源 比如网站图标
  |    ├── auth/
  |    |    └── auth.js  # 前端登录验证
  |    ├── components/ # 组件
  |    ├── plugins/ # 插件
  |    |    └── fetch/      
  |    |          └── axios.js      # axios配置
  |    ├── router/ #路由配置
  |    ├── utils/ #工具库
  |    ├── views/ #页面
  |    └── App.vue # 主应用页面
  |    └── main.js                  # 主应用文件
  ├── node_modules/
  ├── package.json
  └── ...
```

3.配置路由   
安装vue-router插件   
```javascript
npm install vue-router@4
```
在router目录下创建一个children子目录放置子路由   
在router目录下创建index.js作为主路由   

4.Axios配置   
主要配制：      
请求transformRequest：对请求的data任意转换。   
请求拦截器：在发送请求之前做些什么。比如：添加token。       
响应拦截器：对响应数据做点什么。比如：根据接口返回code判断未登录的情况，执行后续行为。   

5.其它项目配置   
配置全局Axios   
```js
import plugins from './plugins/fetch/index.js';
app.config.globalProperties.$fetch = plugins
```
添加element-plus组件   
```js
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
app.use(ElementPlus)
```

## 5.数据模型设计与开发   
数据库设计选用MySQL8。   

数据表设计：   
  文章表
  ```sql
  CREATE TABLE `article` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '文章ID',
    `title` varchar(255) NOT NULL COMMENT '文章标题',
    `summary` varchar(255) NOT NULL COMMENT '文章摘要',
    `label_id` varchar(255) DEFAULT NULL COMMENT '标签ID',
    `cover` varchar(255) DEFAULT '' COMMENT '文章封面',
    `content` longtext COMMENT '文章内容',
    `likenum` int(10) unsigned DEFAULT '0' COMMENT '点赞量',
    `status` int(10) unsigned DEFAULT '0' COMMENT '文章状态 0未上线1已上线2已删除',
    `visitnum` int(10) unsigned DEFAULT '0' COMMENT '浏览量',
    `category_id` int(10) unsigned DEFAULT '0' COMMENT '文章分类ID',
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
    `level` int(10) unsigned DEFAULT '0' COMMENT '文章等级',
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=384 DEFAULT CHARSET=utf8mb4 COMMENT='博客文章表';
  ```
  专题表   
  ```sql
    CREATE TABLE `categories` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `name` varchar(255) NOT NULL COMMENT '名称',
    `status` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '状态',
    `cover` varchar(255) NOT NULL COMMENT '封面',
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
    `level` int(10) unsigned DEFAULT '0',
    PRIMARY KEY (`id`),
    UNIQUE KEY `name_UNIQUE` (`name`)
  ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COMMENT='博客类型表';
  ```
  标签表   
  ```sql
    CREATE TABLE `labels` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '标签ID',
    `name` varchar(255) NOT NULL COMMENT '标签名称',
    `status` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '标签状态',
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`id`),
    UNIQUE KEY `name_UNIQUE` (`name`)
  ) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COMMENT='博客标签表';
  ```
  用户表   
  ```sql
  CREATE TABLE `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
    `username` varchar(50) NOT NULL COMMENT '用户名',
    `password` varchar(255) NOT NULL COMMENT '密码',
    `email` varchar(50) DEFAULT NULL COMMENT '电子邮箱',
    `mobile` varchar(20) DEFAULT NULL COMMENT '手机号码',
    `nickname` varchar(50) DEFAULT NULL COMMENT '昵称',
    `avatar` varchar(255) DEFAULT NULL COMMENT '头像',
    `gender` tinyint(4) DEFAULT NULL COMMENT '性别（0：未知，1：男，2：女）',
    `birthday` date DEFAULT NULL COMMENT '出生日期',
    `country` varchar(50) DEFAULT NULL COMMENT '国家',
    `province` varchar(50) DEFAULT NULL COMMENT '省份',
    `city` varchar(50) DEFAULT NULL COMMENT '城市',
    `district` varchar(50) DEFAULT NULL COMMENT '区县',
    `address` varchar(255) DEFAULT NULL COMMENT '详细地址',
    `zip` varchar(10) DEFAULT NULL COMMENT '邮政编码',
    `status` tinyint(4) DEFAULT '0' COMMENT '状态（0：正常，1：锁定，2：禁用）',
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`id`),
    UNIQUE KEY `username_UNIQUE` (`username`)
  ) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COMMENT='用户表';
  ```

## 6.后端开发
管理系统的后端用的是Express框架。   
创建一个项目：   
```js
npm install -g express-generator
express my-express-app
```