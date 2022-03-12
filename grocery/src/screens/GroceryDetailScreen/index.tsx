/* eslint-disable curly */
import React from 'react';
import {ScreenLayout} from '@Shared/ui';
import {FlatList, ListRenderItem, View} from 'react-native';

import {RouteProp} from '@react-navigation/native';
import {
  AppNavigationType,
  AppParams,
  AppParamsList,
} from '@Navigation/interface';
import {HistoryList} from '@Shared/types';

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@Redux/rootReducer';
import {changeStatus, deleteItemFromList} from '@Redux/services/grocery';

import {GroceryDetailFooter, History, GroceryDetailHeader} from './components';
import {styles} from './style';

interface GroceryDetailProps {
  navigation: AppNavigationType;
  route: RouteProp<AppParamsList, AppParams.GroceryDetails>;
}

export const GroceryDetailScreen: React.FC<GroceryDetailProps> = ({
  navigation,
  route,
}) => {
  const id = route.params.id;
  const {groceryList} = useSelector((state: RootState) => state.grocery);
  const details = groceryList.find(list => list.id === id);

  const dispatch = useDispatch();

  if (!details) return null;

  const onGroceryDelete = () => {
    dispatch(deleteItemFromList(details.id));
    navigation.goBack();
  };

  const onGroceryEdit = () => {
    navigation.navigate(AppParams.GroceryTask, {data: details});
  };

  const onToggleStatus = () => {
    console.log('HERE');
    dispatch(changeStatus(details));
  };

  const renderItem: ListRenderItem<HistoryList> = ({item}) => {
    return <History data={item} title={details.title} />;
  };

  return (
    <ScreenLayout>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <GroceryDetailHeader
              title={details.title}
              priority={details.priority}
              status={details.status}
              onToggleStatus={onToggleStatus}
            />
          }
          data={details.history}
          renderItem={renderItem}
          keyExtractor={key => String(key.date)}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <GroceryDetailFooter
              onPressDelete={onGroceryDelete}
              onPressEdit={onGroceryEdit}
            />
          }
        />
      </View>
    </ScreenLayout>
  );
};
