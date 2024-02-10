const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');

//importing our own module
const date = require(__dirname +"/date.js")

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

//it tells express that view engine is seen page in ejs
app.set("view engine", 'ejs');

const item = ["Buy food","Eat food", "Cook food"];
const work = [];

app.get("/", function (req, res) {
    const day = date.getDay();

    //it is render the content inside the html and make changes at the marker
    res.render("index",{kindOfDay: day, nl: item});
})

app.post('/',function (req,res) {
    //because form is submitted and form action page is "/" therefore we need this if statement
    if(req.body.button === "WORK"){
        work.push(req.body.txt);
        res.redirect("/work");
    }else{
        item.push(req.body.txt);
        res.redirect("/");
    }
})

app.get("/work",function (req,res) {
    res.render("index",{kindOfDay: "WORK", nl:work})
})
app.post("/work",function (req,res) {
    
    redirect("/work");
})
app.listen(3000, function () {
    console.log("server is started");
})