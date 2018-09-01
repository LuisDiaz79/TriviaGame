var questions = [
    {
        q: "Question",
        a: ["Answer 1", "CORRECT", "Answer 3", "Answer 4"],
        correct: "a2"
    },
    {
        q: "Question2",
        a: ["CORRECT", "Answer 2", "Answer 3", "Answer 4"],
        correct: "a1"
    },
    {
        q: "Question3",
        a: ["Answer3 1", "Answer 2", "CORRECT", "Answer 4"],
        correct: "a3"
    },
    {
        q: "Question4",
        a: ["Answer4 1", "Answer 2", "Answer 3", "CORRECT"],
        correct: "a4"
    },
    {
        q: "Question5",
        a: ["Answer5 1", "CORRECT", "Answer 3", "Answer 4"],
        correct: "a2"
    },
    {
        q: "Question6",
        a: ["CORRECT", "Answer 2", "Answer 3", "Answer 4"],
        correct: "a1"
    },
    { 
        q: "Question7", 
        a: ["Answer7 1", "Answer 2", "Answer 3", "CORRECT"], 
        correct: "a4" 
    },
    { 
        q: "Question8", 
        a: ["Answer8 1", "Answer 2", "CORRECT", "Answer 4"], 
        correct: "a3" 
    },
    { 
        q: "Question9", 
        a: ["CORRECT", "Answer 2", "Answer 3", "Answer 4"], 
        correct: "a1" 
    },
    { 
        q: "Question10", 
        a: ["Answer0 1", "CORRECT", "Answer 3", "Answer 4"], 
        correct: "a2" 
    },
    { 
        q: "Question11", 
        a: ["Answer1 1", "CORRECT", "Answer 3", "Answer 4"], 
        correct: "a2" 
    },
    { 
        q: "Question12", 
        a: ["Answer2 1", "Answer 2", "Answer 3", "CORRECT"], 
        correct: "a4" 
    },
    { 
        q: "Question13", 
        a: ["CORRECT", "Answer 2", "Answer 3", "Answer 4"], 
        correct: "a1" 
    },
    {
        q: "What does the acronym USB stand for when referring to a computer port?",
        a: ["Answer42 1", "Answer2 2", "CORRECT", "Answer2 4"],
        correct: "a3"
    }
];




function counter(val, maxTime) {
    var $circle = $('#svg #bar');

    if (isNaN(val)) {
        val = 30;
    }
    else {
        var r = $circle.attr('r');
        var c = Math.PI * (r * 2);

        if (val < 0) { val = 0; }
        if (val > maxTime) { val = maxTime; }

        var pct = ((maxTime - val) / maxTime) * c;

        $circle.css({ strokeDashoffset: pct });

        $('#cont').attr('data-pct', val);
    }
};