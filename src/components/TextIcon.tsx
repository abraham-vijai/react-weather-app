import React from "react";

interface TextIconProps {
  icon: React.ReactElement; // This allows any React element to be passed as an icon
  text: string;
}

const TextIcon: React.FC<TextIconProps> = ({ icon, text }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "1.2rem",
        margin: 10,
        padding: 20
      }}
    >
      {React.cloneElement(icon)}
      {/* Render the icon with optional styling */}
      <span>{text}</span> {/* Use a span for the text */}
    </div>
  );
};

export default TextIcon;
