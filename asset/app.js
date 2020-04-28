//print the letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];

for (var i = 0; i < letters.length; i++) {
    var b = $("<button>");
    b.addClass("eachLetter");
    b.text(letters[i].toUpperCase());
    b.attr("data-let", letters[i]);
    $("#letters").append(b);
}

$(".eachLetter").on("click", function() {
    var letterAttached = $("<div class='eachLetter'>").text($(this).data("let").toUpperCase());
    console.log($(this).data("let"));
    $("#display").append(letterAttached);

});

$("#clear").on("click", function() {
    $("#display").empty();
});