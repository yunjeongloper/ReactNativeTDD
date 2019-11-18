/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {Text, SafeAreaView} from 'react-native';
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
    <SafeAreaView testID="welcome">
      <Text>TDD ToDo</Text>
      <AddToDo onAdded={onAdded} />
      <ToDoList items={items} onCompleted={onCompleted} onDeleted={onDeleted} />
    </SafeAreaView>
  );
};

export default App;
