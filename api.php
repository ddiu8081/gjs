<?php
    $date=$_GET["date"];

    $file_contents = file_get_contents('https://api.ddiu.site/gjs/'.$date);
    echo $file_contents;
?>
