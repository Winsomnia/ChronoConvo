import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import Home from "./Screens/Home.js";
import FontLoader from "./Components/FontLoader.js";
import Colors from "./Components/Colors.js";

export default function App() {
  return (
    <FontLoader>
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </FontLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DarkBlue,
    alignItems: "center",
  },
});
