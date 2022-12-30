# Cat Genetics


## Run project using docker compose
```
docker-compose up

```
The UI will be available at localhost/8080.  The API listens on port 3000.


## Run backend locally

```
cd server
nodemon server.js
```

## Run backend container

```
docker build -t genes-server .
docker run -it -p 3000:3000 --rm --name genes-server --mount type=bind,source="$(pwd)",target=/app genes-server
```


## Run frontend locally

```
npm run serve
```

## Run frontend container

```
cd ui
docker build -t genes-ui .
docker run -it -p 8080:8080 --rm --name genes-ui --mount type=bind,source="$(pwd)",target=/app genes-ui
```