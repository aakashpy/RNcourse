import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      {/* .bind is used to send parameters back to parent component where func resides with first arg 'this' */}
      <Pressable onPress={props.deleteGoalHandler.bind(this, props.id)} android_ripple={{color:'#210644'}}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
