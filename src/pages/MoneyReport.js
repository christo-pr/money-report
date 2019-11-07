import React from 'react'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from "react-native-modal-datetime-picker";



function MoneyReport() {

  const dollarIcon = <Icon name='dollar' size={24} color='white'/>
  const dateIcon = <Icon name='calendar' size={24} color='white'/>

  return (
    <>
      <Input
        placeholder="Registra una cantidad"
        keyboardType="numeric"
        placeholderTextColor="#CCCEC8"
        autoFocus
        leftIcon={dollarIcon}
      />
      <Input
        placeholder="Fecha"
        keyboardType="numeric"
        placeholderTextColor="#CCCEC8"
        autoFocus
        leftIcon={dateIcon}
      />
      <DateTimePicker
        isVisible={false}
      />
    </>
  )

}

export default MoneyReport
