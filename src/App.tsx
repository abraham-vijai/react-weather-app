import { useEffect, useState } from "react";
import weatherLogo from "./assets/weather.svg";
import TextGroup from "./components/TextGroup";
import TextIcon from "./components/TextIcon";
import WeatherCard from "./components/WeatherCard";
import { FaWind, FaSun } from "react-icons/fa";
import { CiDroplet } from "react-icons/ci";
import { IoSettingsOutline, IoMenuSharp } from "react-icons/io5";
import Modal from "./components/Modal";
import {
  mainDivStyle,
  modalStyle,
  headerStyle,
  tempCityDateStyle,
  tempTextStyle,
  cityTextStyle,
  dateTextStyle,
  weatherLogoStyle,
  weatherIconDivStyle,
  todaySectionStyle,
  todayTextStyle,
  weatherCardsStyle,
  weatherIconStyle,
} from "./styles/AppStyles";
import Settings from "./Settings";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */

function App() {
  const [isMenuOpen, setMenuVisibility] = useState(false);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any[]>([]);

  const closeMenu = () => setMenuVisibility(false);

  const handleMenuItemClick = (label: string) => {
    console.log(`Clicked on ${label}`);
    closeMenu();
  };

  const menuItems = [
    { label: "Home", onClick: () => handleMenuItemClick("Home") },
    { label: "Profile", onClick: () => handleMenuItemClick("Profile") },
    { label: "Settings", onClick: () => handleMenuItemClick("Settings") },
    { label: "Logout", onClick: () => handleMenuItemClick("Logout") },
  ];

  // Fetch 5-day/3-hour forecast data
  useEffect(() => {
    const fetchForecast = async (city: string) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY // Use import.meta.env for Vite
        }&units=metric`; // Use metric units for Celsius
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        // Group forecast data by day
        const groupedForecast = groupForecastByDay(data.list);
        setForecastData(groupedForecast);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    fetchForecast("Kitchener"); // Fetch forecast data for Toronto
  }, []);

  // Group 3-hourly forecast data into daily averages
  const groupForecastByDay = (forecastList: any[]) => {
    const grouped: { [key: string]: any[] } = {};

    forecastList.forEach((item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString(); // Get the date (e.g., "10/25/2023")
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(item);
    });

    // Convert grouped data into an array of daily forecasts
    return Object.keys(grouped).map((date) => {
      const dailyItems = grouped[date];
      const firstItem = dailyItems[0]; // Use the first item of the day for simplicity
      return {
        date,
        temperature: Math.round(firstItem.main.temp),
        weather: firstItem.weather[0].main,
        icon: firstItem.weather[0].icon,
      };
    });
  };
  const formatDate = (timestamp: number, timezone: number) => {
    const date = new Date((timestamp + timezone) * 1000);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  // Fetch weather data
  useEffect(() => {
    const search = async (city: string) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`; // Use metric units for Celsius
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data); // Store the fetched data in state
        console.log(data);

        console.log(new Date(data.sys.sunset * 1000 - data.timezone * 1000));
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    search("Kitchener");
  }, []);
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div style={mainDivStyle}>
              {/* Menu and Settings Icons */}
              <div style={headerStyle}>
                <IoMenuSharp
                  onClick={() => setMenuVisibility(true)}
                  style={{ cursor: "pointer" }}
                />
                {/* Navigate to settings page */}
                <Link to="/Settings">
                  <IoSettingsOutline style={{ cursor: "pointer" }} />
                </Link>
              </div>
              {/* Menu Modal */}
              <Modal
                heading="Menu"
                isModalOpen={isMenuOpen}
                closeModal={closeMenu}
                items={menuItems}
                style={modalStyle}
              />
              {/* Temperature, City, and Date */}
              <div style={tempCityDateStyle}>
                {/* Temperature */}
                <div>
                  <span style={tempTextStyle}>
                    {weatherData
                      ? `${Math.round(weatherData.main.temp)} °C`
                      : "Loading..."}
                  </span>
                </div>
                {/* City and Date */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <span style={cityTextStyle}>
                    {weatherData ? weatherData.name : "Loading..."}
                  </span>
                  <span style={dateTextStyle}>
                    {weatherData
                      ? formatDate(weatherData.dt, weatherData.timezone)
                      : "Loading..."}
                  </span>
                </div>
              </div>
              {/* Weather Logo */}
              <img
                src={weatherLogo}
                alt="Weather logo"
                style={weatherLogoStyle}
              />
              {/* Weather Details */}
              <TextGroup
                text={
                  weatherData
                    ? `Feels like ${Math.round(weatherData.main.temp)} °C`
                    : "Loading..."
                }
              />
              <TextGroup text="Expected high rain today" />
              {/* Weather Icons */}
              <div style={weatherIconDivStyle}>
                <TextIcon
                  icon={<FaWind />}
                  style={weatherIconStyle}
                  text={
                    weatherData
                      ? `${weatherData.wind.speed} km/h`
                      : "Loading..."
                  }
                />
                <TextIcon
                  icon={<CiDroplet />}
                  style={weatherIconStyle}
                  text={
                    weatherData
                      ? `${weatherData.main.humidity} %`
                      : "Loading..."
                  }
                />
                <TextIcon
                  icon={<FaSun />}
                  style={weatherIconStyle}
                  text="8 hr"
                />
              </div>
              {/* Today Section */}
              <div style={todaySectionStyle}>
                <span style={todayTextStyle}>Today</span>
              </div>
              {/* Weather Cards */}
              <div style={weatherCardsStyle}>
                {forecastData.map((day, index) => (
                  <WeatherCard
                    key={index}
                    temperature={day.temperature}
                    tempUnit="°C"
                    time={new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                    imgSrc={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
                  />
                ))}
              </div>
            </div>
          }
        />
        {/* Settings Route */}
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
