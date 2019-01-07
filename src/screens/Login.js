import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, Button, AsyncStorage, YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['']);

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            usuario: '',
            senha: '',
            mensagem: '',
        }
    }

    efetuaLogin() {
        const uri = "https://instalura-api.herokuapp.com/api/public/login";
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({
                login: this.state.usuario,
                senha: this.state.senha,
            }),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        }

        fetch(uri, requestInfo).then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error("Não foi possível efetuar Login");
        }).then(token => {
            AsyncStorage.setItem('token', token);
            AsyncStorage.setItem('usuario', this.state.usuario);
        }).catch(e => this.setState({ mensagem: e.message }));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>InstaAlura</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="Usuário..." onChangeText={text => this.setState({ usuario: text })} autoCapitalize="none"></TextInput>
                    <TextInput style={styles.input} placeholder="Senha..." onChangeText={text => this.setState({ senha: text })} autoCapitalize="none" secureTextEntry={true}></TextInput>
                    <Button title="Login" onPress={this.efetuaLogin.bind(this)}></Button>
                </View>
                <Text style={styles.mensagem}>{this.state.mensagem}</Text>  
            </View>
        );
    }
}

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: width * 0.8,
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 26,
        marginBottom: 50,
    },
    mensagem: {
        marginTop: 15,
        color: '#e74c3c',
    }
});