export enum SortBy {
  NEW = 'newest',
  OLD = 'oldest'
}

export enum Language {
  DA = 'da',
  EN = 'en'
}

export interface AppContextInterface {
  sortBy: string
  changeSortBy: (_e: React.ChangeEvent<HTMLSelectElement>) => void
  lang: string
  setLang: (_e: React.ChangeEvent<HTMLSelectElement>) => void
}

interface PostData {
  date: string
  language: Language
  layout: string
  slug: string
  thumbnail: string
  title: string
}

export interface Post {
  content: string
  data: PostData
  excerpt: string
}
