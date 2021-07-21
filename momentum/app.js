// 두가지 데이터타입 number, string

// variables를 만드는 두가지 방법 const, let
// const는 안바뀌고 let은 바뀔수있음

// 세번째 데이터타입 boolen : true, false, null

// 배열 : 파이썬과 같은 리스트형식, const나 let으로 설정.
// push, pop 가능

// Objects , {}을 사용해서 생성. json형식으로 생성, value에는 함수도 들어갈 수 있음

// function null() {} 

// parseInt("15")는 정수 15를 반환, 문자형숫자를 정수형으로 변환
// isNaN() 은 number가 아니면 true를 반환, 즉 문자라는 것

// if(){}로 조건문사용. and는 &&, or는 ||로 사용
// equal은 === 사용

const h1 = document.getElementById("h1")
//함수는 number or string을 인자로 받음. h1에 html의 object를 가져와서 저장함. 
// 만약 getElementByClassName을 사용해서 class = h1인 여러개의 태그를 선택한다면 array로 저장한다. [h1.h1, h1.h1 ...] 처럼.

console.log(h1.innerText)
// h1의 element중 innerText라는 key를 선택하여 그의 value를 가져옴

const h2 = document.querySelector("h1")
// element를 CSS방식으로 검색할 수 있음 태그, 클래스, id 별로 선택가능 몰론 띄어쓰기로 복합해서도 사용가능
// querySelector는 오직 하나만 가져온다. 여러개를 가져오고 싶으면 querySelectorAll을 사용해야 한다.

console.dir(h2)
// h12 object가 가지는 모든 element를 확인할 수 있다.
// 이 중에는 style이라는 element가 있는데 이것은 다시 object로 그 안에 여러 element를 포함한다.

h2.style.color = "blue"

// 이런것도 중요하지만 JS에서 대부분 할 작업은 event를 listen하는 것.

function handleTitileClick() {
    h2.style.color = "orange"
}

h1.addEventListener("click", handleTitileClick)
// handleh1Click이라는 함수를 만듬. click을 했을 때 event를 listen하도록 추가했고 그 때 실행시킬 함수를 적음
// 함수뒤에 ()가 붙으면 실행이 되므로 함수이름만 전달해서 필요할때만 이름을 통해 실행하도록 ()을 생략하고 적는다

// listen하고 싶은 event를 찾는 가장좋은 방법은 구글에 찾고싶은 element의 이름과 html element mdn을 붙여서 검색
// console.dir을 통해서도 on이 붙은 element를 통해 사용가능한 event를 찾을 수 있다

//onmouseenter을 사용하려면 on을 떼고 리스너에 추가하면된다.
function handleTitileClick2() {
    h1.innerText = "mouse is here"
}

function handleTitileClick3() {
    h1.innerText = "mouse is gone"
}

h1.addEventListener("mouseenter", handleTitileClick2)
h1.addEventListener("mouseleave", handleTitileClick3)

// event를 listening하는 또다른 방법
// oneventname property에 event listener를 할당함으로써 event를 listen
//h1.onclick = handleTitileClick 와 같이 사용.
// 하지만 addEventListener를 사용하는 걸 선호
// 왜냐하면 removeEventListner을 통해 지울 수도 있음

const h3 = document.querySelector("#h3")
h3.style.color = "blue"

function h3Handle(){
    if(h3.style.color === 'blue'){
        h3.style.color = 'tomato'
    }
    else{
        h3.style.color = 'blue'
    }
}
h3.addEventListener("click", h3Handle)