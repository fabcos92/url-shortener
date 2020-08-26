<?php


namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class UrlController
{
     /**
      * @Route("/url/shorten")
      */
    public function shortenUrl(Request $request)
    {

    }

    /**
     * @Route("/url/redirect")
     */
    public function redirectWithShortenedUrl(Request $request)
    {

    }
}