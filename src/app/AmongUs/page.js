"use client";
import React, { useEffect, useState } from "react";
import getWeather from "../lib/getWeather";
import Testbar from "../Components/Testbar";

export default function AmongUs() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function WeatherCall() {
    try {
      setLoading(true);
      const response = await getWeather();
      setData(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    WeatherCall();
  }, []);

  return (
    <div>
      <Testbar></Testbar>
      <h1>Hello im among us lol</h1>

      {loading ? (
        <p>Loading...</p>
      ) : data && data.length ? (
        JSON.stringify(data)
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}
