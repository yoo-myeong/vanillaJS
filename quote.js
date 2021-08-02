const quote = [
    {
        author : "롱펠로",
        saying : "살아있는 현재에 행동해라"
    },
    {
        author : "호라티우스",
        saying : "그대의 하루하루를 그대의 마지막이라고 생각해라"
    },
    {
        author : "푸블릴리우스 시루스",
        saying : "그 누구도 시도해보기 전에는 자신의 한계를 알 수 없다"
    },
    {
        author : "랭스터 콜만",
        saying : "행운이란 백퍼센트 노력한 뒤에 남는것이다"
    }
]

const author = document.querySelector("#quote span:first-child")
const saying = document.querySelector("#quote span:last-child")

const todayQuote = quote[Math.floor(Math.random()*quote.length)]

author.innerText = todayQuote.saying 
saying.innerText = `-${todayQuote.author}-`