

var db = require('knex')({
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'student',
      charset: 'utf8',
  
    }
  })
  
  module.exports = { db } 
