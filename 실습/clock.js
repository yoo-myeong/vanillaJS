const clock = document.querySelector("#clock")

// interval이란 반복적으로 일어나야하는 것을 말함
// 예를 들어 2초마다 일어나야 하는 것

// 시계만들때 JS는 padStart를 사용하여 문자열길이를 2로 통일 시킬 수 있다.
function getClock(){
    const date = new Date()
    const hour = String(date.getHours()).padStart(2,"0")
    const minute = String(date.getMinutes()).padStart(2,"0")
    const second = String(date.getSeconds()).padStart(2,"0")

    

    clock.innerText=`${hour}:${minute}:${second}`
}

getClock()
setInterval(getClock, 1000)