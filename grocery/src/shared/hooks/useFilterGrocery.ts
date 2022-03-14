import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {changeStatus, filterGrocery} from '@Redux/services/grocery';
import {FilterType, GroceryList} from '@Shared/types';

export const useFilterGrocery = () => {
  const [isChangedStatus, setIsChangedStatus] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<FilterType>();

  const dispatch = useDispatch();

  const onChangeBadgeStatus = (item: GroceryList) => {
    dispatch(changeStatus(item));
    setIsChangedStatus(true);
  };

  const onFilterGroceries = (status: FilterType) => {
    dispatch(filterGrocery(status));
    setCurrentStatus(status);
    setIsChangedStatus(false);
  };

  useEffect(() => {
    setTimeout(() => {
      currentStatus && isChangedStatus && onFilterGroceries(currentStatus);
    }, 500);
    console.log(currentStatus, 'currentStatus in useEffect');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStatus, isChangedStatus]);

  return {onChangeBadgeStatus, onFilterGroceries};
};
