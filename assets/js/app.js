// put the weather on the top with one gif
// any entries will include search plus weather 

// display gifs in organized matter


var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
var queryURL2 = "http://api.openweathermap.org/data/2.5/weather?q="



    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });

     $.ajax({
      url: queryURL2,
      method: 'GET'
    }).done(function(response) {
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