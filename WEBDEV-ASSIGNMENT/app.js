const express = require("express");
const connectDB = require("./config/db");
const mobileRoutes = require("./routes/mobileRoutes");

const app = express();

connectDB();


app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", mobileRoutes);


app.listen(3000,()=>{
    console.log("server is running at port 3000");
});