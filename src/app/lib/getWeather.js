import React from "react";
import Axios from "axios";

export default async function getWeather() {
  const r = Axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=Colombo&appid=5b0cf8dc7a67325da249436a01c3caae"
  );
  return (await r).data;
}
