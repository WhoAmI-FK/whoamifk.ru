<?php 
$conn=null;
try{
    $conn = new PDO("mysql:host=localhost;dbname=whoamidevDb","root","");
    $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION); 
    echo "<script>console.log('db-connected...')</script>";
}catch(PDOException $e){
    echo $e->getMessage();
}

?>