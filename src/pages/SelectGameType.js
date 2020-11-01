import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        marginTop: hp('15%'),
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    textTitle : {
        fontSize : wp('10%'),
        color: '#4280ff',
        fontWeight: 'bold'
    },
    buttonStyle : {
        marginTop: hp('5%'),
        backgroundColor: '#4280ff',
        padding: wp('10%'),
        borderRadius : wp('10%'),
    },
    buttonStyle2 : {
        marginTop: hp('5%'),
        backgroundColor: '#4280ff',
        padding: wp('10%'),
        borderRadius : wp('10%'),
    },
    buttonText : {
        fontSize: wp('10%'),
    }
});
