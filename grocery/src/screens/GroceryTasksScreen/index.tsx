import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addItemToGrocery, editGrocery} from '@Redux/services/grocery';
import {RouteProp} from '@react-navigation/native';
import {
  AppNavigationType,
  AppParams,
  AppParamsList,
} from '@Navigation/interface';
import {
  CustomButton,
  CustomInput,
  CustomPicker,
  ScreenLayout,
} from '@Shared/ui';
import {PriorityType, SelectItem, StatusType} from '@Shared/types';
import {priorityListItems, statusListItems} from '@Shared/data';

interface GroceryTaskProps {
  route: RouteProp<AppParamsList, AppParams.GroceryTask>;
  navigation: AppNavigationType;
}

export const GroceryTasksScreen: React.FC<GroceryTaskProps> = ({
  route,
  navigation,
}) => {
  const {data} = route.params;
  const dispatch = useDispatch();

  const statusList = statusListItems.find(list => list.value === data?.status);

  const priorityList = priorityListItems.find(
    list => list.value === data?.priority,
  );

  const [selectStatus, setSelectStatus] = useState<SelectItem | undefined>(
    statusList || undefined,
  );
  const [selectPriority, setSelectPriority] = useState<SelectItem | undefined>(
    priorityList || undefined,
  );

  const [title, setTitle] = useState(data?.title || '');

  const isStatusChanged = Boolean(data?.status !== selectStatus?.value);

  const handlePress = () => {
    if (data) {
      dispatch(
        editGrocery({
          list: {
            ...data,
            title: title,
            status: selectStatus?.value as StatusType,
            priority: selectPriority?.value as PriorityType,
          },
          isStatusChanged,
        }),
      );
    } else {
      dispatch(
        addItemToGrocery({
          id: Date.now().toString(),
          title,
          status: selectStatus?.value as StatusType,
          priority: selectPriority?.value as PriorityType,
          history: [],
        }),
      );
    }
    navigation.goBack();
  };

  return (
    <ScreenLayout>
      <CustomInput placeholder="title" value={title} onChangeText={setTitle} />
      <CustomPicker
        placeholder="Status"
        items={statusListItems}
        selectedItem={selectStatus}
        setSelectedItem={setSelectStatus}
      />
      <CustomPicker
        placeholder="Priority"
        items={priorityListItems}
        selectedItem={selectPriority}
        setSelectedItem={setSelectPriority}
      />
      <CustomButton title={data ? 'Edit' : 'Create'} onPress={handlePress} />
    </ScreenLayout>
  );
};
