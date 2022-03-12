import {Badge, CustomInput, ScreenLayout} from '@Shared/ui';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {AppNavigationType, AppParams} from '@Navigation/interface';
import {Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@Redux/store';
import {increment} from '@Redux/services';

interface GroceryListProps {
  navigation: AppNavigationType;
}

export const GroceryListScreen: React.FC<GroceryListProps> = ({navigation}) => {
  const {count} = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();
  console.log(count, 'count');

  const onNavigateToDetails = () =>
    navigation.navigate(AppParams.GroceryDetails, {id: '10'});

  const onNavigateToTasks = () => navigation.navigate(AppParams.GroceryTask);

  return (
    <ScreenLayout>
      <CustomInput placeholder="Value" />
      <Badge value="Name" />
      <Icon name="camera" />
      <Button title="Navigate to Details" onPress={onNavigateToDetails} />
      <Button title="Navigate to Tasks" onPress={onNavigateToTasks} />
      <Button onPress={() => dispatch(increment())} title="increment" />
    </ScreenLayout>
  );
};
