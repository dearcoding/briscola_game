import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {newGame} from '../controller/InsertNameGameController'

export default function InsertNameGame({ navigation }) {
    /*
     * InsertNameGame is the component used to render the choice of the name of Player
     */
    const [text, setText] = useState('');

    async function handleGame(){
        const game_id = await newGame(text)
        alert(game_id)
        navigation.navigate('Game', { gameId: game_id })
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                placeholder="Type here your name"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <TouchableOpacity style={styles.buttonStyle2}
                              onPress={handleGame}>
                <Text style={styles.buttonText}>Start game</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: hp('15%'),
    },
    textTitle : {
        fontSize : wp('4%'),
        color: '#4280ff',
        fontWeight: 'bold'
    },
    inputStyle : {
        fontSize : wp('8%'),
        marginTop: hp('10%'),
    },
    buttonStyle2 : {
        marginTop: hp('10%'),
        backgroundColor: '#4280ff',
        padding: wp('10%'),
        borderRadius : wp('10%'),
    },
    buttonText : {
        fontSize: wp('10%'),
    }

});
