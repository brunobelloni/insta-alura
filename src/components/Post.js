import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import InputComentario from './InputComentario';
import Like from './Like';

const width = Dimensions.get('screen').width

export default class Post extends Component {

    exibeLegenda(foto) {
        if (foto.comentario === '') {
            return;
        }

        return (<View style={styles.comentario}>
            <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
            <Text>{foto.comentario}</Text>
        </View>);
    }

    render() {
        const { foto, likeCallback, comentarioCallback } = this.props;

        return (
            <View>
                <View style={styles.header}>
                    <Image source={{ uri: foto.urlPerfil }} style={styles.profilePic}></Image>
                    <Text>{foto.loginUsuario}</Text>
                </View>
                <Image source={{ uri: foto.urlFoto }} style={styles.image}></Image>

                <View style={styles.rodape}>
                    <Like foto={foto} likeCallback={likeCallback} />
                    {this.exibeLegenda(foto)}

                    {foto.comentarios.map(comentario =>
                        <View style={styles.comentario} key={comentario.id}>
                            <Text style={styles.tituloComentario}>{comentario.login}</Text>
                            <Text>{comentario.texto}</Text>
                        </View>
                    )}

                    <InputComentario idFoto={foto.id} comentarioCallback={comentarioCallback} />

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
    rodape: {
        margin: 10
    },
    like: {
        fontWeight: 'bold'
    },
    comentario: {
        flexDirection: 'row'
    },
    tituloComentario: {
        fontWeight: 'bold',
        marginRight: 5
    },
});