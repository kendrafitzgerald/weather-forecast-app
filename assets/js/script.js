$( function() {
    $( "#selectable" ).selectable();
  } );

  var APIKey= "0ca98b6a40434df572129e17e48d6ead";
  var cityName;
  var date;
  var temp;
  var humidity;
  var windSpeed;
  var icon;

  var currentWeatherUrl= "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;