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
  keyToSort1: keyof T,
  keyToSort2: keyof T,
) => {
  const compare = (objectA: T, objectB: T) => {
    const valueA = objectA[keyToSort1]; // PA
    const valueB = objectB[keyToSort1]; // PB
    const valueC = objectA[keyToSort2]; // TA
    const valueD = objectB[keyToSort2]; // TB

    if (valueA === valueB) {
      if (valueC > valueD) {
        return 1;
      } else {
        return -1;
      }
    } else if (valueA > valueB) {
      return 1;
    } else {
      return -1;
    }
  };

  return data.slice().sort(compare);
};

export {getStatusValue, getStatus, sortArrayOfObjects};
