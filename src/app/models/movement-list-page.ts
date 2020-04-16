import { Movement } from './movement';

export interface MovementListPage {
  first: boolean;
  last: boolean;
  size: number;
  totalElements: number;
  totalPages: number;
  number: number
  contents: Movement[];
}
