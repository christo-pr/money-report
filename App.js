import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import db from './src/utils/db'

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
  const [listView, setListView] = useState(false)

  useEffect(() => {

    db.init()

  }, [])

  return (
    <>
      <Menu selected={listView ? 1 : 0} onChangeView={setListView}/>
      <View style={styles.container}>
        <MoneyReport listView={listView}/>
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
