const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
{
    firstName:{
        type:String,
        required: true
    },
    middleName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    designation:{
        type:String,
        required: true
    },
    department:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    state:{
        type:String,
        required: true
    },
    instituteName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    mobileNo:{
        type:String,
        required: true
    },
    altMobileNo:{
        type:String,
        required: true
    },
    accomodation:{
        type:String,
        required: true
    },
    permissionLetterPath:{
        type:String,
        required: true
    },
    /* password: { 
        type: String, 
        required: true }, */
},

{ collection: 'User' }

);

module.exports = mongoose.model('Users',UserSchema);


/*

    firstName,
    middleName,
    lastName,
    designation,
    department,
    gender,
    state,
    instituteName,
    email,
    address,
    mobileNo,
    altMobileNo,
    accomodation,
    permissionLetter
        

*/