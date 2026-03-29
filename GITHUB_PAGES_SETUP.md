# GitHub Pages 部署指南

## 步骤1: 创建GitHub仓库

1. 访问 https://github.com 并登录你的GitHub账号
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 输入仓库名称，例如: `my-blog-site`
4. 设置为公共仓库 (Public)
5. 点击 "Create repository"

## 步骤2: 上传博客网站代码

你可以选择以下两种方式上传代码：

### 方式A: 使用Git命令行
1. 下载博客网站压缩包: blog-site-github.tar.gz
2. 解压缩文件: `tar xzf blog-site-github.tar.gz`
3. 进入文件夹: `cd blog-site`
4. 初始化Git仓库: `git init`
5. 添加所有文件: `git add .`
6. 提交文件: `git commit -m "Initial commit"`
7. 关联远程仓库: `git remote add origin https://github.com/<username>/<repository>.git`
8. 推送代码: `git push -u origin main`

### 方式B: 使用GitHub Web界面
1. 在GitHub仓库页面，点击 "Add file" > "Upload files"
2. 上传博客网站文件夹中的所有文件 (index.html, css/, js/, blog/, about.html, contact.html)
3. 点击 "Commit changes"

## 步骤3: 配置GitHub Pages

1. 在GitHub仓库页面，点击 "Settings"
2. 左侧菜单中找到 "Pages"
3. 在 "Source" 部分，选择 "Deploy from a branch"
4. 选择分支 "main" 或 "master"
5. 选择根目录 (root)
6. 点击 "Save"

GitHub Pages将在几分钟后部署完成，你可以访问:
- https://<username>.github.io/<repository>

## 步骤4: 验证部署

访问你的GitHub Pages网站:
1. 等待1-2分钟让GitHub完成部署
2. 访问 https://<username>.github.io/<repository>
3. 你应该能看到博客网站的首页

## 自定义域名

如果需要自定义域名:
1. 在GitHub Pages设置页面，添加你的自定义域名
2. 在你的DNS提供商处配置CNAME记录指向 `<username>.github.io`
3. 等待DNS传播（可能需要几分钟到几小时）

## GitHub Pages的优点

1. **免费**: GitHub Pages完全免费
2. **自动部署**: 每次推送代码都会自动更新网站
3. **SSL证书**: 自动提供HTTPS支持
4. **CDN**: 全球内容分发网络，访问速度快
5. **简单配置**: 只需要几分钟就能完成设置

## 注意事项

1. GitHub Pages只支持静态网站（HTML/CSS/JavaScript）
2. 不支持服务器端代码（PHP、Node.js等）
3. 文件大小限制：单个文件最大100MB
4. 网站流量限制：每月限制为100GB

## 备选方案

如果博客系统需要后端（如blog-with-admin系统），可以考虑以下选项:
1. **Vercel**: 免费托管Node.js应用
2. **Heroku**: 免费托管云应用
3. **Netlify**: 免费静态网站托管，支持服务器端渲染

## 技术支持

如需技术支持，请联系:
- GitHub Pages文档: https://docs.github.com/en/pages
- GitHub支持: https://support.github.com