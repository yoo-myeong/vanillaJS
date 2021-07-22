const clock = document.querySelector("#clock")

// interval이란 반복적으로 일어나야하는 것을 말함
// 예를 들어 2초마다 일어나야 하는 것

function getClock(){
    const date = new Date()
    clock.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

setInterval(getClock, 1000)