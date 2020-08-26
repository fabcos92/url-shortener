<?php


namespace App\Service;


use App\Persister\ShortUrlPersisterInterface;
use App\Provider\ShortUrlProviderInterface;

class ShortUrlGenerator implements ShortUrlGeneratorInterface
{
    /** The Base62 alphabet to be used.  */
    private const BASE62_ALPHABET = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];

    //todo: take from env param bag
    private const URL = 'http://localhost:8001/';

    private ShortUrlProviderInterface $shortUrlProvider;

    private ShortUrlPersisterInterface $shortUrlPersister;

    public function __construct(
        ShortUrlProviderInterface $shortUrlProvider,
        ShortUrlPersisterInterface $shortUrlPersister
    ) {
        $this->shortUrlProvider = $shortUrlProvider;
        $this->shortUrlPersister = $shortUrlPersister;
    }

    public function generateShortUrl(string $targetUrl): string
    {
        $shortUrl = $this->shortUrlPersister->insertShortUrl($targetUrl);
        $shortUrlId = $shortUrl->getId();

        $slug = $this->generateSlugFor($shortUrlId);
        $this->shortUrlPersister->updateWithSlug($shortUrlId, $slug);

        return sprintf('%s/%s',
            self::URL,
            $slug
        );
    }

    public function retrieveTargetUrlBySlug(string $slug): ?string
    {
        $targetUrl = $this->shortUrlProvider->getTargetUrlBySlug($slug);

        return $targetUrl ? $targetUrl->getTargetUrl() : null;
    }

    private function generateSlugFor(int $shortUrlId): ?string
    {
        $hash = '';
        $hashDigits = [];

        while ($shortUrlId > 0) {
            $remainder = floor($shortUrlId % 62);
            $shortUrlId = floor($shortUrlId / 62);
            array_unshift($hashDigits, $remainder);
        }

        foreach ($hashDigits as $v) {
            $hash .= self::BASE62_ALPHABET[$v];
        }

        return $hash;
    }
}