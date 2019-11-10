import * as SQLite from "expo-sqlite";

const SCHEMA = {
  expenses: {
    fields: [
      'due_date',
      'description',
      'amount',
    ],
    definitions: [
      'id integer primary key not null',
      'due_date text',
      'description text',
      'amount numeric',
    ]
  }
}

const TABLES = Object.keys(SCHEMA)

let database = null;

function db() {
  if (!database) {
    console.log('[DB_LOG]: No database. Creating database')
    database = SQLite.openDatabase("mrdev.db");
  }

  return database
}

function get(table, criteria, onSuccess, onError) {

  db()
    .transtaction(tx => {
      let query = `select * from ${table}`
      let where = ''
      let args = []
      if (Object.keys(criteria).length) {
        where += ' where '
        Object.keys(criteria).forEach((k, i) => {
          where += i == 0 ? k + '=? ' : `and ${k}=?`
          args.push(criteria[k])
        })
      }

      tx.executeSql(query + where, args)

    })
}

function insert(table, data, onSuccess, onError) {

  db()
    .transtaction(tx => {
      const fields = Object.keys(data).join(', ')
      const values = Object.values(data).join(', ')
      const sql =`insert into ${table} (${fields}) values (${values})`

      tx.executeSql(sql)

    }, onError, onSuccess)

}

function runMigrations() {
  db()
    .transaction(tx => {

      console.log('[DB_LOG]: Running migrations')
      const sql = Object
        .keys(SCHEMA)
        .map(k => `create table if not exists ${k} (${SCHEMA[k].definitions.join(', ')})`)
      tx.executeSql(sql.join(';'))
    })
}

export default {
  get,
  insert,
  init: () => {

    console.log('[DB_LOG]: Init database')
    // Run migrations
    runMigrations()
  }
}
