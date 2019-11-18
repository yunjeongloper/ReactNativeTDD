import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <TouchableOpacity
        activeOpacity={0.5}
        testID="addButton"
        onPress={handleAdded}>
        <Icon name={'plus-circle'} size={30} style={styles.icon} />
      </TouchableOpacity>
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
  icon: {
    marginLeft: 12,
    color: 'black',
    width: 30,
    height: 30,
  },
});

export default AddToDo;
