import {StatusType} from '@Shared/types';

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

export {getStatusValue, getStatus};
