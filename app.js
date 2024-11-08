5f8b6cbb8f93b412d458af5167fb28f4
const apiKey = "5f8b6cbb8f93b412d458af5167fb28f4";

async function fetchWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherTable = document.getElementById("weatherTable");
  const weatherData = document.getElementById("weatherData");
  const errorMessage = document.getElementById("errorMessage");

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    weatherTable.classList.remove("hidden");
    errorMessage.classList.add("hidden");

    weatherData.innerHTML = `
      <tr><td class="p-2 border-b border-gray-200">City</td><td class="p-2 border-b border-gray-200">${data.name}</td></tr>
      <tr><td class="p-2 border-b border-gray-200">Temperature</td><td class="p-2 border-b border-gray-200">${data.main.temp} °C</td></tr>
      <tr><td class="p-2 border-b border-gray-200">Humidity</td><td class="p-2 border-b border-gray-200">${data.main.humidity} %</td></tr>
      <tr><td class="p-2 border-b border-gray-200">Weather</td><td class="p-2 border-b border-gray-200">${data.weather[0].description}</td></tr>
    `;
  } catch (error) {
    weatherTable.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
}
