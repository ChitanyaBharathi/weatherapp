import { getWeather } from "./getweather.js";
import "./style.css";

let form = document.querySelector("#weatherForm");
let input = document.querySelector("#cityInput");

form.onsubmit = async function (e) {
  e.preventDefault();
  let city = input.value;
  await getWeather(city);
};
