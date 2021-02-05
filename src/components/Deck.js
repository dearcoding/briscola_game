import {StyleSheet, Text, View} from "react-native";
import React, { Component } from 'react';
import Card from "../components/Card";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Deck extends Component {
    render() {
        let {numberOfCardsDeck} = this.props;

        let cards = [];

        for(let i=0; i<numberOfCardsDeck; i++){
            cards.push(
                (<Card key={i} position={"absolute"} left={ wp((0.2*i).toString() + "%")} nameCard={"Covered"}/>)
            );
        }

        return(
            <View style={styles.mainView}>
                <Text style={styles.textDesc}>Deck</Text>
                <View style={styles.deck}>
                    {cards}
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    deck: {
        position: 'relative',
    },
    mainView:{
        left: wp('5%')
    },
    textDesc: {
        fontFamily : "Cochin",
        fontSize: wp('4%'),
        fontWeight: "bold",
    },
});
