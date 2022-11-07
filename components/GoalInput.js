import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';
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
        <TextInput
          value={text}
          onChangeText={goalHandler}
          style={styles.textInput}
          placeholder='Your course goal'
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title='Add Goal' onPress={handleAdd} />
          </View>
          <View style={styles.btn}>
            <Button title='Cancel' onPress={closeModal} />
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
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 8,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  btn: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
