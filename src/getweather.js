export async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=YCCS6K9QYXGRQUUJLMGPV6UXQ&unitGroup=metric`
    );

    const data = await response.json();
    const today = data.days[0];

    const result = document.querySelector("#weatherResult");
    result.innerHTML = ""; // Clear old results

    const location = document.createElement("h2");
    location.textContent = `📍 ${data.resolvedAddress}`;

    const date = document.createElement("p");
    date.textContent = `📅 Date: ${today.datetime}`;

    const temp = document.createElement("p");
    temp.textContent = `🌡️ Temp: ${today.temp} °C`;

    const condition = document.createElement("p");
    condition.textContent = `☁️ Condition: ${today.conditions}`;

    const humidity = document.createElement("p");
    humidity.textContent = `💧 Humidity: ${today.humidity} %`;

    const wind = document.createElement("p");
    wind.textContent = `💨 Wind Speed: ${today.windspeed} km/h`;

    result.append(location, date, temp, condition, humidity, wind);
  } catch (err) {
    console.error("❌ Error fetching weather:", err);
    const result = document.querySelector("#weatherResult");
    result.innerHTML = `<p style="color:red;">❌ Could not fetch weather for "${city}".</p>`;
  }
}
