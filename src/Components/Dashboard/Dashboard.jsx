import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Dashboard component receives `onSearch` function as props
const Dashboard = ({ onSearch }) => {
   // State to manage the input value for city
  const [city, setCity] = useState("");
   // Hook from react-router-dom to navigate to different routes
  const navigate = useNavigate();

   // Function to handle search button click
  const handleSearch = () => {
    onSearch(city); // Call the `onSearch` function with the city as parameter
    navigate("/weather-details"); // Navigate to the weather-details route
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Weather Forecast</h1>
      <div className="search-bar-container">
          {/* Text field for entering city */}
        <TextField
          label="Enter a City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          // Styling for the text field
          sx={{
            width: "500px",
            "& fieldset": {
              borderColor: "#007bff", // Increase border color
            },
            "& input": {
              color: "white", // Text color
            },
          }}
        />
      </div>
       {/* Button to trigger the search */}
      <Button variant="contained" onClick={handleSearch}>
        Get Weather
      </Button>
    </div>
  );
};

export default Dashboard;
