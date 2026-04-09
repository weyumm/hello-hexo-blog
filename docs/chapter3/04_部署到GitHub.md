# 部署到 GitHub Pages

## 这一节你会学到什么

1. 在 GitHub 上创建博客专用仓库
2. 配置 SSH 密钥，让本地电脑可以安全推送到 GitHub
3. 安装部署插件，一键将博客发布到线上

---

## 1. 创建 GitHub 仓库

登录 GitHub，点击右上角 **+** → **New repository**，填写以下信息：

- **仓库名称**：必须命名为 `用户名.github.io`（替换为你的 GitHub 用户名）
  - 例如用户名是 `zhangsan`，则仓库名为 `zhangsan.github.io`
  - 这是 GitHub Pages 的特殊规则，格式不能错
- **仓库描述**（可选）：如"我的个人博客仓库"
- **仓库类型**：选择 **Public**（公开）

填写完成后，点击 **Create repository** 完成创建。

---

## 2. 配置 SSH 密钥

> [!CAUTION]
> 这一步是整个流程中最容易出错的地方，请打起精神仔细操作。

SSH 密钥是一种安全的身份认证方式，让你的电脑能够在不输入密码的情况下向 GitHub 推送文件。

### 2.1 打开 Git Bash

1. 点击 Windows 的"开始"菜单
2. 搜索 `Git Bash` 并打开
3. 你会看到一个类似 Linux 终端的黑色窗口

### 2.2 生成 SSH 密钥

在 Git Bash 中运行以下命令（将邮箱替换为你注册 GitHub 的邮箱）：

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

终端会询问几个问题，一路按回车使用默认值即可。生成完成后，密钥文件保存在：

```text
C:\Users\你的用户名\.ssh\id_ed25519.pub   # 公钥（需要上传到 GitHub）
C:\Users\你的用户名\.ssh\id_ed25519       # 私钥（本地保留，不要泄露）
```

### 2.3 将公钥添加到 GitHub

1. 用文本编辑器打开 `id_ed25519.pub`，复制全部内容
2. 登录 GitHub → **头像** → **Settings** → **SSH and GPG keys**
3. 点击 **New SSH key**
4. **Title**：随意填写，如"我的电脑"
5. **Key**：粘贴刚才复制的公钥内容
6. 点击 **Add SSH key**

### 2.4 测试 SSH 连接

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
ssh -T git@github.com
```

如果看到以下信息，说明连接成功：

```text
Hi 你的用户名! You've successfully authenticated, but GitHub does not provide shell access.
```

---

## 3. 配置 Hexo 部署参数

打开博客根目录下的 `_config.yml`，找到并修改 `deploy` 部分：

```yaml
deploy:
  type: git
  repo: git@github.com:你的用户名/你的用户名.github.io.git
  branch: main
```

将 `你的用户名` 替换为你实际的 GitHub 用户名。

---

## 4. 安装 hexo-deployer-git 插件

```bash
npm install hexo-deployer-git --save
```

这个插件是 Hexo 调用 Git 进行部署的关键工具，`--save` 会将它写入 `package.json` 依赖列表。

---

## 5. 一键部署

```bash
hexo clean && hexo g && hexo d
```

- `hexo clean`：清除旧文件
- `hexo g`：生成最新静态文件
- `hexo d`：推送到 GitHub 仓库

稍等几分钟后，访问 `https://你的用户名.github.io`，你的博客就上线了！

> [!NOTE]
> 第一次部署后，GitHub Pages 可能需要 1~3 分钟才能生效，稍作等待即可。

---

## 小结

| 步骤 | 操作 |
| --- | --- |
| 1 | 创建 `用户名.github.io` 仓库 |
| 2 | 生成 SSH 密钥并上传公钥到 GitHub |
| 3 | 配置 `_config.yml` 的 deploy 字段 |
| 4 | 安装 hexo-deployer-git 插件 |
| 5 | 运行 `hexo cl && hexo g && hexo d` 部署 |
