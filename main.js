var nextBtn = $(".next");
var prevBtn = $(".prev");

nextBtn.click( function(){
    traslazione("next");
});

prevBtn.click( function(){
    traslazione("prev");
})

/* FUNCTION */
function traslazione(direzione){
    var imgActive = $("img.active");
    var circleActive = $(".nav i.active");

    imgActive.removeClass("active");
    circleActive.removeClass("active");

    if( direzione === "next"){
        if(imgActive.hasClass("last")){
            $("img.first").addClass("active");
            $(".nav i.first").addClass("active");
        }
        imgActive.next("img").addClass("active");
        circleActive.next("i").addClass("active");
    }else if( direzione === "prev" ){
        if(imgActive.hasClass("first")){
            $("img.last").addClass("active");
            $(".nav i.last").addClass("active");
        }
        imgActive.prev("img").addClass("active");
        circleActive.prev("i").addClass("active");
    }
}