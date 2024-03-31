import { BaseEntity } from "./baseEntity"

export interface Faq extends BaseEntity  {
  category: Category
  question: string
  answer: string
}

interface Category {
  _type: string
  _ref: string
}
