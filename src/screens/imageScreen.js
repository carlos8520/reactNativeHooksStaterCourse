import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/imageDetail";

const imageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        rate="image score - 9"
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        rate="image score - 6"
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        rate="image score - 7"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default imageScreen;

//server chido: 45.35.172.51:25565
