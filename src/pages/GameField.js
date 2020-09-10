import React from 'react';
import { useState , useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Card from "../components/Card";
import axios from "axios";
import CardModel from "../models/CardModel";
import CardModelList from "../models/CardListModel";
import useForceUpdate from 'use-force-update';

export default function GameField({ navigation, route }){
    const { gameId } = route.params;
    let briscola;
    let cardsList;
    let player = [];
    let briscolaNewTmp;
    useEffect(() => newGame(), []);

    const moveCard = (index) => {
        let player = []
        alert(index);
        let i = 1;
        let move = 70;
        cardsList.getList().forEach(function(obj) {
            if((i-1) == index) {
                player.push(
                        <View style={{position: 'absolute',
                            top: 370,
                            left: 150,
                        }}>
                            <TouchableOpacity>
                                <Card nameCard={obj.toString()}></Card>
                            </TouchableOpacity>
                        </View>
                )
            }
            else{
                player.push(
                        <View style={{position: 'absolute',
                                  top: 560,
                                  left: move,
                              }}>
                            <TouchableOpacity>
                                <Card nameCard={obj.toString()}></Card>
                            </TouchableOpacity>
                        </View>
                )
                move += 150;
            }
            i += 1;
        });
        setPlayers(player);
    }
    const [margin_moved, setMoved] = useState(5);
    const newGame = () => {
        axios
            .post('http://192.168.1.26:5000/start_game/' + gameId)
            .then(function(response) {
                briscola = new CardModel(response.data.briscola);
                cardsList = new CardModelList(response.data.cards);
                let i = 0;
                cardsList.getList().forEach(function(obj) {
                    const temp = i;
                    const move = 50 + i * 100;
                    player.push(
                                <View style={{position: 'absolute',
                                    top: 560,
                                    left: move,
                                }}>
                                    <TouchableOpacity myId={temp} onPress={() => moveCard(temp)}>
                                        <Card nameCard={obj.toString()}></Card>
                                    </TouchableOpacity>
                                </View>
                    )
                    i += 1;
                });
                let briscolaName = briscola.toString();
                briscolaNewTmp = (
                    <Card nameCard={briscolaName} style={styles.briscola} position={"absolute"} top={20} left={300}></Card>
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
    const moved_zero = 0;
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
                {players}
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
        left: 50,
        flexWrap : 'wrap',
        alignItems : 'flex-start',
        flexDirection : 'row'
    },
    deck : {
        position: 'absolute',
        top: 250,
        marginLeft: 0
    },
    player : {
        position: 'absolute',
        bottom: 0,
        flexWrap : 'wrap',
        alignItems : 'flex-start',
        flexDirection : 'row'
    }
});
