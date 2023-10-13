var city="";

var searchButton = $("#search-button");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty= $("#humidity");
var currentWSpeed=$("#wind-speed");
var currentUvindex= $("#uv-index");
var sCity=[];
var clearButton = $("#clear-history");
var searchCity = $("#search-city");

//search storage for cities
function find(c){
    for (var i=0; i<sCity.length; i++){
        if(c.toUpperCase()===sCity[i]){
            return -1;
        }
    }
    return 1;
}
//ApiKey
var APIKey="b9d8e2b2f3a2c4f2c1a1d0c9d1b1f8e4";
