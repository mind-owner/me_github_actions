import React from 'react'
import { Example } from '../types'

interface ExamplesGridProps {
  examples: Example[]
}

const ExamplesGrid: React.FC<ExamplesGridProps> = ({ examples }) => {
  if (examples.length === 0) {
    return (
      <div className="no-examples">
        <h3>没有找到匹配的示例</h3>
        <p>请尝试使用其他关键词搜索</p>
      </div>
    )
  }

  return (
    <div className="examples-grid">
      {examples.map(example => (
        <div key={example.id} className="example-card">
          <div className="example-header">
            <h3 className="example-name">{example.name}</h3>
            <div className="example-language">{example.language}</div>
          </div>
          
          <p className="example-description">{example.description}</p>
          
          <div className="example-meta">
            <div className="example-category">
              <span className="category-label">分类：</span>
              <span className="category-value">{example.category}</span>
            </div>
            <div className="example-stars">
              <span className="stars-icon">⭐</span>
              <span className="stars-count">{example.stars}</span>
            </div>
          </div>
          
          <div className="example-tags">
            {example.tags.map((tag, index) => (
              <span key={index} className="example-tag">{tag}</span>
            ))}
          </div>
          
          <div className="example-actions">
            <a 
              href={`https://github.com/mind-owner/me_github_actions/blob/master/${example.filePath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="view-code-btn"
            >
              查看代码
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExamplesGrid
