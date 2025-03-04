# Weather Map App

## Overview

This is a React-based weather application that allows users to interact with a map, select a location, and fetch real-time weather data using the OpenWeatherMap API. It also includes features like dark mode and a search bar for better usability.

## Features

- **Interactive Map**: Uses React Leaflet to allow users to click on any location and get weather details.
- **Weather Data**: Fetches weather data from OpenWeatherMap API based on latitude and longitude.
- **Search Functionality**: Allows users to search for a city and center the map on it.
- **Dark Mode**: Users can toggle between light and dark themes.
- **Responsive UI**: Optimized for desktop, tablet, and mobile views with stunning UI elements.

## Tech Stack

- **React** (Frontend framework)
- **React Leaflet** (Map integration)
- **Axios** (API requests)
- **OpenWeatherMap API** (Weather data)
- **CSS** (Styling)

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd weather-map-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```sh
   REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser to view the application.

## Assumptions

- The OpenWeatherMap API key is available and correctly configured.
- The application requires an internet connection to fetch weather data.
- Location search functionality relies on Nominatim OpenStreetMap API.

## Repository Link

[GitHub Repository](https://github.com/Mulaudzi-F/Weather-App/tree/master)

## Live site Link

[Live link](https://67c6e46ffc27321ee8dc9953--frabjous-tartufo-93305b.netlify.app/)
