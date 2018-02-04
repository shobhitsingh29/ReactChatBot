const user = require('./user');
const admins = require('./admins');
const room = require('./room');

module.exports = function (app) {
    //var corsOptions = {
    //    origin: "http://" + appConfig.corsConfig.host + ":" + appConfig.frontEndPort
    //};

    app.use('/api/user', user);
    app.use('/api/admins', admins);
    app.use('/api/room', room);

};
