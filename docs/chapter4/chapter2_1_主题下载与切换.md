# 01 主题下载与切换

## 自动识别结果
- 站点标题：`Weyumm的博客`
- Hexo 版本：`7.3.0`
- 当前主题：`butterfly`
- 语言/时区：`zh-CN` / `Asia/Shanghai`
- 首页副标题：`开启`（打字效果：`开启`）
- 菜单预览：首页、仓库、标签、分类、友链、追番

## 步骤 1：下载 Butterfly 主题
```bash
cd "D:\Hexo-Blog\blog-demo"
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

## 步骤 2：切换主题
在 `_config.yml` 中设置：
```yaml
theme: butterfly
```
你当前配置已经是 `theme: butterfly`，可直接进入下一步。

## 步骤 3：放置主题配置
将 Butterfly 专项配置放在根目录 `_config.butterfly.yml`，按“站点信息 -> 菜单 -> 封面 -> 评论 -> 扩展插件”顺序配置，避免一次性堆参数。

## 步骤 4：本地验证
```bash
npm install
npx hexo clean
npx hexo g
npx hexo s
```

## 步骤 5：部署核对（来自当前配置）
- `type=git, repo=git@github.com:weyumm/weyumm.github.io.git, branch=main`
- `type=baidu_url_submitter`
- `type=git, repo=git@gitee.com:weyumm/weyumm.git, branch=main`
