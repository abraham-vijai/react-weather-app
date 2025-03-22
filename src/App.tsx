import { FaWind, FaSun } from "react-icons/fa";
import { CiDroplet } from "react-icons/ci";
import { IoSettingsOutline, IoMenuSharp } from "react-icons/io5";
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
  weatherCardDivStyle,
  weatherIconStyle,
} from "./styles/AppStyles";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import weatherLogo from "./assets/weather.svg";
import TextGroup from "./components/TextGroup";
import TextIcon from "./components/TextIcon";
import WeatherCard from "./components/WeatherCard";
import Modal from "./components/Modal";
import Settings from "./Settings";

/* eslint-disable @typescript-eslint/no-explicit-any */

function App() {
  // -----------------------------------------------
  // STATES
  // -----------------------------------------------
  const [isMenuOpen, setMenuVisibility] = useState(false);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any[]>([]);
  const menuItems = [
    { label: "Home", onClick: () => handleMenuItemClick("Home") },
    { label: "Profile", onClick: () => handleMenuItemClick("Profile") },
    { label: "Settings", onClick: () => handleMenuItemClick("Settings") },
    { label: "Logout", onClick: () => handleMenuItemClick("Logout") },
  ];

  // -----------------------------------------------
  // FUNCTIONS
  // -----------------------------------------------
  /**
   * Function: closeMenu
   *
   * Description: Closes the menu by setting the menu visibility state to false.
   *
   * Parameters:
   * None
   *
   * Returns:
   * @returns {void} - No return value.
   */
  const closeMenu = () => setMenuVisibility(false);
  /**
   * Function: handleMenuItemClick
   *
   * Description: Handles event when menu item is clicked
   *
   * Parameters:
   * @param {string} string - Name of the clicked button
   *
   * Returns:
   * @returns {void} - void
   */
  const handleMenuItemClick = (label: string) => {
    console.log(`Clicked on ${label}`);
    closeMenu();
  };
  /**
   * Function: groupForecastByDay
   *
   * Description: Groups the forecast data by day, extracting the first item of each day to represent the daily forecast.
   *
   * Parameters:
   * @param {any[]} forecastList - The list of forecast data to group by day.
   *
   * Returns:
   * @returns {any[]} - An array of grouped daily forecast data.
   */
  const groupForecastByDay = (forecastList: any[]) => {
    const grouped: { [key: string]: any[] } = {};

    forecastList.forEach((item) => {
      // Convert the timestamp to a Date object
      const date = new Date(item.dt * 1000);
      // Use the date in "YYYY-MM-DD" format as the key
      const dateKey = date.toISOString().split("T")[0];

      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(item);
    });

    return Object.keys(grouped).map((dateKey) => {
      const dailyItems = grouped[dateKey];
      const firstItem = dailyItems[0];

      return {
        date: new Date(dateKey), // Store the date as a Date object
        temperature: Math.round(firstItem.main.temp),
        weather: firstItem.weather[0].main,
        icon: firstItem.weather[0].icon,
      };
    });
  };
  /**
   * Function: formatDate
   *
   * Description: Formats a timestamp into a human-readable date string, adjusted for the given timezone.
   *
   * Parameters:
   * @param {number} timestamp - The timestamp to format.
   * @param {number} timezone - The timezone offset in seconds.
   *
   * Returns:
   * @returns {string} - The formatted date string.
   */
  const formatDate = (timestamp: number, timezone: number) => {
    const date = new Date((timestamp + timezone) * 1000);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // -----------------------------------------------
  // USE EFFECT
  // -----------------------------------------------
  // Fetch 5-day/3-hour forecast data
  useEffect(() => {
    /**
     * Function: fetchForecast
     *
     * Description: Fetches the 5-day/3-hour forecast data for a given city and groups it by day.
     *
     * Parameters:
     * @param {string} city - The city to fetch forecast data for.
     *
     * Returns:
     * @returns {Promise<void>} - No return value.
     */
    const fetchForecast = async (city: string) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY // Use import.meta.env for Vite
        }&units=metric`; // Use metric units for Celsius
        const response = await fetch(url);
        const data = await response.json();

        // Group forecast data by day
        const groupedForecast = groupForecastByDay(data.list);
        setForecastData(groupedForecast);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };
    fetchForecast("Kitchener"); // Fetch forecast data for Toronto
  }, []);
  // Fetch weather data
  useEffect(() => {
    /**
     * Function: search
     *
     * Description: Fetches the current weather data for a given city and stores it in state.
     *
     * Parameters:
     * @param {string} city - The city to fetch weather data for.
     *
     * Returns:
     * @returns {Promise<void>} - No return value.
     */
    const search = async (city: string) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`; // Use metric units for Celsius
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    search("Kitchener");
  }, []);

  // -----------------------------------------------
  // RETURN
  // -----------------------------------------------
  return (
    <Routes>
      {/* Home Route */}
      <Route
        path="/"
        element={
          <div style={mainDivStyle}>
            <div style={headerStyle}>
              {/* Menu Icon */}
              <IoMenuSharp
                onClick={() => setMenuVisibility(true)}
                style={{ cursor: "pointer" }}
              />

              {/* Settings Icon Navigation */}
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

            {/* Expected Text */}
            <TextGroup text="Expected high rain today" />

            {/* Weather Icons */}
            <div style={weatherIconDivStyle}>
              {/* Wind Icon */}
              <TextIcon
                icon={<FaWind />}
                style={weatherIconStyle}
                text={
                  weatherData ? `${weatherData.wind.speed} km/h` : "Loading..."
                }
              />
              {/* Droplet Icon */}
              <TextIcon
                icon={<CiDroplet />}
                style={weatherIconStyle}
                text={
                  weatherData ? `${weatherData.main.humidity} %` : "Loading..."
                }
              />
              {/* Sun Icon */}
              <TextIcon icon={<FaSun />} style={weatherIconStyle} text="8 hr" />
            </div>

            {/* Today Section */}
            <div style={todaySectionStyle}>
              <span style={todayTextStyle}>7 day forecast</span>
            </div>

            {/* Weather Cards */}
            <div style={weatherCardDivStyle}>
              {forecastData.map((day, index) => (
                <WeatherCard
                  key={index}
                  temperature={day.temperature}
                  tempUnit="°C"
                  time={day.date.toLocaleDateString("en-US", {
                    weekday: "short", // Display the day of the week (e.g., "Mon")
                  })}
                  imgSrc={`http://openweathermap.org/img/wn/${day.icon}@4x.png`}
                />
              ))}
            </div>
          </div>
        }
      />

      {/* Settings Route */}
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
