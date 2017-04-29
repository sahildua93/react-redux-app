let bodyParser = require('body-parser');
let express = require('express');
let controller = require('../../database/users/user.controller')


let app = express();

app.use(bodyParser());


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

app.post('/User', controller.createUser)
app.get('/User',controller.getData)
app.delete('/User',controller.deleteData)
app.put('/UserUpdate',controller.editData)


let port = 3200;
app.listen(port, function () {
    console.log("server running at port ", port);
})