<?php


namespace App\Entity;


use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="ShortLink")
 *
 */
class ShortUrl
{
    /**
     * @ORM\Id()
     * @ORM\Column(type="integer", name="id")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private int $id;

    /**
     * @ORM\Column(type="string", name="slug")
     */
    private ?string $slug;

    /**
     * @ORM\Column(type="string", name="targetUrl")
     */
    private string $targetUrl;

    public function getId(): int
    {
        return $this->id;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function getTargetUrl(): string
    {
        return $this->targetUrl;
    }

    public function setTargetUrl($targetUrl): void
    {
        $this->targetUrl = $targetUrl;
    }

    public function setSlug(string $slug): void
    {
        $this->slug = $slug;
    }
}