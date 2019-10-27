// Allow the doc to be loaded and ready
// when the button is clicked to submit questions, the main container div will be toggled

$(document).ready(function() {
    $("#mainContainer2").hide();
    $("#mainContainer3").hide();

    $("#startGame").click(function() {
        console.log("hello!");
     $("#mainContainer1").remove();
     $("#mainContainer2").show();

    $("#submit").click(function(){
        $("#mainContainer3").hide();
        $("#mainContainer2").remove();
        $("#mainContainer3").show();
    });
});
});
    // $("#startGame").click(function(){
    //     $("#mainContainer2").toggle("show");

//  if ($("#mainConainter2").val() === "hidden"){
//      $("#mainContainer2").show();
//  }


       
    //    if($("#mainContainer").is(":hidden")) {
    //     $("#mainContainer2").show;

    //    }
    //    $("#startGame").click(function(){
    //     $("#mainContainer2").show("fast");
    //    });


// setInterval( , 1000);



// global variables
var correct = 0
var wrong = 0
var noAnswer = 0
var hiddenContainer = $("#mainContainer2").hide();
var results = $("#mainContainer3").hide();
// var mainContainer = false
