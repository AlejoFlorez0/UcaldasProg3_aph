/** packages */
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

const app = express();
const jsonParser = bodyParser.json();
const urlEncodeParser = bodyParser.urlencoded(
    { extended: true }
)

app.use(jsonParser);
app.use(urlEncodeParser);

/**
 * User Route
 */
const userRoutes = require('./routes/user.route');

userRoutes(app);

app.listen(3000, () => {
    console.log("Server is running...");
});