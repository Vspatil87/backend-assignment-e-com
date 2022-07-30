const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '8787root',
    database : 'backend_assignment'
  }
});

module.exports = knex;