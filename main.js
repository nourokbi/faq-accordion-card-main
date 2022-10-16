

let questionHead = document.querySelectorAll(".head") 
let questionAnswer = document.querySelectorAll(".head + p")
let questionArrow = document.querySelectorAll(".head span")

for (let i = 0; i < questionHead.length; i++) {
    questionHead[i].addEventListener("click" , () => {
        questionAnswer[i].classList.toggle("show")
        questionArrow[i].classList.toggle("rotate")
    })
}