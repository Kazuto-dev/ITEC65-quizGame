<?php
session_start();

$con = mysqli_connect('localhost', 'root', ''); // connection database

mysqli_select_db($con, 'quizit'); //Selecting database

$email = $_POST['email']; //POST email
$pass = $_POST['password']; //POST pass

$s = "SELECT * FROM user WHERE email = '$email' && password = '$pass'";

$result = mysqli_query($con, $s); 
$num = mysqli_num_rows ($result); 

if($num==1){

       $_SESSION['email'] = $email;
        header('location:menu.php'); //if email and pass is = 1 then successful login

} 
else{

       echo "Check your credentials if corrent or go to Signup page!"; // if your credentials is = 0 u cant log in

    }
?>