const images = ["img (1).png", "img (2).png", "img (3).png", "img (4).png"]

const todayImg = images[Math.floor(Math.random()*quote.length)]

const image = document.createElement("img")

image.src = `img/${todayImg}`

image.style = "  min-height: 100%; min-width: 1024px; width: 100%; height: auto; position: fixed; top: 0; left: 0; z-index:-1;  filter: brightness(60%);"

document.body.appendChild(image)