import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text style={styles.textStyle2}>I'm a text screen y'all</Text>
      <Text style={styles.textStyle3}>Yeehaw</Text>
      <Text>Enter password y'all</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {password.length < 4 ? <Text>At least 4 char</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle2: {
    fontSize: 50,
    color: "lightblue"
  },
  textStyle3: {
    fontSize: 35,
    fontStyle: "italic",
    color: "lightgreen",
    marginVertical: 15
  },
  textStyle: {
    fontSize: 45,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "orange",
    marginVertical: 15
  },
  input: {
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
