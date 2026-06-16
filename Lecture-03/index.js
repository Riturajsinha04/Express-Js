const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
let i = 0;

app.use("/public", express.static("public"));
app.use("/asset", express.static("asset"));


app.use((req,res,next)=>{
    let data = `incoming request details ${i}, ${req.ip}, ${req.url} $timestamp = ${new Date()} \n`;
    fs.appendFileSync("log.txt", data, "utf-8");
    next();
})


app.get("/",(req, res)=>{

    res.send("home page ....")
})



app.listen(port,()=>{
    console.log(`server is running at port ${port}`);

})