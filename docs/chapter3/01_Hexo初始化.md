# Hexo 初始化

## 这一节你会学到什么

1. 在本地创建博客工作目录
2. 全局安装 Hexo CLI 工具
3. 初始化 Hexo 项目，并理解生成的目录结构

完成本节后，你的电脑上就有一个可以运行的本地博客框架了。

---

## 1. 创建博客目录

在本地选择一个你方便管理的位置，创建一个新文件夹作为博客根目录。

建议命名为 `blog`，避免使用中文、空格或特殊字符：

```bash
mkdir blog
cd blog
```

> [!TIP]
> 推荐路径示例：`D:\blog`（Windows）或 `~/blog`（macOS/Linux）

这个文件夹将是你整个博客项目的"家"，后续所有操作都在这里进行。

---

## 2. 安装 Hexo

进入博客目录后，运行以下命令全局安装 Hexo CLI：

```bash
npm install -g hexo-cli
```

`-g` 表示全局安装，安装后可以在任何目录下使用 `hexo` 命令。安装过程需要从网络下载依赖，可能需要一点时间。

> [!TIP]
> **网络不畅时的替代方案（国内镜像）**
>
> ```bash
> npm install -g cnpm --registry=https://registry.npmmirror.com
> cnpm -v   # 验证成功后，后续所有 npm 命令均可替换为 cnpm
> ```

---

## 3. 初始化博客项目

在博客目录下运行：

```bash
hexo init
npm install
```

`hexo init` 会自动下载 Hexo 项目模板并按默认结构组织文件；`npm install` 安装项目依赖。

![](/images/利用 GitHub 和 Hexo 搭建个人博客【保姆教程】-image-3.png)

---

## 4. 理解目录结构

初始化完成后，目录结构如下：

```text
blog/
├── _config.yml       # 核心配置文件（标题、主题、部署等）
├── package.json      # 项目依赖声明
├── scaffolds/        # 文章/页面模板
│   ├── draft.md
│   ├── page.md
│   └── post.md
├── source/           # 博客源文件（你写的文章放这里）
│   └── _posts/       # 博客文章目录
└── themes/           # 主题文件夹
```

各目录的作用：

| 目录/文件 | 作用 |
| --- | --- |
| `_config.yml` | 整个博客的控制中心，标题、主题、URL 等都在这里配置 |
| `source/_posts/` | 存放你的 Markdown 博客文章 |
| `themes/` | 存放主题，可从网上下载并切换 |
| `scaffolds/` | 新建文章/页面时的初始模板 |
| `public/` | Hexo 生成的静态文件（不需要手动修改） |

> [!NOTE]
> `public/` 目录在初始化后不存在，执行 `hexo generate` 后才会生成。

---

## 小结

- ✅ 创建了博客工作目录
- ✅ 全局安装了 Hexo CLI
- ✅ 初始化了博客项目并理解了目录结构

下一节我们将启动本地预览服务器，看看博客的初始效果。
