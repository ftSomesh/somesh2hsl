

const main = document.querySelector("main")
const toggleButton = document.getElementById("toggle-btn")
const sidebar = document.getElementById("sidebar")
const dropdowns = document.getElementsByClassName("dropdown-btn")


const spanActive = document.querySelector("#sidebar span.active")
if (spanActive?.previousElementSibling || false) {
    spanActive.previousElementSibling.style.fill = '#5e63ff'
}
function toggleSidebar() {
    sidebar.classList.toggle("close")


    //in case you want to squeeze texts more.
    // main.classList.toggle("squeeze")
    toggleButton.classList.toggle("rotate")

    closeAllSubMenu()
}

function closeAllSubMenu() {
    Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
        ul.classList.remove("show")
        ul.previousElementSibling.classList.remove("rotate")
    })
}

function toggleSubMenu(button) {

    if (!(button.nextElementSibling.classList.contains("show"))) {
        closeAllSubMenu()
    }


    button.nextElementSibling.classList.toggle("show");
    button.classList.toggle("rotate")

    if (sidebar.classList.contains("close")) {
        sidebar.classList.toggle("close")
        toggleButton.classList.toggle("rotate")
    }
}

toggleButton.addEventListener("click", () => toggleSidebar());
[...dropdowns].forEach((dropdown) => {
    dropdown.addEventListener("click", () => toggleSubMenu(dropdown))
})


