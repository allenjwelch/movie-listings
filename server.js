const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
