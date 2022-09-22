'use strict';

//Mode Switch
const inputEl = document.querySelector(".input")
const bodyEl = document.querySelector("body")

inputEl.checked = JSON.parse(localStorage.getItem("mode"))

updateBody();

function updateBody() {
    if(inputEl.checked ) {
        bodyEl.classList.add("light-mode")
    }
    else {
        bodyEl.classList.remove("light-mode")
    }
}

inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
});

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}


//Auto Text Typing
const autoEl = document.querySelector(".auto-text");
const jobs = ["Web Developer", "Mobile Developer", "Graphics Designer", "Instructor"]
let jobsIndex = 0;
let characterIndex = 0;
let jobToShow =

updateText();

function updateText() {
    characterIndex++
    autoEl.innerHTML = `I am ${jobs[jobsIndex].slice(0, 1) === "I" ? "an" : "a"} ${jobs[jobsIndex].slice(0, characterIndex)}`
    if (characterIndex === jobs[jobsIndex].length) {
        jobsIndex++
        characterIndex = 0
    }
    if (jobsIndex === jobs.length) {
        jobsIndex = 0;
    }
    setTimeout(updateText, 300)
}

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-image]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");


// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

