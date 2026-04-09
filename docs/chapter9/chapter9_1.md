> **目标读者**：希望搭建个人博客并建立**Obsidian+GitHub图床**自动化工作流的技术写作者
---
## 🔥 高级工作流：Hexo + Obsidian + PicGo

### 4.1 为什么需要这套工作流？

传统 Hexo 写作痛点：
- 需要记忆 Front-matter 格式（标题、日期、标签）
- 图片管理混乱（本地路径 vs 线上 URL）
- 写作体验割裂（在编辑器、终端、浏览器间切换）

**Obsidian+PicGo 方案优势**：
- 📝 **Obsidian**：双向链接、模板化 Front-matter、图谱视图
- 🖼️ **PicGo**：截图/粘贴自动上传图床，本地路径自动转为 CDN 链接
- 🔄 **无缝衔接**：在 Obsidian 中写作即所得，直接推送到 Hexo 即可构建

### 4.2 将 Hexo 项目导入 Obsidian

1. 打开 Obsidian → **打开本地仓库** → 选择你的 `blog` 文件夹
2. 进入后你会看到目录：`node_modules/`、`public/`、`scaffolds/`、`source/`、`themes/`

**性能优化：排除无关文件夹**  
Obsidian 索引这些文件夹会严重拖慢性能，需设置忽略：

进入 **设置 → 文件与链接 → 忽略文件**，添加：
```
node_modules/
public/
scaffolds/
themes/
```

同时，在 `[站点根目录]/.gitignore` 中确保已排除（如无则添加）：
```
.obsidian/workspace
```

【优化说明：解释 .gitignore 的作用，避免将 Obsidian 的窗口状态同步到其他设备，这是多设备写作的关键细节】

---

### 4.3 模板化文章创建（自动化 Front-matter）

Hexo 文章头部需要 YAML 格式的 Front-matter，手动编写易出错。

**步骤 1：创建模板文件**  
在 `source/_posts/` 下创建 `sample-template.md`：

```markdown
---
title: {{title}}
date: {{date}} {{time}}
tags: []
---
```

**步骤 2：启用 Obsidian 模板核心插件**  
进入 **设置 → 核心插件 → 开启"模板"**

