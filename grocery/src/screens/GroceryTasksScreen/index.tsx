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

  const statusList = status.find(list => list.value === data?.status);
  const priorityList = priorities.find(list => list.value === data?.priority);

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
        items={status}
        selectedItem={selectStatus}
        setSelectedItem={setSelectStatus}
      />
      <CustomPicker
        placeholder="Priority"
        items={priorities}
        selectedItem={selectPriority}
        setSelectedItem={setSelectPriority}
      />
      <CustomButton title={data ? 'Edit' : 'Create'} onPress={handlePress} />
    </ScreenLayout>
  );
};

const status: SelectItem[] = [
  {
    id: '0',
    label: 'Have',
    value: 1,
    color: 'white',
  },
  {
    id: '1',
    label: 'Ran out',
    value: 0,
    color: 'white',
  },
];
const priorities: SelectItem[] = [
  {
    id: '0',
    label: 'Critical',
    value: 1,
    color: 'white',
  },
  {
    id: '1',
    label: 'Very Important',
    value: 2,
    color: 'white',
  },
  {
    id: '2',
    label: 'Important',
    value: 3,
    color: 'white',
  },
  {
    id: '3',
    label: 'Normal',
    value: 4,
    color: 'white',
  },
  {
    id: '4',
    label: 'Low',
    value: 5,
    color: 'white',
  },
];
