const contanier = document.querySelector(".container");
const search = document.querySelector(".searchBox button");
const weatherBox = document.querySelector(".weatherBox");
const weatherDetails = document.querySelector(".weatherDetails");
const error404 = document.querySelector(".notFound");

search.addEventListener("click", () => {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&`;
  const APIKey = `76c2552d9a278c1fe4f5a1d528275b2e`;
  const city = document.querySelector(".searchBox input").value;

  if (city === "") {
  }
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
      if (json.cod == 404) {
        contanier.style.height = "400px";
        weatherDetails.style.display = "none";
        weatherBox.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fade-in");
        return;
      }
      error404.style.display = "none";
      error404.classList.remove("fade-in");

      const image = document.querySelector(".weatherBox img");
      const temprature = document.querySelector(".weatherBox .temperature");
      const description = document.querySelector(".weatherBox .description");
      const humidity = document.querySelector(".weatherDetails .humidity span");
      const wind = document.querySelector(".weatherDetails .wind span");

      switch (json.weather[0].main) {
        case "clear":
          image.src = "./image/clear.png";
          break;

        case "Rain":
          image.src = "./image/rain.png";
          break;

        case "Snow":
          image.src = "./image/snow.png";
          break;

        case "Clouds":
          image.src = "./image/cloud.png";
          break;

        case "Haze":
          image.src = "./image/mist.png";
          break;

        case "Mist" :
            image.src = "./image/mist.png";
            break;

        default :
            image.src = "";
      }

      temprature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
      
      weatherBox.style.display = '';
      weatherDetails.style.display = '';
      weatherBox.classList.add("fade-in")
      weatherDetails.classList.add("fade-in");
      contanier.style.height = "590px";




    });
});
