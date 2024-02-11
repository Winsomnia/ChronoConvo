import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import Colors from "./Colors";

const styles = StyleSheet.create({
  shadowBox: {
    flex: 1,
    width: 350,
    marginVertical: 20, // Space above and below the box
    backgroundColor: Colors.DarkBlueD1, // Box background color
    borderRadius: 10, // Optional for rounded corners
    padding: 10, // Inner space for content
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // for Android
  },
});

const ShadowBox = ({ ShadowBoxText }) => {
  return (
    <View style={styles.shadowBox}>
      <ScrollView style={{ flexGrow: 1 }}>
        <Text
          style={{
            fontFamily: "Inter", // Ensure the font is added to your project
            fontSize: 14,
            fontWeight: "400",
            lineHeight: 18, // React Native uses unitless line heights, so you might need to adjust this
            letterSpacing: 0.16,
            color: Colors.Gray,
          }}
        >
          {ShadowBoxText}
        </Text>
      </ScrollView>
    </View>
  );
};

export default ShadowBox;
