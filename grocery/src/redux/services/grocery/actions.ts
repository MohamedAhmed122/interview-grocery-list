import {GroceryList, StatusType, FilterType} from '@Shared/types';

export const changStatusAction = (
  groceryList: GroceryList[],
  list: GroceryList,
): GroceryList[] => {
  const newGroceryList = groceryList.map(item => {
    if (item.id === list.id) {
      return {
        ...item,
        status: (list.status === 0 ? 1 : 0) as StatusType,
        history: [...list.history, {date: Date.now(), oldStatus: list.status}],
      };
    }
    return item;
  });
  return newGroceryList;
};

export const filterGroceryAction = (
  groceryList: GroceryList[],
  payload: FilterType,
) => {
  const filteredGroceryList =
    payload === 'ALL'
      ? groceryList
      : groceryList.filter(item => item.status === payload);

  return filteredGroceryList;
};

export const editGroceryAction = (
  groceryList: GroceryList[],
  list: GroceryList,
  isStatusChanged: boolean,
) => {
  const newList = groceryList.map(item => {
    if (item.id === list.id) {
      return {
        ...item,
        history: isStatusChanged
          ? [...list.history, {date: Date.now(), oldStatus: list.status}]
          : list.history,
        status: list.status,
        title: list.title,
        priority: list.priority,
      };
    }
    return item;
  });
  return newList;
};
