import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const width = Dimensions.get('screen').width

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: this.props.foto,
            valorComentario: '',
        }
    }

    like() {
        const { foto } = this.state;

        let novaLista = []
        if (!foto.likeada) {
            novaLista = [
                ...foto.likers,
                { login: 'meuUsuario' }
            ]
        } else {
            novaLista = foto.likers.filter(liker => {
                return liker.login !== 'meuUsuario'
            })
        }

        const fotoAtualizada = {
            ...foto,
            likeada: !foto.likeada,
            likers: novaLista
        }

        this.setState({ foto: fotoAtualizada })
    }

    loadIcon(likeada) {
        return likeada ? require('../../resources/img/s2-checked.png') : require('../../resources/img/s2.png')
    }

    exibeLikes(likers) {
        if (likers.length <= 0) {
            return;
        }
        return (<Text style={styles.like}>{likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}</Text>);
    }

    exibeLegenda(foto) {
        if (foto.comentario === '') {
            return;
        }

        return (<View style={styles.comentario}>
            <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
            <Text>{foto.comentario}</Text>
        </View>);
    }

    adicionaComentario() {
        if (this.state.valorComentario === '') {
            return;
        }

        const novaLista = [...this.state.foto.comentarios, {
            id: this.state.valorComentario,
            login: 'meuUsuario',
            texto: this.state.valorComentario
        }];

        const fotoAtualizada = {
            ...this.state.foto,
            comentarios: novaLista
        }

        this.setState({ foto: fotoAtualizada, valorComentario: '' })
        this.inputComentario.clear()
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
                    {this.exibeLikes(foto.likers)}
                    {this.exibeLegenda(foto)}

                    {foto.comentarios.map(comentario =>
                        <View style={styles.comentario} key={comentario.id}>
                            <Text style={styles.tituloComentario}>{comentario.login}</Text>
                            <Text>{comentario.texto}</Text>
                        </View>
                    )}

                    <View style={styles.novoComentario}>
                        <TextInput style={styles.input}
                            placeholder="Adicione um comentário..."
                            ref={input => this.inputComentario = input}
                            onChangeText={(text) => this.setState({ valorComentario: text })}></TextInput>
                        <TouchableOpacity onPress={this.adicionaComentario.bind(this)}>
                            <Image style={styles.icone} source={require('../../resources/img/send.png')}></Image>
                        </TouchableOpacity>
                    </View>
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
        marginBottom: 10,
        height: 40,
        width: 40
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
    input: {
        height: 40,
        flex: 1,
    },
    icone: {
        width: 30,
        height: 30,
    },
    novoComentario: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});