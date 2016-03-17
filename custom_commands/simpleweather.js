var cmds = [getWeather];
var HTTPS  = require('https');

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
    {cmd: "weather", desc: "reports temperature, wind, and cloudiness", mod: false}
  ];

  return cmdArr;
}

function getWeather(){
  var regex = /^\/getweather$/i;
  weather.temp
  weather.units.temp
  return
}

$(document).ready(function() {
  $.simpleWeather({
    location: 'State College, PA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});

//utilizes simpleweather.js (simpleweatherjs.com)
