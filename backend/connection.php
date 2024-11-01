<?php
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'notes';

$conn = new mysqli($host, $username, $password, $database);
if($conn->connect_error){
    die("connection failed");
}
echo "Connected successfully";