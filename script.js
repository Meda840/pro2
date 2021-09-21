const quizzData = [

        {
            question:'Comment je m\'apelle' ,
            a:'Mehdi' ,
            b: 'Pierre',
            c: 'Amine',
            correct:'c' 
        },
        {
            question:'Où es que j\'habite' ,
            a: 'Marseille',
            b: 'Lille',
            c: 'Paris',
            correct: 'b'
        },
        {
            question:'Combien je mesure en cm' ,
            a: '180',
            b: '170',
            c: '175',
            correct: 'a'
        },
]

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const btnSend = document.getElementById('btn');
const quizz = document.getElementById('quizz');

let currentQuestion = 0 ;
let score = 0;


function loadQuizz(){
    deselectAnswer();
    const currentQuizData = quizzData[currentQuestion];
    questionEl.innerHTML= currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
    answerEl.checked = false;
    });
}

loadQuizz();

btnSend.addEventListener('click', () =>{
    
    const answer = getSelected();

    if (answer) {
        
        if(answer === quizzData[currentQuestion].correct){
            score++;
            console.log(score);
        }
        currentQuestion++;
    }
  
    if (currentQuestion < quizzData.length) {
    loadQuizz()
    }
    else {
        quizz.innerHTML= `<h3>Votre score est : ${score} / ${quizzData.length}</h3>`;
    }
}
)
