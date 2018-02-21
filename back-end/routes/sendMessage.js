
const chalk = require('chalk');
const queryDatabase = require('../dbConnection');

const route = {
  method: 'POST',
  path: '/sendMessage/{username}/{message}/{messageType}',
  handler: function (request, reply) {
    let username = encodeURIComponent(request.params.username);
    let message = encodeURIComponent(request.params.message);
    let messageType = encodeURIComponent(request.params.messageType);

    const emailPhone = (messageType === 'email') ? 'email' : 'phone_number';
    const query = `SELECT ${emailPhone} FROM users WHERE username='${username}'`;

    if (emailPhone === 'phone_number') {

    }

    // queryDatabase(query)
    // .then((result) => {
    //
    // })
    // .catch((err) => {
    //   console.log(chalk.red(`Err: ${err}`));
    // });
  }
}

module.exports = route;
