import { CSSProperties } from "react";

export const mainDivStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100vw",
  flexDirection: "column",
};

export const locationIconStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  fontSize: "1.0rem",
  margin: 0,
  padding: 0,
};

export const profileCircleStyle: CSSProperties = {
  
  height: "100px",
  width: "100px",
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
  margin: "10px",
  padding: 10,
  fontSize: "1.5rem",
}

export const settingsSectionStyle: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  height: "75vh",
  width: "100vw",
  background: "rgb(50, 50, 50)",
  boxShadow: "0px -5px 25px rgb(50, 50, 50)",
  color: "white",
  borderRadius: "20px 20px 0 0",
};

export const settingsIconDivStyle: CSSProperties={
  width: "100%",
  display: "flex",
  justifyContent: 'space-between',
  alignContent: 'center',
  flexDirection: 'column'
};
