import React from 'react';
import { useState , useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import Card from "../components/Card";
import axios from "axios";
import CardModel from "../models/CardModel";
import CardModelList from "../models/CardListModel";


export default function GameField({ navigation, route }){
    const { gameId } = route.params;
    let briscola;
    let cardsList;
    let player = [];
    let briscolaNewTmp;
    useEffect(() => newGame(), []);

    const newGame = () => {
        axios
            .post('http://192.168.1.26:5000/start_game/' + gameId)
            .then(function(response) {
                briscola = new CardModel(response.data.briscola);
                cardsList = new CardModelList(response.data.cards);
                cardsList.getList().forEach(function(obj) {
                    player.push(
                        <Card nameCard={obj.toString()}></Card>
                    )
                });
                let briscolaName = briscola.toString();
                briscolaNewTmp = (
                    <Card nameCard={briscolaName} style={styles.briscola} position={"absolute"} top={20} left={220}></Card>
                )
                setPlayers(player);
                setBriscola(briscolaNewTmp);
            })
            .catch(function(error) {
                alert(error.message);
            })
    };
    const cardList = (<Card nameCard={"Covered"}></Card>);
    const [players, setPlayers] = useState(cardList);
    const briscolaNew = (<Card></Card>);
    const [briscola_card, setBriscola] = useState(briscolaNew);
    let deck = [];
    let n_cards = 36;
    for (let i = 0; i < n_cards; i++) {
        deck.push(
            <Card key={i} nameCard={"Covered"} position={"absolute"} top={20} left={1 * i}></Card>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.opponent}>
                <Card nameCard={"Covered"}></Card><Card nameCard={"Covered"}></Card><Card nameCard={"Covered"}></Card>
            </View>
            <View style={styles.deck}>
                {deck}{briscola_card}
            </View>
            <View style={styles.player}>
                {players}
            </View>
        </View>
    );
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
