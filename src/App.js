import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View, FlatList } from 'react-native';
import Post from './components/Post'

const width = Dimensions.get('screen').width

export default class App extends Component {
  render() {
    const fotos = [{ id: 1, usuario: 'bruno' },
    { id: 2, usuario: 'rafael' },
    { id: 3, usuario: 'alberto' }];

    return (
      <FlatList style={styles.container}
        keyExtractor={item => String(item.id)}
        data={fotos}
        renderItem={({ item }) => <Post foto={item}/>}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
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