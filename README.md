# Cat Genetics

A cat can be represted as follows:
```
    Cat {
        name: string,
        sex: [M,F],
        genotype:{
            primaryColor: [B,b,b1],  // Black, chocolate, cinnamom
            orange: [O,o],           // Orange, not orange
            dilute: [D,d],           // Dilute, not dilute
            tabby: [A,a],            // Tabby, not tabby
            white: [W,w],            // Not white, white
            furLength: [L,l],        // Short fur, long fur
        }
        phenotype:{
            color: string,
            dilute: bool,
            tabby: bool,
            tortie: range(0,3),
            white: [none, tuxedo, white],
            shortFur: bool,
        },
        bio: string
    }


```

When a new kitten is created, a punnet square can be generated for each trait from their parents.
```
   Punnet Square

         X      x
      |--------------
    X |  XX  |   Xx
      |--------------
    x |  Xx  |   xx
      |--------------
```

This punnet square shows that the offspring can have any of the following genotypes for the given trait, each with a probability of 0.25.
```
['XX','Xx','Xx','xx']
```
One of these will be randomly picked when the kitten is born.

A few notes on cat genetics that were taken into account for this abstraction:
```
    1. Males only have one allele for the 'orange' trait.
    2. Only females can be tortie / calico. This occurs when their orange gene is heterozygous [O,o]
    3. Orange cats will present as tabby even if they don't carry the tabby gene.
```

------

## Run project using docker compose (recommended)
```
docker-compose up
```
The UI will be available at localhost/8080.  The API listens on port 3000.


## Run project locally

#### Server

```
cd server
nodemon server.js
```

#### Run frontend locally

```
cd ui
npm run serve
```

## Run project containers, started separately

#### Backend

```
docker build -t genes-server .
docker run -it -p 3000:3000 --rm --name genes-server --mount type=bind,source="$(pwd)",target=/app genes-server
```
#### Frontend

```
cd ui
docker build -t genes-ui .
docker run -it -p 8080:8080 --rm --name genes-ui --mount type=bind,source="$(pwd)",target=/app genes-ui
```