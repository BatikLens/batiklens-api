const routes = require('./routes');

module.exports = {
    name: 'predict',
    version: '1.0.0',
    register: async (server) => {
        server.route(routes);
    },
};