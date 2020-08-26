<?php


namespace App\Service;


interface ShortUrlGeneratorInterface
{
    public function generateShortUrl(string $targetUrl): string;
    public function retrieveTargetUrlBySlug(string $slug): ?string;
}