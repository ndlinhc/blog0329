# 博客网站上传到 GitHub Pages

你已经手工创建了GitHub仓库 **blog0329**。以下是上传博客网站的简单步骤。

## 步骤1: 下载文件包

博客网站文件包位置:
```
/root/.openclaw/workspace/blog-github-pages.tar.gz
```

## 步骤2: 上传到GitHub

### 方法A: GitHub网页上传
1. 访问 https://github.com/ndlinhc/blog0329
2. 点击 "Add file" → "Upload files"
3. 上传 blog-github-pages.tar.gz 中的所有文件

### 方法B: Git命令行上传
```bash
# 解压文件
tar xzf blog-github-pages.tar.gz

# 进入目录
cd blog-github-pages

# 初始化Git
git init

# 添加文件
git add .

# 提交
git commit -m "Initial commit: blog0329 static website"

# 关联远程仓库
git remote add origin https://github.com/ndlinhc/blog0329.git

# 推送代码
git push -u origin main
```

## 步骤3: 配置GitHub Pages

1. 访问 https://github.com/ndlinhc/blog0329/settings/pages
2. 选择 "Source": Deploy from a branch
3. 选择 "Branch": main
4. 选择 "Folder": / (根目录)
5. 点击 "Save"

## 步骤4: 等待部署

GitHub Pages将在几分钟内自动部署网站。

访问地址: https://ndlinhc.github.io/blog0329

## 文件结构

```
blog0329/                # GitHub Pages静态博客网站
├── index.html          # 首页
├── about.html         # 关于页面
├── contact.html       # 联系页面
├── deploy.html        # 部署指南
├── upload_instructions.html  # 上传指南
├── GITHUB_PAGES_SETUP.md    # GitHub Pages设置文档
├── README.md          # 项目说明
├── .gitignore         # Git忽略文件
├── css/
│   ├── style.css     # 主样式
│   ├── responsive.css # 响应式样式
│   └── blog.css      # 博客样式
├── js/
│   ├── main.js       # 主JavaScript
│   ├── blog.js       # 博客功能脚本
│   └── contact.js    # 联系页面脚本
├── blog/
│   ├── post1.html    # 博客文章1
│   ├── post2.html    # 博客文章2
│   └── post3.html    # 博客文章3
```

## 注意事项

1. GitHub Pages只支持HTML、CSS和JavaScript
2. 不支持服务器端代码（如PHP、Node.js）
3. 等待几分钟部署完成
4. 确保index.html在根目录

## 备用方案

如果需要部署完整的带权限管理的博客系统（包含后端），请使用:
1. **blog0329.tar.gz** - 完整博客系统
2. **Vercel**: https://vercel.com
3. **Heroku**: https://heroku.com

## 支持

如果遇到任何问题:
- GitHub Pages文档: https://docs.github.com/en/pages
- GitHub支持: https://support.github.com