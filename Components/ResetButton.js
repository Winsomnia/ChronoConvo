import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Colors from "./Colors";
import { Circle } from "react-native-shape";

const ResetButtonComponent = ({onButtonPress}) => {
  return (
    <View style={{ position: "absolute", top: 60, left: 305, zIndex: 1, transform: [{ scale: 0.65 }] }}>
        <TouchableOpacity onPress={onButtonPress}>
      <Circle
        style={{ position: "absolute", zIndex: 1 }}
        color={Colors.Yellow}
        scale={0.9}
      />
      <Image style={{width: 50, height: 50, position: "absolute", zIndex: 1, tintColor: Colors.DarkBlue}} source={require('../assets/reload.png')}/>
      </TouchableOpacity>
    </View>
  );
};

export default ResetButtonComponent;
