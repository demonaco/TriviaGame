// global variables



var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        game.counter--;
        $("#")
    }
}

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
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            alert("Time's up!");
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown, 1000);
            $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter" >120</span> seconds</h2>');
                $("#startGame").remove();
                $("#ewok").remove();
                for (var i = 0; i < questions.length; i++) {
                    $("#subwrapper").append('<h2>' + questions[i].question + '</h2>')
                    for (var j = 0; j < questions[i].answers.length; j++) {
                        $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
                    }
                }
            },
            done: function() {
                $.each($('input[name="question-0]":checked'), function(){
                    if($(this).val()==questions[0].correctAnswer) {
                        game.correct++; 
                    } else {
                        game.incorrect--;
                    }
                });
                $.each($('input[name="question-1]":checked'), function(){
                    if($(this).val()==questions[1].correctAnswer) {
                        game.correct++; 
                    } else {
                        game.incorrect--;
                    }
                });
                $.each($('input[name="question-2]":checked'), function(){
                    if($(this).val()==questions[2].correctAnswer) {
                        game.correct++; 
                    } else {
                        game.incorrect--;
                    }
                });
                $.each($('input[name="question-3]":checked'), function(){
                    if($(this).val()==questions[3].correctAnswer) {
                        game.correct++; 
                    } else {
                        game.incorrect--;
                    }
                });
                $.each($('input[name="question-4]":checked'), function(){
                    if($(this).val()==questions[4].correctAnswer) {
                        game.correct++; 
                    } else {
                        game.incorrect--;
                    }
                });
                $.each($('input[name="question-5]":checked'), function(){
                    if($(this).val()==questions[5].correctAnswer) {
                        game.correct++; 
                    } else {
                        game.incorrect--;
                    }
                });
                $.each($('input[name="question-6]":checked'), function(){
                    if($(this).val()==questions[6].correctAnswer) {
                        game.correct++; 
                    } else {
                        game.incorrect--;
                    }
                });
                $.each($('input[name="question-7]":checked'), function(){
                    if($(this).val()==questions[7].correctAnswer) {
                        game.correct++; 
                    } else {
                        game.incorrect--;
                    }
                });

                this.result();
            },
            result: function(){
                clearInterval(timer);
                $('#subwrapper h2').remove();
                $('#subwrapper').html("<h2>Finished!</h2>")
                $('#subwrapper').append("<h3>Correct answers: " + this.correct + "<h3>");
                $('#subwrapper').append("<h3>Incorrect answers: " + this.incorrect + "<h3>");
                $('#subwrapper').append("<h3>Unanswered: " + (questions.length-(this.incorrect+this.correct)) + "<h3>");

            }
    }




// var hiddenContainer = $("#mainContainer2").hide();
// var results = $("#mainContainer3").hide();
// //variables to establish clock and have it countdown
// var count = 120;
// var timeStart = function () {
//     $("#time").html(count);
//     setInterval(startTime, 1000);
//     function startTime() {
//         $("#time").html(count);
//         count--;
//     };
// };
// var end = count - 5;


// Allow the doc to be loaded and ready
// when the button is clicked to submit questions, the main container div will be toggled

// $(document).ready(function () {
//     //set elements to first be hidden before click actions
//     $("#mainContainer2").hide();
//     $("#mainContainer3").hide();
//     //start game div will be removed and question set will be shown
//     $("#startGame").click(function () {
//         console.log("hello!");
//         $("#mainContainer1").remove();
//         $("#mainContainer2").show();
//         if ($("#maincontainer2").show === true);
//         console.log("this is true");
//         timeStart();
//         if ($("input").val = "correctAnswer") {
//             $("#questionsRight")++
//         }

//         }



//         $("#correctAnswer").click(function () {
//             correct++;
//             $(questionsRight).html(correct);
//             $("#wrongAnswer").click(function () {
//                 wrong++;

//             })
//         });
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
//         $("#submit").click(function () {
//             $("#mainContainer3").hide();
//             $("#mainContainer2").remove();
//             $("#mainContainer3").show();
//             $("resultspage").show();

//             // function result() {
//             //     clearInterval(timeStart);
//             // }



//         });
//     });
// });