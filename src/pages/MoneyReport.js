import React from 'react'

import ExpenseForm from '../components/ExpenseForm'
import ExpensesList from '../components/ExpensesList'

function MoneyReport(props) {
  const { listView } = props

  return listView ? <ExpensesList /> : <ExpenseForm />

}

export default MoneyReport
