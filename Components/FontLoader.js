import { useFonts } from "expo-font";

const FontLoader = ({ children }) => {
  let [fontsLoaded] = useFonts({
    Inter: require("../assets/Fonts/Inter.ttf"),
    Kage: require("../assets/Fonts/Kage.otf"),
  });

  if (!fontsLoaded) {
    return null; // Or a loading indicator
  }

  return <>{children}</>; // Render children after fonts are loaded
};

export default FontLoader;
