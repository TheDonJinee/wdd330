import weatherModel from './weatherModel.js';
import weatherView from './weatherView.js';
 
export default class weatherController {
    constructor(city, searchInput, searchBtn) {
        this.city = document.querySelector(city).value;
        this.searchInput = document.querySelector(searchInput).value;
        this.searchBtn = document.querySelector(searchBtn).value;
        this.weatherModel = new weatherModel('1cb0512b8cdcd2339a4a393ee2652300', this.searchInput, this.searchBtn);
        this.weatherView = new weatherView();
    }

    // const apiKey = "1cb0512b8cdcd2339a4a393ee2652300";
    // const searchInput = document.querySelector('.search-bar');
    // const searchBtn = document.querySelector('.search-btn');


    async fetchApi (city) {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey;
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                weatherModel.sav
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
}

 