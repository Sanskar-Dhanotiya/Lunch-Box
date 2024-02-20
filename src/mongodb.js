const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydatabase")
.then(()=>{
    console.log("Mongodb Connected");
})
.catch(()=>{
    console.log("Failed");
});

module.exports= mongoose;