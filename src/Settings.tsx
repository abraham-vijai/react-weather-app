import { IoLocation } from "react-icons/io5";
import {
  MdKeyboardArrowRight,
  MdDarkMode,
  MdCircleNotifications,
} from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";
import {
  mainDivStyle,
  locationIconStyle,
  profileCircleStyle,
  settingsSectionStyle,
  settingsOptionStyle,
  settingsIconDivStyle,
} from "./styles/SettingsStyles";
import SettingsOption from "./components/SettingsOption";
import IOSSwitch from "./components/IOSSwitch";
import TextIcon from "./components/TextIcon";

const Settings = () => {
  return (
    <div style={mainDivStyle}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        {/* Profile circle */}
        <div style={profileCircleStyle}>
          <span style={{ color: "white", fontSize: "1.5rem" }}>Profile</span>
        </div>
        {/* User name */}
        <span style={{ ...locationIconStyle, fontSize: 30 }}>
          John Smith
        </span>{" "}
        {/* Location */}
        <TextIcon
          style={locationIconStyle}
          text="Vancouver, CA"
          icon={<IoLocation />}
        />
      </div>

      {/* Settings section */}
      <div style={settingsSectionStyle}>
        <span
          style={{
            display: "flex",
            alignSelf: "flex-start",
            margin: 15,
            fontSize: "2.0rem",
          }}
        >
          Settings
        </span>
        {/* Settings icons div */}
        <div style={settingsIconDivStyle}>
          <SettingsOption
            text="Dark Mode"
            primaryIcon={<MdDarkMode />}
            secondaryIcon={<IOSSwitch />}
            style={settingsOptionStyle}
          />
          <SettingsOption
            text="Notifications "
            primaryIcon={<MdCircleNotifications />}
            secondaryIcon={<MdKeyboardArrowRight />}
            style={settingsOptionStyle}
          />
          <SettingsOption
            text="About"
            primaryIcon={<FaExclamationCircle />}
            secondaryIcon={<MdKeyboardArrowRight />}
            style={settingsOptionStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
