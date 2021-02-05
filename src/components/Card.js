import {TouchableOpacity, Text, Image, View, StyleSheet, Animated } from 'react-native';
import React, { Component } from 'react';
import axios from "axios";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
        width: wp('20%'),
        height: wp('30%')
    }
});
