agregar_elemento_video = false;
//sección menu
var items = $(".nav .icon-menu + ul li a");
var ul = $(".nav .icon-menu + ul"); 
var img = $("#icon-menu");
var exit = true;
$(window).resize(function () { 
    let widthMyWindow = $(window).innerWidth();
    if(widthMyWindow>=767){
        $(ul).css({"display":"grid","justifyContent":"center"});
    }
    else{
        $(ul).css("display","none");  
        $("#icon-menu").attr("src","./image/other/icon-menu.svg");
    }
});
//oculta el menu al hacer click sobre uno de los items
for (let index = 0; index < items.length; index++) {
    $(items[index]).on("click", function () {
        let widthMyWindow = $(window).innerWidth();
        if(widthMyWindow<767){
            $(ul).css("display","none");  
            $("#icon-menu").attr("src","./image/other/icon-menu.svg");
        }
    });
}
$(img).on("touchstart", function () {
    if(exit){
        $(ul).css({"display":"grid","justifyContent":"center"});
        $("#icon-menu").attr("src","./image/other/leave-menu-icon.svg"); 
        exit = false;
    }
    else{
        $(ul).css("display","none");  
        $("#icon-menu").attr("src","./image/other/icon-menu.svg");
        exit = true;
    }
});
//seccion skills
$(".pPy").click(function () {
    $("#pImg").text("Librerías usadas: Thread, socket, Datetime, PyQt5, Json y Request.");
});
$(".pSql").click(function () { 
    $("#pImg").text("Consultas para la realización de un ABM (SELECT, DELETE, UPDATE) y creación de procedimientos, funciones y triggers.");
});
$(".pDj").click(function () { 
    $("#pImg").text("Plantillas, vistas, sitio administrativo, ORM con MySql.");
});
$(".pGit").click(function () { 
    $("#pImg").text("Comandos usados: git [init], [add], [commit], [push] [pull], [clone] [branch] [checkout] [log].");
    $("#pImg").append("<a href='https://github.com/Isaias164/'>My github</a>");
});
$(".descripcion").click(function () {
    $("#pImg").text("Es un sistema web que consta de dos clientes uno para la administración y otro para los clientes que deseen hacer una recerva para utilizar cualquiera de las instalación ofrecidas por la empresa (ficticia). El cliente administrativo es utilizado por un encargado el cual puede realizar recervas y también le permite gestionar un bar (ficticio).");
});
$(".video").click(function () {
    if (!agregar_elemento_video){
        $("#pImg").append("<video src='./videos/proyectos/gloria gym/demo-gloria gym.mp4' controls loop autoplay'></video>");
        agregar_elemento_video = true;
    }
});
//sección studies
//muestra el zoom de la imagen cuando esta enciama del elemento
$("#py,#js,#html,#sql,#css").on("touchstart touchmove mousemove mouseover", function () {
    $("#py").elevateZoom({
        zoomWindowPosition: 2,
        zoomWindowWidth:700,
        zoomWindowHeight:500,
        responsive:true,
        scrollZoom:true
    });
    $("#sql").elevateZoom({
        zoomWindowPosition: 10,
        zoomWindowWidth:700,
        zoomWindowHeight:500,
        responsive:true,
        scrollZoom:true
    });
});
//sección contact
var textarea = $(".container > form>textarea");
textarea.text("");
$("#bottom").click(function () {
    var inputs = $("form #input");
    setTimeout(function(){
        for (let index = 0; index < inputs.length; index++) {
            $(inputs[index]).val("");               
        }
    },2000)
});
//upload
$(".contact .container .upload a").click(function () { 
    $(".contact .container .upload").css("display","none");
});
$(window).scroll(function(){
    var windowHeight = $(window).scrollTop();
    var contenido2 = $("#projects").offset();
    contenido2 = contenido2.top;
    if((windowHeight+120) >= contenido2){
        $(".contact .container .upload").css("display","block");
        $('.contact .container .upload').fadeIn("slow");
    }else{
        $('.contact .container .upload').fadeOut("slow");
    }
});