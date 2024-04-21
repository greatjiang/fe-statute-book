import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/fe-statute-book/",
  title: "前端法典",
  description: "前端知识归纳总结",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/static-website.md' }
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
          { text: '实用工具库', link: '/fe-util-lib' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/greatjiang/fe-statute-book' }
    ]
  }
})
