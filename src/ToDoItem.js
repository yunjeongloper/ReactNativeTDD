import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  default: {
    backgroundColor: 'white',
  },
  completed: {
    backgroundColor: 'yellow',
  },
});

const ToDoItem = ({item, index, onCompleted, onDeleted}) => {
  return (
    <View style={item.completed ? styles.completed : styles.default}>
      <Text testID={item.completed ? 'completed' : 'uncompleted'}>
        {item.text}
      </Text>
      <Button
        testID="completeButton"
        title="Complete"
        onPress={() => onCompleted(index)}
      />
      <Button
        testID="deleteButton"
        title="Delete"
        onPress={() => onDeleted(index)}
      />
    </View>
  );
};

export default ToDoItem;
