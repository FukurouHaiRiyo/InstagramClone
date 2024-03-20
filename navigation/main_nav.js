import { Routes } from "./routes";
import Login from "../screens/Login/login";
import MainPage from "../screens/main_page";
import SignUp from "../screens/SignUp/signup";
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