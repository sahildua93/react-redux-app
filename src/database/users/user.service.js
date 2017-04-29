let User = require('./user.model');

exports.creatUser = (userData, res) => {
    User.create(userData, (err, data) => {
        if(err){
            res.send("error while creating database")
        }
        if(data){
            res.send(data);
        }

    })
}

exports.getUser = (res) => {
    User.find({}, (err, data) => {
        if(err){
            res.send("error while fetching data")
        }
        if(data){
            res.send(data);
        }
    })
}

exports.deleteUser = (username,res) => {
console.log("**********************************************" , username)

    User.remove(username, (err, data) => {
        if(err){
            res.send("error while deleting data")
        }
        else
        {
            User.find((err,data) =>{
                if(err) console.log(err);
                else
                {
                    res.send(data)
                }
            })
        }
    })
}

exports.updateUser = (data,res) => {

    User.update({_id:data.id},{name:data.name, email:data.email}, {upsert: true}, (err, data) => {
        if(err){
            console.log("erro while updating")
            res.send("error while updating data")
        }
        else
        {
            console.log("no error")
            User.find((err,data) =>{
                if(err) console.log(err);
                else
                {
                    console.log('############ updated', data)
                    res.send(data)
                }
            })
        }
    })
}