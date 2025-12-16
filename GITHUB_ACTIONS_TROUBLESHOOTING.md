# GitHub Actions 故障排除指南

## 检查工作流运行状态

1. 登录GitHub并进入仓库页面：https://github.com/mind-owner/me_github_actions
2. 点击顶部导航栏中的 **Actions** 标签
3. 在左侧找到并点击 **Deploy GitHub Pages** 工作流
4. 查看最近的工作流运行记录，检查是否有成功的运行

   ![Actions工作流列表](./docs/actions_list.png)

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

## 验证GitHub Pages部署

### 检查gh-pages分支内容
1. 进入仓库的 **Code** 标签
2. 在分支下拉菜单中选择 `gh-pages` 分支
3. 检查是否包含以下文件：
   - `index.html`
   - `assets/` 目录（包含JavaScript和CSS文件）

### 访问GitHub Pages URL
部署成功后，使用以下URL访问：
```
https://mind-owner.github.io/me_github_actions/
```

### 查看部署历史
1. 在GitHub Pages设置页面，向下滚动找到 **Deployments** 部分
2. 查看最近的部署记录和状态

## 联系支持

如果您在配置过程中遇到任何问题：
1. 查看[GitHub Pages官方文档](https://docs.github.com/en/pages)
2. 查看[peaceiris/actions-gh-pages文档](https://github.com/peaceiris/actions-gh-pages#readme)
3. 在GitHub仓库中创建Issue寻求帮助

祝您配置成功！
