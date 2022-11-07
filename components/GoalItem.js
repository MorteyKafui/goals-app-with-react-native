import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = ({ goalData, deleteGoal }) => {
  return (
    <Pressable onPress={deleteGoal.bind(this, goalData.item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.text}>{goalData.item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
    padding: 8,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GoalItem;
