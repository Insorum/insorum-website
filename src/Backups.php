<?php

namespace Insorum\Website;


use Silex\Application;
use Symfony\Component\Finder\Finder;
use Symfony\Component\HttpFoundation\Request;

class Backups
{

    public function getIndex(Request $request, Application $app)
    {
        $finder = new Finder();
        $files = $finder->files()->followLinks()->in(__DIR__ . '/../public_html/external/backups/');

        $fileList = [];
        foreach($files as $file) {
            array_push($fileList, [
                'path' => '/public_html/external/backups/' . $file->getRelativePathname(),
                'size' => $file->getSize(),
                'modified' => $file->getMTime()
            ]);
        }

        return json_encode($fileList);
    }
}
