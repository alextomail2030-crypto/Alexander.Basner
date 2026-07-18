window.addEventListener("scroll", () => {

    const navbar = document.querySelector("nav");

    if (window.scrollY > 50) {
        navbar.style.background = "#0f172a";
    } else {
        navbar.style.background = "#111827";
    }

});


// Hamburger-Menü

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {

    menuBtn.classList.remove("active");
    sidebar.classList.remove("active");
    overlay.classList.remove("active");

});

// Menü schließen, wenn ein Link angeklickt wird

const menuLinks = document.querySelectorAll(".sidebar a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
});