import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from "react-native-modal-datetime-picker";

const TEMPLATE_COLORS = [
  '#337CA0',
  '#1B4353',
  '#88D498',
  '#EC4E20',
  '#ACE894'
]

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Registra una cantidad"
          keyboardType="numeric"
          placeholderTextColor="#CCCEC8"
          autoFocus
          leftIcon={
          <Icon
            name='dollar'
            size={24}
            color='white'
          />
          }
        />
        <Input
          placeholder="Fecha"
          keyboardType="numeric"
          placeholderTextColor="#CCCEC8"
          autoFocus
          leftIcon={
          <Icon
            name='dollar'
            size={24}
            color='white'
          />
          }
        />
      <DateTimePicker
        isVisible={false}
      />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#337CA0',
  },
});
