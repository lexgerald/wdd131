document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last updated: " + document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");

        // Change button symbol
        if (navLinks.classList.contains("show")) {
            hamburger.innerHTML = "✖"; // X symbol for closing
        } else {
            hamburger.innerHTML = "&#9776;"; // Hamburger menu symbol
        }
    });
});