
const mongoose = require ('mongoose');
module.exports = User = mongoose.connect('mongodb://localhost/reduxDatabase');



mongoose.connection.on('open', function (err, data) {
    console.log("Database connection successfull !!!");
});
mongoose.connection.on('error', function (err, data) {
    console.log(("Database connection failed --------------->"));
});
