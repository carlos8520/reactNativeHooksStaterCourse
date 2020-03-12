import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="generate random color y'all"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const grenn = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${grenn},${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
