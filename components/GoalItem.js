import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem}>


    <View style={styles.goalItems}>
      <Text style={styles.goalStyle}>{props.text}</Text>
    </View>
    </Pressable>
  );
}
export default GoalItem;

const styles = StyleSheet.create({ 
  goalItems: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#ffffff",
  },
  goalStyle: {
    color: "#ffffff",
  },
});
