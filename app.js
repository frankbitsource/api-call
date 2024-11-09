const apiKey = "5f8b6cbb8f93b412d458af5167fb28f4";
async function fetchWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherTable = document.getElementById("weatherTable");
  const weatherData = document.getElementById("weatherData");
  const errorMessage = document.getElementById("errorMessage");

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`, {
      timeout: 5000 
    });

    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("City not found (404)");
      } else if (response.status === 503) {
        throw new Error("Service temporarily unavailable (503)");
      } else {
        throw new Error("An error occurred. Please try again.");
      }
    }

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

    
    if (error.message.includes("404")) {
      errorMessage.textContent = "City not found. Please try again.";
    } else if (error.message.includes("503")) {
      errorMessage.textContent = "Weather service is currently unavailable. Please try later.";
    } else if (error.message.includes("timeout")) {
      errorMessage.textContent = "Request timed out. Check your internet connection.";
    } else {
      errorMessage.textContent = "An error occurred. Please try again.";
    }
  }
}

