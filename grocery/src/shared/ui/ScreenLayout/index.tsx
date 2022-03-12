import React from 'react';

import {SafeAreaView, ScrollView, ScrollViewProps} from 'react-native';
import {SafeAreaViewProps} from 'react-native-safe-area-context';
import {styles} from './style';

export interface ScreenProps {
  scroll?: boolean;

  scrollLayout?: ScrollViewProps;
  viewLayout?: SafeAreaViewProps;
}
//  Authorization
export const ScreenLayout: React.FC<ScreenProps> = ({
  children,
  scrollLayout: {...scrollLayoutProps} = {},
  viewLayout: {...viewLayoutProps} = {},
  scroll,
}) => {
  if (scroll) {
    return (
      <ScrollView style={styles.scrollScreen} {...scrollLayoutProps}>
        {children}
      </ScrollView>
    );
  } else {
    return (
      <SafeAreaView style={styles.screen} {...viewLayoutProps}>
        {children}
      </SafeAreaView>
    );
  }
};
