const mongoose = require ('mongoose');
require('../config/datasource');


module.exports= mongoose.model('users', new mongoose.Schema({

},{strict:false,versionKey: false}));
