// const clock = document.querySelector('#clock')
const clock = document.getElementById("clock")

// console.log(clock)

setInterval(() => {
    let date = new Date() 
    // console.log(date)
    // console.log(date.toLocaleTimeString())
    clock.innerHTML=date.toLocaleTimeString()
}, 1000);