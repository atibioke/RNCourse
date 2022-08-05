import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalsHandler(text) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { goal: text, key: new Date().getTime().toLocaleString() },
    ]);
  }

function deleteGoalHandler(){
  console.log("delete");
}

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalsHandler} />
      <View style={styles.goalsContainer}>
        {/* FlatList is used when a list is very long but ScrollView is used when it's not long*/}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.goal} onDeleteItem={deleteGoalHandler}/>;
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
