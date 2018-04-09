
//Make the h1 have a border
$("h1").css("border", "2px solid red");

var styles = {
    color: "red",
    background: "pink",
    border: "2px solid purple"
}

//Make all lis have the styles
$("li").css(styles)

//Change the font size of the anchor
$("a").css('font-size', '40px');

//Apply li without specifying a style object previously
$("li").css({
    fontSize: "10px",
    border: "3px dashed purple",
    background: "4gba(89, 45, 20, 0.5"
});