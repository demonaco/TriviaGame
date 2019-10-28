// global variables
var correct = 0;
var wrong = 0;
var noAnswer = 0;
var hiddenContainer = $("#mainContainer2").hide();
var results = $("#mainContainer3").hide();
var count = 120;
var timeStart = function() {
    $("#time").html(count);
setInterval(startTime, 1000);
function startTime(){
    $("#time").html(count);
    count--; 
};
};


// Allow the doc to be loaded and ready
// when the button is clicked to submit questions, the main container div will be toggled

$(document).ready(function() {
//set elements to first be hidden before click actions
    $("#mainContainer2").hide();
    $("#mainContainer3").hide();
//start game div will be removed and question set will be shown
    $("#startGame").click(function() {
        console.log("hello!");
     $("#mainContainer1").remove();
     $("#mainContainer2").show();
    if ($("#maincontainer2").show === true);
     console.log("this is true");
     timeStart();
     if (count == 115);
     $("#mainContainer2").hide();
     $("#mainContainer3").show();
     
//question set will be removed and results page will be shown
    $("#submit").click(function(){
        $("#mainContainer3").hide();
        $("#mainContainer2").remove();
        $("#mainContainer3").show();
         

    
});
});
});