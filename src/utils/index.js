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

}
