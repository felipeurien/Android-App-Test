import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>Hello World!</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 31,
  },
});

export default HomeScreen;
