import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const width = Dimensions.get('screen').width

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: this.props.foto
        }
    }

    like() {
        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada
        }

        this.setState({ foto: fotoAtualizada })
    }

    loadIcon(likeada) {
        return likeada ? require('../../resources/img/s2-checked.png') : require('../../resources/img/s2.png')
    }

    render() {
        const { foto } = this.state;

        return (
            <View>
                <View style={styles.header}>
                    <Image source={{ uri: foto.urlPerfil }} style={styles.profilePic}></Image>
                    <Text>{foto.loginUsuario}</Text>
                </View>
                <Image source={{ uri: foto.urlFoto }} style={styles.image}></Image>
                <View style={styles.rodape}>
                    <TouchableOpacity onPress={this.like.bind(this)}>
                        <Image source={this.loadIcon(foto.likeada)} style={styles.heart}></Image>
                    </TouchableOpacity>
                </View>
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
    heart: {
        height: 40,
        width: 40
    },
    rodape: {
        margin: 10
    }
});