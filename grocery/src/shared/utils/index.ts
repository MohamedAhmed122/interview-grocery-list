import {StatusType} from '@Shared/types';

const getStatusValue = (status: StatusType) =>
  status === 1 ? 'Have' : 'Ran out';

export {getStatusValue};
