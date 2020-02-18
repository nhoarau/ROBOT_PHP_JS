<?php 

include_once 'Models/Coordonate.php';

class CoordonateController {
    function get()
    {
       $y = rand(0,10);
       $x = rand(0,10);

       $coordonate = new Coordonate($y, $x);
       var_dump($coordonate);
    }
}