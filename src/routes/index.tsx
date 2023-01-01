import { NavigationContainer } from "@react-navigation/native";
import { Loading } from "../components/Loading";
import { useAuth } from "../hooks/useAuth";
import { TabRoutes } from "./auth.tab.routes";
import { PublicRoutes } from "./public.routes";

export const Routes = () => {
  const { user, loading } = useAuth();

  return (
    loading ? <Loading /> :
    <NavigationContainer>
      {user.id ? <TabRoutes /> : <PublicRoutes /> }
    </NavigationContainer>
  )
}