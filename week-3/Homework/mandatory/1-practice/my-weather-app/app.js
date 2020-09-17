window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimeZone = document.querySelector('.location-timezone');
    let location = document.querySelector('.location');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const apiData = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4aff0052e540b2f342dbb41f0db9d5fa`;

            fetch(apiData)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    console.log(data.main.temp);

                    temperatureDegree.textContent = data.main.temp;
                    temperatureDescription.textContent = data.weather[0].description;
                    locationTimeZone.textContent= data.timezone;
                    //location.innerText= data.sys.country;
                })
        })

    };

});