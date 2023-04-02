$( function() {
    $( "#selectable" ).selectable();
  } );

  var APIKey= "0ca98b6a40434df572129e17e48d6ead";
  var date;
  var temp;
  var humidity;
  var windSpeed;
  var icon;

  var searchButton = document.querySelector(".btn");

  var searchName= document.querySelector("#inputCityName2");


  function getWeather (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=0ca98b6a40434df572129e17e48d6ead&units=imperial").then(function(response){
      return response.json()
    }).then(function(data){
      console.log(data)
    })
  }

  searchButton.addEventListener("click", function(event){
    getWeather(searchName.value);
  })