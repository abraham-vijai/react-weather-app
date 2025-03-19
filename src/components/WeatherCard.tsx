interface WeatherCardProps {
  temperature: number;
  tempUnit: string;
  imgSrc: string;
  time: string;
}
const WeatherCard = ({
  temperature,
  tempUnit,
  time,
  imgSrc,
}: WeatherCardProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid rgb(0, 166, 255)",
        borderRadius: 10,
        margin: 2,
        padding: 10,
        width: "fit-content",
        backgroundColor: "rgba(0, 115, 255, 0.33)",
      }}
    >
      <text style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        {temperature} {tempUnit}
      </text>
      <img
        src={imgSrc}
        alt="Summer logo"
        style={{ width: 50, height: 50, margin: "10px 0" }}
      />
      <text style={{ fontSize: "0.9rem" }}>{time}</text>
    </div>
  );
};

export default WeatherCard;
