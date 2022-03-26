<?php 
include_once "db.php";
$id = $_POST["idPrj"];
$tid = $_POST["idType"];
$output = $conn->query("SELECT p.ProjectTitle,p.image_path,t.title,p.descr FROM tbprojects p JOIN tbtypesoflang t ON(p.typeId = t.id) WHERE (p.id=$id AND t.id=$tid)");
//print_r($output);
$row = $output->fetch(PDO::FETCH_ASSOC);
$title = $row["ProjectTitle"];
$path = $row["image_path"];
$type = $row["title"];
$desc = $row["descr"];
print "<h1 class='display-3' style='word-break:break-word'>$title</h1><img class='img-fluid rounded' src='$path'/><p>$desc</p>". '<div class="bg-dark close-popup">Close</div>';