<h1 align="center"> 从零开始实现基于Hexo的个人技术博客搭建撰写（🧪 Alpha 内测版） </h1>

> [!WARNING]
> ⚠️ Alpha内测版本警告：此为早期内部构建版本，尚不完整且可能存在错误，欢迎大家提Issue反馈问题或建议。

本项目是一个面向新手的 Hexo 博客教程，基于 VitePress 组织内容，覆盖从前端基础、GitHub Pages 认知，到 Hexo 搭建、Butterfly 主题配置、Markdown 写作与发文流程。

## 项目简介

在网络飞速发展的今天，个人博客已成为人们展示独特个性、分享知识见解以及记录学习成长的理想平台。GitHub 作为全球知名的开源代码托管平台，为我们提供了稳定且免费的存储服务；而 Hexo 作为一款基于 Node.js 的快速、简洁、高效的静态博客框架，两者结合，能让我们轻松搭建出既美观又功能丰富的个人博客。

看到别人有自己的个人技术博客，自己也想要一个，于是走上了搭建(zhuang)个人(bi)博客之路。

以下是一些优秀的 Hexo 博客，可以作为效果参考：

- https://simonaking.com
- https://akilar.top
- https://blog.zhheo.com
- https://xbxyftx.top

## 项目受众

- 想从 0 开始搭建个人博客的同学
- 想要尝试联动Obsidian文献管理与hexo一件云推送流程的同学
- 对 GitHub Pages + Hexo 组合感兴趣的初学者
- 希望沉淀一套可复用博客搭建流程的学习者
- 想要提升个人品牌与影响力，通过博客分享知识、经验的同学

## 在线阅读

- GitHub Pages（如已部署）：https://weyumm.github.io/hello-hexo-blog/
- 仓库文档入口：[docs/index.md](./docs/index.md)

## 目录

| 章节名 | 简介 | 状态 |
| ---- | ---- | ---- |
| [第1章：前端与网页基础](./docs/chapter1/index.md) | 认识前端三件套与 GitHub Pages 托管逻辑 | ✅ |
| [第2章：环境搭建与准备](./docs/chapter2/01_安装Nodejs与Git.md) | Node.js/Git 安装、命令行入门、GitHub 账号注册 | ✅ |
| [第3章：Hexo 实战搭建](./docs/chapter3/01_Hexo初始化.md) | Hexo 安装初始化、配置、部署到 GitHub Pages | ✅ |
| [第4章：Butterfly 主题配置](./docs/chapter4/chapter2_1_主题下载与切换.md) | 主题下载切换、配置指南与功能扩展 | ✅ |
| [第5章：内容创作与 Markdown](./docs/chapter5/chapter5_1.md) | Markdown 速查与第一篇文章写作 | ✅ |
| [第7章：进阶探索与Halo对比](./docs/chapter7/chapter7_2_零基础Halo架构搭建与网站配置全指南_Cloudflare+1Panel+NPM+Halo.md) | Halo框架搭建教程与对比 | 🚧 |

## 章节直达

- 第1章
- [前端与网页构成](./docs/chapter1/01_前端与网页构成.md)
- [什么是 GitHub Pages](./docs/chapter1/02_什么是GitHubPages.md)
- [互动实验：网页乐高挑战](./docs/chapter1/互动实验/网页乐高挑战.html)
- 第2章
  - [01 安装 Node.js 与 Git](./docs/chapter2/01_安装Nodejs与Git.md)
  - [02 命令行操作入门](./docs/chapter2/02_命令行操作入门.md)
  - [03 注册 GitHub 账号](./docs/chapter2/03_注册GitHub账号.md)
- 第3章
  - [01 Hexo 初始化](./docs/chapter3/01_Hexo初始化.md)
  - [02 本地博客预览](./docs/chapter3/02_本地博客预览.md)
  - [03 配置文件详解](./docs/chapter3/03_配置文件详解.md)
  - [04 部署到 GitHub Pages](./docs/chapter3/04_部署到GitHub.md)
- 第4章
- [01 主题下载与切换](./docs/chapter4/chapter2_1_主题下载与切换.md)
- [02 Butterfly 配置指南](./docs/chapter4/chapter2_2_Butterfly配置指南.md)
- [03 常用功能扩展](./docs/chapter4/chapter2_3_常用功能扩展.md)
- [互动演示：主题布局可视化](./docs/chapter4/互动演示/主题布局可视化.html)
- 第5章
- [Markdown 语法速查](./docs/chapter5/chapter5_1.md)
- [撰写第一篇文章](./docs/chapter5/chapter5_2.md)
- 第7章
- [Halo框架搭建教程](./docs/chapter7/chapter7_2_零基础Halo架构搭建与网站配置全指南_Cloudflare+1Panel+NPM+Halo.md)
## 贡献者名单

| 姓名 | 职责 | 简介 |
| :---- | :---- | :---- |
| Sm1les | 项目负责人 | 负责整体内容方向与项目推进 |
| 马里奥 | 核心贡献者 | 参与教程内容共建与完善 |
| [queenyn](https://github.com/queenyn) | 核心贡献者 | 参与Halo框架搭建教程部分内容的编写与维护 |
| [ZXJC-niusile](https://github.com/ZXJC-niusile) | 核心贡献者 | 参与第二章、第三章的教程编写与整体内容完善 |
```md
.
├── README.md
├── docs/
│   ├── index.md
│   ├── chapter1/
│   │   ├── 01_前端与网页构成.md
│   │   ├── 02_什么是GitHubPages.md
│   │   └── 互动实验/网页乐高挑战.html
│   ├── chapter2/
│   │   ├── 01_安装Nodejs与Git.md
│   │   ├── 02_命令行操作入门.md
│   │   └── 03_注册GitHub账号.md
│   ├── chapter3/
│   │   ├── 01_Hexo初始化.md
│   │   ├── 02_本地博客预览.md
│   │   ├── 03_配置文件详解.md
│   │   └── 04_部署到GitHub.md
│   ├── chapter4/
│   │   ├── chapter2_1_主题下载与切换.md
│   │   ├── chapter2_2_Butterfly配置指南.md
│   │   ├── chapter2_3_常用功能扩展.md
│   │   └── 互动演示/主题布局可视化.html
│   └── chapter5/
│   │   ├── chapter5_1.md
│   │   └── chapter5_2.md
│   │
│   └── chapter7/
│       └── chapter7_2_零基础Halo架构搭建与网站配置全指南_Cloudflare+1Panel+NPM+Halo.md
│
└── package.json
```

## 参与贡献

- 如果你发现了一些问题，可以提 Issue 进行反馈，如果提完没有人回复你可以联系 [保姆团队](https://github.com/datawhalechina/DOPMC/blob/main/OP.md) 的同学进行反馈跟进。
- 如果你想参与贡献本项目，可以提 Pull Request，如果提完没有人回复你可以联系 [保姆团队](https://github.com/datawhalechina/DOPMC/blob/main/OP.md) 的同学进行反馈跟进。
- 如果你对 Datawhale 很感兴趣并想要发起一个新的项目，请按照 [Datawhale开源项目指南](https://github.com/datawhalechina/DOPMC/blob/main/GUIDE.md) 进行操作即可。

## 关注我们

<div align=center>
<p>扫描下方二维码关注公众号：Datawhale</p>
<img src="https://raw.githubusercontent.com/datawhalechina/pumpkin-book/master/res/qrcode.jpeg" width="180" height="180">
</div>

## LICENSE

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-lightgrey" /></a><br />本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a>进行许可。
