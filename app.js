function displayMessage() {
    document.getElementById("message").textContent = "JavaScript is working!";
  }
  


/*const apiKey = "5f8b6cbb8f93b412d458af5167fb28f4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

function fetchWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `${apiUrl}?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      return response.json();
    })
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      alert("Could not retrieve data. Please try again.");
    });
}

function displayWeather(data) {
  const weatherTable = document.getElementById("weatherTable");
  const weatherData = document.getElementById("weatherData");



  const row = `<tr>
                <td>${data.weather[0].description}</td>
                <td>${data.main.temp}</td>
                <td>${data.main.humidity}</td>
              </tr>`;
  weatherData.innerHTML = row;


  weatherTable.classList.remove("hidden");
}
