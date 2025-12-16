export interface Example {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  filePath: string;
  language: string;
  stars: number;
  createdAt: string;
  updatedAt: string;
  content?: string;
}

export interface SearchResult {
  examples: Example[];
  total: number;
  page: number;
  limit: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  count: number;
}