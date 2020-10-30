import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";

import Briscola from "./src/components/Briscola";
import HomeScreen from "./src/pages/HomeScreen";
import SelectGameType from "./src/pages/SelectGameType";
import InsertNameGame from "./src/pages/InsertNameGame";
import GameField from "./src/pages/Game";


export default function App(){
    /*
     * Function that initialize our app 
     * Use Briscola component to represent everything
     */
    return (
        <Briscola styles={{flex: 1, width: 100+"%", height: 100+"%"}}/>
    );
};
