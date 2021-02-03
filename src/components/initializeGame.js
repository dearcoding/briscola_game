import React from 'react';
import { useState , useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Card from "../components/Card";
import axios from "axios";
import CardModel from "../models/CardModel";
import CardModelList from "../models/CardListModel";
import {startGame} from "../api/api";
import useForceUpdate from 'use-force-update';

export function Deck(){
    /*
     * Deck component used to represent deck cards
     */
    let deck = [];
    let num_cards = 40;
    for (var i=0;i < num_cards; i++) {
           deck.push(<Card key={i} nameCard = {"covered"} ></Card>);
    }
    return deck;
    
}

export function BriscolaCard(){

}

export function OpponentCard(){

}

export function PlayerCard(){

}


