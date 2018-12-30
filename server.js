const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, '/public')))
app.use(cors());
app.use(routes); 

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/public')))
}

//Add routes, both API and view
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});


// app.get('/', function (req, res) {
//     res.send('hello world')
//   })

// app.get('/', function (req, res) {
//     console.log('app.get');
//     res.sendfile('./dist/index.html')
// })