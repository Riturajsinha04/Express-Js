const express = require("express");
const app = express();
const fs = require("fs");

app.set("view engine", "ejs");

//file, uske data ko retrieve kiya
let prince={
    name:"prince mirai",
    age:28,
    dist:"munger"
}

app.get("/",(req,res)=>{
    res.send("home route page")
})
app.get("/user",(req,res)=>{
    res.render("user",{prince})
})




app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})