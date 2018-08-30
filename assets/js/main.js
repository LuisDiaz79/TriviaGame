
var $startBtn =$("#start"); 
var $timer = $('#timer');
var $question =$('#question');
var $answers = $('.answer');
var $trivia = $('#trivia');


var gameRunning = false;
var questionSelected = 0;
var questionTimer;


var questions = [
    { q : "Question", a:"Answer 1", b:"Answer 2", c:"Answer 3", d:"Answer 4", correct:"a1"}
];

$startBtn.click(startSlideshow);
$answers.click(checkAnswer);



function startSlideshow() {

    // TODO: Use showImage to hold the setInterval to run nextImage.
    console.log('IN');
    if(!gameRunning){
        $(this).hide();
        questionTimer = setInterval(modTimer, 1000);
        gameRunning = true;
        nextQuestion(questionSelected);
    }
};  

function modTimer(){
    var time = parseInt($timer.text());
    time--;
    $timer.text(parseInt(time));
};


function nextQuestion(num){
    $question.text(questions[num].q);
    $("#a").text(questions[num].a);
    $("#a").attr("value", "a4");
    $("#b").text(questions[num].b);
    $("#b").attr("value", "a1");
    $("#c").text(questions[num].c);
    $("#c").attr("value", "a2");
    $("#d").text(questions[num].d);
    $("#d").attr("value", "a3");
};

function checkAnswer(){
    alert($(this).attr("value"));
    var ans = $(this).attr("value"); 
    if(ans === questions[questionSelected].correct){
        alert(">>>>>>>>>>>>>");
        showAnswer();
    }
}

function showAnswer(){
    clearInterval(questionTimer);
    $trivia.hide();
    $timer.text(30);
    questionTimer = setInterval(modTimer, 1000);
    var $selected = $('#'+questions[questionSelected].correct);
    console.log($selected);

}

