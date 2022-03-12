import {compare} from '@Shared/utils';
import {GroceryList} from '@Shared/types';

const groceryList: GroceryList[] = [
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
    id: '8',
    title: 'Cheese',
    status: 0,
    priority: 2,
    history: [],
  },
].sort(compare);

export {groceryList};
