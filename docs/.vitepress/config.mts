import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config

// 1. 获取环境变量并判断
// 如果环境变量 EDGEONE 等于 '1'，说明在 EdgeOne 环境，使用根路径 '/'
// 否则默认是 GitHub Pages 环境，使用仓库子路径 '/hello-hexo-blog/'
const isEdgeOne = process.env.EDGEONE === '1'
const baseConfig = isEdgeOne ? '/' : '/hello-hexo-blog/'

export default defineConfig({
  lang: 'zh-CN',
  title: "Datawhale开源教程",
  description: "AI前沿知识开源教程",
  base: baseConfig,
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/datawhale-logo.png',
    nav: [
      { text: 'PDF版本下载', link: 'https://github.com/datawhalechina/repo-template/releases' },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    sidebar: [
      {
        items: [
          { text: '第1章：前端与网页基础', link: '/chapter1/' },
          {
            text: '第2章：环境搭建与准备',
            items: [
              { text: '2.1 安装Node.js与Git', link: '/chapter2/01_安装Nodejs与Git' },
              { text: '2.2 命令行操作入门', link: '/chapter2/02_命令行操作入门' },
              { text: '2.3 注册GitHub账号', link: '/chapter2/03_注册GitHub账号' }
            ]
          },
          {
            text: '第3章：Hexo 实战搭建',
            items: [
              { text: '3.1 Hexo 初始化', link: '/chapter3/01_Hexo初始化' },
              { text: '3.2 本地博客预览', link: '/chapter3/02_本地博客预览' },
              { text: '3.3 配置文件详解', link: '/chapter3/03_配置文件详解' },
              { text: '3.4 部署到 GitHub Pages', link: '/chapter3/04_部署到GitHub' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/datawhalechina/repo-template' }
    ],

    editLink: {
      pattern: 'https://github.com/datawhalechina/repo-template/blob/main/docs/:path'
    },

    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2026002630号-1</a> | <a href="https://beian.mps.gov.cn/#/query/webSearch?code=11010602202215" rel="noreferrer" target="_blank">京公网安备11010602202215号</a>',
      copyright: '本作品采用 <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议（CC BY-NC-SA 4.0）</a> 进行许可'
    }
  }
})
