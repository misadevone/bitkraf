//config start
//external-, first item in array is the main button,
const conf_menu = ['intro', 'contact','login', 'external-google.com',['item1', 'calculator','sub2','sub3'], ['item2', 'calculator','sub2','sub3'], 'menu-switch'];

//config end
console.log("js berfungshen");


var menuList = conf_menu;
var menuMain = document.getElementById("menu-top");
var menuSide = document.getElementById("menu-side");
var contentMain = document.getElementById("main-content");
var a = "";
var beautyMode = 0;

// var aaa = document.querySelectorAll("a[data-blip]");
// resourceWastreme();
// var loopMax = 1000;

// function resourceWastreme() {
    // while(loopMax != 0) {
    //     setTimeout(bleeeeeep, 1000);
    //     loopMax--;
    // }
// }

// function bleeeeeep() {
//     i = Math.floor(Math.random()*3);
//     console.log(i);
//     var deflaut = aaa[i].style.backroundColor;
//     aaa[i].style.backgroundColor = "red";
//     aaa[i].style.backgroundColor = deflaut;
// }


// var blipObj = document.getElementsByTagName("a");

// for (let i = 0; i < blipObj.length; i++) {
//     console.log(blipObj[i]);
//     }

// console.log(blipObj);

var arr1 = {};

const n1 = "2";
const n2 = 5;

console.log(n1+n2);

LoadMenu(menuList);
drawMenu(a);
drawContent(menuList[0]);

function LoadMenu(item) {
    menuMain.style.display = "flex";
    item.forEach(buildMenu);
}



function buildMenu(item, index) {
    
    if(item.includes('-')) {
        var menuType = item.substring(0, item.lastIndexOf('-'));
        var menuItem = item.slice(item.indexOf('-') + 1);

        console.log("menu type is: "+menuType);

        if( menuType == "menu" ) {
            a += "<a href='#"+item+"' class='a-right' onClick='"+'toggleLayout("'+item+'")'+"'>"+item+"</a>";
        } else if( menuType == "list") {
            
        } else if( menuType == "external") {
            a += "<a href='https://www."+menuItem+".com/' target='_blank'>"+menuItem+"</a>";
        }

    }else if(item instanceof Array ) {
        var b ="";
        
        // console.log(item[0]);
        // console.log(JSON.stringify(item));
        b += "<a href='#!' class='menu-item-sub'>"+item[0]+" + </a>";
        b += "<div class='menu-sub'>";
        item.forEach((item2, index2)=>{
            if(item2 != item[0]) { 
                b += "<a href='#"+item2+"' onClick='"+'loadContent("'+item2+'")'+"'>"+item2+"</a>";
            }
        });
        b += "</div>";
        a += b;

    } else {
        a += "<a href='#"+item+"' onClick='"+'loadContent("'+item+'")'+"'>"+item+"</a>";
    }
}

function drawMenu(e){
    menuMain.innerHTML = e;
    menuSide.innerHTML = e;
}

function drawContent(e){
    var d = document.getElementById("content-"+e);
    contentMain.innerHTML = d.innerHTML;
}

function loadContent(e){
    drawContent(e);
}

function beautyToggle(e){
    if(beautyMode == 0) {
        e.parentElement.style.backgroundImage = "url('wall1.png')";
        bodyMain.style.fontFamily = "Times New Roman";
        beautyMode = 1;
    } else {
        
        e.parentElement.style.backgroundImage = "url('')";
        bodyMain.style.fontFamily = "Arial, Helvetica, sans-serif";
        beautyMode = 0;
    }
}

function fontSize(e) {
    console.log(bodyMain.style.fontSize);
    if(e == 1) {
        bodyMain.style.fontSize = "22px";

    }
    if(e == -1) {
        bodyMain.style.fontSize = "8px";

    }
}
function toggleLayout(e) {
    console.log("Toggle Pressed");
    
    if(menuMain.style.display == "flex"){
        menuMain.style.display = "none";
        menuSide.style.display = "flex";
    } else {
        menuMain.style.display = "flex";
        menuSide.style.display = "none";

    }

}

function tooSharpLah(e) {

    // var bodyMain = document.getElementById("mainSuper");
    // var zaza = bodyMain.style.fontFamily;
    // bodyMain.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif !important";
    
    // document.body.querySelectorAll("h2").forEach((ezz) => {
    //     ezz.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif !important";
    // });

    var dav = document.getElementsByTagName("div");
    var alink = document.getElementsByTagName("a");
    var hder = document.getElementsByTagName("h2");
    var imaj = document.getElementsByTagName("img");
    
    for(var i=0; i < dav.length; i++){
        dav[i].style.borderRadius = '25px';
    }

    for(var i=0; i < alink.length; i++){
        alink[i].style.borderRadius = '25px';
    }

    for(var i=0; i < hder.length; i++){
        hder[i].style.borderRadius = '25px';
    }
    
    for(var i=0; i < imaj.length; i++){
        imaj[i].style.borderRadius = '25px';
    }


}