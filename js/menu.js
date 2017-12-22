window.onload = function() {

//右上角菜单
    var flag=false;
    var menu1 = document.getElementById("menu1");
    var menu = document.getElementById("menu1_window");
    var line1 = document.getElementById("banner_menu1");
    var line2 = document.getElementById("banner_menu2");
    var line3 = document.getElementById("banner_menu3");
    var cover = document.getElementById("cover");
    function showmenu(){
        if(!flag){
            menu.style.top="120px";
            cover.style.top="0";
            line1.className="banner_menu1";
            line2.className="banner_menu2";
            line3.className="banner_menu3";
            flag=!flag;
        }
        else{
            menu.style.top="-240px";
            cover.style.top="-2000px";
            line1.className="banner-menupre";
            line3.className="banner-menupre";
            var t=setTimeout(function(){
                line1.className="banner-menu1";
                line2.className="banner-menu2";
                line3.className="banner-menu3";
            },450);
            flag=!flag;
        }
    }
    menu1.onclick = function(){
        showmenu();
    }
}