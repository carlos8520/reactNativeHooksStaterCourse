import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { withOrientation } from "react-navigation";

const ListScreen = () => {
  const frens = [
    { name: "dude 1", age: 30 },
    { name: "dude 2", age: 15 },
    { name: "dude 3", age: 24 },
    { name: "dude 4", age: 19 },
    { name: "dude 5", age: 81 },
    { name: "dude 6", age: 43 },
    { name: "dude 7", age: 18 },
    { name: "dude 8", age: 79 },
    { name: "dude 9", age: 31 }
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={frens}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}> {item.name} - Age {item.age} </Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 25,
    fontSize: 50,
    color: "orange",
    borderColor: "white"
  }
});

export default ListScreen;
