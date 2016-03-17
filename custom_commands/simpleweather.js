var cmds = [getWeather];
var HTTPS  = require('https');
var wind = 0;
var temp = 0;
var sky = 'none';

//exports
exports.modName = "Get Weather";

exports.checkCommands = function(dataHash, callback) {
  for (cmd in cmds) {
    var test = cmds[cmd](dataHash.request, dataHash.bots, callback);
    if (test)
      return test;
  }
}

exports.getCmdListDescription = function () {
  cmdArr = [
    {cmd: "weather", desc: "reports temperature, wind, and sky condition", mod: false}
  ];

  return cmdArr;
}

function getWeather(){
  var regex = /^\/getweather$/i;
  
  return temp;
}

$(document).ready(function() {
  $.simpleWeather({
    location: 'State College, PA',
    woeid: '',
    unit: 'f',
    
    success: function(weather) {
      //html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      wind = weather.wind.speed;
      temp = weather.temp;
      sky  = weather.currently;
      
    
      //$("#weather").html(html);
    },
    error: function(error) {
      //$("#weather").html('<p>'+error+'</p>');
      
    }
  });
});

//utilizes simpleweather.js (simpleweatherjs.com)
