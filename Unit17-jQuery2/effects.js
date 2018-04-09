$("button").first().on("click", function(){
    $("div").fadeToggle(1000, function(){
        console.log("Fade completed");
    });
})

$("button").last().on("click", function(){
    $("div").slideToggle(1000, function(){
        console.log("Slide completed");
    });
})