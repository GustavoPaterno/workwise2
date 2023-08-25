var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById('question-6');
var question_seven = document.getElementById('question-7');
var question_eigth = document.getElementById('question-8');
var dynamicLinkElement = document.getElementById("dynamicLink");
var expandButton = document.getElementById('expand');
var music = document.querySelectorAll('.music')
var inter = document.querySelectorAll('.inter')
var nat = document.querySelectorAll('.natural')
var lin = document.querySelectorAll('.ling')
var log = document.querySelectorAll('.logic')
var corp = document.querySelectorAll('.corp')
var intra = document.querySelectorAll('.intra')
var esp = document.querySelectorAll('.espacial')

function storeAnswer(question_number, event) {
    if (event.target.type === 'radio') {
        console.log(event.target.value);
        answers['question' + question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function (event) {
    storeAnswer(1, event)
})
question_two.addEventListener('click', function (event) {
    storeAnswer(2, event)
})
question_three.addEventListener('click', function (event) {
    storeAnswer(3, event)
})
question_four.addEventListener('click', function (event) {
    storeAnswer(4, event)
})
question_five.addEventListener('click', function (event) {
    storeAnswer(5, event)
})
question_six.addEventListener('click', function (event) {
    storeAnswer(6, event)
})
question_seven.addEventListener('click', function (event) {
    storeAnswer(7, event)
})
question_eigth.addEventListener('click', function (event) {
    storeAnswer(8, event)
})


function totalScore() {
    var total_score =
        answers.question1 +
        answers.question2 +
        answers.question3 +
        answers.question4 +
        answers.question5 +
        answers.question6 +
        answers.question7 +
        answers.question8;

    return total_score;
}


var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');



function nextQuestion(question_number) {
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-' + question_number);
    var el2 = document.getElementById('question-' + current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

submit1.addEventListener('click', function () {
    nextQuestion(2);
})
submit2.addEventListener('click', function () {
    nextQuestion(3);
})
submit3.addEventListener('click', function () {
    nextQuestion(4);
})
submit4.addEventListener('click', function () {
    nextQuestion(5);
})
submit5.addEventListener('click', function () {
    nextQuestion(6);
})
submit6.addEventListener('click', function () {
    nextQuestion(7);
})
submit7.addEventListener('click', function () {
    nextQuestion(8);
})
submit8.addEventListener('click', function () {
    nextQuestion(9);
})




submit8.addEventListener('click', function () {
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("printprofis").innerHTML = mecanico() || '';
    document.getElementById("printprofis").innerHTML = profiss() || '';
})

function checkAnimal() {
    if (total_score === 5) {
        document.getElementById('printprofis').textContent = 'Mula';
    } else if (total_score === 6) {
        document.getElementById('printprofis').textContent = 'Cavalo';
    }
    else if (total_score === 7) {
        document.getElementById('printprofis').textContent = 'Terminar';
    }
}

submit5.addEventListener('click', function () {
    document.getElementById("printtotalscore").textContent = totalScore();
    updateProfessionMessage(totalScore());
})

function updateProfessionMessage(total_score) {
    var printprofisElement = document.getElementById("printprofis");


    
    if (total_score < 1) {
        printprofisElement.textContent = 'Desculpe, você não tem capacidade para trabalhar qualquer das áreas que temos registradas';
    }

    else if (total_score < 10) {
        printprofisElement.textContent = 'Área musical';
        music.forEach(function (element) {
            element.classList.add('expandir');
    });
}

    else if (total_score < 100) {
        printprofisElement.textContent = 'Interpessoal';
        inter.forEach(function (element) {
        element.classList.add('expandir');
    });}

    else if (total_score < 1000) {
        printprofisElement.textContent = 'Naturalista';
        nat.forEach(function (element) {
        element.classList.add('expandir');
    });}

    else if (total_score < 10000) {
        printprofisElement.textContent = 'Linguístico';
        lin.forEach(function (element) {
        element.classList.add('expandir');
    });}

    else if (total_score < 100000) {
        printprofisElement.textContent = 'Lógico matemático';
        log.forEach(function (element) {
        element.classList.add('expandir');
    });}

    else if (total_score < 1000000) {
        printprofisElement.textContent = 'Corporal e Cinestésica';
        corp.forEach(function (element) {
        element.classList.add('expandir');
    }); }

    else if (total_score < 10000000) {
        printprofisElement.textContent = 'Intrapessoal';
        intra.forEach(function (element) {
            element.classList.add('expandir');
        }
        );}
    

    else if (total_score < 100000000) {
        printprofisElement.textContent = 'Espacial';
        esp.forEach(function (element) {
            element.classList.add('expandir');
    }
);}
}



submit5.addEventListener('click', function () {
    document.getElementById("printtotalscore").textContent = totalScore();
    updateProfessionMessage(totalScore());
});
