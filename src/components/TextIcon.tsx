import React from "react";

interface TextIconProps {
  icon: React.ReactElement;
  text: string;
  style?: React.CSSProperties; 
}

const TextIcon = ({ icon, text, style }: TextIconProps) => {
  return (
    <div style={style}>
      {React.cloneElement(icon)}
      <span>{text}</span> 
    </div>
  );
};

export default TextIcon;
