import { StyleSheet, Text, View, Button, TextInput  } from "react-native";


export default function App() {
  return (
    <View style={styles.appContainer}>
     <View style={styles.innerContainer}>
      <TextInput style={styles.textInput} placeholder="Your course goal!"/>
      <Button title="Add Goal!"/>
     </View>
     <View>
      <Text style={styles.goalsContainer}>
        List of goals...
      </Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  innerContainer:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom : 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc" 
   
  },
  textInput:{
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8
   
  },
  goalsContainer:{
    flex:4
  }

});
