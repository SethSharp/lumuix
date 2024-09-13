export {}

import type { ButtonHTMLAttributes } from 'vue'

declare global {
  export type ButtonType = ButtonHTMLAttributes['type']

  export type TabOption = {
    name: string
    href: string
    active: boolean
    icon?: any
  }

  export type Option = {
    id: number
    name: string
  }

  export interface PaginationLink {
    url: string | null | undefined
    label: string | number
    active: boolean
  }

  export interface Pagination {
    current_page: number
    first_page_url: string
    from: number | null
    last_page: number
    last_page_url: string
    links: PaginationLink[]
    next_page_url?: string
    path: string
    per_page: number
    prev_page_url?: string
    to: number | null
    total: number
  }

  export interface Paginator<T> extends Pagination {
    data: T[]
  }
}
