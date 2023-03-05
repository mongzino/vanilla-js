const apiKey = "16de498ae543ada1fa33a3b93f13a279";
const city = document.querySelector(".weather span:first-child");
const weather = document.querySelector(".weather span:last-child");

function onGeoWorks(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit={10}&appid=${apiKey}}`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoErrors(){
    alert("can't find you, no weather fou you.");
}

navigator.geolocation.getCurrentPosition(onGeoWorks, onGeoErrors);