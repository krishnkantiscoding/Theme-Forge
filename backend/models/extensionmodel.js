const {model, Schema} = require('../connection');

const Schema = new Schema({
    data : {type : String, require : true},
    user : String,
    email : {type : String, require : true, unique : true},
    password : String,
    createdAt : {type : Date, default: Date.now}
})

module.exports = model('user',mySchema);