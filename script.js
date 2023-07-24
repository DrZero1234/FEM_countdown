const DAYS_ELEM = document.querySelector(`[data-time="days"]`)
const HOURS_ELEM = document.querySelector(`[data-time="hours"]`)
const MINUTES_ELEM = document.querySelector(`[data-time="minutes"]`)
const SECONDS_ELEM = document.querySelector(`[data-time="seconds"]`)

const timeDiff = new Date();

timeDiff.setDate(timeDiff.getDate() + 14);

console.log(timeDiff)

let x = setInterval(() => {
    let now = new Date().getTime();

    let distance = timeDiff - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    DAYS_ELEM.querySelector("h2").textContent = days
    HOURS_ELEM.querySelector("h2").textContent =hours
    MINUTES_ELEM.querySelector("h2").textContent = minutes
    SECONDS_ELEM.querySelector("h2").textContent = seconds
    console.log(seconds)

},1000)
