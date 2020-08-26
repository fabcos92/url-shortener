## Setup
Start dir for each command is repository dir;

###Dependencies
Run command to install BE dependencies:
```
cd api/
composer install
```

Run command to install FE dependencies:
```
cd frontend/
npm install
```

Run commands to start BE:
```
cd api/
symfony server:start
```

Run commands to start FE:
```
cd frontend/
npm start
```

Configure db connection in `.env` file, edit `DATABASE_URL`,
then run `init.sql` patch (creating database is omitted because doctrine does it).

## Key questions (and answers)

#### which characters are allowed in URL?

-> https://www.rfc-editor.org/rfc/rfc1738.txt
A-Z a-z 0-9 "$-_.+!*'(),"

#### how many link should I be prepared to store?

1 200 000 000/month - average total visits to bit.ly a month (https://www.similarweb.com/website/bit.ly/)
that'd be 720 000 000 000 in 50 years? (for some reasons longlasting links would be nice)
would say: 10^12

#### how long link should be?

Given I have 62 characters allowed to use and I need 10^12 slots, then I have 62^X = 10^12, where X is length of our link (the random part). Then X is 6.6949652078. Bit.ly uses 7 chars so I guess they are pretty familiar to that math :D I think it's reasonable, especially that 6 (one less) allowed chars for 62 chars gives 56 800 235 584, which is ~5% of an estimated number of sorts.

#### how generate random links and avoid duplications?

Commonly used solution is base convertion. Based on selected characters I implemented `ShortUrlGenerator` with `BASE62_ALPHABET`.