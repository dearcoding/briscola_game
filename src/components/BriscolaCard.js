import {StyleSheet, Text, View} from "react-native";
import React, { Component } from 'react';
import Card from "../components/Card";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Deck extends Component {
    render() {
        let {card, suit} = this.props;


        return(
            <View style={styles.main}>
                <Text style={styles.textDesc}>Briscola's Card</Text>
                <Card nameCard={card + suit}/>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    deck: {
        position: 'relative',
    },
    textDesc: {
        fontFamily : "Cochin",
        fontSize: wp('4%'),
        fontWeight: "bold",
    },
    main : {
        left : wp('30%'),
    }
});
