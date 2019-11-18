import React from 'react';
import {FlatList} from 'react-native';
import ToDoItem from './ToDoItem';

const ToDoList = ({items, onCompleted, onDeleted}) => {
  const renderItem = ({item, index}) => {
    return (
      <ToDoItem
        item={item}
        index={index}
        onCompleted={onCompleted}
        onDeleted={onDeleted}
      />
    );
  };

  const keyExtractor = (item, index) => {
    return index.toString();
  };

  return (
    <FlatList
      testID="toDoList"
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      extraData={this.state}
    />
  );
};

export default ToDoList;
