const clock = document.querySelector("#h2")

// interval이란 반복적으로 일어나야하는 것을 말함
// 예를 들어 2초마다 일어나야 하는 것

function sayHello(){
    console.log("hello")
}

setInterval(sayHello, 5000)