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
