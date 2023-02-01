document.getElementById("btn-open-menu").addEventListener("click", open_menu);
document.getElementById("btn-close-menu").addEventListener("click", close_menu);
document.getElementById("btn-features").addEventListener("click", dropdown_features);
document.getElementById("btn-company").addEventListener("click", dropdown_company);


function open_menu() {
    document.getElementById("side-menu-container").style.display = "block";
}

function close_menu() {
    document.getElementById("side-menu-container").style.display = "none";
}

function dropdown_features() {
    let features = document.getElementById("dd-features");
    const getId_Features = document.querySelector("#dd-features");
    const getCSS_Features = getComputedStyle(getId_Features);
    const getDisplay_Features = getCSS_Features.display;

    if (getDisplay_Features == "none") {
        features.style.display = "block";
    } else {
        features.style.display = "none";
    }
}

function dropdown_company() {
    let company = document.getElementById("dd-company");
    const getId_Company = document.querySelector("#dd-company");
    const getCSS_Company = getComputedStyle(getId_Company);
    const getDisplay_Company = getCSS_Company.display;

    if (getDisplay_Company == "none") {
        company.style.display = "block";
    } else {
        company.style.display = "none";
    }
}