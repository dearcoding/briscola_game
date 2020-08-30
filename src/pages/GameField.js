import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import Card from "../components/Card";

export default class GameField extends Component{
    render(){
        var deck = [];
        var n_cards = 36;
        for (let i = 0; i < n_cards; i++) {
            deck.push(
                <Card key={i} nameCard={"top of deck"} position={"absolute"} top={20} left={1 * i}></Card>
            )
        }
        return (
            <View style={styles.container}>
                <View style={styles.opponent}>
                    <Card nameCard={"LOL"}></Card><Card></Card><Card></Card>
                </View>
                <View style={styles.deck}>
                    {deck}<Card style={styles.briscola} position={"absolute"} top={20} left={220}></Card>
                </View>
                <View style={styles.player}>
                    <Card nameCard={"LOL"}></Card><Card></Card><Card></Card>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
    },
    opponent : {
        position: 'absolute',
        top : 0,
        flexWrap : 'wrap',
        alignItems : 'flex-start',
        flexDirection : 'row'
    },
    deck : {
        position: 'absolute',
        top: 250,
        marginLeft: 15
    },
    player : {
        position: 'absolute',
        bottom: 0,
        flexWrap : 'wrap',
        alignItems : 'flex-start',
        flexDirection : 'row'
    }
});
