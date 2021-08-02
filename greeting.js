const loginInput = document.querySelector("#login-form .input-group input")
const loginForm = document.querySelector("#login-form")
const greeting = document.querySelector("#greeting")
const hidden = "hidden"
const username_key = "username"


function greetInText(){
    const name = localStorage.getItem(username_key)
    greeting.innerText = `반가워요, ${name}님!`
    greeting.classList.remove(hidden)
}

function loginSubmit(event) { // 관행적으로 submit인자를 event로 씀
    event.preventDefault() 
    // submit 이벤트가 발생할 때 JS는 현재 함수를 호출하고 이 때 JS는 event object를 argument로 준다. 나는 이때 새로고침이 되는 걸 이 코드로 막는것이다.
    localStorage.setItem(username_key, loginInput.value)
    loginForm.classList.add(hidden)
    greetInText()
}

const savedName = localStorage.getItem(username_key)

if(savedName === null){
    loginForm.addEventListener("submit", loginSubmit)
}
else{
    loginForm.classList.add(hidden)
    greetInText()
}