import React, { useState } from 'react'
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native'
import { Input, ButtonGroup, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from "react-native-modal-datetime-picker";

import {
  getRandomDescription,
  saveExpense,
} from '../utils/'

function ExpenseForm(props) {

  const defaultDescription = getRandomDescription()

  const [description, setDescription] = useState(defaultDescription )
  const [amount, setAmount] = useState()
  const [dueDate, setDueDate] = useState(new Date().toDateString())
  const [showPicker, setShowPicker] = useState(false)

  const dollarIcon = <Icon name='dollar' size={24} color='white'/>
  const dateIcon = <Icon name='calendar' size={24} color='white'/>
  const descriptionIcon = <Icon name='google-wallet' size={24} color='white'/>

  return (
    <View style={styles.container}>
       <Input
        placeholder="Concepto"
        placeholderTextColor="#CCCEC8"
        autoFocus
        leftIcon={descriptionIcon}
        onChangeText={setDescription}
        value={description}
      />
      <Input
        placeholder="Registra una cantidad"
        keyboardType="numeric"
        placeholderTextColor="#CCCEC8"
        autoFocus
        leftIcon={dollarIcon}
        onChangeText={setAmount}
        value={amount}
      />
      <TouchableWithoutFeedback onPress={() => setShowPicker(true)}>
        <View style={{ width: '100%' }}>
          <Input
            placeholder="Fecha"
            keyboardType="numeric"
            placeholderTextColor="#CCCEC8"
            autoFocus
            leftIcon={dateIcon}
            value={dueDate}
            disable={true}
            editable={false}
          />
        </View>
      </TouchableWithoutFeedback>
      <DateTimePicker
        isVisible={showPicker}
        date={new Date(dueDate)}
        onConfirm={(date) => { setDueDate(new Date(date).toDateString()); setShowPicker(false) }}
        onCancel={() => { setShowPicker(false) }}
      />
      <Button
        title="Save"
        onPress={() => saveExpense({ amount, dueDate, description })}
      />
    </View>
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

export default ExpenseForm
