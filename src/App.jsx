import { useState } from "react";

import "./App.css";

import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
console.log(API_KEY);
const App = () => {
  const [weather, setWeather] = useState(null);
  const [position, setPosition] = useState([51.505, -0.09]); // Default to London
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeather(null);
    }
  };

  const searchLocation = async () => {
    if (!search) return;
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${search}`
      );
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setPosition([parseFloat(lat), parseFloat(lon)]);
        fetchWeather(lat, lon);
      }
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        fetchWeather(lat, lng);
      },
    });
    return null;
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <div className="sidebar">
        <h2>Weather Info</h2>
        <input
          type="text"
          placeholder="Search city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchLocation}>Search</button>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        {weather ? (
          <div className="weather-details">
            <h3>
              {weather.name || `Lat: ${position[0]}, Lon: ${position[1]}`}
            </h3>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        ) : (
          <p>Click on the map or search for a city to get weather info.</p>
        )}
      </div>
      <MapContainer center={position} zoom={5} className="map-container">
        <TileLayer
          url={
            darkMode
              ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          }
        />
        <MapClickHandler />
        <Marker position={position}>
          <Popup>Selected Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default App;
