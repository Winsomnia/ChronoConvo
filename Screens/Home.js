import React, { useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import ConverseAI from "../OpenAI/OpenAITextGen";
import ImagineAI from "../OpenAI/OpenAIImageGen";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  NativeModules,
} from "react-native";
import GlowButton from "../Components/GlowButton";
import CustomTextInput from "../Components/CustomTextInput";
import ShadowBox from "../Components/ShadowBox";
import ResetButtonComponent from "../Components/ResetButton";

import Colors from "../Components/Colors";

const styles = StyleSheet.create({
  StylisticFont: {
    color: Colors.Yellow,
    fontFamily: "Kage",
    fontSize: 55,
  },
  Container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  AiImageStyle: {
    width: 150,
    height: 150,
    top: 525,
    left: 100,
    borderRadius: 85,
    position: "absolute",
    zIndex: 1,
  },
});

const Home = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPortraitTime, setIsPortraitTime] = useState(false);
  const [placeHolderString, setPlaceHolderString] = useState(
    "Enter your Historical Figure here..."
  );

  const handleInputChange = (text) => {
    setPrompt(text);
  };

  const handleSubmit = async () => {
    // prompt AI API
    setIsLoading(true); // Start loading
    setResponse(""); // remove previous response when loading
    try {
      const aiResponse = await ConverseAI(prompt.toString());
      const aiImage = await ImagineAI(prompt.toString());
      console.log("image link: " + aiImage);
      setResponse(aiResponse.message.content);
      setImgURL(aiImage);
    } finally {
      setIsLoading(false);
      setIsPortraitTime(true);
      //reset TextInput
      setPrompt("");
      setPlaceHolderString("Enter your response here...");
    }
  };

  const HandleResetButton = () => {
    NativeModules.DevSettings.reload();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.Container}>
        <Text style={styles.StylisticFont}>Chrono Convo's</Text>
        <CustomTextInput
          rootValue={prompt}
          rootOnChangeText={handleInputChange}
          PlaceholderText={placeHolderString}
        />

        {isLoading && (
          <ActivityIndicator
            style={{ position: "absolute", top: 0, bottom: 0, zIndex: 1 }}
            color={Colors.Yellow}
            size={"large"}
          />
        )}
        {isPortraitTime && (
          <Image style={styles.AiImageStyle} source={{ uri: imgURL }} />
        )}

        <ShadowBox ShadowBoxText={response} />
        <GlowButton onButtonPress={handleSubmit} title={"Converse"} />
        <ResetButtonComponent onButtonPress={HandleResetButton} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
