import React from "react";
import { Typography } from "@mui/material";

// WeatherDetails component receives weatherData as props
const WeatherDetails = ({ weatherData }) => {
  // If weatherData is not yet available, display Loading...
  if (!weatherData) return <div>Loading...</div>;

  // Function to format the date into the full name of the weekday
  const formatDate = (dateStr) => {
    const options = { weekday: "long" };
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", options);
  };

  // Function to get the appropriate cloud image based on cloud coverage
  const getCloudImage = (clouds) => {
    if (clouds < 25) {
      return "../src/assets/clear.png";
    } else if (clouds < 50) {
      return "../src/assets/cloud.png";
    } else if (clouds < 75) {
      return "../src/assets/drizzle.png";
    } else {
      return "../src/assets/cloud.png";
    }
  };

  return (
    // Container for weather details
    <div className="weather-details-container">
      {/* Container for background image */}
      <div className="background-image">
        {/* Display city name */}
        <Typography variant="h4" className="city-name">
          {weatherData.city_name}
        </Typography>
      </div>

      {/* Container for weather content */}
      <div className="content-container">
        {/* Loop through each day's weather data */}
        {weatherData.data.map((dayData, index) => (
          <div key={index} className="weather-day">
            {/* Display full name of the weekday */}
            <Typography variant="body1" className="day-name">
              {formatDate(dayData.date)}
            </Typography>
            {/* Display temperature */}
            <Typography variant="body1" className="temperature">
              Temperature: {dayData.temp}°C
            </Typography>
            {/* Display cloud coverage */}
            <Typography variant="body1" className="clouds">
              Clouds: {dayData.clouds}%
            </Typography>
            {/* Display cloud image */}
            <div
              className="cloud-image"
              style={{
                backgroundImage: `url(${getCloudImage(dayData.clouds)})`,
              }}
            ></div>
            {/* Add more weather details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
