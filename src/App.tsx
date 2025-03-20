import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
  weatherIconStyle,
  todaySectionStyle,
  todayTextStyle,
  weatherCardsStyle,
} from "./styles/AppStyles";
import Settings from "./Settings";
import weatherLogo from "./assets/weather.svg";
import summerLogo from "./assets/summer.svg";
import TextGroup from "./components/TextGroup";
import TextIcon from "./components/TextIcon";
import WeatherCard from "./components/WeatherCard";
import Modal from "./components/Modal";

function App() {
  const [isMenuOpen, setMenuVisibility] = useState(false);
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
                  <span style={tempTextStyle}>23 °C</span>
                </div>

                {/* City and Date */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <span style={cityTextStyle}>Mumbai</span>
                  <span style={dateTextStyle}>Wednesday, 28 July 2021</span>
                </div>
              </div>

              {/* Weather Logo */}
              <img
                src={weatherLogo}
                alt="Weather logo"
                style={weatherLogoStyle}
              />

              {/* Weather Details */}
              <TextGroup text="29 °C" />
              <TextGroup text="Expected high rain today" />

              {/* Weather Icons */}
              <div style={weatherIconStyle}>
                <TextIcon icon={<FaWind />} text="11 km/hr" />
                <TextIcon icon={<CiDroplet />} text="0.02%" />
                <TextIcon icon={<FaSun />} text="8 hr" />
              </div>

              {/* Today Section */}
              <div style={todaySectionStyle}>
                <span style={todayTextStyle}>Today</span>
              </div>

              {/* Weather Cards */}
              <div style={weatherCardsStyle}>
                <WeatherCard
                  temperature={23}
                  tempUnit="°C"
                  time="12:00"
                  imgSrc={summerLogo}
                />
                <WeatherCard
                  temperature={23}
                  tempUnit="°C"
                  time="12:00"
                  imgSrc={summerLogo}
                />
                <WeatherCard
                  temperature={23}
                  tempUnit="°C"
                  time="12:00"
                  imgSrc={summerLogo}
                />
                <WeatherCard
                  temperature={23}
                  tempUnit="°C"
                  time="12:00"
                  imgSrc={summerLogo}
                />
                <WeatherCard
                  temperature={23}
                  tempUnit="°C"
                  time="12:00"
                  imgSrc={summerLogo}
                />
                <WeatherCard
                  temperature={23}
                  tempUnit="°C"
                  time="12:00"
                  imgSrc={summerLogo}
                />
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
