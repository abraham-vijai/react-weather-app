import {
  MdKeyboardArrowRight,
  MdDarkMode,
  MdCircleNotifications,
} from "react-icons/md";
import { FaExclamationCircle, FaTemperatureHigh } from "react-icons/fa";
import {
  mainDivStyle,
  locationIconStyle,
  profileCircleStyle,
  settingsSectionStyle,
  settingsOptionStyle,
  settingsIconDivStyle,
  settingsTextStyle,
  profileDivStyle,
} from "./styles/SettingsStyles";
import SettingsOption from "./components/SettingsOption";
import IOSSwitch from "./components/IOSSwitch";
import { useState } from "react";
import TouchableOpacity from "./components/TouchableOpacity";
import { Dialog } from "@mui/material";

const Settings = () => {
  const [isImageVisible, setImageVisibility] = useState(false);
  return (
    <div style={mainDivStyle}>
      <div style={profileDivStyle}>
        {/* Profile circle */}
        <TouchableOpacity
          style={{
            border: 0,
            padding: 0,
            margin: 5,
            borderRadius: "50%",
            outline: "none",
          }}
          onClick={() => setImageVisibility(true)}
        >
          <div style={profileCircleStyle}>
            <img
              style={{ overflow: "hidden", borderRadius: "50%" }}
              src="https://picsum.photos/200"
              alt="profile image"
            />
          </div>
        </TouchableOpacity>

        {/* Enlarged Image */}
        <Dialog open={isImageVisible} onClose={() => setImageVisibility(false)}>
          <img src="https://picsum.photos/200" alt="no image" />
        </Dialog>

        {/* User name */}
        <span style={{ ...locationIconStyle, fontSize: 30 }}>John Smith</span>
      </div>

      {/* Settings section */}
      <div style={settingsSectionStyle}>
        {/* Settings text */}
        <span style={settingsTextStyle}>Settings</span>

        {/* Settings icons div */}
        <div style={settingsIconDivStyle}>
          {/* Dark Mode */}
          <SettingsOption
            text="Dark Mode"
            primaryIcon={<MdDarkMode />}
            secondaryIcon={<IOSSwitch />}
            style={settingsOptionStyle}
          />

          {/* Notifications */}
          <SettingsOption
            text="Notifications "
            primaryIcon={<MdCircleNotifications />}
            secondaryIcon={<IOSSwitch />}
            style={settingsOptionStyle}
          />

          {/* Unit */}
          <SettingsOption
            text="Unit"
            primaryIcon={<FaTemperatureHigh />}
            secondaryIcon={<MdKeyboardArrowRight />}
            style={settingsOptionStyle}
          />

          {/* About */}
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
