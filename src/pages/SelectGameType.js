import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';

export default function SelectGameType({ navigation }) {
    /*
     * SelectGameType is the component used to select which modalities of Briscola game between
     * Single player and Multiplayer
     */
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>Select game type</Text>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() =>
                        navigation.navigate('InsertNameGame')
                    }>
                    <Text style={styles.buttonText}>Play vs CPU</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle2}>
                    <Text style={styles.buttonText}>Play vs FRIEND</Text>
                </TouchableOpacity>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 95
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    textTitle : {
        fontSize : 50,
        color: '#4280ff',
        fontWeight: 'bold'
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
