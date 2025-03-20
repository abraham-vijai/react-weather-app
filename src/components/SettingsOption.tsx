import React from "react";

interface SettingsOptionProps {
  text: string;
  primaryIcon: React.ReactElement;
  secondaryIcon: React.ReactElement;
  style?: React.CSSProperties;
}
const SettingsOption = ({
  text,
  primaryIcon,
  secondaryIcon,
  style,
}: SettingsOptionProps) => {
  return (
    <div style={style}>
      {React.cloneElement(primaryIcon)}
      <span style={{ display: "flex", position: "absolute", left: 80 }}>
        {text}
      </span>
      {React.cloneElement(secondaryIcon)}
    </div>
  );
};

export default SettingsOption;
