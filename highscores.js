
const highScoreList = document.querySelector('#highScoreList') // this method will find the first element in highScoreList and arrange it into highest to lowest form ..

const highScore = JSON.parse(localStorage.getItem('highScore')) || [] // this is a temporary storage for the saved scores ..


highScoreList.innerHTML = highScore.map(score => {
	return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')//this is the manipulation for creating the array

