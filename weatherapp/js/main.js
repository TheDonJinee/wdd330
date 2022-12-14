const apiKey = "1cb0512b8cdcd2339a4a393ee2652300";
const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');


async function fetchApi (city) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('weather', JSON.stringify(data));
            displayData(data);
            // console.log(data);
        } else {
            throw Error(response.text())
        }
    }

    catch (error) {
        console.log(error)
    }
};

function displayData(data) {
    data = null || JSON.parse(localStorage.getItem('weather'));
    if (data == null) {
        console.log("Empty")
    } else {
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

displayData([] || JSON.parse(localStorage.getItem('weather'))) 

function search() {
    const city = searchInput.value;
    fetchApi(city);
}

searchBtn.addEventListener('click', search)
document.addEventListener('keypress', function(e) {
    if(e.key == 'Enter'){
        search()
    }
})