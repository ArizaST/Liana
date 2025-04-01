// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification

const menuBar = document.getElementById("menu-bar");
const navbar = document.querySelector(".navbar");

menuBar.addEventListener("click", () => {
    if (navbar.style.display === "block") {
        navbar.style.display = "none"; // Oculta el menú si ya está visible
    } else {
        navbar.style.display = "block"; // Muestra el menú si está oculto
    }
});