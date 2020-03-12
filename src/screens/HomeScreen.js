import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text1}>Howdy y'all :D</Text>
      <Text style={styles.text2}>This a home screen lol</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to components demo y'all"
        style={styles.buttonStyle}
      />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text style={styles.buttonStyle}>Go to list demo y'all</Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to ImageScreen y'all"
        style={styles.buttonStyle}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Counter")}>
        <Text style={styles.buttonStyle}>Go to Counter state demo y'all</Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to ColorScreen y'all"
        style={styles.buttonStyle}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Square")}>
        <Text style={styles.buttonStyle}>Go to square state demo y'all</Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go to TextScreen y'all"
        style={styles.buttonStyle}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Box")}>
        <Text style={styles.buttonStyle}>Go to box screen demo y'all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 50,
    fontWeight: "bold",
    color: "lightgreen",
    borderColor: "green",
    marginVertical: 20
  },
  text2: {
    fontSize: 30,
    fontStyle: "italic",
    color: "orange",
    marginVertical: 20
  },
  buttonStyle: {
    fontSize: 30,
    marginVertical: 15,
    textAlign: "center"
  }
});

export default HomeScreen;
