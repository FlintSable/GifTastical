var gifMachine = {
    topics: ['architecture',
        'parametric',
        'boids',
        'lsd',
        'star fox',
        'eon flux',
        'generative',
        'p5js',
        'processing',
        'fluid simpulation',
        '3d graphics',
        'loading',
        'adventure time'
    ],

    weatherJax: function() {


        var query_param = "Anime+Weather";
        var appID = "dc6zaTOxFJmzC"; // public
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + query_param + "&api_key=" + appID;
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function(response) {
            console.log("GIPHY");
            console.log(response);
        });
    },

    giphyJax: function() {
        var query_param1 = "Santa Monica";
        var appID2 = "ad2a32bbb65b8db270ee6f7c72514b20";
        var queryURL2 = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param1 + "&APPID=" + appID2;
        console.log(this.topics[3]);

        $.ajax({
            url: queryURL2,
            method: 'GET'
        }).done(function(response) {
            console.log("Weather");
            console.log(response);
        });


    },

    buttonGenerator: function() {
        $('#buttons').empty();
        console.log(this.topics[3] + ' in the generator');
        for (i = 0; i < this.topics.length; i++) {
            var bttn = $('<button />', {
                "class": 'abstract',
                "data-value": this.topics[i].replace(" ", "+"),
                text: this.topics[i]
            });
            $('#buttons').append(bttn);

        }
    }


};



gifMachine.giphyJax();
gifMachine.weatherJax();
gifMachine.buttonGenerator();








console.log('file functional');
