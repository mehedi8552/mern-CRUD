const express = require("express");
const router = require('./src/Route/api');

const app = new express();
const bodyParser = require('body-parser');


//Security middlewaire......
const rateLimit = require('express-rate-limit');
const helmete = require('helmet');
const mongosenetize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');

//database

const mongose = require('mongoose');
 app.use(express.static('my-client/build'))

//Security middlewaire implement......

app.use(cors());
app.use(helmete());
app.use(hpp());
app.use(mongosenetize());
app.use(rateLimit());


//BodyParser

app.use(bodyParser.json())

//rate limiter

const limiter = rateLimit({windowMs:15*60*100,max:3000} );
app.use(limiter);

//Database...

let URL = "mongodb+srv://user8552:user8552@cluster0.derptwk.mongodb.net/CRUD"
//let option = {username :"user8552",password:"user8552",autoIndex:true}

mongose.connect(URL)
.then(success => console.log("server is connected"))
.catch(err => console.log(err))


//Manageing Backend API Routing
app.use('/api/v1',router)


app.get("/",(req,res)=>{
res.send("this is home.")
})

//Manageing frondEnd  Routing

// app.get("*",(req,res)=>{
//     req.sendFile(path.resolve(__dirname,'my-client','build','index.html'))
// })


module.exports = app;