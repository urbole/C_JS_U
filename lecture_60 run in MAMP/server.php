<?php
$_POST = json_decode(file_get_contents("php://input"), true); //? как на php коде получить json данные
echo var_dump($_POST);