document.getElementById("btn-open-menu").addEventListener("click", open_menu);

document.getElementById("btn-close-menu").addEventListener("click", close_menu);

function open_menu() {
    document.getElementById("side-menu-container").style.display = "block";
}

function close_menu() {
    document.getElementById("side-menu-container").style.display = "none";
}

