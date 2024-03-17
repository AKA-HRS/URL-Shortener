const mongooes = require('mongoose');

const urlShema= new mongooes.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectUrl:{
        type:String,
        required:true,
    },
    visitHistory:[{timestamap:{type:Number}}],
    createdBy:{
        type:mongooes.Schema.Types.ObjectId,
        ref:"users",
    }
},
{timestamps:true});

const URL= mongooes.model("url",urlShema);

module.exports = URL;