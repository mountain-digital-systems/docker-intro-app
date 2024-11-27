const express = require('express');
const axios = require('axios')
const app = express();

// const db = require('./persistence');
// const getItems = require('./routes/getItems');
// const addItem = require('./routes/addItem');
// const updateItem = require('./routes/updateItem');
// const deleteItem = require('./routes/deleteItem');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(__dirname + '/static'));

// Render the index template with default values for weather and error
app.get('/', (req, res) => {
    res.render("index", {weather: null, error: null});
});

// Handle the /weather route
app.get("/weather", async (req, res) => {
    const city = req.query.city;
    const apiKey = 'a430fcbe924c00c330aa563071017ac4'
      
    const APIUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}';

    let weather;
    let error = null

    try {
        const response = await axios.get(APIUrl);
        console.log(response)

        weather = response.data;
    } catch (error) {
        weather = null;
        error = "Error, Please try again";
    }
    // Render the index template with the weather data and error message
    res.render("index", {weather: null, error: null});
});

// Start the server and listn on port 3000
const port = process.env.PORT || 30000;

app.listen(port, () => {
    console.log('App is runnign on port ${port}')
});




db.init().then(() => {
    app.listen(3000, () => console.log('Listening on port 3000'));
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon
