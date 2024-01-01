// matching different menu with different location omg
// menu list
const conf_menu = ['home', 'contact', ['Components','layout','menu','form', 'login'],['Reference', 'external-w3schools.com', 'external-google.com']];

const viewDir = "./dump/view/";
// const contentMain = document.getElementById("main-content");
const targetLoc = document.querySelectorAll('[data-view-target]');
const menuLoc = document.querySelectorAll('[data-build-menu]');
// const el1 = document.querySelector('[data-id="box1"]');
// const el2 = document.querySelector('[data-id]');
// menuLoc[0].getAttribute('data-build-menu')

if(menuLoc.length > 0) { 
    console.log(menuLoc.length+" menu location found");

    if(conf_menu.length > 0) { 
        console.log(conf_menu.length+" menu item found, didnt count submenu ahahaha");

        var z = buildMenu(conf_menu);

        for(i=0; i< menuLoc.length; i++) {
            menuLoc[i].innerHTML = z;
            menuLoc[i].classList.add("menu-"+menuLoc[i].getAttribute('data-build-menu'));
        }

        loadContent('home');
    }
}


function buildMenu(menuList) {
    var menu = "";

    for(var i=0; i < menuList.length; i++) {
        if(menuList[i] instanceof Array) {            
            menu += "<div class='dropdown'>";
            menu += "<a href='#!'>"+menuList[i][0]+">></a>";
            menu += "<div class='dropdown-item'>";
            menu += buildMenu(menuList[i].splice(1));
            menu += "</div></div>";

        } else {
            menu += assembleMenu(typeOfMenu(menuList[i]), getMenuName(menuList[i]));
        }
    }
    // menu += "<div style='clear:both'></div>";
    return menu;
}

function getMenuName(item){
    var a = "";
    if(item.includes('-')) {
        a = item.slice(item.indexOf('-') + 1);
    } else {
        a = item;
    }
    return a;
}

function typeOfMenu(menu) {
    if(menu.includes('-') && !(menu instanceof Array)) {
        menuType = menu.substring(0, menu.lastIndexOf('-'));
        

    } else if (menu instanceof Array) {
        menuType = "list";

    } else {
        menuType = "link";
    }

    return menuType;
}

function assembleMenu(type, item) {
    var a = "";
    if(type == "link") {
        a += "<a href='#"+item+"' onClick='"+'loadContent("'+item+'")'+"'>"+item+"</a>";

    } else if(type == "external") {
        a += "<a href='https://www."+item+"' target='_blank'>"+item+"</a>";

    } else {
        a = "error ahahaha";
    }
    return a;
}


async function loadContent(e){
    targetLoc[0].innerHTML = "<div class='sophisticated-loading-bra'></div>";
    let response = await fetch(viewDir+e+".html");
    let data = await response.text();
    
    console.log(data.status); 
    targetLoc[0].innerHTML = data;
    
    // var d = document.getElementById("content-"+e);
    // targetLoc[0].innerHTML = d.innerHTML;
}