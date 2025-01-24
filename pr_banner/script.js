const main = document.querySelector('main')
const backgrouds = ['url(img/bg1.jpg)', 'url(img/bg2.jpg)', 'url(img/bg1.jpg)']

let indice = 0

function slider() {
    indice++
    if (indice >= backgrouds.length) {
        indice = 0
    }

    //troca da imagens backgrouds no CSS
    main.style.backgroundImage =backgrouds[indice]
    main.style.transition = 'backgroud-image 1s ease-in-out'
}

setInterval(slider, 3000)