import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);
  console.log(courseGoals)


  function addGoalsHandler(text) {
  if(text !== ""){
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { goal: text, key: new Date().getTime().toLocaleString() },
    ]);
  }
  }

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }


  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal"  color="#5e0acc" onPress={startAddGoalHandler}/>
      <GoalInput onAddGoal={addGoalsHandler} visible={modalIsVisible}/>
      <View style={styles.goalsContainer}>
        {/* FlatList is used when a list is very long but ScrollView is used when it's not long*/}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.goal}
                id={itemData.item.key}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
