# GitHub Actions 故障排除指南

## 检查工作流运行状态

1. 登录GitHub并进入仓库页面：https://github.com/mind-owner/me_github_actions
2. 点击顶部导航栏中的 **Actions** 标签
3. 在左侧找到并点击 **Deploy GitHub Pages** 工作流
4. 查看最近的工作流运行记录，检查是否有成功的运行

   ![Actions工作流列表](./docs/actions_list.png)

## GitHub Pages 类型说明

**重要澄清**：并非只有 `<user>.github.io` 格式的仓库才能使用GitHub Pages。GitHub Pages有两种模式：

1. **用户/组织页面**：
   - 仓库名称：`<user>.github.io`
   - 访问URL：`https://<user>.github.io/`
   - 内容来源：`main` 分支

2. **项目页面**：
   - 仓库名称：任意名称（如 `me_github_actions`）
   - 访问URL：`https://<user>.github.io/<repo>/`
   - 内容来源：`gh-pages` 分支或 `main` 分支的特定目录

**您的情况**：仓库 `me_github_actions` 属于**项目页面**模式，
- 访问URL应为：`https://mind-owner.github.io/me_github_actions/`
- 内容来源：`gh-pages` 分支

## 常见工作流错误及解决方法

### 错误1：权限被拒绝（403）
```
remote: Permission to mind-owner/me_github_actions.git denied to github-actions[bot]
fatal: unable to access 'https://github.com/mind-owner/me_github_actions.git/': The requested URL returned error: 403
```

**解决方法**：
- 确保仓库的 **Workflow permissions** 设置为 **Read and write permissions**
- 路径：Settings → Actions → General → Workflow permissions

### 错误2：找不到依赖锁文件
```
Error: Dependencies lock file is not found in /home/runner/work/me_github_actions/me_github_actions
```

**解决方法**：
- 确保 `package-lock.json` 文件存在于 `frontend/` 目录中
- 确保工作流中正确配置了 `cache-dependency-path: '**/package-lock.json'`

### 错误3：分支不存在
```
fatal: couldn't find remote ref gh-pages
```

**解决方法**：
- 第一次部署时，工作流会自动创建gh-pages分支
- 如果分支创建失败，可以尝试手动触发工作流

## 如果gh-pages分支不存在

### 手动创建gh-pages分支的方法

1. 在本地克隆仓库：
   ```bash
   git clone https://github.com/mind-owner/me_github_actions.git
   cd me_github_actions
   ```

2. 创建并切换到gh-pages分支：
   ```bash
   git checkout --orphan gh-pages
   git reset --hard
   ```

3. 创建一个简单的index.html文件：
   ```bash
   echo "# GitHub Actions学习平台" > index.html
   ```

4. 提交并推送分支：
   ```bash
   git add index.html
   git commit -m "Initial gh-pages commit"
   git push -u origin gh-pages
   ```

## 检查GitHub仓库的Pages设置

1. 登录GitHub并进入仓库页面：https://github.com/mind-owner/me_github_actions
2. 点击顶部导航栏中的 **Settings** 标签
3. 在左侧边栏中找到并点击 **Pages**
4. 检查Pages设置：
   - **Source**：应该选择 `gh-pages` 分支
   - **Folder**：应该选择 `/ (root)`
   - **Custom domain**：如果没有自定义域名，可以留空

   ![Pages设置页面](./docs/pages_settings.png)

5. 如果Pages设置未配置或配置不正确，请按照以下步骤修改：
   - 在 **Source** 下拉菜单中选择 `gh-pages` 分支
   - 点击 **Save** 按钮保存设置

## 测试GitHub Pages部署

### 访问URL
部署成功后，使用以下URL访问GitHub Pages：
```
https://mind-owner.github.io/me_github_actions/
```

### 验证方法

1. **直接访问URL**：在浏览器中输入上述URL，检查是否能正常加载页面

2. **检查页面元素**：
   - 页面标题是否正确显示
   - 所有图片和CSS样式是否正常加载
   - 页面功能是否正常工作

3. **检查浏览器控制台**：
   - 打开浏览器的开发者工具（按F12或Ctrl+Shift+I）
   - 切换到 **Console** 标签
   - 检查是否有404错误或其他加载错误

4. **检查网络请求**：
   - 在开发者工具中切换到 **Network** 标签
   - 刷新页面
   - 检查所有资源请求是否成功（状态码200）

## 常见访问问题及解决方法

### 问题1：404错误
- **原因**：gh-pages分支可能还未创建或部署未完成
- **解决方法**：等待部署完成，或手动触发工作流重新部署

### 问题2：资源加载错误（404）
- **原因**：前端资源路径配置不正确
- **解决方法**：确保 `frontend/vite.config.ts` 中的 `base` 设置为 `/me_github_actions/`

### 问题3：页面空白
- **原因**：可能是前端代码错误或资源路径问题
- **解决方法**：
  1. 检查浏览器控制台的错误信息
  2. 确保 `base` 路径配置正确
  3. 检查工作流日志是否有构建错误

### 查看部署历史
1. 在GitHub Pages设置页面，向下滚动找到 **Deployments** 部分
2. 查看最近的部署记录和状态

## 联系支持

如果您在配置过程中遇到任何问题：
1. 查看[GitHub Pages官方文档](https://docs.github.com/en/pages)
2. 查看[peaceiris/actions-gh-pages文档](https://github.com/peaceiris/actions-gh-pages#readme)
3. 在GitHub仓库中创建Issue寻求帮助

祝您配置成功！
