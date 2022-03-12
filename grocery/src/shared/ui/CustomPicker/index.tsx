import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import {SelectItem} from '@Shared/types';
import {PickerItem} from './PickerItem';
import {COLORS} from '@Shared/styles';

interface CustomPickerProps {
  items: SelectItem[];
  selectedItem?: SelectItem;
  setSelectedItem: (item: SelectItem) => void;
  placeholder: string;
}

export const CustomPicker: React.FC<CustomPickerProps> = ({
  items,
  selectedItem,
  setSelectedItem,
  placeholder,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <Icon name="list" size={24} color="gray" />
          <Text style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <Icon name="chevron-down" size={24} color="gray" />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList
            style={styles.listContainer}
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                color={item.color}
                onPress={() => {
                  setModalVisible(false);
                  setSelectedItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginLeft: 5,
    backgroundColor: COLORS.lightGrey,
    height: 50,
    borderRadius: 25,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    flex: 1,
    marginLeft: 10,
  },
  modalContainer: {
    marginTop: 30,
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
});
