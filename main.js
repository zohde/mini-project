const nav = document.querySelector('nav')
const closed = document.querySelector('.close')
const ul = document.querySelector('ul')

closed.addEventListener('click', open)

function open(){
    nav.classList.toggle('resize')
    ul.classList.toggle('apear')
    if(nav.classList.contains('resize')){
        closed.innerHTML = 'x'
    }else{
        closed.innerHTML = '--- <br>-- <br>-'
    }
}


///*                       S L I D E R                     */\\ 
const img = document.querySelector('.slider-img')
const buttons = document.querySelectorAll('.circle-btn')
const mainBtn = document.querySelector('.btn-0')
let srcs = ["/imgs/door.jpeg", "/imgs/city.jpeg", "/imgs/forest.jpeg"]

buttons.forEach((btn) =>{
    btn.addEventListener('click',function choose(){
        let target = +btn.className.slice(-1)
        img.src = srcs[target]
        if(target){
            mainBtn.classList.remove('foucs')
        }
    })
})


const colImg = document.querySelectorAll('.col img')
const names = document.querySelectorAll('.col .name')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
console.log()

const info = [
    
    {
        name: 'door',
        src: "./imgs/door.jpeg",
    },
    {
        name: 'city',
        src: "./imgs/city.jpeg",
    },
    {
        name: 'forest',
        src: "./imgs/forest.jpeg",
    }
]
// left.addEventListener('click', nextItem)
// right.addEventListener('click', prevItem)

function nextItem(){
    const next = info.pop()
    info.unshift(next)
    pickCol(info)
}

function prevItem(){
    const prev = info.shift()
    info.push(prev)
    pickCol(info)
}

function pickCol(arr){
    for(let i = 0; i <arr.length; i++){
        colImg[i].src = arr[i].src
        names[i].innerHTML = arr[i].name
    }
}




// /*        e l e c t r i c    c i r c u i t        */
/*              AND   G a t e            */

const A = document.querySelector('.input-a')
const B = document.querySelector('.input-b')
const justA = document.querySelector('.justA')
const justB = document.querySelector('.justB')
const togther = document.querySelectorAll('.togther')
const inputBtn = document.querySelectorAll('.input-btn')
const output = document.querySelector('.output')


inputBtn.forEach(btn =>{
    btn.addEventListener('click', function press(){
        btn.classList.toggle('on')
        const checkA = A.className.slice(-2)
        const checkB = B.className.slice(-2)
        // coloring A
        if(checkA == 'on'){
            justA.style.color = 'green'
        }else{
            justA.style.color = '#fff'
        }
        // coloring B
        if(checkB == 'on'){
            justB.style.color = 'green'
        }else{
            justB.style.color = '#fff'
        }
        // Add class Run and Coloring elements
        if(checkA == checkB){
            output.classList.add('run')
            output.textContent = ''
            togther.forEach(e => e.style.color = 'green')
        }else{
            output.classList.remove('run')
            output.textContent = 'Bulb'
            togther.forEach(e => e.style.color = '#fff')
        }
    })
})
/*           Or  G a t e        */

const orA = document.querySelector('.or-A')
const orB = document.querySelector('.or-B')
const orInput = document.querySelectorAll('.or-input')
const blub = document.querySelector('.blub')


orInput.forEach(btn =>{
    btn.addEventListener('click', function pressOr(){
        btn.classList.toggle('on')
        const checkOrA = orA.className.slice(-2)
        const checkOrB = orB.className.slice(-2)
        if(checkOrA == 'on' || checkOrB == 'on'){
            blub.classList.add('light')
            blub.textContent = ''
        }else{
            blub.classList.remove('light')
            blub.textContent = 'blub'
        }
    })
})