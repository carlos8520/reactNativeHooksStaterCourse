import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "orange",
    height: 200,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"
    
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "red"
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "lightgreen",
    marginTop: 50
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple"
  }
});

export default BoxScreen;
