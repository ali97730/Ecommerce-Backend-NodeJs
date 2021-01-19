const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schema;

const productSchema =  new mongoose.Schema({
    name :{
        type : String,
        trim : true,
        require : true,
        maxlength : 32
    },

    description : {
        type : String,
        trim : true,
        require : true,
        description : 2000    

    },

    price : {
        type : Number,
        trim : true,
        maxlength : 32,
        require : true
        
    },

    category : {
        type : ObjectId,
        ref : "Category",
        required : true
    },

    stock : {
        type : Number,
    },
    sold : {
        type : Number,
        default : 0
    },
    photo : {
        data : Buffer ,
        contentType : String
    },
    size : {
        type : String,
        
    }
},{timestamps : true});

module.exports = mongoose.model("Product",productSchema);