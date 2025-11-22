const express = require('express');
const app = express();
const port = 8000;

// Node-fetch import for all Node versions
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const API_KEY = "9ce8ae678529c8d42384c9b7d0f84bd7";

// Serve static files from "public" folder
app.use(express.static('public'));

app.listen(port, () => {
    console.log("Server is running on port", port);
});

// Weather API
app.get('/weather', async (req, res) => {
    const city = req.query.city;

    if (!city) return res.json({ error: 'City is required' });

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        if (data.cod === "404") return res.json({ error: "City not found" });

       /* res.json({
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed
        });*/

        res.json({
    city: data.name,
    temperature: data.main.temp,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    wind_speed: data.wind.speed,
    icon: data.weather[0].icon,
    rain: data.rain || null
});

    } catch (err) {
        res.json({ error: "Something went wrong", details: err.message });
    }
});
