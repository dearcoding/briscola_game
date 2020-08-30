import {TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <TouchableOpacity style={{position : this.props.position, left: this.props.left, top: this.props.top}}>
                <View style={styles.absoluteView}>
                    <Text>{this.props.nameCard}</Text>
                </View>
                <Image source={require('root/assets/cards/green_back.png')} style={styles.img}/>
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
