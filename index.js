const changeMode = () => {
    let mybody = document.body;
    mybody.classList.toggle('mylight');
}
 
function onloadPage(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('opac').style.opacity = '0.3';
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('opac').style.opacity = '1';

}

// geo location
let x = document.getElementById('latitude')
let y = document.getElementById('longitude')
let z = document.getElementById('weather')

function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        alert("Geo Not Supported")
    }
}

function showPosition(data){
    console.log(data)
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    x.innerText = `Latitude is ${lat}`;
    y.innerText = `longitude is ${lon}`;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    //api calling
    fetch(url,{method:'GET'})
    //return promise
    .then((res) => res.json())
    //resolve promise
    .then((data) => {
        console.log(data)
        let cityname = data.city.name;
        let temp = data.list[0].temp.day+" c";
        z.innerText = `weather of ${cityname} is ${temp} `;
    })
}

function openpage(){
    document.getElementById('weathercoupon').style.visibility = 'visible';
}
 function closeweather(){
    document.getElementById('weathercoupon').style.visibility = 'hidden';
 }