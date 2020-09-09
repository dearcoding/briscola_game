import {TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

const assets = require('root/src/utils/cards_path.js');

export default class Card extends Component {
    render() {
        let { position, left, top, nameCard } = this.props;
        return (
            <TouchableOpacity style={{position : position, left: left, top: top}}>
                <View style={styles.absoluteView}>
                    <Text>{nameCard}</Text>
                </View>
                <Image source={assets[nameCard]} style={styles.img}/>
            </TouchableOpacity>
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
        width: 130,
        height: 200
    }
});
