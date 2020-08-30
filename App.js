import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";

import HomeScreen from "./src/pages/HomeScreen";
import SelectGameType from "./src/pages/SelectGameType";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home2"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="SelectGame"
                    component={SelectGameType}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
