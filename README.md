[노마드코더](https://nomadcoders.co/javascript-for-beginners) 강의를 공부하면서 배운 내용들을 정리했다. 모멘텀이라는 할 일 관리 웹페이지를 VanilaJS로만 코딩하면서 javascript에 대한 이해도를 높였다.

<br>

:sparkles: 
# JS를 배워야 하는 이유

+ 모든 컴퓨터에는 자바스크립트가 내장되어있다.

+ 웹개발을 하기 위해서 html, css, JS는 필수이다.

+ JS로 백엔드를 사용할 수 있다.

+ 프론트엔드의 유일한 프로그래밍언어이다.

<br>

자바스크립트의 핵심 공부를 많이 할 수록 **리액트**, **뷰** 등의 최신의 새로운 라이브러리를 공부하는 시간을 단축할 수 있다.

기본적인 개념을 잡으면 응용 프레임워크에 대한 이해도가 높아지기 때문이다.

<br>

**모달창, 슬라이더, 메뉴, 드래그앤드랍 등 웹의 인터렉티브한 부분을 바닐라JS로 구현할 수 있을 정도로 공부하자**

<br>

<br>

:sparkles:
# JavaScript 문법

<br>

## 변수, 문자열

**javascript**는 **프로그래밍언어**이기 때문에 **변수**에 문자열이나 값을 저장한다.
또한 javascrpit는 html을 조작하기 위해 만들어졌기 때문에 문자를 전달해야 하는 경우가 많다. 따라서 *변수에 저장된 문자를 전달해야 하는 경우*가 생기는 데, 이런 경우에는 다음과 같이 *문자열에 변수를 삽입*할 수 있다.

```
clock.innerText=`${hour}시에 약속이 있어요`
```

<br>

## 이벤트 리스너

어떤 이벤트가 발생했을 때 이를 처리하는 함수를 **이벤트 리스너**라고 한다.

**html의 어떤 태그**에 **클릭이라는 이벤트**가 발생했을 때 **글자색을 바꾸는 함수**가 동작되도록 하는 구조로 활용을 한다.

이를 위해 javascript의 **addEventListener**를 사용할 수 있다.

'''태그.addEventListener("이벤트명", 함수명)'''

이벤트명을 찾고 싶으면 **console.dir()**을 사용해서 **on**이 붙은 element를 찾아서 on을 떼고 이벤트명에 삽입하면 된다.

*주의할 점은 함수명 뒤에 함수의 동작버튼인 ()을 붙이지 않아야 한다는 것*

예시)
```
const loginForm = document.querySelector("#login-form")

function loginSubmit(event) {
    event.preventDefault()
    localStorage.setItem(username_key, loginInput.value)
    loginForm.classList.add(hidden)
    greetInText()
}

loginForm.addEventListener("submit", loginSubmit)
```

> addEventListner는 함수를 호출할 때 event object를 함수에게 넘기는데 이 객체의 preventDefault()를 사용하면 동작을 멈출 수 있다.

<br>

## localStorage

**로컬 스토리지**란 데이터를 사용자의 로컬에 보존하는 방식이다.
어떤 값을 화면 이동이 있거나 영구적으로 저장하고 싶은 경우에 사용한다.

+ **5MB**까지 사용가능(쿠키는 4kb까지)
+ **자바스크립트**로 조작
+ **key**와 **value**를 하나의 쌍으로 저장

저장 예시)
```
localStorage.setItem(username_key, loginInput.value)
```

가져오기 예시)
```
localStorage.getItem(username_key)
```

<br>

## classList

태그에 클래스를 생성해서 어떤 특성을 갖도록 css를 설정해준다. 어떠한 경우에는 설정한 css의 속성이 적용되기도 하고, 안되기도 하도록 만들기 위해서 javascript의 **classLsit** 기능을 사용할 수 있다.


클래스 추가)
```
const loginForm = document.querySelector("#login-form")
loginForm.classList.add(hidden)
```


클래스 삭제)
```
loginForm.classList.remove(hidden)
```

<br>

## interval

**interval**은 반복적으로 일어나는 것을 말한다. 
```setInterval(함수명, ms)```을 사용해서 함수를 일정 시간 간격으로 반복 동작 시킬 수 있다.

<br>

## Element 생성

img 태그나 h1태그 등의 **새로운 element**를 javascript에서 생성할 수 있다. 먼저 **createElement**로 태그를 생성하여 변수에 저장하고 **appendChild**를 사용하여 원하는 곳에 생성한 태그를 삽입할 수 있다.

```
const image = document.createElement("img")

image.src = `img/img1.jpg`

document.body.appendChild(image)
```

<br>

## 배열