**步骤 3：配置模板路径**  
点击模板插件的**配置按钮**：
- **模板文件夹位置**：`source/_posts`（或你专门创建的 `Templates` 文件夹）
- **日期格式**：`YYYY-MM-DD`
- **时间格式**：`HH:mm`
![](https://cdn.jsdelivr.net/gh/qucheng-wuan/image/img/Pasted%20image%2020260407100152.png)

**使用方式**：新建文件后，点击侧边栏的**插入模板**按钮，即可自动生成标准化头部。
![](https://cdn.jsdelivr.net/gh/qucheng-wuan/image/img/Pasted%20image%2020260407100159.png)

---

### 4.4 文章资源文件夹（图片自动归类）

Hexo 支持**文章资源文件夹**模式，让每篇文章拥有独立的资源目录。

**配置**（编辑 `[站点根目录]/_config.yml`）：
```yaml
# URL 结构优化
permalink: :year/:month/:day/:hash.html  # 短链接，利于 SEO
new_post_name: :title/index.md            # 新文章自动创建为 标题/index.md

# 资源文件夹设置
post_asset_folder: true    # 开启文章资源文件夹
marked:
  prependRoot: true        # 自动处理相对路径
  postAsset: true          # 启用 post asset 功能
```

**效果**：  
创建新文章 `my-post` 时，会自动生成：
```
source/_posts/
├── my-post.md
└── my-post/          # 同名文件夹，存放图片等资源
    └── image.png
```

**Obsidian 插件配合**：安装 **Custom Attachment Location** 插件，配置：
- ![](https://cdn.jsdelivr.net/gh/qucheng-wuan/image/img/Pasted%20image%2020260407100245.png)
- ![](https://cdn.jsdelivr.net/gh/qucheng-wuan/image/img/Pasted%20image%2020260407100259.png)

这样拖拽/粘贴图片时，会自动存入对应文章的文件夹，保持整洁。

---

## 🔥 图床配置：GitHub + jsDelivr CDN

### 4.5 方案架构说明
前言：
- **图床**是用于托管图片的云端存储服务。它将本地图片转换为公网可访问的 URL，解决 Markdown 文档迁移后图片失效的问题。
- **PicGo** 是一款开源图床客户端，支持 GitHub、阿里云 OSS 等多种存储平台。它提供剪贴板上传、快捷键监听等功能，简化"截图-上传-获取链接"的流程。
本教程采用 **GitHub 仓库作为图床**、**jsDelivr 作为免费 CDN 加速**、**Obsidian 插件作为上传入口**的方案。无需多次安装 PicGo 软件，即可在 Obsidian 编辑器内一键上传图片，并自动替换为加速后的外链地址，实现写作与图片托管的无缝衔接。

### 4.6 创建图床仓库

1. GitHub → **New Repository**
2. **Repository name**：`images` 或 `blog-images`（建议与博客仓库区分）
3. **Visibility**：**必须选 Public**（jsDelivr 无法加速私有仓库）
4. **Initialize with README**：☑️ 勾选
5. 点击 **Create repository**![](https://cdn.jsdelivr.net/gh/qucheng-wuan/image/img/Pasted%20image%2020260407100332.png)

### 4.7 生成 GitHub Access Token

1. GitHub → Settings → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. 点击 **Generate new token (classic)**
3. **Note**：`PicGo Image Upload`
4. **Expiration**：选择 `No expiration`（或根据需要设置）
5. **Select scopes**：勾选 **repo**（完整仓库权限）
6. 点击 **Generate token**（⚠️ **立即复制保存**，此 token 只显示一次）![](https://cdn.jsdelivr.net/gh/qucheng-wuan/image/img/Pasted%20image%2020260407100338.png)

### 4.8 安装与配置 PicGo

**下载**：访问 [https://picgo.app](https://picgo.app) 下载对应系统版本。

**图床配置**：
1. 打开 PicGo → **图床设置** → **GitHub**
2. **图床配置名**：`GitHub 图床`（自定义）
3. **设定仓库名**：`你的用户名/image`（格式：用户名/仓库名）
4. **设定分支名**：`main`（或 `master`，视仓库默认分支而定）
5. **设定 Token**：粘贴刚才复制的 Access Token
6. **设定存储路径**：`img/`（可选，会在仓库内创建 img 文件夹分类）
7. **设定自定义域名**：`https://cdn.jsdelivr.net/gh/你的用户名/image`（关键！启用 jsDelivr 加速）
![](https://cdn.jsdelivr.net/gh/qucheng-wuan/image/img/Pasted%20image%2020260407100400.png)
**Server 设置**（供 Obsidian 插件调用）：
- 进入 **PicGo 设置 → 设置 Server**
- 确保 **Server 开关**：开启
- **监听地址**：`127.0.0.1`
- **监听端口**：`36677`（默认）

### 4.9 Obsidian 集成：Image Auto Upload

1. 进入 Obsidian **设置 → 社区插件 → 关闭安全模式**
2. 浏览社区插件市场，搜索 **Image Auto Upload** 并安装启用
3. 插件会自动检测 PicGo Server（默认 `http://127.0.0.1:36677/upload`）

**使用**：在 Obsidian 中直接粘贴截图或拖拽图片，插件会自动：
1. 调用 PicGo 上传到 GitHub
2. 将图片链接替换为 jsDelivr 加速地址
3. 插入 Markdown 格式 `![图片名](https://cdn.jsdelivr.net/gh/...)` 

**验证**：在 GitHub 的 `image` 仓库中查看 `img/` 目录是否出现上传的图片。

---

## ⚡ 进阶插件：自动分类（hexo-auto-category）

手动维护每篇文章的 `categories` 字段很繁琐。此插件可根据文章在 `source/_posts/` 下的**文件夹结构**自动生成分类。

**安装**：
```bash
# 在站点根目录执行
npm install hexo-auto-category --save
```

**配置**（`[站点根目录]/_config.yml`）：
```yaml
auto_category:
  enable: true        # 开启自动生成        # 分类深度（如 技术/前端/React，depth=3）
```

**使用示例**：  
假设你的目录结构：
```
source/_posts/
├── 技术/
│   ├── 前端/
│   │   └── react-hooks.md
│   └── 后端/
│       └── nodejs.md
└── 生活/
    └── travel.md
```

插件会自动为 `react-hooks.md` 生成分类：`[技术, 前端]`，无需手动写 Front-matter。

---
## 📋 常见问题排查（FAQ）

**Q1：`hexo s` 后访问 localhost:4000 显示空白？**  
- 检查主题名称 `_config.yml` 中的 `theme:` 是否与文件夹名完全匹配（区分大小写）
- 执行 `hexo clean` 后重试

**Q2：Obsidian 中图片显示正常，但 Hexo 生成后图片 404？**  
- 确认 `post_asset_folder: true` 已开启
- 确认 Markdown 中图片路径为相对路径 `./image.png` 而非绝对路径
- 确认 `marked: prependRoot: true` 已配置

**Q3：PicGo 上传失败？**  
- 检查 Token 是否有 `repo` 权限
- 检查仓库是否为 Public
- 检查网络连接（GitHub 偶尔在国内不稳定）

**Q4：如何更新 Hexo 或主题？**  
```bash
# 更新 Hexo 核心
npm update hexo

# 更新主题（进入主题目录）
cd themes/cactus
git pull
```

