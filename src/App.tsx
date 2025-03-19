import weatherLogo from "./assets/weather.png";
import summerLogo from "./assets/summer.png";
import TextGroup from "./components/TextGroup";
import TextIcon from "./components/TextIcon";
import WeatherCard from "./components/WeatherCard";
import { FaWind, FaSun } from "react-icons/fa";
import { CiDroplet } from "react-icons/ci";
import { IoSettingsOutline, IoMenuSharp } from "react-icons/io5";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "2.0rem",
          width: "95vw",
          marginTop: "20px",
        }}
      >
        <IoMenuSharp onClick={() => console.log("clicked on menu")} />
        <IoSettingsOutline onClick={() => console.log("clicked on settings")} />
      </div>
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
          <text style={{ fontSize: "80px", fontWeight: "bold" }}>23 C</text>
        </div>

        {/* City and Date */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>Mumbai</text>
          <text style={{ fontSize: "16px" }}>Wednesday, 28 July 2021</text>
        </div>
      </div>
      <img
        src={weatherLogo}
        alt="Weather logo"
        style={{ width: 300, height: 300 }}
      />
      <TextGroup text="29 C" />

      <TextGroup text="Expected high rain today" />

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

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "10px",
        }}
      >
        <text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Today</text>
      </div>

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
