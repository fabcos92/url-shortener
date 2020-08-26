<?php


namespace App\Controller;

use App\Service\ShortUrlGeneratorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class UrlController extends AbstractController
{
    private ShortUrlGeneratorInterface $shortUrlGenerator;

    public function __construct(ShortUrlGeneratorInterface $shortUrlGenerator)
    {
        $this->shortUrlGenerator = $shortUrlGenerator;
    }

     /**
      * @Route("/url/shorten")
      */
    public function shortenUrl(Request $request)
    {
        $payload = json_decode($request->getContent(), true);
        $targetUrl = $payload['url'] ?? null;
        if (null === $targetUrl) {
            return new JsonResponse(
                [ 'error' =>  'Url is missing' . implode(',', $payload) ],
                Response::HTTP_BAD_REQUEST
            );
        }
        $shortUrl = $this->shortUrlGenerator->generateShortUrl($targetUrl);

        return new JsonResponse([ 'shortUrl' =>  $shortUrl ]);
    }

    /**
     * @Route("/{slug}")
     */
    public function redirectWithShortenedUrl(string $slug)
    {
        $targetLink = $this->shortUrlGenerator->retrieveTargetUrlBySlug($slug);
        return new RedirectResponse($targetLink, Response::HTTP_MOVED_PERMANENTLY);
    }
}