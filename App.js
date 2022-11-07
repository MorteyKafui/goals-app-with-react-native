import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = text => {
    // setGoals(currentGoals => [...currentGoals, text]);
    setGoals(currentGoals => [
      ...currentGoals,
      { text: text, id: Math.random().toString() },
    ]);
  };

  const deleteGoal = id => {
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== id));
  };

  return (
    <View style={styles.container}>
      <GoalInput addGoal={addGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={goalData => {
            return <GoalItem goalData={goalData} deleteGoal={deleteGoal} />;
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
