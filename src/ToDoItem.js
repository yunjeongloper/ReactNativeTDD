import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ToDoItem = ({item, index, onCompleted, onDeleted}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        testID="completeButton"
        onPress={() => onCompleted(index)}>
        {item.completed ? (
          <Icon name={'circle-slice-8'} size={30} style={styles.icon} />
        ) : (
          <Icon name={'circle-outline'} size={30} style={styles.icon} />
        )}
      </TouchableOpacity>
      <Text
        style={styles.text}
        testID={item.completed ? 'completed' : 'uncompleted'}>
        {item.text}
      </Text>
      <TouchableOpacity
        activeOpacity={0.5}
        testID="deleteButton"
        onPress={() => onDeleted(index)}>
        <Icon name={'minus'} size={30} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  text: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
    color: 'black',
    width: 30,
    height: 30,
  },
});

export default ToDoItem;
