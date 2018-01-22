
const chalk = require('chalk');
const queryDatabase = require('../dbConnection');

const route = {
  method: 'GET',
  path: '/{queryCol}',
  handler: function (request, reply) {
    let queryCol = encodeURIComponent(request.params.queryCol);
    if (queryCol !== "first_name" && queryCol !== "last_name" && queryCol != "gender") {
      reply("Some error");
    } else {
      const query = `SELECT ${queryCol} FROM employees LIMIT 10`;
      queryDatabase(query)
      .then((result) => {
        reply(result);
      })
      .catch((err) => {
        console.log(chalk.red(`Err: ${err}`));
      });
    }
  }
}

module.exports = route;
