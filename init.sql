CREATE TABLE ShortLink (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    slug CHAR(7),
    targetUrl VARCHAR(100) NOT NULL
);