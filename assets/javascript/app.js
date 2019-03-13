//trivia game
$(document).ready(function(){

//Trivia questions and answers
var questions = [{
        question: "1) When was the first Earth day?",
        options: ["a: 1970", "b: 2003", "c: 1956", "d: 1994"],
        answer: 1
    },{
        question: "2) What book launched the modern environmental movement, and led to the widespread ban of DDT?",
        options: [
            "a: Earth in the Balance", 
            "b: Pesticides and pollution", 
            "c: Silent Spring", 
            "d: The End of Nature"
        ],
        answer: 3
    },{
        question: "3) Deforestation produces about ______ of global greenhouse gas emissions.",
        options: [
            "a: 10%", 
            "b: 24%", 
            "c: 32%", 
            "d: 8%"
        ],
        answer: 2
    },{
        question: "4) What percentage of food produced globally never makes it to the table?",
        options: [
            "a: 10%", 
            "b: 25%", 
            "c: 15%", 
            "d: 33%"
        ],
        answer: 4
    },{
        question: "5) Which of these contries emits the most carbon dioxide?",
        options: [
            "a: Russia", 
            "b: USA", 
            "c: UK", 
            "d: China"
        ],
        answer: 4
    },{
        question: "6) What year did the United States EPA declared greenhouse gasses a threat to public health?",
        options: [
            "a: 1982", 
            "b: 1995", 
            "c: 2009", 
            "d: 1970"
        ],
        answer: 3
    },{
        question: "7) How much of our air pollution comes from motor vehicles, like cars and trucks?",
        options: [
            "a: 30%", 
            "b: 50%", 
            "c: 70%", 
            "d: 10%"
        ], 
        answer: 2
    },{
        question: "8) Which of the following legislative actions occurred directly following the first Earth Day?",
        options: [
            "a: The creation of the EPA", 
            "b: The Clean Water Act", 
            "c: The Clean Air Act Extension", 
            "d: All of the above"
        ],
        answer: 4
    },{
        question: "9) How many trees does it take to provide a day’s supply of oxygen for 4 people?",
        options: [
            "a: 10", 
            "b: 1", 
            "c: 4 ", 
            "d: 40 "
        ],
        answer: 2
    },{
        question: "10) More than half of the breathable oxygen in the world comes from where?",
        options: [
            "a: The ocean", 
            "b: The Amazon", 
            "c: Clouds", 
            "d: Floweing plants"
        ],
        answer: 1
    }];

var correct = 0;
var incorrect = 0;
var unanswered = 0;

var timer = 100;
var intervalId;

function run(){
    clearInterval(intervalId);
    intervalidID = setInterval(decrement, 1000);
    }
    function stop(){
        clearInterval(intervalId);   
    }
function decrement(){
    timer--;
    $("#timer").html("<h2> Time remaining: " + timer + "<h2><br>");
    if (timer === 0){
        stop()
        score();
        results();
        
    }
}

$("#start").on("click", function(){

$("#start").hide();

$("#timer").html("<h2> Time remaining: " + timer + "<h2><br>");

$("#submit").html("<button id=submit>Submit</button>");

$("#q1").html("<h3>" + questions[0].question + "</h3>");
$("#a1").html("<input type='radio' name='a1' value='1'> " + "<label> " + questions[0].options[0] + "</label><br>"
    + "<input type='radio' name='a1' value='2'> " + "<label> " + questions[0].options[1] + "</label><br>"
    + "<input type='radio' name='a1' value='3'> " + "<label> " + questions[0].options[2] + "</label><br>"
    + "<input type='radio' name='a1' value='4'> " + "<label> " + questions[0].options[3] + "</label><br><br>"
);
$("#q2").html("<h3>" + questions[1].question + "</h3>");
$("#a2").html("<input type='radio' name='a2' value='1'> " + "<label> " + questions[1].options[0] + "</label><br>"
    + "<input type='radio' name='a2' value='2'> " + "<label> " + questions[1].options[1] + "</label><br>"
    + "<input type='radio' name='a2' value='3'> " + "<label> " + questions[1].options[2] + "</label><br>"
    + "<input type='radio' name='a2' value='4'> " + "<label> " + questions[1].options[3] + "</label><br><br>"
);
$("#q3").html("<h3>" + questions[2].question + "</h3>");
$("#a3").html("<input type='radio' name='a3' value='1'> " + "<label> " + questions[2].options[0] + "</label><br>"
    + "<input type='radio' name='a3' value='2'> " + "<label> " + questions[2].options[1] + "</label><br>"
    + "<input type='radio' name='a3 value='3'> " + "<label> " + questions[2].options[2] + "</label><br>"
    + "<input type='radio' name='a3' value='4'> " + "<label> " + questions[2].options[3] + "</label><br><br>"
);
$("#q4").html("<h3>" + questions[3].question + "</h3>");
$("#a4").html("<input type='radio' name='a4' value='1'> " + "<label> " + questions[3].options[0] + "</label><br>"
    + "<input type='radio' name='a4' value='2'> " + "<label> " + questions[3].options[1] + "</label><br>"
    + "<input type='radio' name='a4' value='3'> " + "<label> " + questions[3].options[2] + "</label><br>"
    + "<input type='radio' name='a4' value='4'> " + "<label> " + questions[3].options[3] + "</label><br><br>"
);
$("#q5").html("<h3>" + questions[4].question + "</h3>");
$("#a5").html("<input type='radio' name='a5' value='1'> " + "<label> " + questions[4].options[0] + "</label><br>"
    + "<input type='radio' name='a5' value='2'> " + "<label> " + questions[4].options[1] + "</label><br>"
    + "<input type='radio' name='a5' value='3'> " + "<label> " + questions[4].options[2] + "</label><br>"
    + "<input type='radio' name='a5' value='4'> " + "<label> " + questions[4].options[3] + "</label><br><br>"
);
$("#q6").html("<h3>" + questions[5].question + "</h3>");
$("#a6").html("<input type='radio' name='a6' value='1'> " + "<label> " + questions[5].options[0] + "</label><br>"
    + "<input type='radio' name='a6' value='2'> " + "<label> " + questions[5].options[1] + "</label><br>"
    + "<input type='radio' name='a6' value='3'> " + "<label> " + questions[5].options[2] + "</label><br>"
    + "<input type='radio' name='a6' value='4'> " + "<label> " + questions[5].options[3] + "</label><br><br>"
);
$("#q7").html("<h3>" + questions[6].question + "</h3>");
$("#a7").html("<input type='radio' name='a7' value='1'> " + "<label> " + questions[6].options[0] + "</label><br>"
    + "<input type='radio' name='a7' value='2'> " + "<label> " + questions[6].options[1] + "</label><br>"
    + "<input type='radio' name='a7' value='3'> " + "<label> " + questions[6].options[2] + "</label><br>"
    + "<input type='radio' name='a7' value='4'> " + "<label> " + questions[6].options[3] + "</label><br><br>"
);
$("#q8").html("<h3>" + questions[7].question + "</h3>");
$("#a8").html("<input type='radio' name='a8' value='1'> " + "<label> " + questions[7].options[0] + "</label><br>"
    + "<input type='radio' name='a8' value='2'> " + "<label> " + questions[7].options[1] + "</label><br>"
    + "<input type='radio' name='a8' value='3'> " + "<label> " + questions[7].options[2] + "</label><br>"
    + "<input type='radio' name='a8' value='4'> " + "<label> " + questions[7].options[3] + "</label><br><br>"
);
$("#q9").html("<h3>" + questions[8].question + "</h3>");
$("#a9").html("<input type='radio' name='a9 value='1'> " + "<label> " + questions[8].options[0] + "</label><br>"
    + "<input type='radio' name='a9' value=''> " + "<label> " + questions[8].options[1] + "</label><br>"
    + "<input type='radio' name='a9' value='3'> " + "<label> " + questions[8].options[2] + "</label><br>"
    + "<input type='radio' name='a9' value='4'> " + "<label> " + questions[8].options[3] + "</label><br><br>"
);
$("#q10").html("<h3>" + questions[9].question + "</h3>");
$("#a10").html("<input type='radio' name='answer1' value='1'> " + "<label> " + questions[9].options[0] + "</label><br>"
    + "<input type='radio' name='a10' value='2'> " + "<label> " + questions[9].options[1] + "</label><br>"
    + "<input type='radio' name='a10 value='3'> " + "<label> " + questions[9].options[2] + "</label><br>"
    + "<input type='radio' name='a10 value='4'> " + "<label> " + questions[9].options[3] + "</label><br><br>"
);

run();
});

function results(){
    $("#questions").hide();
    $("#timer").hide();

    $("#resultsMessage").html("<h3>All Done!</h3>");
    $("#correct").html("<h2> Correct Answers: " + correct + "<h2>");
    $("#incorrect").html("<h2> Incorrect Answers: " + incorrect + "<h2>");
    $("#unanswered").html("<h2> Unanswered: " + unanswered + "<h2>");
}

function score(){
    var userA1 = $("input[name='a1']:checked").val();
    var userA2 = $("input[name='a2']:checked").val();
    var userA3 = $("input[name='a3']:checked").val();
    var userA4 = $("input[name='a4']:checked").val();
    var userA5 = $("input[name='a5']:checked").val();
    var userA6 = $("input[name='a6']:checked").val();
    var userA7 = $("input[name='a7']:checked").val();
    var userA8 = $("input[name='a8']:checked").val();
    var userA9 = $("input[name='a9']:checked").val();
    var userA10 = $("input[name='a10']:checked").val();

    if(userA1 === undefined){
        unanswered++;
    }
    else if (userA1 == questions[0].answer){
        correct++;
    }
    else{
        incorrect++;
    }

    if(userA2 === undefined){
        unanswered++;
    }
    else if (userA2 == questions[1].answer){
        correct++;
    }
    else{
        incorrect++;
    }

    if(userA3 === undefined){
        unanswered++;
    }
    else if (userA3 == questions[2].answer){
        correct++;
    }
    else{
        incorrect++;
    }

    if(userA4 === undefined){
        unanswered++;
    }
    else if (userA4 == questions[3].answer){
        correct++;
    }
    else{
        incorrect++;
    }

    if(userA5 === undefined){
        unanswered++;
    }
    else if (userA5 == questions[4].answer){
        correct++;
    }
    else{
        incorrect++;
    }

    if(userA6 === undefined){
        unanswered++;
    }
    else if (userA6 == questions[5].answer){
        correct++;
    }
    else{
        incorrect++;
    }

    if(userA7 === undefined){
        unanswered++;
    }
    else if (userA7 == questions[6].answer){
        correct++;
    }
    else{
        incorrect++;
    }

    if(userA8 === undefined){
        unanswered++;
    }
    else if (userA8 == questions[7].answer){
        correct++;
    }
    else{
        incorrect++;
    }

    if(userA9 === undefined){
        unanswered++;
    }
    else if (userA9 == questions[8].answer){
        correct++;
    }
    else{
        incorrect++;
    }

    if(userA10 === undefined){
        unanswered++;
    }
    else if (userA10 == questions[9].answer){
        correct++;
    }
    else{
        incorrect++;
    }
}

$("#submit").on("click", function(){

    score();
   results();
   
});

})