

var wrapMain = document.getElementById("wrap-main");

document.getElementById("btn-tgl-width").addEventListener("click", toggleWidth);
document.getElementById("btn-tgl-all").addEventListener("click", toggleAdvanceSuperKontol);




function toggleAdvanceSuperKontol() {
    toggleWidth();
}

function toggleWidth() {
    wrapMain.classList.toggle("advahanced");
}