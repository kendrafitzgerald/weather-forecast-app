

  var APIKey= "0ca98b6a40434df572129e17e48d6ead";
  var icon;

  //List of variables that correlate with city name and weather results for current day and 5 day forecast

  var cityName= document.querySelector("#search-result-name");
  var temp = document.querySelector("#temp");
  var humidity= document.querySelector("#humidity");
  var wind = document.querySelector("#wind");
  var forecastCityName= document.querySelector("#forecast-city-name");
  var dayOneDate= document.querySelector("#dayOneDate");
  var dayTwoDate=document.querySelector("#dayTwoDate");
  var dayThreeDate=document.querySelector("#dayThreeDate");
  var dayFourDate= document.querySelector("#dayFourDate");
  var dayFiveDate= document.querySelector("#dayFiveDate");
  var dayOneTemp= document.querySelector("#dayOneTemp");
  var dayTwoTemp= document.querySelector("#dayTwoTemp");
  var dayThreeTemp= document.querySelector("#dayThreeTemp");
  var dayFourTemp= document.querySelector("#dayFourTemp");
  var dayFiveTemp= document.querySelector("#dayFiveTemp");
  var dayOneHumidity= document.querySelector("#dayOneHumidity");
  var dayTwoHumidity=document.querySelector("#dayTwoHumidity");
  var dayThreeHumidity=document.querySelector("#dayThreeHumidity");
  var dayFourHumidity= document.querySelector("#dayFourHumidity");
  var dayFiveHumidity= document.querySelector("#dayFiveHumidity");
  var dayOneWind= document.querySelector("#dayOneWind");
  var dayTwoWind=document.querySelector("#dayTwoWind");
  var dayThreeWind=document.querySelector("#dayThreeWind");
  var dayFourWind=document.querySelector("#dayFourWind");
  var dayFiveWind=document.querySelector("#dayFiveWind");

  //Variable for search button element
  var searchButton = document.querySelector(".btn");
  //Variable for search name input
  var searchName= document.querySelector("#inputCityName2");
  //Function that runs once fetch request is called upon click, adds appropriate text content for weather conditions to page
  function forecast (data) {
   cityName.textContent= "Today's Weather In: " + data.city.name;
   temp.textContent= "Temp: " + data.list[0].main.temp + " °F";
   wind.textContent= "Wind: " + data.list[0].wind.speed + " MPH";
   humidity.textContent="Humidity: " + data.list[0].main.humidity + "%";

   dayOneDate.textContent= data.list[3].dt_txt.slice(0, 11);
   dayOneTemp.textContent= "Temp: " + data.list[3].main.temp+ " °F";
   dayOneWind.textContent= "Wind: " + data.list[3].wind.speed + " MPH";
   dayOneHumidity.textContent= "Humidity: " + data.list[3].main.humidity + "%";

   dayTwoDate.textContent= data.list[11].dt_txt.slice(0, 11);
   dayTwoTemp.textContent= "Temp: " + data.list[11].main.temp+ " °F";
   dayTwoWind.textContent= "Wind: " + data.list[11].wind.speed + " MPH";
   dayTwoHumidity.textContent= "Humidity: " + data.list[19].main.humidity + "%";

   dayThreeDate.textContent= data.list[19].dt_txt.slice(0, 11);
   dayThreeTemp.textContent= "Temp: " + data.list[19].main.temp+ " °F";
   dayThreeWind.textContent= "Wind: " + data.list[19].wind.speed + " MPH";
   dayThreeHumidity.textContent= "Humidity: " + data.list[19].main.humidity + "%";

   dayFourDate.textContent= data.list[27].dt_txt.slice(0, 11);
   dayFourTemp.textContent= "Temp: " + data.list[27].main.temp+ " °F";
   dayFourWind.textContent= "Wind: " + data.list[27].wind.speed + " MPH";
   dayFourHumidity.textContent= "Humidity: " + data.list[27].main.humidity + "%";

   dayFiveDate.textContent= data.list[35].dt_txt.slice(0, 11);
   dayFiveTemp.textContent= "Temp: " + data.list[35].main.temp+ " °F";
   dayFiveWind.textContent= "Wind: " + data.list[35].wind.speed + " MPH";
   dayFiveHumidity.textContent= "Humidity: " + data.list[35].main.humidity + "%";

  console.log(data)
    

  };






  //Function with fetch request to get data from Open Weather API
  function getWeather (city) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=0ca98b6a40434df572129e17e48d6ead&units=imperial").then(function(response){
      return response.json()
    }).then(function(data){
      forecast(data);
    });
  };

//Event listener so when the search button is clicked, user input triggers fetch request
  searchButton.addEventListener("click", function(event){
    getWeather(searchName.value);

  });

  var savedCityList= [];

  function getStorage() {

    var savedCities = JSON.parse(localStorage.getItem("cityArray"))

    if (!savedCities) {
      
    }
    for (var i = 0; i < savedCities.length; i++) {
    }

    var buttonList= document.querySelector(".savedButtons");
    var savedCity= document.createElement("button");
    savedCity.setAttribute("class", "savedCities");
    savedCity.textContent = searchName.value;
    buttonList.appendChild(savedCity);
};
  
//todos activity