const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hello world!");
});        //req = request, res = response 

app.get("/contact", function(req, res){
    res.send("You can contact me on LinkedIn");
});

app.get("/about", function(req, res){
    res.send("I studied Civil Engineering at undergraduate and I'm currently learning web development because I enjoy coding.");
});

app.get("/hobbies", function(req, res){
    res.send("Coding, Solving maths equations");
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});