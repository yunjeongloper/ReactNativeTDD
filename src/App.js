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
    setItems([{text, completed: false}, ...items]);
  };

  const onCompleted = () => {};

  const onDeleted = () => {};

  return (
    <SafeAreaView testID="welcome">
      <Text>TDD ToDo</Text>
      <AddToDo onAdded={onAdded} />
      <ToDoList items={items} onCompleted={onCompleted} onDeleted={onDeleted} />
    </SafeAreaView>
  );
};

export default App;
