const btnTglWidth = document.getElementById("btn-tgl-width");
const wrapMain = document.getElementById("wrap-main");
const overlayScreen = document.getElementById("float-overlay");

btnTglWidth.addEventListener("click", toggleWidth);
let file = "./dump/fetch_inf.txt";
fetch (file).then(x => x.text()).then(y => document.getElementById("demo").innerHTML = y);
// fetch (file).then(x => x.text()).then(console.log(y));
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