import AuthStack from "./src/Wrappers/AuthStack";
import AppStack from "./src/Wrappers/AppStack";
import useLogin from "./src/customHooks/useLogin";
import Loading from "./src/components/Loading";

export default function AppWrapped() {
  const [token, isLoading] = useLogin()

  return <>{ isLoading ? <Loading/> : token !== null ? <AppStack /> : <AuthStack />}</>;
}
