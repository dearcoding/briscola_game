import {TouchableOpacity, Text, Image, View, StyleSheet, Animated } from 'react-native';
import React, { Component } from 'react';
import axios from "axios";

const assets = require('../utils/cards_path.js');

export default class Card extends Component {
    render() {
        let { position, left, top, nameCard } = this.props;
        return (
                <View style={{position : position, left: left, top: top}}>
                    <Image source={assets[nameCard]} style={styles.img}/>
                </View>

        );
    }
}

const styles = StyleSheet.create({
    absoluteView: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    img : {
        width: 100,
        height: 150
    }
});
