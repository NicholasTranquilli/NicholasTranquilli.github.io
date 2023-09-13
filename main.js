// JavaScript to handle auto-scrolling

const scrollDownArrow = document.querySelector(".scroll-projects a");
const scrollTarget = document.querySelector("#scroll-projects");

scrollDownArrow.addEventListener("click", function (e) {
    e.preventDefault();
    scrollTarget.scrollIntoView({ behavior: "smooth" });
});    
