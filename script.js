const apiKey = "9dd2b612125516bc8f57c11c64dc710d";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("#right input");
const searchBtn = document.querySelector("#right #search");

async function CheckWeather(city) {
    
    const response = await fetch(`${url}${city}&appid=${apiKey}`);
    const result = await response.json();
    console.log(result);

   
    const cityElem = document.querySelector("#city");
    const hmdtyElem = document.querySelector(".hmdty1");
    const temp1 = document.querySelector(".temp1");
    const temp2 = document.querySelector(".temp2");
    const windElem = document.querySelector(".wnd1");
	const errorElem = document.querySelector("#text");
	const min_temp= document.querySelector(".mintemp");
	const max_temp = document.querySelector(".maxtemp");
	const wind_deg = document.querySelector(".wnd_deg");
	const feels_like = document.querySelector(".feels_like");
	const hmdty2= document.querySelector(".hmdty2");
	const pressure = document.querySelector(".pressure");
	const sunrise = document.querySelector(".sunrise");
	const sunset = document.querySelector(".sunset");
	const wind_speed = document.querySelector(".wnd2")

    
    // const feel_like = document.querySelector(".feel_like");
    // const humidity = document.querySelector(".humidity");
    // const maxTemp = document.querySelector(".max_temp");
    // const minTemp = document.querySelector(".min_temp");
    // const temp = document.querySelector(".temp");
    // const sun_rise = document.querySelector(".sun_rise")
    // const sun_set = document.querySelector(".sun_set")
    // const wind_degrees = document.querySelector(".wind_degrees");
    // const windSpeed = document.querySelector(".wind_speed")

    
    if (result.cod === 200) {
        cityElem.innerHTML = result.name;
        hmdtyElem.innerHTML = `${result.main.humidity}`+"%"; 
        temp1.innerHTML = `${result.main.temp}°C`;
        temp2.innerHTML = `${result.main.temp}°C`;
        windElem.innerHTML = `${result.wind.speed} km/h`; 
		min_temp.innerHTML = `${result.main.temp_min}°C`;
		max_temp.innerHTML = `${result.main.temp_max}°C`;
		wind_deg.innerHTML = `${result.wind.deg}`;
		feels_like.innerHTML = `${result.main.feels_like}`;
		hmdty2.innerHTML = `${result.main.humidity}`+"%";
		pressure.innerHTML = `${result.main.pressure}`;
        const sunriseTime = new Date(result.sys.sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(result.sys.sunset * 1000).toLocaleTimeString();
        sunrise.innerHTML = sunriseTime;
        sunset.innerHTML = sunsetTime;
	    wind_speed.innerHTML = `${result.wind.speed} km/h`;

        // feel_like.innerHTML = `${result.main.feels_like}`;
        // humidity.innerHTML = `${result.main.humidity}`+"%"; 
		// maxTemp.innerHTML = `${result.main.temp_max}°C`;
        // minTemp.innerHTML = `${result.main.temp_min}°C`;
        // const sunrisetime = new Date(result.sys.sunrise * 1000).toLocaleTimeString();
        // const sunsettime = new Date(result.sys.sunset * 1000).toLocaleTimeString();
        // sun_rise.innerHTML = sunrisetime;
        // sun_set.innerHTML = sunsettime;
        // temp.innerHTML = `${result.main.temp}°C`;
        // wind_degrees.innerHTML = `${result.wind.deg}`;
        // windSpeed.innerHTML = `${result.wind.speed} km/h`;

    } 
	else {
        errorElem.innerHTML = "City not found! Please enter a valid city."
    }
}

searchBtn.addEventListener("click", function() {
    CheckWeather(searchBox.value);
});

CheckWeather("Delhi");

var about = document.querySelector("#about");
var full = document.querySelector(".full")
var close = document.querySelector("#close")

about.addEventListener("click",function(){
    full.style.display = "block"
})

close.addEventListener("click",function(){
    full.style.display = "none"
})


var tl = gsap.timeline()
tl.from('.full #abt',{
    x:100,
    delay:2,
    opacity:0,
    duration:1,
    
})
tl.from(".content p",{
    x:-200,
    opacity:0,
    stagger:0.2,
    duration:2,
})


var tl2 = gsap.timeline()
tl2.from('.cards .card',{
    x:-100,
    delay:1,
    opacity:0,
    duration:2,
    stagger:0.2,
})

