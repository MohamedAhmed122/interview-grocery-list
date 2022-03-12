import {HistoryList} from '@Shared/types';
import {getStatus} from '@Shared/utils';
import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

interface HistoryProps {
  data: HistoryList;
  title: string;
}

export const History: React.FC<HistoryProps> = ({data, title}) => {
  const {oldStatus, newStatus} = getStatus(data.oldStatus);

  const date = new Date(data.date).toLocaleDateString('en-US');

  return (
    <>
      <View style={styles.row}>
        <View style={styles.point} />
        <Text style={styles.text}>
          {title} changed from {oldStatus} to {newStatus}
        </Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </>
  );
};
