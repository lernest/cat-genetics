## Run container
```
docker build -t genes-server .
docker run -it -p 3000:3000 --rm --name genes-server --mount type=bind,source="$(pwd)",target=/app genes-server
```