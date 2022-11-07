import { View, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';

const GoalInput = ({ addGoal }) => {
  const [text, setText] = useState('');

  const goalHandler = enteredText => {
    setText(enteredText);
  };

  const handleAdd = () => {
    addGoal(text);
    setText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={text}
        onChangeText={goalHandler}
        style={styles.textInput}
        placeholder='Your course goal'
      />
      <Button title='Add Goal' onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
