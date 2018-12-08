
import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';

export default class InputComentario extends Component {
    constructor() {
        super();
        this.state = {
            valorComentario: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder="Adicione um comentário..."
                    ref={input => this.inputComentario = input}
                    onChangeText={(text) => this.setState({ valorComentario: text })}></TextInput>
                <TouchableOpacity onPress={() => {
                    this.props.comentarioCallback(this.props.idFoto, this.state.valorComentario, this.inputComentario);
                    this.setState({ valorComentario: '' })
                }}>
                    <Image style={styles.icone} source={require('../../resources/img/send.png')}></Image>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    input: {
        height: 40,
        flex: 1,
    },
    icone: {
        width: 30,
        height: 30,
    },
})


