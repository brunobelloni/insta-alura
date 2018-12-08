import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const width = Dimensions.get('screen').width

export default class Post extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Image source={require('./../../resources/img/cat.jpg')} style={styles.profilePic}></Image>
                    <Text>{this.props.foto.usuario}</Text>
                </View>
                <Image source={require('./../../resources/img/cat.jpg')} style={styles.image}></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePic: {
        marginRight: 10,
        borderRadius: 20,
        width: 40,
        height: 40,
    },
    image: {
        width: width,
        height: width
    },
});