const btnTglWidth = document.getElementById("btn-tgl-width");
const wrapMain = document.getElementById("wrap-main");

btnTglWidth.addEventListener("click", toggleWidth);

toggleWidth();

function toggleWidth() {
    wrapMain.classList.toggle("full-width");
}

function tglSide() {
    document.getElementById("flm1").classList.toggle("full-width");
    // wrapMain.classList.toggle("full-width");
}