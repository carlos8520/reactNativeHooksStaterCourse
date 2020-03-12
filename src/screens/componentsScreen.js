import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  let greeting = "hi there y'all";
  let reply = "general kenobi y'all";
  let legend = <Text style={styles.textStyle1}>Have you ever heard the tale of darth plagueis the wise?</Text>

  return (
    <View>
      <Text style={styles.textStyle1}>howdy this component y'all</Text>
      <Text style={styles.textStyle3}>y'all suck howdy</Text>
      <Text style={styles.textStyle2}>{greeting}</Text>
      <Text style={styles.textStyle2}>{reply}</Text>
      {legend}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 70,
    color: 'orange'
  },
  textStyle2: {
    fontSize: 50,
    color: 'purple'
  },
  textStyle3: {
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'green'
  }
});

export default ComponentsScreen;
