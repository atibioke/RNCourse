import { useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  const [text, setText] = useState("");

  function getInputHandler(text) {
    setText(text);
  }

  function addGoalsHandler() {
    props.onAddGoal(text);
    setText("");
  }

  return (
    <View style={styles.innerContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={getInputHandler}
        value={text}
      />
      <Button title="Add Goal!" onPress={addGoalsHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
