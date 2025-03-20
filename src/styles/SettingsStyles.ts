import { CSSProperties } from "react";

export const mainDivStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  flexDirection: "column",
};

export const locationIconStyle: CSSProperties = {
  position: "fixed",
  top: 195,
  display: "flex",
  alignItems: "center",
  fontSize: "1.0rem",
  margin: 10,
  padding: 20,
};

export const profileCircleStyle: CSSProperties = {
  position: "relative",
  bottom: 360,
  height: "170px",
  width: "170px",
  backgroundColor: "lime",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const settingsOptionStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "90%",
  margin: "20px auto",
  padding: 10,
  fontSize: "1.8rem",
}

export const settingsSectionStyle: CSSProperties = {
  position: "fixed",
  bottom: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  height: "70vh",
  width: "100vw",
  background: "rgb(50, 50, 50)",
  boxShadow: "0px -5px 25px rgb(50, 50, 50)",
  color: "white",
  borderRadius: "20px 20px 0 0",
};
