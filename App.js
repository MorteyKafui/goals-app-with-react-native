import { useState } from 'react';
import { Button, FlatList, StatusBar, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const addGoal = text => {
    // setGoals(currentGoals => [...currentGoals, text]);
    setGoals(currentGoals => [
      ...currentGoals,
      { text: text, id: Math.random().toString() },
    ]);
    closeModal();
  };

  const deleteGoal = id => {
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== id));
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Button title='Add New Goal' color='#5e08cc' onPress={showModal} />
        {modal && (
          <GoalInput show={modal} addGoal={addGoal} closeModal={closeModal} />
        )}
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },

  goalsContainer: {
    flex: 5,
  },
});
