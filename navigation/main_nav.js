import { Routes } from "./routes";
import Login from "../screens/login";
import MainPage from "../screens/main_page";
import SignUp from "../screens/signup";
import Dashboard from "../screens/Dashboard/dashboard";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={Routes.Login} screenOptions={{header: () => null, headerShown: false}}>
            <Stack.Screen name={Routes.Login} component={Login}/>
            <Stack.Screen name={Routes.MainPage} component={MainPage}/>
            <Stack.Screen name={Routes.SignUp} component={SignUp}/>
        </Stack.Navigator>
    )
}

export default MainNavigation;