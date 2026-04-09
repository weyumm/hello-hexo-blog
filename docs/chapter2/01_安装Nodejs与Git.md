# 安装 Node.js 与 Git

## 这一节你会学到什么

完成本节后，你将拥有运行 Hexo 所需的两个核心工具：

1. **Node.js** — Hexo 的运行环境，缺它 Hexo 跑不起来
2. **Git** — 版本控制工具，用于将博客推送到 GitHub

---

## 1. 安装 Node.js

Node.js 是 Hexo 运行所依赖的关键环境。

### 1.1 下载

访问 Node.js 官方网站（https://nodejs.org/），在首页根据自己的操作系统类型（Windows、macOS 或 Linux）选择相应的安装包进行下载。建议选择 **LTS（长期支持版）**，更稳定。

![Node.js 下载页面](/images/利用 GitHub 和 Hexo 搭建个人博客【保姆教程】-image-5.png)

### 1.2 安装

下载完成后，按照安装向导的提示逐步完成安装，一路"下一步"即可，保持默认设置。

### 1.3 验证安装

安装结束后，打开命令行工具（Windows 上使用"命令提示符"或"PowerShell"，macOS/Linux 上使用"终端"），输入以下命令验证：

```bash
node -v
npm -v
```

如果两条命令都能正常输出版本号，说明 Node.js 安装成功。

![验证 Node.js 安装](/images/利用 GitHub 和 Hexo 搭建个人博客【保姆教程】-image-2.png)

> [!TIP]
> **网络不畅？使用国内镜像源**
>
> 如果你没有科学上网工具，可以先安装 cnpm ，后续所有 `npm` 命令都可以替换为 `cnpm`：
> ```bash
> npm install -g cnpm --registry=https://registry.npmmirror.com
> cnpm -v   # 验证是否成功
> ```

---

## 2. 安装 Git

Git 是用于管理博客代码版本、将博客内容推送到 GitHub 的重要工具，程序员必备。

### 2.1 下载与安装

访问 Git 官方网站（https://git-scm.com/），根据操作系统类型下载合适的安装包。安装时保持默认设置即可。

### 2.2 验证安装

安装完成后，在命令行中输入：

```bash
git --version
```

若显示 Git 的版本信息，则表明安装成功。

![验证 Git 安装](/images/利用 GitHub 和 Hexo 搭建个人博客【保姆教程】-image-1.png)

---

## 小结

| 工具 | 作用 | 验证命令 |
| --- | --- | --- |
| Node.js | Hexo 运行环境 | `node -v` |
| npm | Node.js 包管理器 | `npm -v` |
| Git | 版本控制与推送 | `git --version` |

两者都安装完成后，就可以继续下一步：学习基础命令行操作。
