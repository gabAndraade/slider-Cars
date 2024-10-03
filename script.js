let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1
let rockPosition = 0
const rockDistance = 25;

// let gradients= [
//     'radial-gradient(#3b3b3b, #1d1d1d)',
//     'radial-gradient(#fc0303, #450202)',
//     'radial-gradient(#0063db, #020b54)'
// ]

function setSlider (){
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)

    // container.style.backgroundImage = gradients[active]

    rockPosition = active * rockDistance;
    document.querySelector('.rocks').style.transform = `translateX(${rockPosition}px) translateY(${rockPosition}px)`;

}


nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')
}

prevButton.onclick = () => {
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
}