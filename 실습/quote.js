const quote = [
    {
        author : "devcon",
        saying : "happy days"
    },
    {
        author : "winner",
        saying : "Sad days"
    },
    {
        author : "Dclick",
        saying : "Perfect!"
    }
]

const author = document.querySelector("#quote span:first-child")
const saying = document.querySelector("#quote span:last-child")

const todayQuote = quote[Math.floor(Math.random()*quote.length)]

author.innerText = todayQuote.author
saying.innerText = todayQuote.saying