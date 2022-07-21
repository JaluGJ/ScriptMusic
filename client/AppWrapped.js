import AuthStack from "./src/Wrappers/AuthStack";
import AppStack from "./src/Wrappers/AppStack";
import { ActivityIndicator, View } from "react-native";
import useLogin from "./src/customHooks/useLogin";

export default function AppWrapped() {
  const [token, isLoading] = useLogin()

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{token !== null ? <AppStack /> : <AuthStack />}</>;
}
