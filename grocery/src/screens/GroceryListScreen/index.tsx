import {Badge, CustomInput, ScreenLayout} from '@Shared/ui';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';

interface GroceryListProps {}

export const GroceryListScreen: React.FC<GroceryListProps> = ({}) => {
  return (
    <ScreenLayout>
      <CustomInput placeholder="Value" />
      <Badge value="Name" />
      <Icon name="camera" />
    </ScreenLayout>
  );
};
