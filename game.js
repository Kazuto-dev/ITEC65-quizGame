const question = document.querySelector('#question'); //this method will get the questions
const choices = Array.from(document.querySelectorAll('.choice-text'));	//this method used to verify the correct answers
const progressText = document.querySelector('#progressText');	//this method count the proceeded questions
const scoreText = document.querySelector('#score');	//this method get the recent score
const progressBarFull = document.querySelector('#progressBarFull');	//this method shows the level of proceeded questions

//this is the declations
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestion =[]


let questions = [
	{
		question: "The first version of CSS was invented in year?",
		   choice1: '1969',
		   choice2: '1996',
		   choice3: '1966',
		   choice4: '1986',
		   answer: 2,
	},

	{
		question: "How many types of CSS are there?",
			choice1: '1',
			choice2: '2',
			choice3: '3',
			choice4: '4',
			answer: 3,
	},

	{
		question: "What is the original name of php?",
			choice1: "Personal Hypertext Processor",
			choice2: "Page Hypertext Processor",
			choice3: "Page Header Processor",
			choice4: "Personal Home Page",
			answer: 4,
	},
		
	{
		question: "How many types of HTML are there?",
			choice1: '1',
			choice2: '2',
			choice3: '3',
			choice4: '4',
			answer: 3,
	},

	{
		question: "Who is the creator of php adorable mascot?",
			choice1: "François Buffière",
			choice2: "Rasmus Lerdorf",
			choice3: "Vincent Pontier",
			choice4: "James Gosling",
			answer: 3,
	},

	{
		question: "Who is the inventor of first published HTML in year 1993?",
			choice1: "Håkon Wium Lie",
			choice2: "Tim Berners-Lee",
			choice3: "Brendan Eich",
			choice4: "Mitchell Baker",
			answer: 2,
	},

	{
		question: "Why was PHP created?",
			choice1: "maintain the creator personal homepage",
			choice2: "capability of connecting to many database systems",
			choice3: "making the entire process transparent to the client",
			choice4: "Interpreted and executed by the server on page request",
			answer: 1,
	},

	{
		question: "what is the main purpose of javascript?",
			choice1: "for Internet-based applications",
			choice2: "to provide a set of general rules that suggest how content should look when rendered",
			choice3: "allows to add dynamic behavior and special effects to the webpage",
			choice4: "describing the presentation of Web pages",
			answer: 3,
	},
	{
		question: "The more you code, the more of me there is. I may be gone for now but you can’t get rid of me forever. What am I?",
			choice1: "A fuction",
			choice2: "A semicolon",
			choice3: "A bug",
			choice4: "A problem",
			answer: 3, 
	},

	{
		question: "Javascript strings cannot be more than _____ characters long?",
			choice1: '69',
			choice2: '96',
			choice3: '89',
			choice4: '79',
			answer: 1,
	}
]



const SCORE_POINTS = 100 //this is the scoring
const MAX_QUESTIONS = 10 //this is the max-lenght of the questions


startGame = () => {

	questionCounter = 0
	score = 0
	availableQuestion = [...questions]
	getNewQuestion()
}	//this is the initial state of the game

getNewQuestion = () => {

	if(availableQuestion.length === 0 || questionCounter > MAX_QUESTIONS){
		localStorage.setItem('mostRecentScore', score)

		return window.location.assign('end.html')
	}	//when all the questions has been fulfilled this statement will directs you to our endpage and localstorage will show the total score .. 

	questionCounter++
	progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
	progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) *100}%`	//this is the manipulation for proceeded questions the icrementation of numerical and level value.

	const questionsIndex = Math.floor(Math.random()* availableQuestion.length)
	currentQuestion = availableQuestion[questionsIndex]
	question.innerText = currentQuestion.question //this is a function to show all the questions

	choices.forEach(choice => {
		const number = choice.dataset['number']
		choice.innerText = currentQuestion['choice' + number]
	})

	availableQuestion.splice(questionsIndex, 1)

	acceptingAnswers = true	//this a loop for accepting all the answer

}

choices.forEach(choice => {
	choice.addEventListener('click', e => {
		if(!acceptingAnswers) return

		acceptingAnswers = false
		const selectedChoice = e.target 
		const selectedAnswer = selectedChoice.dataset['number']

		let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

		if(classToApply === 'correct'){

			incrementScore(SCORE_POINTS)

		}


		selectedChoice.parentElement.classList.add(classToApply)

		setTimeout(() => {

				selectedChoice.parentElement.classList.remove(classToApply)
				getNewQuestion()

		}, 1000)

	})	//this is the validation for the correct or wrong answers
})


incrementScore = num =>{
	score +=num
	scoreText.innerText = score
}	//this is the incrementations of score when answer is correct.

startGame()
