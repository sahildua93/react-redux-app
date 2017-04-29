let UserService = require('./user.service')

exports.createUser = (req, res, next) => {
    console.log("creating user ----- controller");
    let userData = req.body.data;
    UserService.creatUser(userData,res);
}

exports.getData = (req,res,next) => {
    UserService.getUser(res);
}

exports.deleteData = (req,res,next) => {
    let username = req.body;
    console.log("usercontroller -----------------",username);
    UserService.deleteUser(username,res);
}

exports.editData = (req,res,next) => {
    let userData = req.body;
    console.log("usercontroller updation-----------------",userData);
    UserService.updateUser(userData,res);
}