

var wrapMain = document.getElementById("wrap-main");

document.getElementById("btn-tgl-width").addEventListener("click", toggleWidth);
document.getElementById("btn-tgl-all").addEventListener("click", toggleAdvanceSuper);
document.getElementById("btn-tgl-allbutwithnotch").addEventListener("click", toggleWidthNotch);



function toggleAdvanceSuper() {
    toggleWidth();
}

function toggleWidth() {
    wrapMain.classList.toggle("advahanced");
}

function toggleWidthNotch() {
    wrapMain.classList.toggle("advahancedtol");
    wrapMain.parentNode.style.background="black";
}