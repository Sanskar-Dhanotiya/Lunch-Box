const mongoose= require("mongoose");

const registrationSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const Collection = mongoose.model("collection",registrationSchema);

module.exports= Collection;