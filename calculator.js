const express = require('express');
const bodyParser = require("body-parser");
const app = express();

//when we are trying to parse the data that is comming in html form 
// we would be using body parser in the urlencoded mod
//here we write extended also true ( it will allow use to post nested objects)
app.use(bodyParser.urlencoded({extended:true}));

// now we are going to respond to the 
// __dirname tell the current file location 
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});


// we will be using body parser to be able to use the input we recived from the post made 
app.post('/',function(req,res){
    // here the things are parsed as text therefore 
    // we need to convert it into numbers
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result= num1+num2;
    res.send("thanks for sending that the result is " + result);
});

app.listen(3000,function(req,res){
    console.log("server is running at port 3000");
});


// html return code cheat sheet 
// 1** hold on 
// 2** here you go 
// 3** go away
// 4** you fucked up 
// 5** i fucked up