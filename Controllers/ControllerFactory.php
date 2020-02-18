<?php

class ControllerFactory
{
    static function getInstance($ressourceName)
    {
        $controllerName = ucfirst($ressourceName) . "Controller";
        $file = "Controllers/" . $controllerName . ".php";
        if (!file_exists($file)) {
            throw new Exception("Ressource {$ressourceName} doesn't exist");
        }

        include_once $file;
        return new $controllerName();
    }
}
