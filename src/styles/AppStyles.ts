import { CSSProperties } from "react";

// Main container styles
export const mainDivStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  height: "100%", // Full viewport height
  width: "100vw", // Full viewport width
  background: "linear-gradient(-50deg, rgb(207, 17, 150), #2575fc)",
  color: "white",
};

// Header styles (menu and settings icons)
export const headerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "2.0rem",
  width: "95vw",
  marginTop: "20px",
};

// Temperature, city, and date container styles
export const tempCityDateStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  borderRadius: 10,
  padding: 10,
  alignItems: "center",
  width: "90vw",

};

// Temperature text styles
export const tempTextStyle: CSSProperties = {
  fontSize: "80px",
  fontWeight: "bold",
};

// City and date text styles
export const cityTextStyle: CSSProperties = {
  fontSize: "24px",
  fontWeight: "bold",
};

export const dateTextStyle: CSSProperties = {
  fontSize: "16px",
};

// Weather logo styles
export const weatherLogoStyle: CSSProperties = {
  width: 300,
  height: 300,
};

// Weather icons container styles
export const weatherIconDivStyle: CSSProperties = {
  display: "flex",
  width: "90%",
  fontSize: "1.25rem",
  justifyContent: "space-between",
  alignContent: "center",
  padding: 30
};

// Sidebar styles
export const SidebarStyle: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", 
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};

// Menu Sidebar styles
export const menuSidebarDivStyle: React.CSSProperties = {
  backgroundColor: "rgb(49, 49, 49)",
  display: "flex",
  flexDirection: "column",
  padding: 10,
  width: "60%",
  height: "100%",
  color: "white",
  fontSize: "1.2rem",
  transform: "translateX(-100%)", // Start off-screen
  transition: "transform 0.3s ease-in-out", // Slide-in transition
  
};

// Weather icon item style
export const weatherIconStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

// Today section styles
export const todaySectionStyle: CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  paddingLeft: "10px",
};

// Today text styles
export const todayTextStyle: CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "bold",
};

// Weather cards container styles
export const weatherCardDivStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  overflowX: "auto",
  whiteSpace: "nowrap",
  width: "100%",
};
