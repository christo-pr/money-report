import db from './db'

const RANDOM_PHRASES = [
  'Gasto normal',
  'Nomas',
  'A lo mejor no importa',
]

export function getRandomDescription() {
  const index = Math.floor(Math.random() * Math.floor(3))

  return RANDOM_PHRASES[index]
}

export function saveExpense(data) {
  const tableName = db.tables.EXPENSES
  const expense = {
    due_date: data.dueDate,
    description: data.description,
    amount: data.amount
  }

  db.insert(tableName, expense, (tx, success) => {
    console.log('success')
    console.log(success)

  }, (tx, error) => {
    console.log(tx)
    console.log(error)
    console.log('error')
  })
}

export function getAllExpenses(done, error) {

  const tableName = db.tables.EXPENSES

  db.get(tableName, {}, done, error)
}
