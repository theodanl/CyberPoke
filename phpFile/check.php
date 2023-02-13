<?php
    $Login = filter_var(trim($_POST['Login']),
      FILTER_SANITIZE_STRING);
    $Email = filter_var(trim($_POST['Email']),
    FILTER_SANITIZE_STRING);
    $Number = filter_var(trim($_POST['Number']),
    FILTER_SANITIZE_STRING);
    $Password = filter_var(trim($_POST['Password']),
    FILTER_SANITIZE_STRING);
    $Repeat_Password = filter_var(trim($_POST['Repeat_Password']),
    FILTER_SANITIZE_STRING);

    if(mb_strlen($Login) < 3 OR mb_strlen($Login) > 50) {
        echo 'Логин введен не правильно';
        exit();
    } 
    elseif (mb_strlen($Email) <= 8 OR mb_strlen($Email) > 90 ) {
        echo 'Емаил введен не правильно';
        exit();
    } 
    elseif(mb_strlen($Number) < 11 OR mb_strlen($Number) > 11) {
        echo 'Номер введен не правильно';
        exit();
    } 
    elseif(mb_strlen($Password) < 8 OR mb_strlen($Password) > 30) {
        echo 'Длина пароля превышает (от 8 до 30) символов';
        exit();
    } 
    elseif(mb_strlen($Repeat_Password) < 8 OR mb_strlen($Repeat_Password) > 30) {
        echo 'Длина пароля превышает (от 8 до 30) символов';
        exit();
    } 
/*Хеширование пароля при помощи md5  + соль */
 
$Password = md5($Password."sanyapussy123");
$Repeat_Password = md5($Repeat_Password."sanyapussy123");


/* Подключение к БД */
    $mysql = new mysqli("localhost", "root", "", "register_form");
    $mysql ->query("INSERT INTO `users` (`login`, `email`, `number`, `Password`, `Repeat_Password`)
    VALUES('$Login', '$Email', '$Number','$Password', '$Repeat_Password')");
    $mysql ->close();
    
    header('Location: /');
    exit();

