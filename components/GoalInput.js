import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native';
import { useState } from 'react';

const GoalInput = ({ addGoal, show, closeModal }) => {
  const [text, setText] = useState('');

  const goalHandler = enteredText => {
    setText(enteredText);
  };

  const handleAdd = () => {
    addGoal(text);
    setText('');
  };

  return (
    <Modal visible={show} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/goal.png')} style={styles.image} />
        <TextInput
          value={text}
          onChangeText={goalHandler}
          style={styles.textInput}
          placeholder='Your course goal'
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title='Add Goal' onPress={handleAdd} color='#5e0acc' />
          </View>
          <View style={styles.btn}>
            <Button title='Cancel' onPress={closeModal} color='#f31282' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: '#ccc',
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 8,
    width: '100%',
    padding: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  btn: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
