
const iconPlus = document.querySelectorAll(".plus")
const iconMinus = document.querySelectorAll(".minus")
const paragraphText = document.querySelectorAll(".text")

//function to show the answer text and hidde the plus icon

iconPlus.forEach((icon, index)=>{
    icon.addEventListener("click",() =>{
        paragraphText[index].classList.remove("text");
        icon.style.display = "none";
        iconMinus[index].style.display = "block";
    })
})

//function to hidde the answer and hidde the minus icon

iconMinus.forEach((icon, index)=>{
    icon.addEventListener("click", ()=>{
        paragraphText[index].classList.add("text");
        icon.style.display = "none";
        iconPlus[index].style.display = "block";
    })
})

