import React, { useState } from "react";
import weatherLogo from "./assets/weather.svg";
import summerLogo from "./assets/summer.svg";
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
  weatherIconsStyle,
  todaySectionStyle,
  todayTextStyle,
  weatherCardsStyle,
} from "./styles/styles"; // Import styles

function App() {
  const [isMenuOpen, setMenuVisibility] = useState(false);
  const [isSettingsOpen, setSettingsVisibility] = useState(false);
  const closeMenu = () => setMenuVisibility(false);
  const closeSettings = () => setSettingsVisibility(false);

  const handleMenuItemClick = (label: string) => {
    console.log(`Clicked on ${label}`);
    closeMenu();
  };
  const handleSettingsItemClick = (label: string) => {
    console.log(`Clicked on ${label}`);
    closeSettings();
  };

  const menuItems = [
    { label: "Home", onClick: () => handleMenuItemClick("Home") },
    { label: "Profile", onClick: () => handleMenuItemClick("Profile") },
    { label: "Settings", onClick: () => handleMenuItemClick("Settings") },
    { label: "Logout", onClick: () => handleMenuItemClick("Logout") },
  ];

  const settingsItems = [
    { label: "Theme", onClick: () => handleSettingsItemClick("Theme") },
    {
      label: "Notifications",
      onClick: () => handleSettingsItemClick("Notifications"),
    },
    { label: "Privacy", onClick: () => handleSettingsItemClick("Privacy") },
    { label: "Help", onClick: () => handleSettingsItemClick("Help") },
  ];

  return (
    <div style={mainDivStyle}>
      {/* Menu and Settings Icons */}
      <div style={headerStyle}>
        <IoMenuSharp
          onClick={() => setMenuVisibility(true)}
          style={{ cursor: "pointer" }}
        />
        <IoSettingsOutline
          onClick={() => setSettingsVisibility(true)}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* Menu Modal */}
      <Modal
        heading="Menu"
        isModalOpen={isMenuOpen}
        closeModal={closeMenu}
        items={menuItems}
        style={modalStyle}
      />

      {/* Settings Modal */}
      <Modal
        heading="Settings"
        isModalOpen={isSettingsOpen}
        closeModal={closeSettings}
        items={settingsItems}
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
      <img src={weatherLogo} alt="Weather logo" style={weatherLogoStyle} />

      {/* Weather Details */}
      <TextGroup text="29 °C" />
      <TextGroup text="Expected high rain today" />

      {/* Weather Icons */}
      <div style={weatherIconsStyle}>
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
  );
}

export default App;
