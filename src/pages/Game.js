import React from 'react';
import { useState , useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Card from "../components/Card";
import axios from "axios";
import CardModel from "../models/CardModel";
import CardModelList from "../models/CardListModel";
import {startGame} from "../api/api";
import useForceUpdate from 'use-force-update';
import { BriscolaCard, Deck, OpponentCard, PlayerCard } from '../components/initializeGame';

export default function Game({ navigation, route }){
    /*
     * Game component used to render a Briscola game
     */
    const { gameId } = route.params;
    let briscola;
    let cardsList;
    let player = [];
    let briscolaNewTmp;
    
    useEffect(function () {
            return startGame(gameId);
        }, []);

    function moveCard(index) {
        let player = [];
        alert(index);
        let i = 1;
        let move = 70;
        cardsList.getList().forEach(function (obj) {
            if ((i - 1) == index) {
                player.push(
                    <View style={{
                        position: 'absolute',
                        top: 370,
                        left: 150,
                    }}>
                        <TouchableOpacity>
                            <Card nameCard={obj.toString()}></Card>
                        </TouchableOpacity>
                    </View>
                );
            }
            else {
                player.push(
                    <View style={{
                        position: 'absolute',
                        top: 560,
                        left: move,
                    }}>
                        <TouchableOpacity>
                            <Card nameCard={obj.toString()}></Card>
                        </TouchableOpacity>
                    </View>
                );
                move += 150;
            }
            i += 1;
        });
        setPlayers(player);
    }
    const [margin_moved, setMoved] = useState(5);
    
    
    const cardList = (<Card nameCard={"Covered"}></Card>);
    const [players, setPlayers] = useState(cardList);
    const moved_zero = 0;
    const briscolaNew = (<Card></Card>);
    const [briscola_card, setBriscola] = useState(briscolaNew);
    
    return (
        <View style={styles.container}>
            <View style={styles.opponent}>
                {OpponentCard()}
                <Card nameCard={"Covered"}></Card><Card nameCard={"Covered"}></Card><Card nameCard={"Covered"}></Card>
            </View>
            <View style={styles.deck}>
                {Deck()}{BriscolaCard()}
            </View>
                {PlayerCard()}
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
