import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const imageDetail = props => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
      <Text>{props.rate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default imageDetail;
