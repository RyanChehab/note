<?php
include 'connection.php';

$data = json_decode(file_get_contents("php://input"),true);

$title = $data['title'];
$content = $data['content'];