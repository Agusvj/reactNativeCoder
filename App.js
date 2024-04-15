import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, SafeAreaView } from "react-native";
import Navigator from "./src/navigation/Navigator.js";
import { useFonts, AtomicAge_400Regular } from "@expo-google-fonts/atomic-age";
import { SpaceMono_700Bold } from "@expo-google-fonts/space-mono";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    AtomicAge_400Regular,
    SpaceMono_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Navigator />
    // <SafeAreaView style={styles.container}>
    //   <Navigator />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
