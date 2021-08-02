const API_KEY = "27cb26f13aaa445f65012bcbe8e9453f"

function onGeoOK(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    console.log("you live in ", lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url).then((response)=> response.json()).then((data)=> {
        const img = document.querySelector("#weather img")
        const icon= data.weather[0].icon;
        localStorage.setItem("loc",icon)
        img.src = `http://openweathermap.org/img/w/${icon}.png`
    })

}

function onGeoError(){
    alert("can't find you")
}

const loc = localStorage.getItem("loc")

if(loc === null){
    navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError) 
}
else{
    const img = document.querySelector("#weather img")
    const icon= loc
    img.src = `http://openweathermap.org/img/w/${icon}.png`
}

