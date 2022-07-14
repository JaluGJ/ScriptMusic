import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./src/redux/store.js";
import AppWrapped from "./AppWrapped";


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppWrapped />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
