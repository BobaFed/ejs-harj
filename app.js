const express = require("express");
const date = require(__dirname + "/date.js"); // importataan oma moduuli :D
const app = express();


app.set('view engine', 'ejs'); //setup view engine

app.use(express.urlencoded({ extended: true }));
// activoidaan body-parser
app.use(express.static("public"));
// saadaan yhteys staattisiin fileihin esim css, skeleton html jne.

let myItems = [];
let workItems =[];

app.get("/", function (req, res) {
    
    let myDay = date.getDay();
    res.render("list", { listTitle: myDay, listItem: myItems }); // {mihinLähetetään: mitäLähetetään}
});


app.post("/", function (req, res){
    let item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        myItems.push(req.body.newItem);
        res.redirect("/");
    }
   
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work list", listItem: workItems});
});

// tällein helposti sivuja? buttonin valuen muuttaminen 


app.listen(3000, function () {
    console.log("server running!");
});