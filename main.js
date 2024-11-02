
let s = document.querySelector('.s')
let m = document.querySelector('.m')
let h = document.querySelector('.h')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
function clock() {
    let time = new Date()
    let arrowHours = time.getHours()
    let arrowMinut = time.getMinutes()
    let arrowSecond = time.getSeconds()
    h.style.transform = `rotate(${arrowHours * 30}deg) `
    m.style.transform = `rotate(${arrowMinut * 6}deg) `
    s.style.transform = `rotate(${arrowSecond * 6}deg) `
    setTimeout(() => {
        clock()
    }, 1000)
    hours.innerText = arrowHours > 10 ? 0 + arrowHours : arrowHours
    minutes.innerText = arrowMinut > 10 ? 0 + arrowMinut : arrowMinut
}
clock()
let tabsItem = document.querySelectorAll('.tabsItem')
let tabContentItem = document.querySelectorAll('.tabsContentItem')
for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function () {
        for (let k = 0; k < tabsItem.length; k++) {
            tabsItem[k].classList.remove('active')
            tabContentItem[k].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabContentItem[i].classList.add('active')
    })
}
let soat0 = document.querySelector('.stopwatch__hours')
let daqiqa0 = document.querySelector('.stopwatch__minutes')
let sekund0 = document.querySelector('.stopwatch__seconds')
let stars = document.querySelector('.stopwatch__btn')
let lampa = document.querySelector('.tabsLink__span')
let foo
stars.addEventListener('click', function () {
    if (stars.innerHTML == 'start') {
        stars.innerHTML = 'stop'
        lampa.classList.add('active')
        watch()
    }
    else if (stars.innerHTML == 'stop') {
        stars.innerHTML = 'clear'
        lampa.classList.remove('active')
        lampa.classList.add('active_clear')
        clearInterval(foo)
    }
    else if (stars.innerHTML == 'clear') {
        lampa.classList.remove('active_clear')
        stars.innerHTML = 'start'
        sekund0.innerHTML = '0'
        soat0.innerHTML = '0'
        daqiqa0.innerHTML = '0'
    }
})
function watch() {
    sekund0.innerHTML++
    if (sekund0.innerHTML > 59) {
        daqiqa0.innerHTML++
        sekund0.innerHTML = 0
    }
    else if (daqiqa0.innerHTML > 59) {
        daqiqa0.innerHTML = 0
        soat0.innerHTML++
    }
    foo = setTimeout(() => {
        watch()
    }, 1000)
}
