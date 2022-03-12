import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {useNavigation} from '@react-navigation/core';
import {AppNavigationType} from '@Navigation/interface';

import {styles} from './style';

export const Header = () => {
  const navigation = useNavigation<AppNavigationType>();

  const onNavigate = () => navigation.goBack();

  return (
    <TouchableOpacity style={styles.container} onPress={onNavigate}>
      <Icon name={'arrowleft'} size={25} style={styles.icon} />
    </TouchableOpacity>
  );
};
