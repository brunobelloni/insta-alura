import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Like extends Component {

    loadIcon(likeada) {
        return likeada ? require('../../resources/img/s2-checked.png') : require('../../resources/img/s2.png')
    }

    exibeLikes(likers) {
        if (likers.length <= 0) {
            return;
        }
        return (<Text style={styles.like}>{likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}</Text>);
    }

    render() {
        const { foto, likeCallback } = this.props;

        return (
            <View>
                <TouchableOpacity onPress={() => { likeCallback(foto.id) }}>
                    <Image source={this.loadIcon(foto.likeada)} style={styles.heart}></Image>
                </TouchableOpacity>
                {this.exibeLikes(foto.likers)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    heart: {
        marginBottom: 10,
        height: 40,
        width: 40
    },
});