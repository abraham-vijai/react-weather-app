
interface WeatherCardProps {
  temperature: number;
  tempUnit: string;
  imgSrc: string;
  time: string;
}

/**
 * Component: WeatherCard.tsx
 *
 * Description: A component that displays weather information, including temperature, a weather icon, and the time.
 *
 * Props:
 * @param {number} temperature - The temperature value to display.
 * @param {string} tempUnit - The unit of the temperature (e.g., "°C" or "°F").
 * @param {string} imgSrc - The source URL of the weather icon image.
 * @param {string} time - The time or date to display (e.g., "Mon" or "10 AM").
 *
 * Returns:
 * @returns {JSX.Element} - The rendered WeatherCard component.
 */
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
          margin: 0,
          padding: 10,
          backgroundColor: "rgba(0, 115, 255, 0.33)",
        }}
      >
        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          {temperature} {tempUnit}
        </span>
        <img
          src={imgSrc}
          alt="Weather icon"
          style={{ width: 55, height: 55, margin: "10px 0" }}
        />
        <span style={{ fontSize: "1.2rem" }}>{time}</span>
      </div>
  );
};

export default WeatherCard;
