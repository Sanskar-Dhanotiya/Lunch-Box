const express = require ('express')
const path= require('path')
const app= express();
const db= require('./mongodb')
const collection= require("./models/reg")
const feedback = require("./models/feedback")
const port= 800 ;


//path
const static_path = path.join(__dirname , "../public");

app.set('view engine', 'hbs');

app.use(express.static(static_path));
app.use(express.urlencoded({extended:false}))


//routing
app.get('/', (req,res)=>{
    res.render(path.join(__dirname,'../views/index'))
})

app.get('/signup', (req,res)=>{
    res.render(path.join(__dirname,'../views/signup'))
})
app.get('/connect', (req,res)=>{
    res.render(path.join(__dirname,'../views/connect'))
})
app.get('/success', (req,res)=>{
    res.render(path.join(__dirname,'../views/success'))
})
app.get('/customer', (req,res)=>{
    res.render(path.join(__dirname,'../views/customer'))
})
app.get('/card', (req,res)=>{
    res.render(path.join(__dirname,'../views/card'))
})
app.get('/satisfaction', (req,res)=>{
    res.render(path.join(__dirname,'../views/satisfaction'))
})
app.get('/feedback', (req,res)=>{
    res.render(path.join(__dirname,'../views/feedback'))
})
app.get('/papad', (req,res)=>{
    res.render(path.join(__dirname,'../views/papad'))
})
app.get('/payment', (req,res)=>{
    res.render(path.join(__dirname,'../views/payment'))
})


app.post('/reg', async (req,res)=>{

    const data= new collection( {
        name: req.body.FName,
        email: req.body.Email,
        pass: req.body.Pass
    });
//    const saveduser= await data.save()
    await collection.insertMany([data]);
    console.log(data);
   res.render(path.join(__dirname,'../views/success'),data);
})

app.post('/feedback', async (req,res)=>{

    const data= new feedback( {
        name: req.body.fname,
        email: req.body.email,
        pass: req.body.mobile,
        comment: req.body.feedback
    });  
//    const saveduser= await data.save()
    await feedback.insertMany([data]);
    console.log(data);
   res.render(path.join(__dirname,'../views/index'),data);
})

app.get('*', async (req,res)=>{
    const data= await collection.findOne()
    const data1= await feedback.findOne()
    res.send([data,data1]);
})

app.listen(port,()=>{
console.log("Server Is Running At http://localhost:800/")
    })