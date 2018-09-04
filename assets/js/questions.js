var questions = [
    {
        q: "What is the most commonly spoken language in the world?",
        a: ["ENGLISH", "CHINESE", "SPANISH", "GERMAN"],
        correct: "a2"
    },
    {
        q: "What is the Italian word for pie?",
        a: ["PIZZA", "PIE", "PIECE OF CAKE", "NON ONE"],
        correct: "a1"
    },
    {
        q: "What color are aircraft black boxes?",
        a: ["BLACK", "RED", "ORANGE", "BLUE"],
        correct: "a3"
    },
    {
        q: "What do honey bees collect?",
        a: ["Blood", "Dust", "Honey", "Pollen and nectar."],
        correct: "a4"
    },
    {
        q: "Which country was the Caesar salad invented in?",
        a: ["Turkey", "Mexico.", "Grecia", "Italia"],
        correct: "a2"
    },
    {
        q: "From which country do French fries originate?",
        a: ["Belgium", "France", "USA", "Spain"],
        correct: "a1"
    },
    { 
        q: "Where would you find the Sea of Tranquility?", 
        a: ["ASIA", "USA", "SOUTH POLE", "THE MOON"], 
        correct: "a4" 
    },
    { 
        q: "How many degrees are there in a circle?", 
        a: ["90", "45", "360", "180"], 
        correct: "a3" 
    },
    { 
        q: "What is the most common name in the world?", 
        a: ["MUHAMMED", "JOHN", "OLIVER", "MARY"], 
        correct: "a1" 
    },
    { 
        q: "What percent of your body is water?", 
        a: ["80%", "60%", "40%", "20%"], 
        correct: "a2" 
    },
    { 
        q: "What are the primary colors?", 
        a: ["RED, GREEN AND BLUE", "YELLOW, RED AND BLUE", "BLACK, RED, YELLOW", "YELLOW, WHITE AND BLUE"], 
        correct: "a2" 
    },
    { 
        q: "What is the tallest mountain in the world?", 
        a: ["Denali", "K 2", "Mount Everest", "Mauna Kea"], 
        correct: "a4" 
    },
    { 
        q: "How many American cents make up a dime? ", 
        a: ["10", "100", "1", "1000"], 
        correct: "a1" 
    },
    { 
        q: "How many counties are there in England?", 
        a: ["1", "6", "3", "4"], 
        correct: "a4" 
    },
    { 
        q: "In 2017, what was the most valuable currency in the world?", 
        a: ["Euro (EUR)", "US Dollar (US)", "Kuwaiti Dinar (KWD)", "British Pound (GBP)"], 
        correct: "a3" 
    },
    { 
        q: "Which country invented the paper?", 
        a: ["Japan", "China", "England", "Germany"], 
        correct: "a2" 
    },
    { 
        q: "Which country allow taking a nap during work?", 
        a: ["Spain", "Japan", "England", "Brazil"], 
        correct: "a1" 
    },
    { 
        q: "What is the boiling temperature of water?", 
        a: ["200°F or 100°C", "100°F or 212°C", "212°F or 100°C", "200°F or 200°C"], 
        correct: "a3" 
    },
    { 
        q: "What was the first capital of the United States?", 
        a: ["Philadelphia, PA.", "Washington, DC.", "New York City, NY.", "Denver, CO."], 
        correct: "a1" 
    },
    {
        q: "What does the acronym USB stand for when referring to a computer port?",
        a: ["United Sexy Boys", "US Bank", "Universal Serial Bus", "Until Something Better"],
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