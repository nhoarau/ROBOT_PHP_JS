<?php 

include_once 'Models/Coordonate.php';

class PositionController {
    function post($coordonate)
    {
        $db = new SQLite3("tp.db");
        $command = $db->prepare("INSERT INTO coordonate (y, x) VALUES (:y,:x);");
        $command->bindValue(":y", $coordonate->y, SQLITE3_NUM);
        $command->bindValue(":x", $coordonate->x, SQLITE3_NUM);
        $command->execute();
    }
}