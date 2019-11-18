import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const AddToDo = ({onAdded}) => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput testID="textInput" onChangeText={value => setText(value)} />
      <Button testID="addButton" title="Add" onPress={() => onAdded(text)} />
    </View>
  );
};

export default AddToDo;
