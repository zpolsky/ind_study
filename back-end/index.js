const Hapi = require('hapi');
const chalk = require('chalk');
const config = require('./config');

const server = new Hapi.Server();
server.connection(config);

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply(`Hello, ${encodeURIComponent(request.params.name)}!`);
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(chalk.cyan(`Server running at: ${server.info.uri}`));
});
