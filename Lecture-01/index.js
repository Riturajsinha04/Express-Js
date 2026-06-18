let express=require("express");
// console.log(express);
let app=express();
// console.log(x);
let port = 3000;



app.get("/", (req, res)=>{
    console.log("prince garib hai yrr...");
    res.send("client ko bhej diya")
})


app.get("/payment",(req, res)=>{
    console.log("serverside rendering");
    res.send("payment mirai")
})

app.get("/services", (req, res)=>{
    console.log("server on server side");
    res .send("client service page")
})

app.use( (req, res)=>{
    console.log("user not found");
    res.send("404 Not Found");
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})
