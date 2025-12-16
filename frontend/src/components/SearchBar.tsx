import React from 'react'

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (term: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // 可以添加额外的搜索逻辑，如防抖或触发搜索事件
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="搜索 GitHub Actions 示例..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  )
}

export default SearchBar