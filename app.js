const express = require("express");

const app = express();
app.set('view engine', 'ejs'); //setup view engine


app.get("/", function(req, res) {
    let today = new Date();
    let myWeekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let myDay = myWeekDay[today.getDay()];

    res.render("list", {myDay: myDay}); // {mihinLähetetään: mitäLähetetään}
});


app.listen(3000, function() {
    console.log("server running!");
});