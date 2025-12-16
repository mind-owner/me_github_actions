# 项目架构设计

## 1. 项目概述

本项目是一个 GitHub Actions 学习和示例平台，旨在帮助开发者快速了解和使用 GitHub Actions。项目采用前后端分离架构，前端使用现代 Web 框架，后端提供 API 服务，同时包含丰富的 Actions 示例集合。

## 2. 目录结构

```
me_github_actions/
├── .github/                 # GitHub 配置目录
│   └── workflows/           # 项目自身的 GitHub Actions 工作流
├── docs/                    # 文档目录
│   ├── en/                  # 英文文档
│   └── zh/                  # 中文文档
├── examples/                # GitHub Actions 示例集合
│   ├── ci-cd/               # CI/CD 相关示例
│   ├── deployment/          # 部署相关示例
│   ├── automation/          # 自动化任务示例
│   ├── notification/        # 通知相关示例
│   └── utilities/           # 实用工具示例
├── frontend/                # 前端应用
│   ├── public/              # 静态资源
│   ├── src/                 # 源代码
│   │   ├── components/      # React 组件
│   │   ├── hooks/           # 自定义 Hooks
│   │   ├── pages/           # 页面组件
│   │   ├── services/        # API 服务
│   │   └── utils/           # 工具函数
│   ├── package.json         # 前端依赖
│   └── vite.config.js       # Vite 配置
├── backend/                 # 后端应用
│   ├── src/                 # 源代码
│   │   ├── controllers/     # 控制器
│   │   ├── models/          # 数据模型
│   │   ├── routes/          # 路由
│   │   ├── services/        # 业务逻辑
│   │   └── utils/           # 工具函数
│   ├── package.json         # 后端依赖
│   └── tsconfig.json        # TypeScript 配置
├── scripts/                 # 辅助脚本
├── .gitignore               # Git 忽略配置
├── ARCHITECTURE.md          # 架构文档
├── AGENTS.md                # AI 开发计划
├── PLAN.md                  # 项目计划
└── README.md                # 项目说明
```

## 3. 模块划分

### 3.1 前端模块

| 模块 | 职责 | 文件位置 |
|------|------|----------|
| 首页 | 项目概述和导航 | frontend/src/pages/HomePage.tsx |
| 示例列表 | 展示所有 Actions 示例 | frontend/src/pages/ExamplesPage.tsx |
| 示例详情 | 展示单个示例的详细信息 | frontend/src/pages/ExampleDetailPage.tsx |
| 搜索功能 | 按关键词搜索示例 | frontend/src/components/SearchBar.tsx |
| 分类导航 | 按功能和语言分类示例 | frontend/src/components/CategoryNav.tsx |
| 学习工具 | 交互式学习 GitHub Actions | frontend/src/pages/LearningPage.tsx |

### 3.2 后端模块

| 模块 | 职责 | 文件位置 |
|------|------|----------|
| 示例管理 | 管理 Actions 示例 | backend/src/controllers/exampleController.ts |
| 用户管理 | 管理用户信息 | backend/src/controllers/userController.ts |
| 搜索服务 | 提供搜索功能 | backend/src/services/searchService.ts |
| 分类服务 | 提供分类功能 | backend/src/services/categoryService.ts |
| 推荐服务 | 提供示例推荐 | backend/src/services/recommendationService.ts |

### 3.3 示例模块

| 分类 | 示例类型 | 文件位置 |
|------|----------|----------|
| CI/CD | Node.js 测试 | examples/ci-cd/nodejs-test.yml |
| CI/CD | Python 测试 | examples/ci-cd/python-test.yml |
| 部署 | GitHub Pages | examples/deployment/github-pages.yml |
| 部署 | Docker 镜像 | examples/deployment/docker-image.yml |
| 自动化 | 定时任务 | examples/automation/scheduled-task.yml |
| 自动化 | 代码质量检查 | examples/automation/code-quality.yml |
| 通知 | Slack 通知 | examples/notification/slack-notification.yml |
| 通知 | Email 通知 | examples/notification/email-notification.yml |

## 4. 技术选型

| 类别 | 技术 | 版本 |
|------|------|------|
| 前端框架 | React | 18.x |
| 前端构建工具 | Vite | 5.x |
| 状态管理 | Redux Toolkit | 2.x |
| UI 组件库 | Ant Design | 5.x |
| 后端框架 | Express | 4.x |
| 后端语言 | TypeScript | 5.x |
| 数据库 | MongoDB | 7.x |
| ORM | Mongoose | 8.x |
| API 文档 | Swagger | 5.x |
| 测试框架 | Jest | 29.x |
| 代码质量 | ESLint | 8.x |
| 样式 | Tailwind CSS | 3.x |

