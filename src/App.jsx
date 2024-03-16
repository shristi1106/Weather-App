import { useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import WeatherDetails from "./Components/WeatherDetails/WeatherDetails";
import fetchWeatherData from "./Services/weatherService";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeatherData(city);
      console.log(data, "data");
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError("Failed to fetch weather data");
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/dashboard" />}></Route>
        <Route
          path="/dashboard"
          element={<Dashboard onSearch={handleSearch} />}
        />
        <Route
          path="/weather-details"
          element={<WeatherDetails weatherData={weatherData} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
