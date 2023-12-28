const btnTglWidth = document.getElementById("btn-tgl-width");
const wrapMain = document.getElementById("wrap-main");

btnTglWidth.addEventListener("click", toggleWidth);


function toggleWidth() {
    wrapMain.classList.toggle("full-width");
}