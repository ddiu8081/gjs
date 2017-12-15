<?php

$fun = $_GET["f"];
$date = $_GET["date"];

if ($fun == "getMessege") {
    $file_contents = file_get_contents('https://api.ddiu.site/gjs/get-e/'.$date);
    echo $file_contents;
}
if ($fun == "like") {
    $file_contents = file_get_contents('https://api.ddiu.site/gjs/like-e/'.$date);
    echo $file_contents;
}

?>
