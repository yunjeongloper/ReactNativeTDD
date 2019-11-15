import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const AddToDo = ({onAdded}) => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput onChangeText={value => setText(value)} />
      <Button onPress={() => onAdded(text)} />
    </View>
  );
};

export default AddToDo;
