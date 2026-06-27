# GEO Frontend Slides

基于 [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) 规则重构的 GEO 主题 HTML 幻灯片工程。

## 文件结构

- `index.html`：最终 49 页幻灯片，固定 1920x1080 舞台，浏览器自动缩放。
- `assets/screenshots/`：从原站下载的 4 张案例截图资源。
- `assets/evidence/`：市场数据和海外案例的真实来源截图。
- `source/original.html`：原始页面备份。
- `.frontend-slides/reference/`：本次生成参考的 Frontend Slides 规范文件。
- `scripts/export-pdf.sh`：Frontend Slides 自带 PDF 导出脚本。

## 使用

直接打开：

```bash
open /Users/jaycehuang/Projects/jayce_blog/slides/geo/index.html
```

或启动本地静态服务：

```bash
cd /Users/jaycehuang/Projects/jayce_blog/slides/geo
python3 -m http.server 4173
```

然后访问 http://127.0.0.1:4173

## 同步到线上产物

修改 `slides/geo/index.html` 后，运行：

```bash
cd /Users/jaycehuang/Projects/jayce_blog
./slides/geo/scripts/sync-to-public.sh
```

脚本会把源文件复制到 `public/geo/index.html`，并把图片资源同步到 `public/geo-assets/screenshots/` 和 `public/geo-assets/evidence/`。`geo.imhxm.com` 实际部署读取的是 `public/geo/index.html`。

## 操作

- 右方向键 / 空格 / 点击右侧：下一页
- 左方向键 / 点击左侧：上一页
- Home / End：跳到首页 / 末页
- E：打开或关闭编辑模式
- 左上角悬停：显示编辑和导出按钮

## 来源

内容来自你拥有的 `https://seo.yidabuilds.com/`，并补充了 GEO 市场数据、国内外案例和来源截图，已迁移为 49 页 Frontend Slides 风格工程。
