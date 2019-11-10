import React from 'react';
import { StyleSheet, View } from 'react-native';

import MoneyReport from './src/pages/MoneyReport'
import Menu from './src/components/Menu'

const TEMPLATE_COLORS = [
  '#337CA0',
  '#1B4353',
  '#88D498',
  '#EC4E20',
  '#ACE894'
]

export default function App() {

  return (
    <>
      <Menu />
      <View style={styles.container}>
        <MoneyReport />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#337CA0',
  },
});