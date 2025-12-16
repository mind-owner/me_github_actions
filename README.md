# GitHub Actions 指南

本项目旨在全面介绍 GitHub Actions 的概念、使用方法、热门资源和常见用法示例，帮助开发者快速掌握这一强大的自动化工具。

## 项目信息

- **GitHub 仓库**: [mind-owner/me_github_actions](https://github.com/mind-owner/me_github_actions)
- **前端部署**: [GitHub Pages](https://mind-owner.github.io/me_github_actions/)
- **开发模式**: AI 驱动的迭代开发，文档先行

## 快速开始

1. 克隆仓库：
   ```bash
   git clone https://github.com/mind-owner/me_github_actions.git
   cd me_github_actions
   ```

2. 安装前端依赖：
   ```bash
   cd frontend
   npm install
   ```

3. 启动开发服务器：
   ```bash
   npm run dev
   ```

4. 访问应用：
   - 本地：http://localhost:3000/me_github_actions/
   - 线上：https://mind-owner.github.io/me_github_actions/

## 什么是 GitHub Actions？

GitHub Actions 是 GitHub 提供的持续集成/持续部署 (CI/CD) 平台，允许开发者直接在 GitHub 仓库中自动化软件工作流程。通过 GitHub Actions，你可以：

- 自动构建、测试和部署代码
- 同步仓库之间的代码
- 发布软件包
- 发送通知
- 执行自定义脚本

## 核心概念

### 工作流程 (Workflow)

工作流程是可配置的自动化过程，由一个或多个作业组成。工作流程在特定事件触发时运行，也可以手动触发或按计划运行。

### 事件 (Event)

事件是触发工作流程运行的特定活动，例如：
- 推送代码到仓库
- 创建拉取请求
- 发布新版本
- 定时触发

### 作业 (Job)

作业是工作流程中的一组步骤，在同一运行器上执行。作业默认并行运行，但可以配置为按顺序运行。

### 步骤 (Step)

步骤是作业中的单个任务，可以是：
- 运行命令
- 运行操作

### 操作 (Action)

操作是工作流程中可复用的最小构建块，可以创建自己的操作或使用社区共享的操作。

### 运行器 (Runner)

运行器是执行工作流程的服务器，GitHub 提供托管运行器，也可以自托管运行器。

## 如何使用 GitHub Actions

### 1. 创建工作流程文件

在仓库的 `.github/workflows` 目录下创建 YAML 文件（例如 `main.yml`）。

### 2. 定义工作流程

工作流程文件使用 YAML 语法定义，包含以下主要部分：

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'
    - name: Install dependencies
      run: npm ci
    - name: Run tests
      run: npm test
    - name: Build
      run: npm run build
```

### 3. 触发工作流程

将工作流程文件推送到仓库后，工作流程会在指定的事件发生时自动运行。

## 热门 GitHub Actions 资源

### 官方市场

[GitHub Actions Marketplace](https://github.com/marketplace?type=actions) - GitHub 官方的 Actions 市场，包含成千上万的社区贡献 Actions。

### 热门 Actions 推荐

1. **actions/checkout** - 检出仓库代码
2. **actions/setup-node** - 设置 Node.js 环境
3. **actions/setup-python** - 设置 Python 环境
4. **actions/upload-artifact** - 上传构建产物
5. **actions/download-artifact** - 下载构建产物
6. **peaceiris/actions-gh-pages** - 部署到 GitHub Pages
7. **docker/build-push-action** - 构建和推送 Docker 镜像
8. **actions/cache** - 缓存依赖项，加速工作流程
9. **actions/setup-java** - 设置 Java 环境
10. **actions/github-script** - 运行 JavaScript 脚本操作 GitHub API

## 常见 GitHub Actions 用法示例

### 1. Node.js 项目 CI

```yaml
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14, 16, 18]

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

### 2. Python 项目 CI

```yaml
name: Python CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: [3.8, 3.9, 3.10, 3.11]

    steps:
    - uses: actions/checkout@v3
    - name: Set up Python ${{ matrix.python-version }}
      uses: actions/setup-python@v4
      with:
        python-version: ${{ matrix.python-version }}
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install flake8 pytest
        if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
    - name: Lint with flake8
      run: |
        flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics
        flake8 . --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics
    - name: Test with pytest
      run: |
        pytest
```

### 3. 部署到 GitHub Pages

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
    - uses: actions/checkout@v3
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'
    - name: Install dependencies
      run: npm ci
    - name: Build
      run: npm run build
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 4. 构建和推送 Docker 镜像

```yaml
name: Build and Push Docker Image

on:
  push:
    branches: [ main ]
    tags: [ 'v*.*.*' ]

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Log in to GitHub Container Registry
      uses: docker/login-action@v2
      with:
        registry: ghcr.io
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}

    - name: Extract metadata (tags, labels) for Docker
      id: meta
      uses: docker/metadata-action@v4
      with:
        images: ghcr.io/${{ github.repository }}

    - name: Build and push Docker image
      uses: docker/build-push-action@v4
      with:
        context: .
        push: true
        tags: ${{ steps.meta.outputs.tags }}
        labels: ${{ steps.meta.outputs.labels }}
```

### 5. 定时备份仓库

```yaml
name: Backup Repository

on:
  schedule:
    - cron: '0 0 * * *'  # 每天午夜运行

jobs:
  backup:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout repository
      uses: actions/checkout@v3
      with:
        fetch-depth: 0
    - name: Create backup archive
      run: |
        git bundle create repository.bundle --all
    - name: Upload backup
      uses: actions/upload-artifact@v3
      with:
        name: repository-backup
        path: repository.bundle
```

## 进一步学习资源

- [GitHub Actions 官方文档](https://docs.github.com/zh/actions)
- [GitHub Actions 市场](https://github.com/marketplace?type=actions)
- [GitHub Actions 示例](https://github.com/actions/starter-workflows)

## 贡献

欢迎通过拉取请求贡献更多 GitHub Actions 示例和用法！

## 许可证

MIT License
