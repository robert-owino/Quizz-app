const quizData = [
    {
        question : 'how old is florin?',
        a : '10',
        b : '17',
        c : '26',
        d :'110',
        correct : 'c'
    },
    {
        question : 'what is the most used programming language in 2019',
        a : 'java',
        b : 'C',
        c : 'python',
        d : 'javascript',
        correct : 'd'
    },
    {
        question : 'who is the president of US',
        a : 'florin pop',
        b : 'donald trump',
        c : 'ivan soldano',
        d : 'Mishai andrei',
        correct : 'b'
    },
    {
        question : 'what does HTML stand for ?',
        a : 'Hypertext Markup Language',
        b :'cascading style sheet',
        c : 'Jason Object Notation',
        d : 'Application Pragramming Interface',
        correct : 'a'
    },
    {
        question : 'What year was javascript launched',
        a : '1996',
        b : '1995',
        c : '1994',
        d : 'none of the above',
        correct : 'b'

    }
]

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

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected(){

    let answer = undefined

    answerEls.forEach( answerEl => {
       if(answerEl.checked){
            answer = answerEl.id
       }
    })
   return answer

}

function deselectAnswers(){
    answerEls.forEach( answerEl => {
       answerEl.checked = false
     })
}
submitBtn.addEventListener("click", ()=>{
    //check to see the answer
    const answer = getSelected()
    console.log(answer)

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
          currentQuiz++
          if (currentQuiz < quizData.length){
            loadQuiz()
            }else{
                quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>`
            }
    }   
})