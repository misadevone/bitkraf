// matching different menu with different location omg
// menu list
const conf_menu = ['intro', 'contact','login', 'external-w3schools',['item1', 'calculator','sub2','sub3'], ['item2', 'calculator','sub2','sub3'], 'menu-switch'];


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
        buildMenu();
    }
}


function buildMenu() {
    var a = "";

    for(var i=0; i < conf_menu.length; i++){
        if(conf_menu[i].includes('-')) {
            var menuType = conf_menu[i].substring(0, conf_menu[i].lastIndexOf('-'));
            var menuItem = conf_menu[i].slice(conf_menu[i].indexOf('-') + 1);
    
            console.log("menu type is: "+menuType);
    
            if( menuType == "menu" ) {
                a += "<a href='#"+conf_menu[i]+"' class='a-right' onClick='"+'toggleLayout("'+conf_menu[i]+'")'+"'>"+conf_menu[i]+"</a>";
            } else if( menuType == "list") {
                
            } else if( menuType == "external") {
                a += "<a href='https://www."+menuItem+".com/' target='_blank'>"+menuItem+"</a>";
            }
    
        }else if(conf_menu[i] instanceof Array ) {
            var b ="";

            b += "<div class='dropdown'>";
            b += "<a href='#!'>"+conf_menu[i][0]+"</a>";
            b += "<div class='dropdown-item'>";

            conf_menu[i].forEach((item2, index2)=>{
                if(item2 != conf_menu[i][0]) {
                    // b += "<a href="#!">sub 1</a>";
                    b += "<a href='#"+item2+"' onClick='"+'loadContent("'+item2+'")'+"'>"+item2+"</a>";
                }
            });

            b += "</div></div>";
            a += b;
    
        } else {
            a += "<a href='#"+conf_menu[i]+"' onClick='"+'loadContent("'+conf_menu[i]+'")'+"'>"+conf_menu[i]+"</a>";
        }
    }

    for(i=0; i< menuLoc.length; i++) {
        menuLoc[i].innerHTML = a;
        menuLoc[i].classList.add("menu-"+menuLoc[i].getAttribute('data-build-menu'));
    }
}



function drawContent(e){
    var d = document.getElementById("content-"+e);
    targetLoc[0].innerHTML = d.innerHTML;
}

function loadContent(e){
    drawContent(e);
}


