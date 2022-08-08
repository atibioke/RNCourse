import { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal } from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={getInputHandler}
          value={text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal!" onPress={addGoalsHandler} />
          </View>

          <View style={styles.button}>
            <Button title="Cancel" onPress={addGoalsHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: "center",
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
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "40%",
    margin: 8,
  },
});
