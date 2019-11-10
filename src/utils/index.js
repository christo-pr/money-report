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

export function saveExpense() {
  const tableName = db.tables.EXPENSES
  const data = {
    due_date: '10deNov',
    description: 'Testing description',
    amount: 199
  }

  db.insert(tableName, data, (tx, success) => {
    console.log('success')
    console.log(success)

  }, (tx, error) => {
    console.log(tx)
    console.log(error)
    console.log('error')
  })
}

export function getAllExpenses() {

  const tableName = db.tables.EXPENSES

  db.get(tableName, {},  (data) => {
    console.log(data)

  }, (tx, error) => {
    console.log('error')
  })
}
