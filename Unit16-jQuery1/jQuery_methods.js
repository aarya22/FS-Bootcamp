
//Get text of an element
$("h1").text();
$("ul").text();
$("li").text();

//Set text
$("h1").text("New Text");
$("li").text("Dairy Milk");

//Get html of an object
$('ul').html();
$('ul').html("<li> I hacked your ul</li>");

$("img").css("width", "200px");
//Retrive or set attribute
$("img").attr("src", "https://i.ytimg.com/vi/ZeBmOg5rJXM/maxresdefault.jpg");
$("input").first().attr("type", "color");

$("#2nd").val("Aman");
$("#2nd").val("");