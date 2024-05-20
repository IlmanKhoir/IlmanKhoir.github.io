import React from "react";
import "../FloatingWeatherButton.css";

export default function FloatingWeatherButton() {
  return (
    <div>
      <a href="/weather-check" className="floating-button" data-bs-toggle="tooltip" data-bs-placement="left" title="Cek cuaca di destinasi yang kamu tuju!">
        🌤️
      </a>
    </div>
  );
};
