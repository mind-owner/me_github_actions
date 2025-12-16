import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import ExamplesGrid from './components/ExamplesGrid'
import { Example } from './types'
import { fetchExamples } from './services/exampleService'

function App() {
  const [examples, setExamples] = useState<Example[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredExamples, setFilteredExamples] = useState<Example[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 加载示例数据
  useEffect(() => {
    const loadExamples = async () => {
      try {
        setLoading(true)
        const data = await fetchExamples()
        setExamples(data)
        setFilteredExamples(data)
        setError(null)
      } catch (err) {
        setError('加载示例失败，请稍后重试')
        console.error('加载示例失败:', err)
      } finally {
        setLoading(false)
      }
    }

    loadExamples()
  }, [])

  // 根据搜索词过滤示例
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredExamples(examples)
      return
    }

    const filtered = examples.filter(example => {
      const searchLower = searchTerm.toLowerCase()
      return (
        example.name.toLowerCase().includes(searchLower) ||
        example.description.toLowerCase().includes(searchLower) ||
        example.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        example.category.toLowerCase().includes(searchLower)
      )
    })

    setFilteredExamples(filtered)
  }, [searchTerm, examples])

  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>GitHub Actions 学习平台</h1>
        </div>
      </header>

      <main className="container">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {loading && <div className="loading">加载中...</div>}
        {error && <div className="error">{error}</div>}
        {!loading && !error && (
          <ExamplesGrid examples={filteredExamples} />
        )}
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 GitHub Actions 学习平台 - 完全由 AI 迭代开发</p>
        </div>
      </footer>
    </div>
  )
}

export default App