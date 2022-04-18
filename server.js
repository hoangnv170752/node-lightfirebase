const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(require('./utils/cors'));

app.use(bodyParser.json())
app.engine("html", ejs.renderFile);
app.use(express.static("static"));
app.use('/',require('./routes'));

app.get("/", function(req, res) {
    res.render("home.html");
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});