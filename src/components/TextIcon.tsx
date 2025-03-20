import React from "react";

interface TextIconProps {
  icon: React.ReactElement;
  text: string;
  style?: React.CSSProperties;
}

/**
 * Component: TextIcon.tsx
 *
 * Description: A component that displays an icon alongside text. The icon and text can be styled using optional CSS properties.
 *
 * Props:
 * @param {React.ReactElement} icon - The icon element to display.
 * @param {string} text - The text to display alongside the icon.
 * @param {React.CSSProperties} [style] - Optional custom styles to apply to the container.
 *
 * Returns:
 * @returns {JSX.Element} - The rendered TextIcon component.
 */
const TextIcon = ({ icon, text, style }: TextIconProps) => {
  return (
    <div style={style}>
      {React.cloneElement(icon)}
      <span>{text}</span>
    </div>
  );
};

export default TextIcon;
