const API_key = '9dac0a54e0fa84e7c5674a5d257922ae',
      API = 'https://api.openweathermap.org/data/2.5/'
      
      
const search = document.querySelector('.weather__input');
const city = document.querySelector('.weather__city');
const country = document.querySelector('.weather__country-mark');
const degree = document.querySelector('.weather__degree span');
const position = document.querySelector('.weather__position');
const img = document.querySelector('.weather__img');
const img2 = document.querySelector('.weather__img2');

search.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        fetch(`${API}weather?q=${search.value}&appid=${API_key}`)
        .then(res => res.json())
        .then(data => info(data))
    }
})
function info(data) {
    city.innerHTML = data.name
    country.innerHTML = data.sys.country
    position.innerHTML = data.weather[0].main
    degree.innerHTML = Math.round(data.main.temp - 273.15)
}