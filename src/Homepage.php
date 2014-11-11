<?php

namespace Insorum\Website;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class Homepage
{

    public function getDefaultAction(Request $request, Application $app)
    {
        return $app->json([
            'name' => $app['user']['name'],
            'age' => $app['user']['age']
        ]);
    }
}
