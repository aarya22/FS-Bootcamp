//Without on's
$("h1").click(function(){
    alert("h1 clicked");
})

$("button").click(function(){
   var text = $(this).text();
   alert("You clicked " + text);
})

$("input").keypress(function(event){
    if (event.which === 13) {
        alert("You pressed enter")
    }
})

//With on's
$("button").on("click", function(){
    $(this).css("background", "purple"); //Change only the given button clicked
})

$("input").on("keypress", function(){
    console.log("keypressed");
})

$("button").on("mouseenter", function(){
    $(this).css("font-weight", "bold");
})

$("button").on("mouseleave", function(){
    $(this).css("font-weight", "normal");
})

// Function only adds listeners for existing elements
// on() will add listeners for all potential future elements
