const btnTglWidth = document.getElementById("btn-tgl-width");
const wrapMain = document.getElementById("wrap-main");
const overlayScreen = document.getElementById("float-overlay");

btnTglWidth.addEventListener("click", toggleWidth);



function togglePlopBox(target, operation) {
    if(operation == 'open') {
        toggleOverlay('on');
        document.getElementById(target).classList.add('plop'); 
    } else if(operation == 'close') { 
        toggleOverlay('off');
        document.getElementById(target).classList.remove('plop'); 
    } else {
        document.getElementById(target).classList.toggle("plop");
        toggleOverlay();
    }

    console.log("Flok box "+operation+"ed");
}

function toggleWidth() {
    wrapMain.classList.toggle("full-width");
}

function tglSide() {
    document.getElementById("flm1").classList.toggle("full-width");
}

function toggleView(target) {
    toggleOverlay();
    document.getElementById(target).classList.toggle("show");
}

function toggleOverlay(operation) {
    if(operation == 'on') {
        overlayScreen.classList.add("show");
    } else if(operation == 'off') {
        overlayScreen.classList.remove("show");
    } else {
        overlayScreen.classList.toggle("show");
    }
}