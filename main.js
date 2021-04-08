var nextBtn = $(".next");
var prevBtn = $(".prev");

nextBtn.click( function(){
    traslazione("next");
});

prevBtn.click( function(){
    traslazione("prev");
})

//KeyBoard
$(document).keydown(function(t){
    console.log(t.keyCode);

    if(t.keyCode === 37){
        traslazione("prev");
    }else if(t.keyCode === 39){
        traslazione("next");
    }
})


/* FUNCTION */
function traslazione(direzione){
    var imgActive = $("img.active");
    var circleActive = $(".nav i.active");

    imgActive.removeClass("active");
    circleActive.removeClass("active");

    if( direzione === "next"){
        if(imgActive.hasClass("last")){ //e se facessi qualcosa tipo imgActive === null per riconoscere l ultimo?
            $("img.first").addClass("active");
            $(".nav i.first").addClass("active");
        }else{
            imgActive.next("img").addClass("active"); 
            circleActive.next("i").addClass("active");
        }
    }
    if( direzione === "prev" ){
        if(imgActive.hasClass("first")){
            $("img.last").addClass("active");
            $(".nav i.last").addClass("active");
        }else{
            imgActive.prev("img").addClass("active");
            circleActive.prev("i").addClass("active");
        }
    }
}