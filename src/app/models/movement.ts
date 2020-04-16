import { Category } from './category';

export interface Movement {
  id: number;
  amount: number;
  category: Category;
  executedAt: Date;
  note: string;
}
