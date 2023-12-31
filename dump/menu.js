// matching different menu with different location omg
// menu list
const conf_menu = ['intro', 'contact','login', ['Reference', 'external-w3schools.com','external-google.com','external-misadevone.github.io/bitkraf']];

const targetLoc = document.querySelectorAll('[data-view-target]');
const menuLoc = document.querySelectorAll('[data-build-menu]');

if(menuLoc.length > 0) { 
    console.log(menuLoc.length+" menu location found");

    if(conf_menu.length > 0) { 
        console.log(conf_menu.length+" menu item found, didnt count submenu ahahaha");

        var z = buildMenu(conf_menu);

        for(i=0; i< menuLoc.length; i++) {
            menuLoc[i].innerHTML = z;
            menuLoc[i].classList.add("menu-"+menuLoc[i].getAttribute('data-build-menu'));
        }

        loadContent('intro');
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
        a += "<a href='https://"+item+"' target='_blank'>"+item+"</a>";

    } else {
        a = "error ahahaha";
    }
    return a;
}

function loadContent(e){
    var d = document.getElementById("content-"+e);
    targetLoc[0].innerHTML = d.innerHTML;
}