import { Example } from '../types'

// 模拟GitHub Actions示例数据
const mockExamples: Example[] = [
  {
    id: '1',
    name: 'Node.js CI',
    description: 'Node.js项目的持续集成工作流',
    category: 'ci-cd',
    tags: ['nodejs', 'ci', 'testing'],
    filePath: 'examples/ci-cd/nodejs-test.yml',
    language: 'JavaScript',
    stars: 150,
    createdAt: '2025-12-16',
    updatedAt: '2025-12-16'
  },
  {
    id: '2',
    name: 'Python CI',
    description: 'Python项目的持续集成工作流',
    category: 'ci-cd',
    tags: ['python', 'ci', 'testing'],
    filePath: 'examples/ci-cd/python-test.yml',
    language: 'Python',
    stars: 120,
    createdAt: '2025-12-16',
    updatedAt: '2025-12-16'
  },
  {
    id: '3',
    name: 'GitHub Pages部署',
    description: '将项目部署到GitHub Pages',
    category: 'deployment',
    tags: ['github-pages', 'deployment', 'static-site'],
    filePath: 'examples/deployment/github-pages.yml',
    language: 'JavaScript',
    stars: 200,
    createdAt: '2025-12-16',
    updatedAt: '2025-12-16'
  },
  {
    id: '4',
    name: 'Docker镜像构建',
    description: '构建并推送Docker镜像到Docker Hub',
    category: 'deployment',
    tags: ['docker', 'container', 'deployment'],
    filePath: 'examples/deployment/docker-image.yml',
    language: 'Docker',
    stars: 180,
    createdAt: '2025-12-16',
    updatedAt: '2025-12-16'
  },
  {
    id: '5',
    name: '定时任务',
    description: '定期运行的GitHub Actions工作流',
    category: 'automation',
    tags: ['scheduled', 'automation', 'cron'],
    filePath: 'examples/automation/scheduled-task.yml',
    language: 'YAML',
    stars: 90,
    createdAt: '2025-12-16',
    updatedAt: '2025-12-16'
  },
  {
    id: '6',
    name: '代码质量检查',
    description: '使用ESLint和Prettier检查代码质量',
    category: 'code-quality',
    tags: ['code-quality', 'linting', 'eslint'],
    filePath: 'examples/automation/code-quality.yml',
    language: 'JavaScript',
    stars: 110,
    createdAt: '2025-12-16',
    updatedAt: '2025-12-16'
  },
  {
    id: '7',
    name: 'Slack通知',
    description: '当工作流完成时发送Slack通知',
    category: 'notification',
    tags: ['slack', 'notification', 'alerting'],
    filePath: 'examples/notification/slack-notification.yml',
    language: 'YAML',
    stars: 80,
    createdAt: '2025-12-16',
    updatedAt: '2025-12-16'
  }
]

// 获取所有示例
export const fetchExamples = async (): Promise<Example[]> => {
  // 模拟API请求延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockExamples
}

// 根据ID获取单个示例
export const fetchExampleById = async (id: string): Promise<Example | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 300))
  return mockExamples.find(example => example.id === id)
}

// 根据分类获取示例
export const fetchExamplesByCategory = async (category: string): Promise<Example[]> => {
  await new Promise(resolve => setTimeout(resolve, 400))
  return mockExamples.filter(example => example.category === category)
}

// 搜索示例
export const searchExamples = async (query: string): Promise<Example[]> => {
  await new Promise(resolve => setTimeout(resolve, 400))
  if (!query.trim()) {
    return mockExamples
  }
  const lowercaseQuery = query.toLowerCase()
  return mockExamples.filter(example => 
    example.name.toLowerCase().includes(lowercaseQuery) ||
    example.description.toLowerCase().includes(lowercaseQuery) ||
    example.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    example.category.toLowerCase().includes(lowercaseQuery)
  )
}
