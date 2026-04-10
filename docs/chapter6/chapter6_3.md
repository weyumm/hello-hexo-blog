> 适用于mac用户
## ⭐ 前置准备：环境安装

### 1.1 安装 Homebrew（macOS 包管理器）
Homebrew 是 macOS 的事实标准包管理器。它会自动处理软件依赖，并将工具安装在独立目录（Apple Silicon 为 `/opt/homebrew`，Intel 为 `/usr/local`），避免污染系统环境。

```bash
# 在 Terminal 中执行官方安装脚本
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**验证安装**：
```bash
brew --version  # 应显示 4.x 或更高版本
```

### 1.2 安装 Git 与 Node.js（LTS 版本）

```bash
# 同时安装 Git 和 Node.js LTS（长期支持版）
brew install git
brew install node 
```


**版本验证**（请务必确认版本符合要求）：
```bash
git --version    
node --version    
npm --version     
```

⚡ **防御性配置**：如果你系统中已存在其他 Node 版本管理器（如 nvm），建议统一使用 `nvm install 20` 安装，避免全局 npm 包权限冲突。

---
### 1.3 安装 Hexo CLI
```bash
# -g 参数表示全局安装，确保在任何目录都能使用 hexo 命令
npm install -g hexo-cli
```

**验证安装**
```bash
hexo --version  # 应显示 hexo-cli 4.x 及 hexo 7.x
```
---

## ⭐ 基础搭建：创建你的博客

### 1.4 初始化博客项目

```bash
# 创建 blog 文件夹并初始化（名称可自定义，如 my-blog）
hexo init blog
cd blog

# 安装项目依赖（package.json 中定义的插件）
npm install
```

**启动本地预览**：
```bash
hexo server  # 或简写 hexo s
```

访问 [http://localhost:4000](http://localhost:4000) 即可看到默认的 Hexo 首页（Landscape 主题）。

> **术语解释**：`hexo server` 是开发服务器，仅在本地有效。它监听 `source/` 目录下的文件变更并实时重载，非常适合写作时的即时预览。![](https://cdn.jsdelivr.net/gh/qucheng-wuan/image/img/Pasted%20image%2020260407095800.png)

---

## 🔥 主题配置：以 Cactus 为例
Github 地址：[https://github.com/probberechts/hexo-theme-cactus](https://github.com/probberechts/hexo-theme-cactus)
在线演示：[https://probberechts.github.io/hexo-theme-cactus/](https://probberechts.github.io/hexo-theme-cactus/)

### 2.1 下载主题（Git 子模块方式）

```bash
# 进入博客根目录（假设你当前在 blog/ 目录下）
cd blog

# 使用 git clone 将主题下载到 themes/ 目录
git clone https://github.com/probberechts/hexo-theme-cactus.git themes/cactus
```

【优化说明：明确标注当前工作目录，市场教程普遍缺失路径上下文导致初学者在错误位置执行命令】

### 2.2 激活主题

编辑**博客根目录**下的 `_config.yml`（注意不是主题文件夹里的）：
```
open _config.yaml

```
```yaml
# [站点根目录]/_config.yml
theme: cactus  # 必须与小写的主题文件夹名完全一致
```

**关键概念：Hexo 配置优先级机制**  
Hexo 采用"根目录覆盖"策略：`[站点根目录]/_config.cactus.yml` 中的配置会覆盖 `themes/cactus/_config.yml` 的相同项。这意味着你可以：
- 将主题原始配置保留在 `themes/cactus/_config.yml`（不提交到 Git）
- 将你的自定义配置放在 `[站点根目录]/_config.cactus.yml`（纳入版本控制）

这种分离策略让你在更新主题时不会丢失个人配置。
### 2.3 创建主题配置文件

```bash
# 复制主题自带示例配置到根目录，作为你的自定义配置起点
cp themes/cactus/_config.yml _config.cactus.yml
```

现在你可以直接编辑 `_config.cactus.yml` 来修改配色、导航栏、社交链接等，而无需触碰 `themes/cactus/` 内的原始文件。

### 2.4 经典三连：清理、生成、预览

```bash
# 清除缓存（解决大部分"改了配置没生效"的问题）
hexo clean

# 生成静态文件（将 Markdown 渲染为 HTML）
hexo generate  # 或简写 hexo g

# 启动本地服务器预览最终效果
hexo server
```
![377](https://cdn.jsdelivr.net/gh/qucheng-wuan/image/img/Pasted%20image%2020260407095922.png)
> **避坑指南**：`hexo clean` 会清除 `public/` 目录和 `.deploy_git/`（如使用 Git 部署）。何时必须清理？
> - 修改 `_config.yml` 后
> - 主题文件更新后  
> - 遇到"页面不更新"或"样式错乱"时
> 日常写作时只需 `hexo s`，修改文章后自动重载，无需频繁清理。

---

## ⭐ 部署准备：连接 GitHub

### 3.1 配置 Git 身份（全局设置）

```bash
# 配置 Git 提交者身份（与 GitHub 账号匹配，但不必完全相同）
git config --global user.name "你的GitHub用户名"
git config --global user.email "你的GitHub注册邮箱"
```

### 3.2 生成 SSH 密钥（安全连接）

```bash
# -t rsa 指定加密算法，-C 是注释（通常填邮箱）
ssh-keygen -t rsa -C "你的GitHub邮箱"
```

**一路回车**使用默认保存路径（`~/.ssh/id_rsa`），无需设置密码（或按 Enter 留空）。

### 3.3 添加公钥到 GitHub

```bash
# 将公钥复制到剪贴板（macOS 专属命令 pbcopy）
cat ~/.ssh/id_rsa.pub | pbcopy
```

1. 登录 GitHub → Settings → SSH and GPG keys → **New SSH key**![](https://cdn.jsdelivr.net/gh/qucheng-wuan/image/img/Pasted%20image%2020260407095948.png)
2. **Title**：随便填写（如 "MacBook Pro"）
3. **Key**：粘贴已复制的内容
4. 点击 **Add SSH key**

**验证连接**：
```bash
ssh -T git@github.com
# 首次连接会询问，输入 yes 后应看到：
# Hi username! You've successfully authenticated...
```
---

### 3.4 创建 GitHub Pages 仓库

1. GitHub 右上角 **+** → **New repository**![](https://cdn.jsdelivr.net/gh/qucheng-wuan/image/img/Pasted%20image%2020260407100010.png)
2. **Repository name**：必须命名为 `你的用户名.github.io`（这是 GitHub Pages 的特殊命名规则）
3. **Description**：可选（如 "个人博客源代码"）
4. **Visibility**：选择 **Public**（免费版 GitHub Pages 要求公开）
5. **Initialize with README**：☑️ 勾选
6. 点击 **Create repository**

这个时候就可以通过https://用户名.github.io来访问自己的博客了
