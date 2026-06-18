const express = require("express");
const app = express();

let student = {
    "name": "prince kumar",
    "friend": "saif ullah",
    "age" : 43,
    "gf" : "false"
};
let college = "mirai"

app.set("view engine", "ejs");


app.get("/",(req,res)=>{
    res.send("home page.....");
})


app.get("/aktu/result/:year/:roll",(req,res)=>{
    console.log("req.params");
    //db search start
    if(req.params.roll>50){
    }else{
        res.send("fail")
    }
//    res.render("user", { student, college });
})



app.listen(3000, ()=>{
    console.log("Server is running on port 3000") ;  
})