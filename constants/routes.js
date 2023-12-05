import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../pages/login';

// stack navigators for authentication screens
const Routes = () => {
    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login}/>
            </Tab.Navigator>
        </NavigationContainer>
    ); 
};

export default Routes;