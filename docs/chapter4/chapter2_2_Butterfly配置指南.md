# 02 Butterfly配置指南

## 配置项到教学步骤映射

| 配置项 | 当前值 | 教学动作 |
| --- | --- | --- |
| `subtitle.enable` | `开启` | 先开关首页副标题，再调 `sub` 文案列表。 |
| `menu` | `首页、仓库、标签、分类、友链、追番、关于` | 先确定站点导航，再补图标，最后验证移动端折叠。 |
| `cover.position` | `both` | 先确定封面左右布局，再统一封面尺寸。 |
| `comments.use` | `Giscus,Twikoo` | 先启用一个评论系统，再叠加第二个，避免排障困难。 |
| `search.path/use` | `search.xml` / `local_search（推荐）` | 先选搜索方案，再补占位文案与样式。 |

## 推荐实施顺序
1. 调整基础观感：`subtitle`、`menu`、`top_img`。
2. 调整文章信息密度：`post_meta`、`index_post_content`、`cover`。
3. 调整互动与检索：`comments`、`search`、`giscus`、`twikoo`。
4. 调整增强模块：`live2d`、`fireworks`、`mermaid`、`electric_clock`。

## 快速核对清单
- `nav.logo`、`avatar.img`、`top_img` 是否都可访问。
- 评论系统仅保留已配置完成的平台。
- 搜索路径与生成产物一致（如 `search.xml`）。
- 复杂模块先关后开，保证每次改动可回滚。
