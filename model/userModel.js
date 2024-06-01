const { SchemaMetaFieldDef } = require('graphql')
const mongoose  = require('mongoose')

const userSchema  = new Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    }
})

const User  = monggose.model(userSchema);

module.exports = User;