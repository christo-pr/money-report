import React, { useState } from 'react'
import { ButtonGroup } from 'react-native-elements'

function Menu(props) {

  const [selectedMenuItem, setSelectedMenu] = useState(props.selected)
  const buttons = ['Nuevo Gasto', 'Gastos']

  const onMenuItemPress = (selectedIndex) => {
    setSelectedMenu(selectedIndex)
    props.onChangeView(!props.selected)
  }

  return (
    <ButtonGroup
      onPress={onMenuItemPress}
      selectedIndex={selectedMenuItem}
      buttons={buttons}
      containerStyle={{ height: 100 }}
    />
  )
}

export default Menu
