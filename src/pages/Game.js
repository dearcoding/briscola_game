import React from 'react';
import {useState , useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import {startGame} from "../controller/GameController";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import OpponentsCard from "../components/OpponentsCard";
import Deck from "../components/Deck";

export default function Game({ navigation, route }){
    /*
     * Game component used to render a Briscola game
     */

    const { gameId } = route.params;


    const [state, setState] = useState({
        gameStarted: false,
        data: {},
        numberCardsOpponent : 0,
        numberCardsDeck : 40,
    });

    useEffect(() => {
        const startMyGame = async () => {
            const data = await startGame(gameId);
            setState({
                ...state,
                gameStarted: true,
                data: data,
                numberCardsOpponent : 3,
                numberCardsDeck : 40,
            });
        }
        startMyGame()
    }, [])

    useEffect(() => {
        if(state.gameStarted)
            console.log(state.data.briscola);
    },[state.data])

    return (
            <View style={styles.container}>
                { state.gameStarted ?
                <View>
                    <OpponentsCard style={styles.opponent} numberOfCards = {state.numberCardsOpponent}/>
                    <Deck style={styles.deck} numberOfCardsDeck = {state.numberCardsDeck}/>
                </View> : <ActivityIndicator size="large" />
                }
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: hp('5%'),
    },
    opponent : {
        position: "absolute",
        top: hp("0%"),
    },
    deck : {
        position: "absolute",
        top: hp("40%"),
    },
});
