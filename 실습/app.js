const loginInput = document.querySelector("#login-form input")
const loginForm = document.querySelector("#login-form")
const greeting = document.querySelector("#greeting")


function loginSubmit(event) { // 관행적으로 submit인자를 event로 씀
    event.preventDefault() // submit 이벤트가 발생할 때 JS는 현재 함수를 호출하고 이 때 JS는 event object를 argument로 준다. 나는 이때 새로고침이 되는 걸 이 코드로 막는것이다.
    const name = loginInput.value
    const hidden = "hidden"
    loginForm.classList.add(hidden)
    greeting.innerText = `hello ${name}` // 변수를 string안에 넣는 방법. '이 아니고 `(느낌표키보드왼쪽)임을 유의
    greeting.classList.remove(hidden)
}

function handleLink(){
    alert("clicked")
}

loginForm.addEventListener("submit", loginSubmit)