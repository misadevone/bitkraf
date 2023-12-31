const btnTglWidth = document.getElementById("btn-tgl-width");
const wrapMain = document.getElementById("wrap-main");
const overlayScreen = document.getElementById("float-overlay");

btnTglWidth.addEventListener("click", toggleWidth);

// toggleWidth();

function toggleWidth() {
    wrapMain.classList.toggle("full-width");
}

function tglSide() {
    document.getElementById("flm1").classList.toggle("full-width");
    // wrapMain.classList.toggle("full-width");
}

function toggleView(target) {
    toggleOverlay();
    document.getElementById(target).classList.toggle("show");
}

function toggleOverlay() {
    overlayScreen.classList.toggle("show");
}

