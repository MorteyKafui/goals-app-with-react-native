import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = ({ goalData, deleteGoal }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={deleteGoal.bind(this, goalData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.text}>{goalData.item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
  },
});

export default GoalItem;
