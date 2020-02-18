<?php

include_once 'Models/Coordonate.php';

class CoordonateController
{
    function get()
    {
        $y = rand(0, 9);
        $x = rand(0, 9);
        $coordonate = new Coordonate($y, $x);
        echo json_encode($coordonate);
    }
}