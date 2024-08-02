import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/fe-statute-book/",
  title: "GreatBook",
  description: "你需要的前端知识都在这里",
  themeConfig: {
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '编程概念', link: '/docs/concept' },
      { text: '技术文章', link: '/skill-tree/overview' },
      { text: '实用案例', link: '/course/npm' },
      { text: '项目教程', link: '/projects/full-stack-journal' }
    ],
    sidebar: {
      '/projects/': [
        {
          text: '项目教程',
          items: [
            { text: '全栈日记', link: '/projects/full-stack-journal' },
            { text: 'Vue3组件库', link: '/projects/vue3-components' },
            // {
            //   text: '完整的企业级项目架构教程',
            //   collapsed: true,
            //   link: '/projects/architect/overview.md',
            //   items: [
            //     // { text: '项目概述', link: '/projects/architect/overview.md' },
            //     { text: 'gitlab搭建', link: '/projects/architect/gitlab.md' },
            //     { text: 'h5项目脚手架', link: '/projects/architect/h5.md' },
            //     { text: '后端接口API', link: '/projects/architect/api.md' },
            //     { text: '后台管理系统', link: '/projects/architect/admin.md' },
            //     { text: '服务器部署', link: '/projects/architect/server.md' }
            //   ]
            // },
          ]
        },
      ],
      '/docs/': [
        {
          text: '编程概念',
          items: [
            { text: '常见概念', link: '/docs/concept' },
            { text: '实用工具库', link: '/docs/fe-util-lib' },
            { text: '技能树', link: '/docs/skill-tree' },
            { text: '学习文档', link: '/docs/study-docs' },
          ]
        },
      ],
      '/skill-tree/': [
        {
          text: '技能树',
          items: [
            {
              text: '概述', link: '/skill-tree/overview'
            },
            {
              text: '基础部分',
              collapsed: true,
              items: [
                { text: 'CSS', link: '/skill-tree/css-docs' },
                { text: 'HTML', link: '' },
                {
                  text: 'JavaScript', collapsed: true,
                  items: [
                    { text: 'reduce', link: '/skill-tree/javascript/reduce' },
                    { text: 'map', link: '/skill-tree/javascript/map' },
                  ]
                },
              ]
            },
            {
              text: '高级部分',
              collapsed: true,
              items: [
                {
                  text: 'ES6+',
                  collapsed: true,
                  items: [
                    { text: 'module模块', link: '/skill-tree/es6/module' },
                    { text: '高阶函数', link: '/skill-tree/es6/high-level' },
                  ]
                },
                { text: 'TypeScript', link: '' },
                {
                  text: 'Nodejs',
                  collapsed: true,
                  items: [
                    { text: '版本管理：n', link: '/skill-tree/nodejs/n' },
                    { text: 'package.json', link: '/skill-tree/nodejs/learn-package' },
                    { text: 'Express和Koa的脚手架', link: '/skill-tree/nodejs/generator' },
                    { text: 'Express项目结构', link: '/skill-tree/nodejs/express-project' },
                    { text: 'node_modules', link: '/skill-tree/nodejs/node-modules' },
                    { text: 'npx', link: '/skill-tree/nodejs/npx' },
                  ]
                },
              ]
            },
            {
              text: '前端框架',
              collapsed: true,
              items: [
                {
                  text: 'Vue3',
                  collapsed: true,
                  items: [
                    { text: 'Vue必备', link: '/skill-tree/framework/vue/create-project' },
                    { text: 'Pinia使用', link: '/skill-tree/framework/vue/pinia' }
                  ]
                },
                {
                  text: 'React',
                  collapsed: true,
                  items: [
                    { text: 'React的发展', link: '/skill-tree/framework/react/version' },
                    { text: '创建项目', link: '/skill-tree/framework/react/create' },
                  ]
                },
                { text: 'Bootstrap', link: '/todo' },
              ]
            },
            {
              text: '构建工具',
              collapsed: true,
              items: [
                { text: 'Webpack', link: '' },
                { text: 'Gulp', link: '' },
                { text: 'Vite', link: '' },
                // 搭建一个前端项目都需要什么配置
              ]
            },
            {
              text: '后端部分',
              collapsed: true,
              items: [
                { text: 'Express', link: '' },
                { text: 'Koa', link: '' },
                { text: 'API', link: '/skill-tree/back-end/api' },
              ]
            },
            {
              text: '网络',
              collapsed: true,
              items: [
                { text: '三次握手', link: '/skill-tree/net/three-times' },
              ]
            },
            {
              text: '数据库',
              collapsed: true,
              items: [
                { text: 'Mysql', link: '' },
              ]
            },
            {
              text: '服务器',
              collapsed: true,
              items: [
                { text: 'Nginx', link: '' },
                { text: 'ssh', link: '' },
                { text: 'Linux', link: '/skill-tree/linux-docs' },
                { text: 'PM2', link: '' },
              ]
            },
            {
              text: '数据结构',
              collapsed: true,
              items: [
                { text: '栈、队列', link: '' },
                { text: '链表', link: '' },
                { text: '集合', link: '' },
                { text: '树', link: '' },
                { text: '堆', link: '' },
                { text: '图', link: '' },
              ]
            },
            {
              text: '算法',
              collapsed: true,
              items: [
                { text: '冒泡', link: '' },
                { text: '选择', link: '' },
                { text: '插入', link: '' },
                { text: '归并', link: '' },
                { text: '快速', link: '' },
                { text: '二分', link: '' },
                { text: '分而治之、动态规划', link: '' },
                { text: '贪心算法、回溯算法', link: '' },
              ]
            },
            {
              text: '编程思想',
              collapsed: true,
              items: [
                { text: '概述', link: '/skill-tree/paradigms/overview' },
              ]
            },
            {
              text: '设计模式',
              collapsed: true,
              items: [
                { text: '概述', link: '/skill-tree/patterns/overview' },
              ]
            },
            {
              text: '版本库',
              collapsed: true,
              items: [
                { text: 'Git', link: '/skill-tree/git/git/git' },
                {
                  text: 'GitHub',
                  collapsed: true,
                  items: [
                    { text: 'github', link: '/skill-tree/git/github/github' },
                    { text: 'workflows', link: '/skill-tree/git/github/workflows' },
                  ]
                },
                {
                  text: 'GitLab',
                  collapsed: true,
                  items: [
                    { text: 'gitlab-ci', link: '/skill-tree/git/gitlab/gitlab-ci' },
                  ]
                },
              ]
            },
            {
              text: 'DevOps',
              collapsed: true,
              items: [
                { text: 'yaml', link: '/skill-tree/other/yaml' },
              ]
            },
          ]
        },
      ],
      '/course/': [
        {
          text: '实用教程',
          items: [
            { text: '发布npm包', link: '/course/npm' },
            { text: '搭建github静态网站', link: '/course/static-website' },
            { text: '在阿里云上搭建Gitlab', link: '/course/gitlab' },
            { text: 'SSH免密登录', link: '/course/ssh-login' },
            // { text: '配置gitlab CI/CD', link: '/course/gitlab-cicd' },
          ]
        },
      ],
      // {
      //   text: '功能实战',
      //   items: [
      //     { text: 'Express、Koa、Nest 接口模板', link: '' },
      //     { text: '大文件上传、断点续传', link: '' },
      //     { text: 'oss登录', link: '' },
      //     { text: 'jwt', link: '' },
      //     { text: '日志', link: '' },
      //   ]
      // },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/greatjiang/fe-statute-book' }
    ],
    lastUpdated: {
      text: '上次更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
