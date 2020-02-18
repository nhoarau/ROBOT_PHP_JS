<?php 

include_once 'Models/MoveEnum.php';

class MoveController {
    function get() {
        $randomMoves = [];

        for($i = 0; $i <= 4; $i++){
            array_push($randomMoves, rand(0,3));
        }

        echo json_encode($randomMoves);
    }

}