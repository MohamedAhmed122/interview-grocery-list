export type StatusType = 0 | 1;

export type PriorityType = 1 | 2 | 3 | 4 | 5;

export type FilterType = StatusType | 'ALL';

export interface HistoryList {
  date: number;
  oldStatus: StatusType;
}

export interface GroceryList {
  id: string;
  title: string;
  status: StatusType;
  priority: PriorityType;
  history: Array<HistoryList>;
}
