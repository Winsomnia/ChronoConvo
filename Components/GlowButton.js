import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "./Colors";

const styles = StyleSheet.create({
  button: {
    width: 350,
    paddingHorizontal: 56,
    height: 45,
    borderRadius: 7,
    backgroundColor: Colors.Yellow,
    // React Native doesn't support boxShadow in the same way as CSS
    // You can use elevation for Android, shadow props for iOS
    elevation: 3, // Android
    shadowColor: Colors.Yellow, // iOS
    shadowOffset: { width: 0, height: 4 }, // iOS
    shadowOpacity: 0.39, // iOS
    shadowRadius: 14, // iOS
    alignItems: "center", // to center the text inside the TouchableOpacity
    justifyContent: "center", // to center the text inside the TouchableOpacity
  },
  buttonText: {
    color: Colors.DarkBlue, // Text color
    fontSize: 45,
    fontFamily: "Kage",
    lineHeight: 45,
  },
  // React Native doesn't support :hover, you need to manage hover state with JavaScript
});

const GlowButton = ({ title, onButtonPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onButtonPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GlowButton;
