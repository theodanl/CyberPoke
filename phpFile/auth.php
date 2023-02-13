<?php
  $Login = filter_var(trim($_POST['Login']),
  FILTER_SANITIZE_STRING);
//   $Email = filter_var(trim($_POST['Email']),
// FILTER_SANITIZE_STRING);
  $Password = filter_var(trim($_POST['Password']),
FILTER_SANITIZE_STRING);


/*Хеширование пароля при помощи md5  + соль */
 
$Password = md5($Password."sanyapussy123");


/* Подключение к БД + проверка пользователей */
    $mysql = new mysqli("localhost", "root", "", "register_form");


   $reg = $mysql->query("SELECT * FROM `users` WHERE `login` = '$Login'  
   AND `Password` = '$Password' ");

   $user = $reg->fetch_assoc();


    if(is_countable($user) == 0) 
    {
      echo "Такого пользователя не существует";
      exit();
    }
   
   


   setcookie('user', $user['name'], time() + 60, "/" );


    $mysql ->close();
    
    header('Location: /');
    exit();


