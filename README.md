# Weather App

A simple and clean weather application that displays current weather information for any city using the OpenWeatherMap API.

## Features

- Search weather by city name
- Display current temperature, weather description, and icon
- Show humidity, wind speed, and rainfall data
- Clean and responsive user interface
- Enter key support for quick searches

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- npm (comes with Node.js)

## Installation

1. Clone this repository or download the files:
```bash
git clone <your-repository-url>
cd weather-app
```

2. Install the required dependencies:
```bash
npm install express node-fetch
```

3. Get your free API key from [OpenWeatherMap](https://openweathermap.org/api):
   - Sign up for a free account
   - Navigate to API keys section
   - Copy your API key

4. Replace the API key in `server.js`:
```javascript
const API_KEY = "your_api_key_here";
```

## Project Structure

```
weather-app/
├── server.js           # Express server and API endpoint
├── public/
│   └── index.html      # Frontend interface
├── package.json        # Project dependencies
└── README.md          # This file
```

## Running the Application

1. Start the server:
```bash
node server.js
```

2. Open your browser and navigate to:
```
http://localhost:8000
```

3. Enter a city name and click "Search" or press Enter to get the weather information.

## How It Works

- The frontend sends a request to the backend with the city name
- The backend calls the OpenWeatherMap API with your API key
- Weather data is retrieved and sent back to the frontend
- The interface displays the weather information in a clean card format

## API Endpoint

**GET** `/weather?city=<city_name>`

Returns weather data in JSON format:
```json
{
  "city": "London",
  "temperature": 15.5,
  "description": "clear sky",
  "humidity": 65,
  "wind_speed": 3.5,
  "icon": "01d",
  "rain": null
}
```

## Technologies Used

- **Backend:** Node.js, Express.js
- **API:** OpenWeatherMap API
- **Frontend:** HTML, CSS, JavaScript (Vanilla)

## Troubleshooting

**Server won't start:**
- Make sure port 8000 is not already in use
- Check that all dependencies are installed

**Weather data not loading:**
- Verify your API key is correct and active
- Check your internet connection
- Make sure the city name is spelled correctly

**404 City not found:**
- Try using the full city name
- Check spelling and try common variations

## License

This project is open source and available for personal and educational use.

## Credits

Weather data provided by [OpenWeatherMap](https://openweathermap.org/)