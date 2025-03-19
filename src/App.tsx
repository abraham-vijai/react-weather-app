import weatherLogo from "./assets/weather.svg";
import summerLogo from "./assets/summer.svg";
import TextGroup from "./components/TextGroup";
import TextIcon from "./components/TextIcon";
import WeatherCard from "./components/WeatherCard";
import { FaWind, FaSun } from "react-icons/fa";
import { CiDroplet } from "react-icons/ci";
import { IoSettingsOutline, IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import Modal from "./components/Modal";

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
    closeSettings(); // Close the settings modal after clicking an item
  };
  const menuItems = [
    { label: "Home", onClick: () => handleMenuItemClick("Home") },
    { label: "Profile", onClick: () => handleMenuItemClick("Profile") },
    { label: "Settings", onClick: () => handleMenuItemClick("Settings") },
    { label: "Logout", onClick: () => handleMenuItemClick("Logout") },
  ];
  const settingsItems = [
    { label: "Theme", onClick: () => handleSettingsItemClick("Theme") },
    { label: "Notifications", onClick: () => handleSettingsItemClick("Notifications") },
    { label: "Privacy", onClick: () => handleSettingsItemClick("Privacy") },
    { label: "Help", onClick: () => handleSettingsItemClick("Help") },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        background: "linear-gradient(-50deg, rgb(7, 10, 19), #2575fc)",
        color: "white",
      }}
    >
      {/* Menu and Settings Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "2.0rem",
          width: "95vw",
          marginTop: "20px",
        }}
      >
        <IoMenuSharp onClick={() => setMenuVisibility(true)} />
        <IoSettingsOutline onClick={() => setSettingsVisibility(true)} />
      </div>

      {/* Menu Modal */}
      <Modal
        heading="Menu"
        isModalOpen={isMenuOpen}
        closeModal={closeMenu}
        items={menuItems}
      />
      {/* Settings Modal */}
      <Modal
        heading="Settings"
        isModalOpen={isSettingsOpen}
        closeModal={closeSettings}
        items={settingsItems}
      />
      {/* Temperature, City, and Date */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "95vw",
        }}
      >
        {/* Temperature */}
        <div>
          <span style={{ fontSize: "80px", fontWeight: "bold" }}>23 °C</span>
        </div>

        {/* City and Date */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>Mumbai</span>
          <span style={{ fontSize: "16px" }}>Wednesday, 28 July 2021</span>
        </div>
      </div>

      {/* Weather Logo */}
      <img
        src={weatherLogo}
        alt="Weather logo"
        style={{ width: 300, height: 300 }}
      />

      {/* Weather Details */}
      <TextGroup text="29 °C" />
      <TextGroup text="Expected high rain today" />

      {/* Weather Icons */}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <TextIcon icon={<FaWind />} text="11 km/hr" />
        <TextIcon icon={<CiDroplet />} text="0.02%" />
        <TextIcon icon={<FaSun />} text="8 hr" />
      </div>

      {/* Today Section */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "10px",
        }}
      >
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Today</span>
      </div>

      {/* Weather Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
          overflowX: "auto",
          whiteSpace: "nowrap",
          width: "100%",
        }}
      >
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
