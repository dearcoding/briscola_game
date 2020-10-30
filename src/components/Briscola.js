import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";

import HomeScreen from "../pages/HomeScreen";
import SelectGameType from "../pages/SelectGameType";
import InsertNameGame from "../pages/InsertNameGame";
import Game from "../pages/Game";


const Stack = createStackNavigator();

export default function Briscola(){
    /*
     * Briscola function is a component function used to create the Briscola game app
     * It contains 4 different component:
     * -HomeScreen: component to render the home of the game
     * -SelectGameType: component to select which type of game to play
     * -InsertNameGame: component used to select the name of Player 
     * -Game: component used to play a game of Briscola
     */
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
                    name="InsertNameGame"
                    component={InsertNameGame}
                />
                <Stack.Screen
                    name="Game"
                    component={Game}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}