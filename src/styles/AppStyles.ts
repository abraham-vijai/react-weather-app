import { CSSProperties } from "react";

// Main container styles
export const mainDivStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh", // Full viewport height
  width: "100vw", // Full viewport width
  background: "linear-gradient(-50deg, rgb(7, 10, 19), #2575fc)",
  color: "white",
};

// Modal styles
export const modalStyle: CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.0)", // Transparent background
  backdropFilter: "blur(7px)", // Add a blur effect
  position: "fixed",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
  alignItems: "center",
  width: "95vw",
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
export const weatherIconStyle: CSSProperties = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
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
export const weatherCardsStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  padding: 10,
  overflowX: "auto",
  whiteSpace: "nowrap",
  width: "100%",
};
