<?php

require_once 'Models/Coordonate.php';
require_once 'Controllers/ControllerFactory.php';


$request = explode('/', trim(isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : $_SERVER['QUERY_STRING'] , '/'));

echo "testttt";
var_dump($request);

$controller = ControllerFactory::getInstance($request[0]);

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $controller->get($_GET);
        break;
    case 'POST':
        var_dump($_POST);
        $controller->post($_POST);
        break;
}
