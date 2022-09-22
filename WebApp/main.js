let weather = {
    apiKey : "b9f009af2cd7e507ceb60787c57584b6",
    /* Function makes use of api to return the information of the city*/
    fetchWeather: function(city){
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city
        + "&units=metric&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));

    },
    /* takes the values in the api that are returned in a variable */
    displayWeather:function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity } = data.main;
        const {speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + name + "')"
     
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);

    },
};
document
.querySelector(".search button")
.addEventListener("click", function () {
weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        weather.search();
    }

});
weather.fetchWeather("Dallas");
