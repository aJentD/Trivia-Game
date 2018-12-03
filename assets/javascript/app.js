//Variables
//=======================================================

//array of questions!
//var corrects ...out of # of questions
//
$("#start").on("click", function(){
    $("#start").hide();
    game.loadQuestion();
});
$(document).on("click", ".answer-button", function(e){
    game.clicked(e);
});
$(document).on("click", "#reset", function(){
    game.reset();
})
var questions = [
    {question: "What is Marvin the Maritan's dog's name?",
     answer: ["Captain K-9","Pluto","Martin","Rover"],
     right: "Captain K-9",
    },

    {question: "When did Tweety Bird first appear?",
    answer: ["1942 in 'A Tale of Two Kitties'","1937 in 'Tweety Tweets'", "1953 in 'Silvestor Raids The Nest'","1940 in 'Feather Flappers'"],
    right: "1942 in 'A Tale of Two Kitties'",
    },

    {question: "How many Academy Awards has Looney Tunes won?", 
    answer: ["2; 1949 for 'Scent-imental Reasons', and 1958 for 'Knighty Knight Bugs'",
        "0; Animated categories didn't exist",
        "1; 1972 for 'Disco Dandies'",
        "5; 1931 for 'Ain't Nature Grand!', 1939 for 'Screwball Football!', 1950 for 'Mutiny on the Bunny', 1959 for 'Mexicali Schmoes', 1965 for 'Zip Zip Zooray!'"],
    right: "2; 1949 for 'Scent-imental Reasons', and 1958 for 'Knighty Knight Bugs'",
    },

    {question: "Who was the longest running voice actor of Daffy Duck?",
    answer: ["Mel Blanc; 52 years","Chuck Jones; 38 years","Frank Gorshin; 47 years","Joe Alaskey; 39 years"],
    right: "Mel Blanc; 52 years",
    },

    {question: "What corporation did Wile E Coyote get his supplies from?",
    answer: ["ACME","CISCO","T.N.T","BLANC"],
    right: "ACME",
    }]

var game = {
    questions: questions,
    currentQuestion: 0,
    timer: 0,
    correct: 0,
    incorrect: 0,
    notAnswered: 0,
    countdown: function(){
        game.counter--;
        $("#timer").html(game.timer);
        if(game.counter = 0){
            console.log("Time Up!");
            game.timeUp();
        }

    },
    loadQuestion: function(){
        timer = setInterval(game.countdown,1000);
        $(".box").html('<h2>Time Left: <span id="timer">30</span>seconds</h2>');
        $(".box").append('<h2>'+ questions[game.currentQuestion].question+'</h2>');
        for(var i=0; i<questions[game.currentQuestion].answer.length; i++){
        $(".box").append('<button class="answer-button" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answer[i]+'">'+questions[game.currentQuestion].answer[i]+'</button>');    
        }
    },
    nextQuestion: function(){
        game.timer= 30;
        $("#timer").html(game.timer);
        game.currentQuestion++;
        game.loadQuestion();
    },
    timeUp: function(){
        clearInterval(timer);
        game.notAnswered++;
        $(".box").html("<h1>That's All Folks!</h1>");
        $(".box").append('<h2>The answer was: '+ questions[game.currentQuestion].right+'</h2>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results, 2*1000);
        } else {
            setTimeout(game.nextQuestion, 2*1000);
        }
    },
    results: function(){
        clearInterval(timer);
        $(".box").html("<h2>Y'll Come Back Now, Y'here!</h2>");
        $(".box").append("<h2>Correct: "+game.correct+"</h2>");
        $(".box").append("<h2>Incorrect: "+game.incorrect+"</h2>");
        $(".box").append("<h2>Not Answered: "+game.notAnswered+"</h2>");
        $(".box").append("<button id='reset'>Replay?</button>");
    },
    clicked: function(e){
        clearInterval(timer);
        if($(e.target).data("name")==questions[game.currentQuestion].right){
            game.answerCorrectly();
        } else{
            game.answerIncorrectly();
        }
    },
    answerCorrectly: function(){
        console.log("Yea!");
        clearInterval(timer);
        game.correct++;
        $(".box").html("<h2>You Nailed It!</h2>");
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results, 2*1000);
        } else {
            setTimeout(game.nextQuestion, 2*1000);
        }
        
    },
    answerIncorrectly: function(){
        console.log("No!");
        clearInterval(timer);
        game.incorrect++;
        $(".box").html("<h2>Dag Gummit!</h2>");
        $(".box").append('<h2>The answer was: '+ questions[game.currentQuestion].right+'</h2>');
        if(game.currentQuestion == questions.length-1){
            setTimeout(game.results, 2*1000);
        } else {
            setTimeout(game.nextQuestion, 2*1000);
        }
        
    },
    reset: function(){
        game.currentQuestion= 0,
        game.timer= 0,
        game.correct= 0,
        game.incorrect= 0,
        game.notAnswered= 0,
        game.loadQuestion();

    },

}



//Functions
//========================================================

//on screen #2- display first question


//for each- to cycle through questions array length

//set 15sec timer for 1st question
//reset for each question




//Calls
//==========================================================

//on click (start button)- startgame
//on click (answer choice) -log correct or miss
//on click (answer choice)- show next question


    

