<?php
include 'connection.php';

// $data = json_decode(file_get_contents("php://input"),true);
$title = null;
$content = null;
if ($_SERVER['REQUEST_METHOD']==='POST'){
    $title = $_POST['title']?? null;
    $content = $_POST['content']?? null;
}

if(is_null($title)){
    $data=json_decode(file_get_contents("php://input"),true);
    $title = $data['title']??null;
}


if($title && $content){
$sql = "INSERT INTO pages(title, content) VALUES (?,?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $title, $content);
$stmt->execute();
}
