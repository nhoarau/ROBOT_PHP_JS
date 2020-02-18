<?php 

include_once 'Models/Coordonate.php';

class PositionController {
    function post($coordonate)
    {
        $coordonates = new Coordonate($coordonate["y"], $coordonate["x"]);
        $db = new SQLite3("tp.db");
        $command = $db->prepare("INSERT INTO coordonate (y, x) VALUES (:y,:x);");
        $command->bindValue(":y", $coordonates->y, SQLITE3_NUM);
        $command->bindValue(":x", $coordonates->x, SQLITE3_NUM);
        $command->execute();
    }
}