## 5. 系统架构图

```
┌─────────────────────────────────────────────────────────────┐
│                     用户界面 (浏览器)                        │
└─────────────────┬───────────────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────────────┐
│                      前端应用 (React)                       │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌─────────┐│
│  │  首页      │  │  示例列表  │  │  示例详情  │  │  学习工具 ││
│  └────────────┘  └────────────┘  └────────────┘  └─────────┘│
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │  搜索功能  │  │  分类导航  │  │  用户管理  │            │
│  └────────────┘  └────────────┘  └────────────┘            │
└─────────────────┬───────────────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────────────┐
│                      后端 API (Express)                     │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌─────────┐│
│  │  示例 API  │  │  搜索 API  │  │  分类 API  │  │  推荐 API ││
│  └────────────┘  └────────────┘  └────────────┘  └─────────┘│
└─────────────────┬───────────────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────────────┐
│                       数据库 (MongoDB)                      │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │  示例数据  │  │  分类数据  │  │  用户数据  │            │
│  └────────────┘  └────────────┘  └────────────┘            │
└─────────────────────────────────────────────────────────────┘
```

## 6. 关键流程

### 6.1 示例搜索流程

1. 用户在前端输入搜索关键词
2. 前端调用后端搜索 API
3. 后端搜索服务查询数据库
4. 返回匹配的示例列表
5. 前端展示搜索结果

### 6.2 示例详情展示流程

1. 用户点击示例列表中的某个示例
2. 前端调用后端示例详情 API
3. 后端返回示例的详细信息
4. 前端展示示例的 YAML 代码、说明和使用方法

### 6.3 学习工具使用流程

1. 用户进入学习工具页面
2. 选择学习主题和难度
3. 前端加载对应的学习内容
4. 用户与学习工具交互
5. 前端实时反馈学习进度

## 7. 扩展设计

### 7.1 多语言支持

项目支持中英文两种语言，通过国际化（i18n）实现：
- 文档采用多语言目录结构
- 前端使用 i18next 库实现界面国际化
- 示例说明提供多语言版本

### 7.2 插件系统

设计可扩展的插件系统，允许第三方开发者添加新的功能模块：
- 定义插件接口规范
- 提供插件注册机制
- 支持动态加载插件

### 7.3 API 设计

采用 RESTful API 设计风格，同时支持 GraphQL：
- REST API：用于基本操作
- GraphQL：用于复杂查询和数据获取

## 8. 性能与安全

### 8.1 性能优化

- 前端使用代码分割和懒加载
- 后端实现缓存机制
- 数据库建立合适的索引
- 使用 CDN 加速静态资源

### 8.2 安全措施

- 实现 API 认证和授权
- 防止 SQL 注入和 XSS 攻击
- 使用 HTTPS 协议
- 定期更新依赖库

## 9. 部署与运维

### 9.1 部署方案

#### 前端部署（GitHub Pages）
- 部署到 GitHub Pages，URL：https://mind-owner.github.io/me_github_actions/
- Vite 配置中的 `base` 路径设置为 `/me_github_actions/`，确保资源正确加载
- 使用 GitHub Actions 自动部署，当代码推送到 `master` 分支时触发

#### 后端部署
- 后端部署到 Heroku 或 AWS
- 数据库使用 MongoDB Atlas

#### 自动化部署
- 所有部署都通过 GitHub Actions 实现自动化
- 包含版本发布、页面部署和定时任务执行等工作流

### 9.2 监控与日志

- 使用 GitHub Actions 进行自动化部署
- 实现日志收集和分析
- 建立监控告警机制

## 10. 开发流程

### 10.1 分支策略

- master：主分支，用于发布生产版本
- develop：开发分支，用于集成新功能
- feature/*：功能分支，用于开发新功能
- hotfix/*：修复分支，用于修复生产环境问题

### 10.2 代码规范

- 使用 ESLint 和 Prettier 统一代码风格
- 编写单元测试和集成测试
- 提交代码前进行代码审查

## 11. 未来规划

- 支持更多编程语言和框架的示例
- 实现可视化工作流设计工具
- 增加 Actions 性能分析功能
- 建立社区贡献平台
- 支持企业级功能（如私有 Actions 管理）