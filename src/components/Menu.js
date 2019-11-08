import React, { useState } from 'react'
import { ButtonGroup } from 'react-native-elements'

function Menu(props) {

  const [selectedMenuItem, setSelectedMenu] = useState(0)
  const buttons = ['Nuevo Gasto', 'Gastos']

  return (
    <ButtonGroup
      onPress={setSelectedMenu}
      selectedIndex={selectedMenuItem}
      buttons={buttons}
      containerStyle={{height: 100}}
    />
  )
}

export default Menu
