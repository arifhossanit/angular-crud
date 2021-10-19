<?php
include('database.php');
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$name = $request->data->nam;
$gender = $request->data->gender;
$age = $request->data->age;

if (!empty($name) || !empty($gender) || !empty($age)) {
    $sql = "INSERT INTO `posts`VALUES (null,'$name','$gender','$age')";
    $mysqli->query($sql);
}
  
?>