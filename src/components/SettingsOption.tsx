import React from "react";
import TouchableOpacity from "./TouchableOpacity";

interface SettingsOptionProps {
  text: string;
  primaryIcon: React.ReactElement;
  secondaryIcon: React.ReactElement;
  style?: React.CSSProperties;
}

/**
 * Component: SettingsOption.tsx
 *
 * Description: A component that displays a settings option with a primary icon, text, and a secondary icon.
 *
 * Props:
 * @param {string} text - The text to display for the settings option.
 * @param {React.ReactElement} primaryIcon - The primary icon to display on the left side of the text.
 * @param {React.ReactElement} secondaryIcon - The secondary icon to display on the right side of the text.
 * @param {React.CSSProperties} [style] - Optional custom styles to apply to the container.
 *
 * Returns:
 * @returns {JSX.Element} - The rendered SettingsOption component.
 */
const SettingsOption = ({
  text,
  primaryIcon,
  secondaryIcon,
  style,
}: SettingsOptionProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "transparent",
        outline: "none",
        border: "none",
      }}
      onClick={() => console.log("clicked")}
    >
      <div style={style}>
        {React.cloneElement(primaryIcon)}
        <span
          style={{
            display: "flex",
            justifyContent: "flex-start",
            position: "absolute",
            marginLeft: 60,
          }}
        >
          {text}
        </span>
        {React.cloneElement(secondaryIcon)}
      </div>
    </TouchableOpacity>
  );
};

export default SettingsOption;
