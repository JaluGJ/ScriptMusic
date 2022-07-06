import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'react-native-gesture-handler';
import AuthStack from "./src/Wrappers/AuthStack";
import AppStack from "./src/Wrappers/AppStack";
import { Provider } from 'react-redux';
import store from './src/redux/store.js';


export default function App() {
  return (
    <Provider store={store}>

      <SafeAreaProvider>
        <NavigationContainer >
          {/* <AuthStack/> */}
          <AppStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

