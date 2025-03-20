# React Weather App

A simple and elegant weather application built with React, TypeScript, and the OpenWeatherMap API. This app provides real-time weather information, including current weather, an 8-day forecast, and additional details like wind speed, humidity, and more.

---

## Features

- **Current Weather**: Displays the current temperature, city, and date.
- **8-Day Forecast**: Shows the weather forecast for the next 8 days using weather cards.
- **Weather Details**: Provides additional information like wind speed, humidity, and expected weather conditions.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Customizable Settings**: Includes a settings modal for future customization (e.g., dark mode).

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript for better code quality.
- **OpenWeatherMap API**: Provides real-time weather data and forecasts.
- **React Icons**: A collection of popular icons for React applications.
- **CSS-in-JS**: Styling is done using inline styles and CSS objects.

---

## Getting Started

Follow these steps to set up and run the app on your local machine.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- An API key from [OpenWeatherMap](https://openweathermap.org/)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add your OpenWeatherMap API key:
     ```env
     VITE_WEATHER_API_KEY=your_api_key_here
     ```

4. **Run the App**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

5. **Open the App**:
   - Visit `http://localhost:3000` in your browser.

---

## Project Structure

```
weather-app/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images and icons
│   ├── components/          # Reusable components (e.g., WeatherCard, TextIcon)
│   ├── styles/              # CSS-in-JS styles
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Entry point
│   └── ...
├── .env                     # Environment variables
├── .gitignore               # Files and directories to ignore in Git
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
└── ...
```

---

## Usage

### Current Weather
- The app displays the current temperature, city, and date at the top of the page.
- The weather logo and additional details (e.g., wind speed, humidity) are shown below.

### 8-Day Forecast
- Scroll horizontally to view the 8-day forecast.
- Each weather card displays the day of the week, temperature, and weather icon.

### Settings
- Click the settings icon (⚙️) to open the settings modal.
- Future updates will include options like dark mode and unit preferences.

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- [React Icons](https://react-icons.github.io/react-icons/) for the icons used in the app.

---

## Screenshots

Will Add Later

---

Enjoy using the Weather App! 🌦️
