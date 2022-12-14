export default class WeatherView {
    displayData(data) {
        data = JSON.parse(localStorage.getItem('weather'));
        const name = data.name;
        const icon = data.weather[0].icon;
        const description = data.weather[0].description;
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const speed = data.wind.speed;
        // console.log(name, icon, description, temp, speed, humidity)
        // document.querySelector('.search-bar').value = localStorage.getItem(location);
        document.querySelector('.city').innerText = `Weather in ${name}`;
        document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector('.icon').alt = `${description}`;
        document.querySelector('.description').innerHTML = description;
        document.querySelector('.temp').innerHTML = `${temp}&deg;C`;
        document.querySelector('.humidity').innerHTML = `${humidity}%`;
        document.querySelector('.wind').innerHTML = `${speed} km/h`;
        document.querySelector('.weather').classList.remove("loading");
        document.body.style.backgroundImage = `url('https://source.unsplash.com/800x534?${name}')`;
    }
    
}