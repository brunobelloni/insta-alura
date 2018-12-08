import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Post from './components/Post'

export default class App extends Component {
  render() {
    const fotos = [{ id: 1, usuario: 'bruno' },
    { id: 2, usuario: 'rafael' },
    { id: 3, usuario: 'alberto' }];

    return (
      <FlatList
        keyExtractor={item => String(item.id)}
        data={fotos}
        renderItem={({ item }) => <Post foto={item} />}
      />
    );
  }
}