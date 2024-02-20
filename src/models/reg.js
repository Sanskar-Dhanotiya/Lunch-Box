const mongoose= require("mongoose");

const RegSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    pass:{
        type: String,
        required: true
    }
});

const collection = mongoose.model("collection",RegSchema);

module.exports= collection;