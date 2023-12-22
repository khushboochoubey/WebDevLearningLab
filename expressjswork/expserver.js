const express = require("express");

const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended:true}))


app.get("/",function(req,res){
    res.send("welcome to my new channel :)")
})

app.get("/about",function(req,res){
    res.send("<h1>myself pooja,i am a developer :)</h1>")
})

app.get("/contact",function(req,res){
    res.send("contact me :)")
})


//simple calculator

app.get("/calculator",function(req,res){
    // console.log(__dirname)
    res.sendFile(__dirname+"/index.html")
})

app.post("/calculator",function(req,res){
    //res.send("thanku for your post");
    console.log(req.body);
    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);
    let sum = n1+n2;
    res.send("The sum of two numbers is: "+sum)
})


//bmi calculator

app.get("/bmi",function(req,res){
    // console.log(__dirname)
    res.sendFile(__dirname+"/bmi.html")
})

app.post("/bmi",function(req,res){
    //res.send("thanku for your post");
    //console.log(req.body);
    let w1 = Number(req.body.weight);
    let h1 = Number(req.body.height);
    let bmi = w1/(h1*h1);
    res.send("The bmi of your body is: "+bmi)
})


app.listen(5000,function(req,res){
    console.log('Server is running at port no. 5000')
});
