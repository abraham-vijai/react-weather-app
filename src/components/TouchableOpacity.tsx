import React, { useState } from "react";

interface TouchableOpacityProps {
  onClick: () => void; // Function to call when clicked
  children: React.ReactNode; // Content to wrap
  activeOpacity?: number; // Opacity value when pressed (default: 0.5)
  style?: React.CSSProperties; // Custom styles
}

const TouchableOpacity: React.FC<TouchableOpacityProps> = ({
  onClick,
  children,
  activeOpacity = 0.1,
  style,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    onClick();
  };

  return (
    <button
      style={{
        opacity: isActive ? activeOpacity : 1, // Apply opacity when active
        transition: "opacity 0.1s ease-in-out", // Smooth transition
        cursor: 'pointer', // Show pointer cursor        
        ...style, // Apply custom styles
      }}
      onMouseUp={() => setIsActive(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={handleClick} // Handle click event
    >
      {children}
    </button>
  );
};

export default TouchableOpacity;
