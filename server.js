const express = require('express');
var http = require('http');
var app = require('./config/express')(app);
require('./config/passport')();

const url =
   'mongodb://dswa5:dswa5@clusterdswa5-shard-00-00.r9mcd.mongodb.net:27017,clusterdswa5-shard-00-01.r9mcd.mongodb.net:27017,clusterdswa5-shard-00-02.r9mcd.mongodb.net:27017/ClusterDSWA5?ssl=true&replicaSet=atlas-q27y5k-shard-0&authSource=admin&retryWrites=true&w=majority';

require('./config/database.js')(url);

http.createServer(app).listen(app.get('port'), function () {
   console.log('Express Server escutando na porta ' + app.get('port'));
});
