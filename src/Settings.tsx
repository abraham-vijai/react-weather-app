import { IoLocation } from "react-icons/io5";
import { MdKeyboardArrowRight, MdDarkMode, MdCircleNotifications } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";
import {
  mainDivStyle,
  locationIconStyle,
  profileCircleStyle,
  settingsSectionStyle,
  settingsOptionStyle,
} from "./styles/SettingsStyles";
import SettingsOption from "./components/SettingsOption";
import IOSSwitch from "./components/IOSSwitch";
import TextIcon from "./components/TextIcon";

const Settings = () => {
  return (
    <div style={mainDivStyle}>
      <div style={profileCircleStyle}>
        {/* Placeholder for profile picture */}
        <span style={{ color: "white", fontSize: "1.5rem" }}>Profile</span>
      </div>
      <span style={{ ...locationIconStyle, fontSize: 30, top: 150 }}>
        John Smith
      </span>{" "}
      <TextIcon
        style={locationIconStyle}
        text="Vancouver, CA"
        icon={<IoLocation />}
      />
      <div style={settingsSectionStyle}>
        <span
          style={{
            display: "flex",
            alignSelf: "flex-start",
            margin: 20,
            fontSize: "2.5rem",
          }}
        >
          Settings
        </span>
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 0,
            width: "100%",
            zIndex: 1,
          }}
        >
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
