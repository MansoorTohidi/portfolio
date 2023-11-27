const headerlinks=document.getElementsByClassName("a")
const hamburger=document.getElementById("hamburger")
const closeBtn=document.getElementById("closeBtn")
const nav=document.getElementsByClassName("nav")
const openedNav=document.getElementById("openedNav")


for(let i=0;i<headerlinks.length;i++){
   
headerlinks[i].addEventListener("click",(e)=>{
    hamburger.style.visibility="visible"
    nav[0].style.right="-20rem"

    
})
}

hamburger.addEventListener("click",(e)=>{
    e.preventDefault()
    hamburger.style.visibility="hidden"
    nav[0].style.right="0"

})

closeBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    hamburger.style.visibility="visible"
    nav[0].style.right="-20rem"

})



window.addEventListener("scroll",(e)=>{
    
if(window.scrollY<500){
    for(let i=0;i<headerlinks.length;i++){
        headerlinks[i].classList.remove("active")
         }
         headerlinks[0].classList.add("active")
}

if(window.scrollY>501&window.scrollY<1000){
    for(let i=0;i<headerlinks.length;i++){
        headerlinks[i].classList.remove("active")
         }
         headerlinks[1].classList.add("active")

}

if(window.scrollY>1001&window.scrollY<1600){
    for(let i=0;i<headerlinks.length;i++){
        headerlinks[i].classList.remove("active")
         }
         headerlinks[2].classList.add("active")

}

if(window.scrollY>1601&&window.scrollY<2200){
    for(let i=0;i<headerlinks.length;i++){
        headerlinks[i].classList.remove("active")
         }
         headerlinks[3].classList.add("active")

}

if(window.scrollY>2201){
    for(let i=0;i<headerlinks.length;i++){
        headerlinks[i].classList.remove("active")
         }
         headerlinks[4].classList.add("active")

}
    






})




