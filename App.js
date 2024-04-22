import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, SafeAreaView } from "react-native";
import Navigator from "./src/navigation/Navigator.js";
import { useFonts, AtomicAge_400Regular } from "@expo-google-fonts/atomic-age";
import { SpaceMono_700Bold } from "@expo-google-fonts/space-mono";
import { Provider } from "react-redux";
import configureStore from "./src/store/index.js";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    AtomicAge_400Regular,
    SpaceMono_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={configureStore}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
