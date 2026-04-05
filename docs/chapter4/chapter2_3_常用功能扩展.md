# 03 常用功能扩展

## 已检测插件（来自 package.json）
| 插件 | 作用 | 推荐教学动作 |
| --- | --- | --- |
| `hexo-abbrlink` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-asset-img` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-bilibili-bangumi` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-browsersync` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-butterfly-clock-anzhiyu` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-deployer-git` | Git 部署 | 配置 `deploy` 多目标并验证 SSH。 |
| `hexo-generator-archive` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-generator-baidu-sitemap` | SEO 站点地图 | 开启 `sitemap` 并提交到搜索平台。 |
| `hexo-generator-category` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-generator-feed` | RSS/Atom | 配置 `feed`，用于订阅输出。 |
| `hexo-generator-index` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-generator-search` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-generator-sitemap` | SEO 站点地图 | 开启 `sitemap` 并提交到搜索平台。 |
| `hexo-generator-tag` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-helper-live2d` | 看板娘 | 先设置模型，再限制移动端展示。 |
| `hexo-next-giscus` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-pdf` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-renderer-ejs` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-renderer-jade` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-renderer-marked` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-renderer-stylus` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-server` | 功能扩展 | 按需开启，记录对应配置块。 |
| `hexo-theme-landscape` | 功能扩展 | 按需开启，记录对应配置块。 |

## 常见增强开关状态
- 首页副标题：`开启`
- 文章封面：`关闭`
- 评论系统：`开启`
- 搜索能力：`关闭`
- Live2D 看板娘：`开启`
- 打字特效：`开启`
- 烟花点击特效：`开启`
- 彩带背景：`开启`
- Mermaid 图表：`开启`
- 电子时钟挂件：`开启`

## 自动 Git + SSH 推送
建议先在文档分支提交，再提 PR：
```bash
git checkout -B "docs/hexo-butterfly-guide"
git add .
git commit -m "docs: add butterfly tutorial package"
git push -u origin "docs/hexo-butterfly-guide"
```

## Datawhale 首次贡献合规清单
1. 使用 `docs/*` 分支提交首次文档贡献。
2. 提交信息使用规范前缀（如 `docs:`）。
3. 严禁提交明文密钥（token/key/secret/password）。
4. 在 PR 中写明：改了什么、怎么验证、影响哪些页面。
5. 保持最小改动：仅提交教程输出目录中的目标文件。
