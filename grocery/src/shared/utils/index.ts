import {GroceryList, StatusType} from '@Shared/types';

const getStatusValue = (status: StatusType) =>
  status === 1 ? 'Have' : 'Ran out';

const getStatus = (value: StatusType) => {
  switch (value) {
    case 0:
      return {
        oldStatus: 'ran out',
        newStatus: 'have',
      };
    case 1:
      return {
        newStatus: 'ran out',
        oldStatus: 'have',
      };
    default:
      return {
        newStatus: '',
        oldStatus: '',
      };
  }
};

const compare = (a: GroceryList, b: GroceryList) => {
  let comparison = 0;
  if (Number(a.priority) < Number(b.priority)) {
    comparison = -1;
  } else if (Number(a.priority) > Number(b.priority)) {
    comparison = 1;
  }
  return comparison;
};

export {getStatusValue, getStatus, compare};
