// put the weather on the top with one gif
// any entries will include search plus weather 

// display gifs in organized matter

var query_param = "Anime+Weather";
var appID = "dc6zaTOxFJmzC"; // public
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + query_param + "&api_key=" + appID;
console.log(queryURL);
var query_param1 = "Santa Monica";
var appID2 = "ad2a32bbb65b8db270ee6f7c72514b20";
var queryURL2 = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param1 + "&APPID=" + appID2;



    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log("GIPHY");  	
      console.log(response);
    });

     $.ajax({
      url: queryURL2,
      method: 'GET'
    }).done(function(response) {
      console.log("Weather");
      console.log(response);
    });

// var title = "space+jam";
//     var queryURL = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json";

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).done(function(response) {
//       console.log(response);
//       console.log(response.Runtime);
//       console.log(response.Actors)
//     });





console.log('file functional');