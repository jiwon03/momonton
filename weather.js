const API_KEY = "4c6a21c0d3a62d1473f8c7de70e109f6";
const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}
function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longtitude = position.coords.longtitude;
    const coordsObj = {
        latitude,
        longtitude
    }
    saveCoords(coordsObj);
}
function handleGeoError() {
    console.log("cant");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}
function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        //getWeather
    }
}
function init() {
    loadCoords();
}

init();