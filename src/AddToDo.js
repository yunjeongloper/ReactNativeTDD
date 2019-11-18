import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const AddToDo = ({onAdded}) => {
  const [text, setText] = useState('');

  const handleAdded = () => {
    onAdded(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        testID="textInput"
        value={text}
        onChangeText={value => setText(value)}
      />
      <Button testID="addButton" title="Add" onPress={handleAdded} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    height: 40,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 20,
  },
});

export default AddToDo;
