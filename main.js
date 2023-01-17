// parallax effect scroll

let headerCloud = document.querySelectorAll(".header__cloud")
let headerBoat = document.querySelector(".header__boat")

// headerCloud.forEach((el, i, array) => {
//     console.log(el, i, array);
// });

window.addEventListener("scroll", () => {
    // console.log(this.scrollY);
    
    headerCloud.forEach(clouds => {
        
        let speed = clouds.getAttribute("data-speed")
        
        clouds.style.transform = `translateX(${this.scrollY * speed}px)`
    });
    
    let speedBoat = headerBoat.getAttribute("data-speed")
    
    headerBoat.style.transform = `translateX(${this.scrollY * speedBoat}px)`
    
})

// parallax effect scroll

// run text

let h1 = document.querySelector(".header__title")

let txt = h1.innerHTML
h1.innerHTML = ""

function str(x = 0) {
    // console.log();
    h1.innerHTML += txt[x]
    x++
    
    if (x < txt.length) {
        setTimeout(() => {
            str(x)
        }, 200);
    }
}

str()

// run text

// parallax 

let parallaxBox = document.querySelector(".parallax__box")
let parallaxBall = parallaxBox.querySelectorAll(".parallax__ball")

window.addEventListener("mousemove", function (e) {
    // console.log(e.pageX);
    // console.log(e.clientY);
    // console.log('move');
    // console.log(window.innerWidth - e.pageX);
    
    parallaxBall.forEach(balls => {
        
        const speed = balls.getAttribute("data-speed")
        
        const X = (window.innerWidth - e.pageX * speed) / 50 /* 1920 */
        const Y = (window.innerHeight - e.pageY * speed) / 100 /* 1920 */
        
        balls.style.transform = `translate(${X}px, ${Y}px)`
    });
    
})

// parallax

// timer

let timer = document.querySelector(".timer")
let timerNum = timer.querySelectorAll(".timer__num")

// console.log(timer.offsetTop);
// console.log(timer.offsetHeight);
window.addEventListener("scroll", function scrollTimer() {
    // console.log(this.scrollY);
    if (this.scrollY >= timer.offsetTop - timer.offsetHeight * 2) {
        timer.style.background = "#999"
        timerStop()
        this.removeEventListener("scroll", scrollTimer)
    }
})

function timerStop() {
    for (let i = 0; i < timerNum.length; i++) {
        const count = +timerNum[i].getAttribute("data-num")
        // console.log(count);
        function calcNum(k = 0) {
            timerNum[i].innerHTML = k
            k++
            
            if (k <= count) {
                setTimeout(() => {
                    calcNum(k)
                }, 5);
            }
        }
        calcNum()
    }
}

// timer

// bubble

let timerBtn = document.querySelectorAll(".timer__btn")

timerBtn.forEach(btns => {
    btns.addEventListener("mousemove", function (e) {
        // console.log(e.pageX);
        // console.log(this.offsetLeft);
        // console.log(e.pageX - this.offsetLeft);
        const X = e.pageX - this.offsetLeft
        const Y = e.pageY - this.offsetTop
        this.style.setProperty("--x", `${X}px`)
        this.style.setProperty("--y", `${Y}px`)
    })
});

// bubble

// burger

let headerMenu = document.querySelector(".header__menu")
let headerNavMenu = document.querySelector(".header__nav-menu")

headerMenu.addEventListener("click", function () {
    // if (headerNavMenu.classList.contains("active")) {
    //     headerNavMenu.classList.remove("active")
    // } else {
    //     headerNavMenu.classList.add("active")
    // }
    headerNavMenu.classList.toggle("active")
})

// burger

// scroll animation

let scroll = document.querySelector(".scroll")
let about = document.querySelector(".about")

window.addEventListener("scroll", () => {
    fadeRight(scroll, 2)
    fadeRight(about, 2)
})

function fadeRight(section, coordinate) {
    let fadeRight = section.querySelectorAll(`.fade-right`)
    
    fadeRight.forEach(fadeRights => {
        const speed = +fadeRights.getAttribute("data-speed")
        fadeRights.style.transition = `${speed}ms`
        if (window.scrollY >= section.offsetTop - section.offsetHeight * coordinate) {
            fadeRights.classList.add("active")
        } else {
            fadeRights.classList.remove("active")
        }
    });
}

// scroll animation

// 3D cards

let card = document.querySelectorAll(".card")

card.forEach(cards => {
    cards.addEventListener("mousemove", rotate)
    cards.addEventListener("mouseout", rotateNone)
});

function rotate(e) {
    const cardItem = this.querySelector(".card__item")
    // console.log(cardItem);
    // cardItem.innerHTML = halfHeight - e.offsetY
    const halfHeight = cardItem.offsetHeight / 2
    cardItem.style.transform = `rotateX(${(halfHeight - e.offsetY) / 10}deg) rotateY(${-(halfHeight - e.offsetX) / 10}deg)`
}

function rotateNone() {
    const cardItem = this.querySelector(".card__item")
    cardItem.style.transform = `rotate(0)`
}

// 3D cards

// notes

let inp = document.querySelector(".notes__inp")
let btn = document.querySelector(".notes__add")
let list = document.querySelector(".notes__list")

function addNotes() {
    const inpValue = inp.value
    inp.value = ''
    
    let li = document.createElement("li")
    li.classList.add("notes__item")
    
    let button = document.createElement("button")
    button.classList.add("notes__btn")
    button.classList.add("remove")
    button.innerHTML = "X"
    
    li.append(inpValue)
    li.append(button)
    
    list.append(li)
    
    let del = document.querySelectorAll(".remove")
    del.forEach(dels => {
        dels.addEventListener("click", function () {
            this.parentElement.remove()
        })
    });
}

btn.addEventListener("click", () => {
    if (inp.value !== '' ) {
        addNotes()
    }
})

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 13 || e.key == 'Enter') {
        if (inp.value !== '' ) addNotes()
    }
})



// notes