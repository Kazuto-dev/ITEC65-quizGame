<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport"content="width=device-width,initial-scale=1.0">
     <title>quizIT</title>
     <link rel="stylesheet"href="signup.css">
     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins&amp;display=swap">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

</head>
<body>
     <div class="container">
          <div class="left">
           <form action="registration.php" method="post" class="form">
               <h2>Create an Account</h2>
                <input type="username" name="username" class="box" placeholder="username" required="">
                <input type="email"name="email" class="box" placeholder="Email" required="">
                <input type="password"name="password"class="box" placeholder="Password" required="">
                <button type="submit" class="button">Play</button>
          </form>
     </div>


     <div class="right">
          <h1>quizIT</h1>
          <h2>Already have an account?</h2>

          <div class="btn">
               <a href="index.php" class="color">Sign In</a>
          </div>

     </div>
</div>
</body>
</html>