import { BaseEntity } from "./baseEntity"

export interface Faq extends BaseEntity  {
  category: string
  question: string
  answer: string
}
