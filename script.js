fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=mountains")
    .then(res => res.json())
    .then(data => {
        document.querySelector("body").style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("img-author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://unsplash.com/photos/e26NG9Mv_dQ)`
    })


fetch("https://api.coingecko.com/api/v3/coins/monero")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById("crypto-top").innerHTML = `
            <img src="${data.image.small}" />
            <span>${data.name}</span>
        `
        document.getElementById("crypto-container").innerHTML += `
            <p>🎯: £${data.market_data.current_price.gbp}</p>
            <p>👆: £${data.market_data.high_24h.gbp}</p>
            <p>👇: £${data.market_data.low_24h.gbp}</p>
        `
    })
.catch(err => console.error(err))



navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

            document.getElementById("weather").innerHTML = `
                <div class="weather-top">
                    <img src=${iconUrl} />
                    <p>${Math.round(data.main.temp)}º</p>
                </div>
                <p id="place-name">${data.name}</p>
            `
        })
    .catch(err => console.error(err))
});



function getCurrentTime() {
    let currentTime = (new Date().toLocaleTimeString('en-UK', 
    { hour: 'numeric', hour12: true, minute: 'numeric' }
    )).toUpperCase()

document.getElementById("time").textContent = currentTime
}

setInterval(getCurrentTime, 1000)


fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById("quote").innerHTML = `
            <p>"${data.content}"</p>
            <p id="quote-author">~ ${data.author} ~</p>
        `
})