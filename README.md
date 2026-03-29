# blog0329 GitHub Pages静态博客网站

这是一个适合部署到GitHub Pages的静态博客网站。

## 如何上传到GitHub

### 快速上传步骤
1. **下载文件**: blog-github-pages.tar.gz
2. **解压缩**: `tar xzf blog-github-pages.tar.gz`
3. **上传**: 上传所有文件到GitHub仓库
4. **配置Pages**: 在仓库Settings -> Pages中配置
5. **访问**: https://ndlinhc.github.io/blog0329

### 详细上传指南
请查看以下指南:
1. **deploy.html** - GitHub Pages部署指南
2. **upload_instructions.html** - 上传步骤说明
3. **UPLOAD_SIMPLE.md** - 快速上传指南

## 网站功能

### 静态博客网站特点
1. **响应式设计** - 适配各种屏幕尺寸
2. **现代UI** - 简洁美观的用户界面
3. **博客系统** - 文章列表、分类、标签
4. **SEO优化** - 搜索引擎友好
5. **易于维护** - 代码结构清晰

### 文件结构
```
blog-github-pages/
├── index.html          # 首页
├── about.html          # 关于页面
├── contact.html        # 联系页面
├── deploy.html         # GitHub Pages部署指南
├── upload_instructions.html # 上传指南
├── README.md           # 项目说明
├── css/                # 样式文件
│   ├── style.css       # 主样式
│   ├── blog.css        # 博客页面样式
│   └── responsive.css  # 响应式样式
├── js/                 # JavaScript文件
│   ├── main.js         # 主脚本
│   ├── blog.js         # 博客功能脚本
│   └── contact.js      # 联系页面脚本
├── blog/               # 博客文章文件夹
│   ├── post1.html      # 第一篇博客文章
│   ├── post2.html      # 第二篇博客文章
│   └── post3.html      # 第三篇博客文章
```

## GitHub Pages部署

### 配置步骤
1. 上传所有文件到GitHub仓库
2. 在仓库Settings -> Pages中配置:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /
3. 等待几分钟部署完成

### 网站地址
```
https://ndlinhc.github.io/blog0329
```

## 访问路径
- **首页**: https://ndlinhc.github.io/blog0329/index.html
- **关于**: https://ndlinhc.github.io/blog0329/about.html
- **联系**: https://ndlinhc.github.io/blog0329/contact.html
- **部署指南**: https://ndlinhc.github.io/blog0329/deploy.html

## 注意事项

### GitHub Pages限制
1. **静态内容** - 只支持HTML、CSS、JavaScript
2. **不支持后端** - 不支持PHP、Node.js等后端代码
3. **流量限制** - 每月100GB流量限制
4. **文件大小** - 单个文件最大100MB

### 备用方案
如果需要完整的博客系统（带权限管理和后端），请使用:
1. **blog0329.tar.gz** - 完整博客系统项目
2. **Vercel部署** - 支持Node.js应用
3. **Heroku部署** - 支持Node.js应用

## 技术支持

如需技术支持或帮助，请联系:
- GitHub Pages文档: https://docs.github.com/en/pages
- GitHub支持: https://support.github.com