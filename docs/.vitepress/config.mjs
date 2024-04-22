import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/fe-statute-book/",
  title: "前端法典",
  description: "前端知识归纳总结",
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
      { text: '文档', link: '/static-website.md' }
    ],
    sidebar: [
      {
        text: '搭建静态网站',
        items: [
          { text: 'github静态网站', link: '/static-website' },
        ]
      },
      {
        text: '工作用得到',
        items: [
          { text: '发布一个npm包', link: '/npm' },
          { text: '常见概念', link: '/concept' },
          { text: '实用工具库', link: '/fe-util-lib' },
          { text: '教程文档', link: '/course' },
        ]
      },
      {
        text: '前端技能树',
        items: [
          {
            text: '基础部分',
            collapsed: true,
            items: [
              { text: 'CSS', link: '' },
              { text: 'HTML', link: '' },
              { text: 'JavaScript', link: '' },
            ]
          },
          {
            text: '高级部分',
            collapsed: true,
            items: [
              { text: 'ES6+', link: '' },
              { text: 'TypeScript', link: '' },
              { text: 'Nodejs', link: '' },
            ]
          },
          {
            text: '前端框架',
            collapsed: true,
            items: [
              { text: 'Vue3', link: '' },
              { text: 'Bootstrap', link: '' },
            ]
          },
          {
            text: '构建工具',
            collapsed: true,
            items: [
              { text: 'Webpack', link: '' },
              { text: 'Gulp', link: '' },
              { text: 'Vite', link: '' },
              { text: 'NPM', link: '' },
              { text: 'Pm2', link: '' },
            ]
          },
          {
            text: '后端部分',
            collapsed: true,
            items: [
              { text: 'Express', link: '' },
              { text: 'Koa', link: '' },
              { text: 'Nest', link: '' },
            ]
          },
          {
            text: '数据结构',
            collapsed: true,
            items: [
              { text: '栈', link: '' },
              { text: '树', link: '' },
            ]
          },
          {
            text: '算法',
            collapsed: true,
            items: [
              { text: '冒泡', link: '' },
              { text: '二分', link: '' },
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
            text: '版本库',
            collapsed: true,
            items: [
              { text: 'Git', link: '' },
            ]
          },
          {
            text: '服务器',
            collapsed: true,
            items: [
              { text: 'Nginx', link: '' },
              { text: 'ssh', link: '' },
              { text: 'Linux', link: '/linux-docs' },
              { text: 'PM2', link: '' },
            ]
          },
        ]
      },
      {
        text: '业务实战',
        items: [
          { text: 'Express、Koa、Nest 接口模板', link: '' },
          { text: '大文件上传、断点续传', link: '' },
          { text: 'oss登录', link: '' },
          { text: 'jwt', link: '' },
          { text: '日志', link: '' },
        ]
      },
    ],

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
