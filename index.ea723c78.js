!function(){function n(n,a){var t="".concat("https://api.openweathermap.org/data/2.5/","/weather?lat=").concat(n,"&lon=").concat(a,"&units=metric&appid=").concat("6e3e286b7ba6b78d37123d7ccd0b674f");fetch(t).then((function(n){return n.json()})).then((function(n){var a="".concat(Math.floor(n.main.temp),"°"),t=n.weather[0].description;console.log(n.weather[0].description);var e,i=t.split(" ").map((function(n){return n.charAt(0).toUpperCase()+n.slice(1)})).join(" ").split(" ").slice(1).join(" "),c=n.name,o="".concat(n.main.humidity,"%"),s=(3.6*n.wind.speed).toFixed(0),d="".concat(s," km/h"),r={Clear:{day:"images/day_sun.png",night:"images/night_moon.png"},Rain:{day:"images/day_rain.png",night:"images/night_rain.png"},Snow:{day:"images/day_snow.png",night:"images/night_snow.png"},Clouds:{day:"images/day_clouds.png",night:"images/night_clouds.png"},Haze:{day:"images/day_haze.png",night:"images/night_haze.png"},default:{day:"images/day_404.png",night:"images/night_404.png"}},l=(new Date).getHours(),g=n.weather[0].main;e=r[g]?l>=20||l<6?r[g].night:r[g].day:r.default.day;var p=document.getElementById("weather-card-container"),h=new Date,m=h.toLocaleDateString("en-US",{weekday:"short"}),u=h.getFullYear(),w=h.toLocaleDateString("en-US",{month:"short"}),v=h.toLocaleDateString("en-US",{day:"numeric"});p.innerHTML='\n          <div class="weather__header ">\n              <i class="weather__temperature">'.concat(a,'</i>\n       \n              <div class="weather__description">\n                  <span class="description">').concat(i,'</span>\n                  <div class="weather__location">                             \n                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4Z"/><circle cx="16" cy="13" r="4" fill="none"/></svg>\n                      <p class="weather__city">').concat(c,'</p>\n                  </div>  \n              </div>  \n          </div> \n\n            <img class="weather__img slide-in-blurred-top" src="').concat(e,'" alt="').concat(i,'">\n\n            <p class="current-date">').concat(m,'</p>\n            <p class="current-date">').concat(v," ").concat(w," ").concat(u,'</p>\n            \n          <div class="weather-details">\n            <div class="humidity">\n              <i class="fa-solid fa-water"></i>\n              <div class="text">\n                  <span>').concat(o,'</span>\n                  <p>Humidity</p>\n              </div>\n            </div>                \n            <div class="wind">\n                <i class="fa-solid fa-wind"></i>\n                <div class="text">\n                    <span>').concat(d,"</span>\n                    <p>Wind Speed</p>\n                </div>\n            </div>    \n          </div>")})).catch((function(n){return console.log(n)}))}navigator.geolocation?navigator.geolocation.getCurrentPosition((function(a){var t=a.coords;n(t.latitude,t.longitude)}),(function(){n(40.7067188,-74.0671347)})):console.log("Geolocation is not supported by this browser.")}();
//# sourceMappingURL=index.ea723c78.js.map
