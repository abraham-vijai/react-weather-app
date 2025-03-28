import { CSSProperties } from "react";

export const mainDivStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100vw",
  flexDirection: "column",
  fontFamily: 'monospace'
};

export const profileDivStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: 20,
};

export const settingsTextStyle: CSSProperties = {
  display: "flex",
  alignSelf: "flex-start",
  margin: 15,
  fontSize: "1.5rem",
};

export const locationIconStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  fontSize: "1.0rem",
  margin: 0,
  padding: 0,
};

export const profileCircleStyle: CSSProperties = {
  height: "150px",
  width: "150px",
  borderRadius: "50%",
  display: "flex",
  boxShadow: "0px 0px 15px .05px white",
  justifyContent: "center",
  alignItems: "center",
};

export const settingsOptionStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "90%",
  margin: "5px",
  padding: 10,
  fontSize: "1.25rem",
};

export const settingsSectionStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "75vh",
  width: "100%",
  background: "rgb(50, 50, 50)",
  borderRadius: "20px 20px 0 0",
};

export const settingsIconDivStyle: CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
  flexDirection: "column",
};
