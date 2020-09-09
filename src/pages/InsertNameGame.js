import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import axios from 'axios';



export default function InsertNameGame({ navigation }) {
    const [text, setText] = useState('');
    const newGame = () => {
        axios
            .get('http://192.168.1.26:5000/new_game/' + text)
            .then(function(response) {
                const gameIdData = response.data.game_id
                navigation.navigate('GameField', {
                    gameId : gameIdData
                });
            })
            .catch(function(error) {
                alert(error.message + text);
            })
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                placeholder="Type here your player name"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <TouchableOpacity style={styles.buttonStyle2}
                              onPress={newGame}>
                <Text style={styles.buttonText}>Start game</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 150
    },
    textTitle : {
        fontSize : 50,
        color: '#4280ff',
        fontWeight: 'bold'
    },
    inputStyle : {
        fontSize : 30,
        marginTop: 50,
    },
    buttonStyle : {
        marginTop: 100,
        backgroundColor: '#4280ff',
        padding: 30,
        borderRadius : 30
    },
    buttonStyle2 : {
        marginTop: 50,
        backgroundColor: '#4280ff',
        padding: 30,
        borderRadius : 30
    },
    buttonText : {
        fontSize: 35
    }

});
