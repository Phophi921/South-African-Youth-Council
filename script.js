// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Auto Year
document.getElementById("year").innerText = new Date().getFullYear();