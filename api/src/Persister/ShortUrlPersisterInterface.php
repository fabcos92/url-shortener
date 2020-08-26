<?php


namespace App\Persister;

use App\Entity\ShortUrl;

interface ShortUrlPersisterInterface
{
    public function insertShortUrl(string $targetUrl): ShortUrl;
    public function updateWithSlug(int $shortUrlId, string $slug): void;
}