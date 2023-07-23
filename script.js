let now = new Date();

const diff_time = new Date(new Date().setDate(new Date().getDate() + 14));

const increment_now  = () => {
    now = new Date()
    console.log(now)
    console.log(((diff_time - now) / 86400))
}

setInterval(increment_now,1000)

console.log(now)