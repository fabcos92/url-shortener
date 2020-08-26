<?php


namespace App\Provider;

use Doctrine\ORM\EntityManagerInterface;
use App\Entity\ShortUrl;

class ShortUrlProvider implements ShortUrlProviderInterface
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function getTargetUrlBySlug(string $slug): ?ShortUrl
    {
        $qb = $this->entityManager->createQueryBuilder();
        $qb
            ->select('su')
            ->from(ShortUrl::class, 'su')
            ->where('su.slug = :slug')
            ->setParameter(':slug', $slug)
        ;

        return $qb->getQuery()->getOneOrNullResult();
    }

}