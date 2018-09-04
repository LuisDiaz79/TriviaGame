
var $startBtn = $("#start");
var $finishBtn = $("#finish");
var $timer = $('#timer');
var $question = $('#question');
var $answers = $('.answer');
var $trivia = $('#trivia');
var $totalScoreBoard = $('#totalscoreboard');
var $rAnswer;
var $scoreselected;

var gameRunning = false;
var ansRunning = false;
var questionSelected = 0;
var questionTimer;
var ansTimer;
var win = 0;
var lose = 0;




$startBtn.click(startSlideshow);
$answers.click(checkAnswer);
$finishBtn.click(finishGame);



function startSlideshow() {

    // TODO: Use showImage to hold the setInterval to run nextImage.
    if (!gameRunning) {
        $trivia.addClass("trivia");
        $scoreselected = $("#sc"+win);
        $scoreselected.addClass("scoreselected");
        $(this).hide();
        gameRunning = true;
        unsortTrivia(questions);

        nextQuestion(questionSelected);
    }
};

function modTimer() {
    var time = parseInt($timer.text());
    time--;
    $timer.text(parseInt(time));
    counter(time, 30);
    if (time < 0) {
        lose++;
        showAnswer();
    }
};
function modAnsTimer() {
    var time = parseInt($timer.text());
    time--;
    $timer.text(parseInt(time));
    counter(time, 15);
    ansRunning = true;
    if (time < 0) {
        ansRunning = false;
        questionSelected++;
        $rAnswer.removeClass("ranswer");
        $answers.removeClass("wanswer");
        nextQuestion(questionSelected);
    }

};

function nextQuestion(num) {

    $timer.text(30);
    clearInterval(ansTimer);
        

    if(questionSelected<10){
        var rAnswer = questions[num].correct.substr(1, questions[num].correct.length); 
        rAnswer = questions[num].a[rAnswer-1];
        unsortTrivia(questions[num].a);
        
        if(questions[num].a[0] == rAnswer){
            questions[num].correct = "a1";
        }else if(questions[num].a[1] == rAnswer){
            questions[num].correct = "a2";
        }if(questions[num].a[2] == rAnswer){
            questions[num].correct = "a3";
        }else if(questions[num].a[3] == rAnswer){
            questions[num].correct = "a4";
        }
        $rAnswer = $("#"+questions[num].correct);
    
        for(var i=0; i<questions[num].a.length; i++){
            $("#a"+(i+1)).text(questions[num].a[i]);
        }
    
        questionTimer = setInterval(modTimer, 1000);
        $question.text(questions[num].q);
    }else{
        showScore();
    }

};

function checkAnswer() {
    var ans = $(this).attr("id");
    if(!ansRunning){
        if (ans === questions[questionSelected].correct && questionTimer > 0) {
            $scoreselected.removeClass("scoreselected");
            win++;
            $scoreselected = $("#sc"+win);
            $scoreselected.addClass("scoreselected");
            showAnswer();
            
        }else{
            lose++;
            $(this).addClass("wanswer").delay( 800 );
            showAnswer();
        }
    }
    
}

function showAnswer() {
    clearInterval(questionTimer);
    $timer.text(15);
    ansTimer = setInterval(modAnsTimer, 1000);
    $rAnswer.addClass("ranswer");
};


function unsortTrivia(array) {

    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

}

function showScore(){
    $trivia.removeClass('trivia');
    $startBtn.show();
    $totalScoreBoard.addClass('totalscoreboard');
    $("#totalscore").text($scoreselected.text());
    $("#win").text(win);
    $("#lose").text(lose);
}

function finishGame(){
    win =0;
    lose=0;
    questionSelected = 0;
    gameRunning = false;
    $totalScoreBoard.removeClass('totalscoreboard');
    $scoreselected.removeClass("scoreselected");
    $scoreselected = null;
    $startBtn.show();
    $timer.text(30);
    clearInterval(questionTimer);
    clearInterval(ansTimer);
}
