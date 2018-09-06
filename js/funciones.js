


function estilo1()
{
    $("header").css("background-color", "#993333");
    $("footer").css("background-color", "#993333");
    $("#newsletter").css("background-color", "#993333");
    $(".button_1").css("background-color", "#ffffff");
}

function estilo2()
{
    $("#boxes .box img").css("width", "200px");
    $("#boxes .box img").css("height", "200px"); 
}

function estilo3()
{
    $("body").css("font-family", "Century Gothic, Times, Sans-serif");
}

function estilo4()
{
    $("#boxes").slideToggle("slow");
}

function estilo5()
{
    $("#boxes").css("background-color", "white").slideUp(2000).slideDown(2000); 
    $("#newsletter").css("background-color", "white").slideUp(2000).slideDown(2000);
    $(".button_1").css("background-color", "black");
    $(".button_1").css("color", "white");
    $("#newsletter").css("color","black");
    $("footer").css("background-color", "black");
    $("header").css("background-color", "black");
}