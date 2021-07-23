const images = ["img1.jpg", "img2.jpg", "img3.jpg"]

const todayImg = images[Math.floor(Math.random()*quote.length)]

const image = document.createElement("img")

image.src = `img/${todayImg}`

document.body.appendChild(image)