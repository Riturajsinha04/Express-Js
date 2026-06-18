const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.get('/',(req,res)=>{
    res.send("home route page")
})

app.post("/register",(req,res)=>{
    console.log(req.body);
    //write in file append
    fs.appendFileSync("data.json", JSON.stringify(req.body), "utf-8"),'\n';
    res.send("registration completed.....")
})





app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})