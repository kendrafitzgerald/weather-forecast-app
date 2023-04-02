$( function() {
    $( "#selectable" ).selectable();
  } );

  var APIKey= "0ca98b6a40434df572129e17e48d6ead";
  var date;
  var icon;
  var cityName= document.querySelector("#search-result-name");
  var temp = document.querySelector("#temp");
  var humidity= document.querySelector("#humidity");
  var wind = document.querySelector("#wind");

  var searchButton = document.querySelector(".btn");

  var searchName= document.querySelector("#inputCityName2");

  function todayForecast (data) {
    cityName.textContent = data.name + " " + data.weather[0].icon;
    temp.textContent = "Temp: " + data.main.temp + " °F";
    wind.textContent= "Wind: " + data.wind.speed + " MPH";
    humidity.textContent = "Humidity: " + data.main.humidity + " %";


    console.log(data)
    

  };

  // function futureForecast (data) {

  // };


  function getWeather (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=0ca98b6a40434df572129e17e48d6ead").then(function(response){
      return response.json()
    }).then(function(data){
      todayForecast(data);
    });
  };
  // function getForecast (lat, lon) {
  //   fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + getWeather.data.coord.lat + "&lon=" + getWeather.data.coord.lon + "&appid=0ca98b6a40434df572129e17e48d6ead").then(function(response){
  //     return response.json()
  //   }).then(function(data){
  //     futureForecast(data);
  //     console.log(data);
  //   });
  // };

  searchButton.addEventListener("click", function(event){
    getWeather(searchName.value);
    // getForecast(searchName.value);
  });