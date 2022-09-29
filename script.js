// Currency Changers

$(document).ready(function(){
    $("#country1").click(function(){
        $("#price1").text("price: $10.50");
        $("#price2").text("price: $8.50");
        $("#price3").text("price: $15.50");
        $("#price4").text("price: $12.00");
        $("#price5").text("price: $12.00");
        $("#price6").text("price: $12.00");
    });
    $("#country2").click(function(){
        $("#price1").text("price: 3.250KWD");
        $("#price2").text("price: 2.500KWD");
        $("#price3").text("price: 5.000KWD");
        $("#price4").text("price: 3.750KWD");
        $("#price5").text("price: 3.750KWD");
        $("#price6").text("price: 3.750KWD");
    });
    $("#country3").click(function(){
        $("#price1").text("price: 7.50JOD");
        $("#price2").text("price: 6.00JOD");
        $("#price3").text("price: 11.00JOD");
        $("#price4").text("price: 8.50JOD");
        $("#price5").text("price: 8.50JOD");
        $("#price6").text("price: 8.50JOD");
    });
});

// Cart

//add to cart
$(document).ready(function() {
    $("#soap1").click(function(){
        $("#cart").append($("<li>").html("Classic Soap"));
        $("li:last").addClass("item");
    });
});
$(document).ready(function() {
    $("#soap2").click(function(){
        $("#cart").append($("<li>").html("Block Soap"));
        $("li:last").addClass("item");
    });
});
$(document).ready(function() {
    $("#soap3").click(function(){
        $("#cart").append($("<li>").html("Olive Soap"));
        $("li:last").addClass("item");
    });
});
$(document).ready(function() {
    $("#soap4").click(function(){
        $("#cart").append($("<li>").html("Pink Soap"));
        $("li:last").addClass("item");
    });
});
$(document).ready(function() {
    $("#soap5").click(function(){
        $("#cart").append($("<li>").html("Beige Soap"));
        $("li:last").addClass("item");
    });
});
$(document).ready(function() {
    $("#soap6").click(function(){
        $("#cart").append($("<li>").html("Brown Soap"));
        $("li:last").addClass("item");
    });
});

//empty the cart
$(document).ready(function() {
    $("#empty").click(function(){
        $("#cart").empty();
    });
});