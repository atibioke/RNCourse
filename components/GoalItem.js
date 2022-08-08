import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalStyle}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#ffffff",
  },

  pressedItem:{
    opacity: 0.5,
  },
  goalStyle: {
    padding: 8,
    color: "#ffffff",
  },
});
