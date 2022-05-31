<?php

session_start(); // Start connect html and php
 
header ('location:menu.php');

$con = mysqli_connect('localhost', 'root', ''); //connection to database

mysqli_select_db($con, 'quizit'); //registration is the database name

$username = $_POST['username']; //
$email = $_POST['email']; // 3 inputs that need to get
$pass = $_POST['password']; //

$s = "SELECT * FROM users WHERE username = '$username'"; // select email from DB

$result = mysqli_query($con, $s); //execute sql query
$num = mysqli_num_rows ($result); //Sql connection rows add and drop depend on the command


 
if ($num == 1) {
    echo "Create new username this is taken already!";
}
else{

        $reg = "insert into users (username , email , password) values ('$username' , '$email', '$pass')";
        mysqli_query($con, $reg); //if your email is = 0 then your crendentials will inserted into the database
}
?>