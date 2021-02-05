import {StyleSheet, View, Text} from "react-native";
import React, { Component } from 'react';
import Card from "../components/Card";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class PlayersCard extends Component {
    render() {
        let {cards} = this.props;

        let cards_to_display = [];
        let c = 0;
        cards.forEach(function (i) {
            cards_to_display.push(<Card key={c} nameCard={i.card + i.suit}/>)
            c++;
        })

        return(
            <View style={styles.main}>
                <Text style={styles.textDesc}>Player's Cards</Text>
                <View style={styles.opponent}>
                    {cards_to_display}
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
        flexDirection: 'row',
    },
    textDesc: {
        fontFamily : "Cochin",
        fontSize: wp('4%'),
        fontWeight: "bold",
    },
    main : {
        left : wp('20%'),
    }
});
