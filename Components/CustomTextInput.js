import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import Colors from "./Colors";

const styles = StyleSheet.create({
  textInput: {
    fontFamily: "Inter", // Ensure the font is added to your project
    fontSize: 14,
    borderBottomWidth: 2,
    borderBottomColor: Colors.White,
    backgroundColor: Colors.DarkBlueD1,
    paddingHorizontal: 16,
    color: Colors.Gray,
    width: "100%",
    height: 40,
  },
  textInputFocused: {
    borderBottomColor: Colors.Yellow,
  },
});

const CustomTextInput = ({ PlaceholderText, rootOnChangeText, rootValue }) => {
  const [isFocused, setFocused] = useState(false); // State for managing focus

  return (
    <View style={{ width: 350 }}>
      <TextInput
        style={[styles.textInput, isFocused && styles.textInputFocused]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        selectionColor={Colors.Yellow}
        placeholder={PlaceholderText}
        placeholderTextColor={Colors.DarkGrayD11}
        onChangeText={rootOnChangeText}
        value={rootValue}
      />
    </View>
  );
};

export default CustomTextInput;
