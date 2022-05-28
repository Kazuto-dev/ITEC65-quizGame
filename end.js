const username = document.querySelector('#username')	//this method will get the name entered by user
const saveScoreBtn = document.querySelector('#saveScoreBtn')	//this method will get the save score.
const finalScore = document.querySelector('#finalScore')	//this method get the final score
const mostRecentScore = localStorage.getItem('mostRecentScore')	//this method show the others saved scores

const highScores = JSON.parse(localStorage.getItem('highScore')) || []	//this is the temporary storage

const MAX_HIGH_SCORES = 5 //max-length of scores that can be save

finalScore.innerText = mostRecentScore //this is a declaration

username.addEventListener('keyup', () => {
	saveScoreBtn.disabled = !username.value
})	//this function prevent the resent score to saved if there's no name entered.

saveHighScore = e => {
	e.preventDefault()

	const score = {
		score: mostRecentScore,
		name: username.value
	}

	highScores.push(score)

	highScores.sort((a,b) => { 
		return b.score - a.score
	})

	highScores.splice(5)

	localStorage.setItem('highScore', JSON.stringify(highScores))
	window.location.assign('')
}	//this fuction executes the adding and sorting of total score with entered name. 