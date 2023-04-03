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
   cityName.textContent= data.city.name;
   temp.textContent= "Temp: " + data.list[0].main.temp;
   wind.textContent= "Wind: " + data.list[0].wind.speed + " MPH";
   humidity.textContent="Humidity: " + data.list[0].main.humidity + "%";


    console.log(data)
    

  };

  // function futureForecast(data) {

  // }


  function getWeather (city) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=0ca98b6a40434df572129e17e48d6ead&units=imperial").then(function(response){
      return response.json()
    }).then(function(data){
      todayForecast(data);
    });
  };

  // function getFuture (){
  //   fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon+ "&appid=0ca98b6a40434df572129e17e48d6ead").then(function(response){
  //     return response.json()
  //   }).then(function(data){
  //     futureForecast(data);
  //   })
  // }


  searchButton.addEventListener("click", function(event){
    getWeather(searchName.value);
    // getForecast(searchName.value);
  });