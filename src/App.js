/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

const App: () => React$Node = () => {
  const [items, setItems] = useState([]);

  const onAdded = text => {
    setItems([...items, {text, completed: false}]);
  };

  const onCompleted = index => {
    setItems([
      ...items.map((item, i) => {
        if (index !== i) {
          return item;
        }
        return {
          ...item,
          completed: !item.completed,
        };
      }),
    ]);
  };

  const onDeleted = index => {
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  };

  return (
    <SafeAreaView testID="welcome" style={styles.container}>
      <Text style={styles.title}>TDD ToDo</Text>
      <AddToDo onAdded={onAdded} />
      <ToDoList items={items} onCompleted={onCompleted} onDeleted={onDeleted} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 21,
    fontWeight: 'bold',
  },
});

export default App;
