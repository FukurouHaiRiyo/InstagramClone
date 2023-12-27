import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import SignUp from '../screens/signup';
import Login from '../screens/login';

// stack navigators for authentication screens
const Routes = () => {
    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login}/>
                <Tab.Screen name='SignUp' component={SignUp}/>
            </Tab.Navigator>
        </NavigationContainer>
    ); 
};

export default Routes;