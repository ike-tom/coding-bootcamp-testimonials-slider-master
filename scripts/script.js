"use strict"

const slideList = [{
    img: "/images/image-tanya.jpg",
    text: `“ I’ve been interested in coding for a while but never taken the jump, until
    now. I couldn’t recommend this course enough.I’m now in the job of my dreams and so
    excited about the future.”`,
    author: 'Tanya Sinclair',
    profession: "UX Engineer"
},
{
    img: "/images/image-john.jpg",
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course.
    The depth the instructors go into is incredible. I now feel so confident about
    starting up as a professional developer. ”`,
    author: 'John Tarkpor',
    profession: "Junior Front-end Developer"
}];

const image = document.querySelector('.testimonial__photo');
const h1 = document.querySelector('.testimonial__header');
const author = document.querySelector('.testimonial__author');
const profession = document.querySelector('.testimonial__profession');
const leftArrow = document.querySelector('.arrow--previous');
const rightArrow = document.querySelector('.arrow--next');

const time = 5000;
let active = 0;

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    author.textContent = slideList[active].author;
    profession.textContent = slideList[active].profession;

}
const myTimer = setInterval(changeSlide, time)

leftArrow.addEventListener("click", changeSlide)
rightArrow.addEventListener("click", changeSlide)

document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") {
        changeSlide()
    }
}
)

document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {
        changeSlide()
    }
}
)