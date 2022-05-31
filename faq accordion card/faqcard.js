//const sections = document.querySelectorAll(".section")
const questions = document.querySelectorAll(".question")
const arrows = document.querySelectorAll(".arrow")


questions.forEach((question) =>{
    question.addEventListener("click",()=>{
        removeActiveClasses();
        question.classList.add("active")
    })
    function removeActiveClasses(){
        questions.forEach((question)=>{
            question.classList.remove("active")
        })
    }
})
arrows.forEach((arrow) =>{
    arrow.addEventListener("click",()=>{
        removeActiveClasses();
        arrow.classList.add("active")
    })
    function removeActiveClasses(){
        arrows.forEach((arrow)=>{
            arrow.classList.remove("active")
        })
    }
    
})

