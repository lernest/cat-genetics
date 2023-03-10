# Cat Genetics

A cat can be represted as follows:
```
    Cat {
        name: string,
        sex: [M,F],
        genotype:{
            primaryColor: [B,b,b1],  // Black, chocolate, cinnamon
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

When a new kitten is created, a punnett square can be generated for each trait from their parents.
```
   Punnett Square

         X      x
      |--------------
    X |  XX  |   Xx
      |--------------
    x |  Xx  |   xx
      |--------------
```

This punnett square shows that the offspring can have any of the following genotypes for the given trait, each with a probability of 0.25:
```
['XX','Xx','Xx','xx']
```
One of these will be randomly picked when the kitten is born.

A few notes on cat genetics that were taken into account for this abstraction:
1. Males only have one allele for the 'orange' trait.
2. Only females can be tortie / calico. This occurs when their orange gene is heterozygous.
3. Orange cats will present as tabby even if they don't carry the tabby gene.

------

## File structure

### server/
Most of the logic is within `genes.js`. This is where we generate cats by creating punnett squares and picking samples. The API endpoints are defined using Express.js in `server.js`. A few utility functions are defined in `util.js` to keep the logic more concise in the main functions. `names.js` and `activities.js` each contain a single array of strings which are used to randomly assign names and favorite acitivities to the kittens. `index.js` is used for development and testing purposes.

### ui/
The entirity of the frontend is currently in `App.vue`, although this will be separated into components as the app grows.

-----

## Run project using docker compose

```
docker-compose up
```
The UI will be available at localhost/8080.  The API listens on port 3000.


## Run project locally

### Start backend

```
cd server
nodemon server.js
```

### Start frontend

```
cd ui
nvm install v16
nvm use v16
npm run serve
```

## Run project in containers, started separately

### Start backend

```
cd server
docker build -t genes-server .
docker run -it -p 3000:3000 --rm --name genes-server --mount type=bind,source="$(pwd)",target=/app genes-server
```
### Start frontend

```
cd ui
docker build -t genes-ui .
docker run -it -p 8080:8080 --rm --name genes-ui --mount type=bind,source="$(pwd)",target=/app genes-ui
```

----

## Useful docker help

Remove containers
```
docker rm $(docker ps -aq) --force
```

Remove all dangling images
```
docker rmi $(docker images --filter "dangling=true" -q)
```