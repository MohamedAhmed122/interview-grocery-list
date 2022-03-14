import {StatusType} from '@Shared/types';

const getStatusValue = (status: StatusType) =>
  status === 0 ? 'Ran out' : 'Have';

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

const sortArrayOfObjects = <T>(
  data: T[],
  keyToSort: keyof T,
  direction: 'ascending' | 'descending' | 'none',
) => {
  if (direction === 'none') {
    return data;
  }
  const compare = (objectA: T, objectB: T) => {
    const valueA = objectA[keyToSort];
    const valueB = objectB[keyToSort];

    if (valueA === valueB) {
      return 0;
    }

    if (valueA > valueB) {
      return direction === 'ascending' ? 1 : -1;
    } else {
      return direction === 'ascending' ? -1 : 1;
    }
  };

  return data.slice().sort(compare);
};

export {getStatusValue, getStatus, sortArrayOfObjects};
