/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

const App: () => React$Node = () => {
  return (
    <View testID="welcome">
      <Text>TDD ToDo</Text>
      <AddToDo />
      <ToDoList />
    </View>
  );
};

export default App;
