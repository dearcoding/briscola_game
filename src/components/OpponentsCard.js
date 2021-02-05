import {StyleSheet, View, Text} from "react-native";
import React, { Component } from 'react';
import Card from "../components/Card";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class OpponentsCard extends Component {
    render() {
        let {numberOfCards} = this.props;

        let cards = [];

        for(let i=0; i<numberOfCards; i++){
            cards.push(
                (<Card key={i} nameCard={"Covered"}/>)
            );
        }

        return(
            <View style={styles.mainView}>
                <Text style={styles.textDesc}>Opponent's Cards</Text>
                <View style={styles.opponent}>
                    {cards}
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    opponent: {
        position: 'relative',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    mainView:{
        left: wp('20%')
    },
    textDesc: {
        fontFamily : "Cochin",
        fontSize: wp('4%'),
        fontWeight: "bold",
    },
});
