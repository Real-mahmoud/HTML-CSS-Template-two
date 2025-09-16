let toggleMenu=document.querySelector(".toggle-menu")
let navLinks=document.querySelectorAll("nav a")
let ul=document.querySelector("nav ul")
let headerContainer=document.querySelector("header .container")
let landing=document.querySelector(".landing")
let changeBgLeft=document.querySelector(".change-background-l")
let changeBgRight=document.querySelector(".change-background-r")
let bulletsLis=document.querySelectorAll(".bullets li")

let i=1

// when hover over other links it delete the active class from first link (a)
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseover",()=>{
        navLinks[0].classList.remove("active")
    })
    navLinks[i].addEventListener("mouseleave",()=>{
        navLinks[0].classList.add("active")
    })
}
// display nav links using bar when response as phone
toggleMenu.addEventListener("click",()=>{
    if (toggleMenu.classList.toggle("off")) {
        ul.style.display="none"
    }else {
        ul.style.cssText="display:flex; flex-direction:column;"
    }
})

changeBgRight.addEventListener("click",()=>{
     i = (i + 1) % 3;
    landing.style.cssText=`background-image: url("../Images/landing-${i+1}.jpg");`
    for (let i = 0; i < bulletsLis.length; i++) {
        bulletsLis[i].classList.remove("active")
    }
    bulletsLis[i].classList.add("active");
})
changeBgLeft.addEventListener("click",()=>{
    i = (i - 1 + 3) % 3; 
    landing.style.cssText=`background-image: url("../Images/landing-${i+1}.jpg");`
    for (let i = 0; i < bulletsLis.length; i++) {
        bulletsLis[i].classList.remove("active")
    }
    bulletsLis[i].classList.add("active");
})

