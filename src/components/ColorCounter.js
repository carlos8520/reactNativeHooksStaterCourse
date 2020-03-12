import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>Dis {color} color y'all</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color} y'all`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color} y'all`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
