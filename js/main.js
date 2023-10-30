"use strict"
// loading screen
$(document).ready(function () {
    $(".center").fadeOut(500,function(){
        $("#loading").slideUp(500, function(){
            $("html").css("overflow","auto");
            $("#loading").remove();
        });
    })
});


// home section
let mainMenuWidth= $(".main-menu").innerWidth();
$(".open").click(function(){
  
    $(".main-menu").animate({left:"0px"},300);
    $("#homebody").animate({marginLeft:"250px"},300)
})
$(".close").click(function(){
    $(".main-menu").animate({left:-mainMenuWidth},300);
    $("#homebody").animate({marginLeft:"0px"},300);
    $("html, body").animate({scrollTop:"0"},100)  
})

// html scrollon

$(".main-menu a").click(function(){
    let menuLink =$(this).attr("href"),
        sectionOffset=$(menuLink).offset().top;
    $("html, body").animate({scrollTop:sectionOffset},1000)
})

//singers section
$(".singer").click(function(){
    
    $(".singer").not($(this)).next(".singer-info").slideUp(500);
    $(this).next(".singer-info").slideToggle(500);    
})


// duration
let  eventDate =new Date("2023-12-30 23:59:59");

let  counter = setInterval (()=>{
     let toDay = new Date(),
      timeDifference= eventDate.getTime()-toDay.getTime();
if (timeDifference > 0){
    var days = Math.floor(timeDifference/(1000*60*60*24)),
        hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
}
else{
    var days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0;
        $("#event").html(`next party comming soon <span></span> <span></span> <span></span> <i class="fa-solid fa-microphone"></i>`)
    }
        $('#days').text(days);
        $('#hours').text(hours);
        $('#min').text(minutes);
        $('#sec').text(seconds);

}, 1000)


// textarea
$("#char").on("input",function(){
    let characters = $(this).val().length,
        maxLength =100;

    if (characters <= maxLength){
    $("#char-num").text(maxLength-characters)}
    else{
        $(this).val($(this).val().substring(0,maxLength));
        $("#char-num").text("your available character finished");
    }
})

