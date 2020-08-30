import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";

import HomeScreen from "./src/pages/HomeScreen";
import SelectGameType from "./src/pages/SelectGameType";
import GameField from "./src/pages/GameField";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="SelectGame"
                    component={SelectGameType}
                />
                <Stack.Screen
                    name="GameField"
                    component={GameField}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
