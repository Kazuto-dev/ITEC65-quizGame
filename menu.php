<?php 

session_start();
if(!isset($_SESSION['email']))
{
   header ('location:index.php');
}


?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins&amp;display=swap">
	<link rel="stylesheet" type="text/css" href="style.css">

	<title>quizIT</title>
</head>
<body>
	<!--THIS IS THE DIV THAT HOLDS OUR HOMEPAGE-->
	<div class="container"> 

	<!--HOMEPAGE SECTION STARTS-->
	 <div id="home" class="flex-column flex-center">

		<!--TITLE SECTION STARTS-->
		<h1>quizIT</h1>
		<!--TITLE SECTION ENDS-->

			<!--BUTTON SECTION STARTS-->
			<a class="btn" href="game.html">Start</a>  <!-- THIS IS A BUTTON THAT WILL JUMP YOU IN OUR GAME SECTION -->

			<a class="btn" id="ranks-btn" href="highscores.html">Rankings</a>  <!-- THIS IS A BUTTON THAT WILL SHOWS SCORES IN HIGHEST TO LOWEST VALUE -->
			<!--BUTTON SECTION ENDS-->

			<a class="btn" id="ranks-btn" href="logout.php">LOGOUT</a>

		</div>
		<!--HOMEPAGE SECTION ENDS-->

	
	<!--DIV THAT HOLDS HOMEPAGE ENDS HERE-->

</div>



	
	
</body>
</html> 