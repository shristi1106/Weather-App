const API_KEY = "8ff6b1c427824112b02b9f92f1485bbb";

const fetchWeatherData = async (city) => {
  const response = await fetch(
    `https://api.weatherbit.io/v2.0/history/energy?city=${city}&start_date=2024-03-03&end_date=2024-03-10&threshold=63&units=I&key=${API_KEY}&tp=daily`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return response.json();
};

export default fetchWeatherData;
