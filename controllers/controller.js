const knex = require('../knex_file');

const getUsers = async (req, res, next) => {
  let result = await knex('users').select('*');
  return res.json(result);
}

module.exports = {getUsers};