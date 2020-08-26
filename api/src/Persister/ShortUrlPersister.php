<?php


namespace App\Persister;

use App\Entity\ShortUrl;
use Doctrine\ORM\EntityManagerInterface;

class ShortUrlPersister implements ShortUrlPersisterInterface
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function insertShortUrl(string $targetUrl): ShortUrl
    {
        $shortUrl = new ShortUrl();
        $shortUrl->setTargetUrl($targetUrl);

        $this->entityManager->persist($shortUrl);
        $this->entityManager->flush();

        return $shortUrl;
    }

    public function updateWithSlug(int $shortUrlId, string $slug): void
    {
        $qb = $this->entityManager->createQueryBuilder();

        $qb
            ->update(ShortUrl::class, 'su')
            ->set('su.slug', $slug)
            ->where('su.id = :shortUrlId')
            ->setParameter(':shortUrlId', $shortUrlId)
        ;

        $qb
            ->getQuery()
            ->execute()
        ;
        $this->entityManager->clear();
    }
}