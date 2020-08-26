<?php


namespace App\Provider;


use App\Entity\ShortUrl;

interface ShortUrlProviderInterface
{
    public function getTargetUrlBySlug(string $slug): ?ShortUrl;
}