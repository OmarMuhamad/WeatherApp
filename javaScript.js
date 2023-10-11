const apiKey = "70c857eb227d2763ce87589ee9258e49";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";


async function checkWeather(city = "cairo"){
    const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    if (data.message === "city not found"){
        document.querySelector(".city").innerHTML = "UNKNOWN";
        document.querySelector(".temp").innerHTML = 0;
        document.querySelector(".humidity").innerHTML = 0;
        document.querySelector(".wind").innerHTML = 0;
        return; 
    }
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.ceil(data.main.temp);
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.ceil(data.wind.speed) + " km/h";
    let icon = document.querySelector(".weatherIcon");

    if (data.weather[0].main === "Clouds"){
        icon.src = "images/clouds.png"
    }
    else if (data.weather[0].main === "Clear"){
        icon.src = "images/clear.png";
    }
    else if (data.weather[0].main === "Drizzle"){
        icon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main === "Rain"){
        icon.src = "images/rain.png"
    }
    else if (data.weather[0].main === "Snow"){
        icon.src = "images/snow.png"
    }
    else if (data.weather[0].main === "Mist"){
        icon.src = "images/mist.png"
    }
    document.querySelector(".weather").style.display = "block";
}



let searchBtn = document.querySelector(".searchBox button");
searchBtn.addEventListener("click", ()=>{
    let searchBox = document.querySelector(".searchBox input").value;
    checkWeather(searchBox);
})

//checkWeather()