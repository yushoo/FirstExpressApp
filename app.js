//INITIALIZE EXPRESS
var express = require("express");
var app = express();

//DEFINING A ROUTE
// "/" => "Hi there!"
app.get("/",function(req,res){
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye",function(req,res){
    res.send("Bye bye");
});

// "/dog" => "MEOW!"
app.get("/dog",function(req,res){
    console.log("SOMEONE HAS MADE A REQUEST TO /DOG");
    res.send("Meow");
});

app.get("/r/:subredditName",function(req,res){
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE "+ subreddit.toUpperCase() +" SUBREDDIT");
})

// if user requests for a random url
app.get("*",function(req,res){
    res.send("BOI !!");
});

//TELL EXPRESS TO LISTEN FOR REQUESTS (START SERVER)
//if on c9 us app.listen(process.env.PORT);
app.listen(3000,function(){
    console.log("serving my first express app on port 3000");
});