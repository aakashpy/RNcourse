import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, View,Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible,setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler=()=>{
    setModalIsVisible(true)
  }
  const endAddGoalHandler=()=>{
    setModalIsVisible(false)
  }
  const addGoalHandler = (enteredGoalText) => {
    // setCourseGoals((courseGoals) => [...courseGoals, enteredGoalText]);
    setCourseGoals((courseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false)
  };
  const deleteGoalHandler = (id) => {
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal) => goal.id !== id);
    });
  };
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title="Add new Goal" color='#5e0acc' onPress={startAddGoalHandler}/>
      <GoalInput addGoalHandler={addGoalHandler} visible={modalIsVisible} endAddGoalHandler={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        {/* <ScrollView>
          {courseGoals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>  */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                deleteGoalHandler={deleteGoalHandler}
              />
            );
          }}
          // keyExtractor={(item,index)=>{return item.key}}
        />
        {/* flat list need keyword 'key' or 'id' in object, if present by other name use keyextractor prop in it */}
      </View>
    </View>
    </>
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
