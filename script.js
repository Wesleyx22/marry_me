let btn = document.querySelector(".no");
let position = btn.addEventListener("click", function () {
    position ? (position = 0) : (position = 150);
    btn.style.transform = `translate(${position}px,0px)`;
    btn.style.transition = "all 0.3s ease";
});

btn = document.querySelector(".no");
position = btn.addEventListener("mouseover", function () {
    position ? (position = 0) : (position = 400);
    btn.style.transform = `translate(${position}px,0px)`;
    btn.style.transition = "all 0.3s ease";
});

function tanks() {
    alert("Escolha sábia,Babyyy :)");
}
