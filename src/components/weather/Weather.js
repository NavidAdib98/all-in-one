import axios from "axios";
import React, { useState } from "react";

//styles:
import styles from "./Weather.module.css";

const api = {
  key: "3833c4fc08423abdb7d73f06f63628a3",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [notFound, setNotFound] = useState(false);
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  const search = (event) => {
    if (event.key === "Enter") {
      axios
        .get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => {
          setWeather(res.data);
          setQuery("");
          setNotFound(false);
          console.log(res.data);
        })
        .catch((error) => {
          setWeather({});
          setNotFound(true);
        });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          type="text"
          placeholder="Search"
          className={styles.input}
        />
        {notFound && <p>city is not found...</p>}
        {typeof weather.main != "undefined" ? (
          <>
            <div className={styles.locationBox}>
              <div className={styles.location}>
                <br />
                {weather.name}, {weather.sys.country}
              </div>
              <div className={styles.date}>{dateBuilder(new Date())}</div>
            </div>
            <div className={styles.WeatherBox}>
              <div className={styles.temp}>
                {Math.round(weather.main.temp)} ºc
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className={styles.weather}>{weather.weather[0].main}</div>
                <img
                  className={styles.icon}
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                  alt="Weather icon"
                />
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Weather;
