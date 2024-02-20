const mongoose= require("mongoose");

const Feedback= new mongoose.Schema({
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
    },
    comment:{
        type: String,
        required: true
    }
});

const feedback = mongoose.model("feedback",Feedback);

module.exports= feedback;