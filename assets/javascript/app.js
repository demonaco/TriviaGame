// global variables

var questions = [{
    question: "1. Which 2 characters in A New Hope say the lines 'I have a bad feeling about this'?",
    answers: ["Han & Luke", "Obi-Wan & Luke", "Obi-Wan & Luke", "Han & Obi-Wan"],
    correctAnswer: "Han & Luke"
},
{
    question: "2. Lando's cloud city hangs in the atmosphere over which world?",
    answers: ["Tattooine", "Yavin", "Endor", "Bespin"],
    correctAnswer: "Bespin"
}, {
    question: "3. Which Star Wars film does not feature a character's hand being cut off?",
    answers: ["Attack of the Clones", "Return of the Jedi", "The Empire Strikes Back", "The Phantom Menace"],
    correctAnswer: "The Phantom Menace"
}, {
    question: "4. Which U.S. national park served as the setting for the planet Endor?",
    answers: ["Sequioa", "Muir Woods", "Yosemite", "Redwood"],
    correctAnswer: "Redwood"
}, {
    question: "5. What is Admiral Ackbar's first name?",
    answers: ["Moff", "Adair", "Gial", "Tamson"],
    correctAnswer: "Gial"
    }, {
    question: "6. What is the Emperor's name?",
    answers: ["Grevious", "Palpatine", "Nero", "Dooku"],
    correctAnswer: "Palpatine"
    },
{
    question: "7. How did Han Solo acquire the Millenium Falcom?",
    answers: ["Assembled it from scrap", "Salvaged a derelict", "Stole it from the Empire", "Won in a card game"],
    correctAnswer: "Won in a card game"
        }, {
    question: "8. What color lightsaber does Mace Windu carry?",
    answers: ["blue", "green", "purple", "red"],
    correctAnswer: "purple"
            }]



var correct = 0;
var wrong = 0;
var noAnswer = 0;
var rightAnswer = $("#questionsRight");
var wrongAnswer = $("#questionsWrong");
var unanswered = $("#unanswered");
var userAnswer = "";
// var Array = [correct, wrong, noAnswer];
// var Array[0] = correct++;
// var Array[1] = wrong++;
// var Array[2] = noAnswer++;
// var answerRight = function answer(){
//     if ($(".correctAnswer")) === true);
//     correct++};
//  var trumpWrong = function wrongAnswer (){ 
//      if ($(".wrongAnswer")) === true;
//  wrong++;};  

// var leftUnanswered = function(){
//     if($(".correctAnswer")) && $(".wrongAnswer")) === false);
//         noAnswer++;
// };

var hiddenContainer = $("#mainContainer2").hide();
var results = $("#mainContainer3").hide();
//variables to establish clock and have it countdown
var count = 120;
var timeStart = function () {
    $("#time").html(count);
    setInterval(startTime, 1000);
    function startTime() {
        $("#time").html(count);
        count--;
    };
};
var end = count - 5;


// Allow the doc to be loaded and ready
// when the button is clicked to submit questions, the main container div will be toggled

$(document).ready(function () {
    //set elements to first be hidden before click actions
    $("#mainContainer2").hide();
    $("#mainContainer3").hide();
    //start game div will be removed and question set will be shown
    $("#startGame").click(function () {
        console.log("hello!");
        $("#mainContainer1").remove();
        $("#mainContainer2").show();
        if ($("#maincontainer2").show === true);
        console.log("this is true");
        timeStart();

        $("#correctAnswer").click(function () {
            correct++;
            $(questionsRight).html(correct);
            $("#wrongAnswer").click(function () {
                wrong++;

            })
        });
        //  var answerRight = function answer(){
        //     if ($(".correctAnswer")) === true);
        //     correct++;};
        //  var trumpWrong = function wrongAnswer (){ 
        //      if ($(".wrongAnswer")) === true;
        //  wrong++;};  

        // var leftUnanswered = function(){
        //     if($(".correctAnswer")) && $(".wrongAnswer")) === false);
        //         noAnswer++;
        // };
        //question set will be removed and results page will be shown
        $("#submit").click(function () {
            $("#mainContainer3").hide();
            $("#mainContainer2").remove();
            $("#mainContainer3").show();
            $("resultspage").show();



        });
    });
});