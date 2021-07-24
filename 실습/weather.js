const API_KEY = "27cb26f13aaa445f65012bcbe8e9453f"

function onGeoOK(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    console.log("you live in ", lat, lng)
    const url = `api.openweathermap.org/data/2.5/weather?lat={${lat}}&lon={${lon}}&appid={API key}&units=metric`
    const weather = fetch(url)
}

function onGeoError(){
    alert("can't find you")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError) 