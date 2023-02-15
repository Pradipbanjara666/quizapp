const quizData = [
    {
        question: "What is the Capital City of Nepal?",
        a: "Gorkha",
        b: "Kathmandu",
        c: "Pokhara",
        d: "Butwal",
        correct: "b",
    },
    {
        question: "Who the current Prime Minister of Nepal?",
        a: "K.P. Sharma Oli",
        b: "Puspa Kamal Dahal Prachanda",
        c: "Sher Bahadhur Deuba",
        d: "Rabi Lamichhane",
        correct: "b",
    },
    {
        question: "How many Province in Nepal?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "c",
    },
    {
        question: "How many District in Nepal?",
        a: "75",
        b: "76",
        c: "77",
        d: "78",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})