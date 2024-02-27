const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

let newItems = [];
app.get("/",(req,res)=>{
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date;
    let day= today.toLocaleDateString("en-US", options);
    res.render("list",{todaydate : day , newListItem : newItems});
})
app.post("/",(req,res)=>{
     newItem = req.body.newItem;
     newItems.push(newItem);
    res.redirect("/");
})
app.listen(3000,()=>{
    console.log("listining form port 3000");
})