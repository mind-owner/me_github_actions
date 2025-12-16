# GitHub Pages 配置指南

## 步骤1：登录GitHub并进入仓库
1. 访问 https://github.com 并使用您的账号登录
2. 进入仓库页面：https://github.com/mind-owner/me_github_actions

## 步骤2：找到设置页面
1. 在仓库页面的顶部导航栏中，点击右侧的 **Settings** 按钮（齿轮图标）
   
   ![Settings按钮位置](./docs/settings_button.png)

## 步骤3：找到GitHub Pages设置
1. 在左侧导航栏中，向下滚动找到 **Code and automation** 部分
2. 在该部分下点击 **Pages** 选项
   
   ![Pages选项位置](./docs/pages_option.png)

## 步骤4：配置GitHub Pages
在GitHub Pages设置页面中，进行以下配置：

1. **Source（来源）**：
   - 选择 **Deploy from a branch**
   
   ![Source配置](./docs/pages_source.png)

2. **Branch（分支）**：
   - 在第一个下拉菜单中选择 `gh-pages` 分支
   - 在第二个下拉菜单中选择 `/(root)` 目录
   - 点击 **Save** 按钮保存设置
   
   ![Branch配置](./docs/pages_branch.png)

## 步骤5：等待部署完成
- 配置保存后，GitHub将开始部署您的网站
- 部署完成后，页面会显示您的GitHub Pages URL：`https://mind-owner.github.io/me_github_actions/`
- 通常部署需要1-2分钟时间

## 常见问题排查

### 问题1：找不到Pages选项
- 确保您访问的是仓库的设置页面，而不是个人设置页面
- 确保您有足够的权限（仓库所有者或管理员）
- 如果是私人仓库，需要确保您的GitHub账号有GitHub Pages权限（GitHub Pro、Team或Enterprise）

### 问题2：gh-pages分支不存在
- 确保GitHub Actions工作流已成功运行并创建了gh-pages分支
- 检查Actions标签页中的工作流执行状态

### 问题3：部署后访问404
- 检查URL是否正确：`https://mind-owner.github.io/me_github_actions/`
- 确保gh-pages分支中包含index.html文件
- 等待几分钟，GitHub Pages更新可能有延迟

## 验证部署状态
1. 访问GitHub Pages URL：`https://mind-owner.github.io/me_github_actions/`
2. 如果部署成功，您将看到网站内容；如果失败，将显示404错误

## 额外提示
- 如果需要自定义域名，可以在GitHub Pages设置页面的**Custom domain**部分进行配置
- 配置完成后，可能需要在域名注册商处设置CNAME记录

如果您在配置过程中遇到任何问题，请随时联系GitHub支持或查看[GitHub Pages官方文档](https://docs.github.com/en/pages)。
