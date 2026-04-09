# Datawhale 开源教程：Hexo 博客入门与实践

本仓库是一个基于 VitePress 组织的开源教程，围绕「从前端基础到 Hexo 博客搭建、主题配置与内容创作」展开。

## 在线阅读与快速入口

- 文档首页（源码）：[docs/index.md](./docs/index.md)
- 章节入口（源码）：[docs/chapter1/index.md](./docs/chapter1/index.md)
- 本地预览文档：`npm run docs:dev`
- 构建静态文档：`npm run docs:build`
- 本地预览构建产物：`npm run docs:preview`

## 教程目录（带跳转链接）

| 章节 | 内容简介 | 跳转链接 |
| --- | --- | --- |
| 第 1 章：前端与网页基础 | 认识 HTML / CSS / JavaScript 与 GitHub Pages | [章节入口](./docs/chapter1/index.md) |
| 第 2 章：环境与基础操作（建设中） | 当前为章节模板，占位内容待补充 | [2.1 节](./docs/chapter2/chapter2_1.md) ｜ [2.2 节](./docs/chapter2/chapter2_2.md) |
| 第 3 章：Hexo 实战搭建 | 从安装 Node.js / Git 到 Hexo 初始化与部署 | [开始阅读](./docs/chapter3/chapter3_1.md) |
| 第 4 章：Butterfly 主题配置 | 主题下载、配置映射、常用功能扩展 | [01 主题下载与切换](./docs/chapter4/chapter2_1_主题下载与切换.md) ｜ [02 配置指南](./docs/chapter4/chapter2_2_Butterfly配置指南.md) ｜ [03 功能扩展](./docs/chapter4/chapter2_3_常用功能扩展.md) |
| 第 5 章：内容创作与 Markdown | Markdown 语法速查、第一篇文章写作流程 | [5.1 Markdown 语法速查](./docs/chapter5/chapter5_1.md) ｜ [5.2 撰写第一篇文章](./docs/chapter5/chapter5_2.md) |

## 重点文档直达

- 第 1 章
- [前端与网页构成](./docs/chapter1/01_前端与网页构成.md)
- [什么是 GitHub Pages](./docs/chapter1/02_什么是GitHubPages.md)
- [互动实验：网页乐高挑战](./docs/chapter1/互动实验/网页乐高挑战.html)

- 第 3 章
- [利用 GitHub 和 Hexo 搭建个人博客](./docs/chapter3/chapter3_1.md)

- 第 4 章
- [主题布局可视化（互动演示）](./docs/chapter4/互动演示/主题布局可视化.html)

## 项目结构

```text
.
├─ README.md
├─ docs/
│  ├─ index.md
│  ├─ chapter1/
│  ├─ chapter2/
│  ├─ chapter3/
│  ├─ chapter4/
│  ├─ chapter5/
│  ├─ public/
│  └─ .vitepress/
└─ package.json
```

## 参与贡献

- 发现问题或建议优化，欢迎提交 Issue。
- 贡献内容请优先提交文档相关改动，并在 PR 中说明改动点与验证方式。

## License

本仓库内容默认采用 `CC BY-NC-SA 4.0` 协议（如需调整，请在仓库内补充说明）。
