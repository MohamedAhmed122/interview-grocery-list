import {GroceryList, SelectItem} from '@Shared/types';

export const groceryList: GroceryList[] = [
  {
    id: '0',
    title: 'Meat',
    status: 1,
    priority: 3,
    history: [],
  },
  {
    id: '1',
    title: 'Fish',
    status: 0,
    priority: 4,
    history: [],
  },
  {
    id: '2',
    title: 'Rice',
    status: 0,
    priority: 1,
    history: [],
  },

  {
    id: '3',
    title: 'Bread',
    status: 1,
    priority: 5,
    history: [],
  },
  {
    id: '4',
    title: 'Cooking oil',
    status: 1,
    priority: 3,
    history: [],
  },
  {
    id: '5',
    title: 'Egg',
    status: 1,
    priority: 1,
    history: [],
  },

  {
    id: '6',
    title: 'Butter',
    status: 0,
    priority: 4,
    history: [],
  },
  {
    id: '7',
    title: 'Milk',
    status: 1,
    priority: 1,
    history: [],
  },

  {
    id: '12',
    title: 'ABS',
    status: 1,
    priority: 1,
    history: [],
  },

  {
    id: '8',
    title: 'Cheese',
    status: 0,
    priority: 2,
    history: [],
  },
];
export const statusListItems: SelectItem[] = [
  {
    id: '0',
    label: 'Have',
    value: 1,
    color: 'white',
  },
  {
    id: '1',
    label: 'Ran out',
    value: 0,
    color: 'white',
  },
];
export const priorityListItems: SelectItem[] = [
  {
    id: '0',
    label: 'Critical',
    value: 1,
    color: 'white',
  },
  {
    id: '1',
    label: 'Very Important',
    value: 2,
    color: 'white',
  },
  {
    id: '2',
    label: 'Important',
    value: 3,
    color: 'white',
  },
  {
    id: '3',
    label: 'Normal',
    value: 4,
    color: 'white',
  },
  {
    id: '4',
    label: 'Low',
    value: 5,
    color: 'white',
  },
];
