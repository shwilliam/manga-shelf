# Manga Shelf

## Development

### MongoDB

```bash
docker run -p 0.0.0.0:27017:27017 --name manga-shelf-db -d mongo:4.2.0
docker stop manga-shelf-db
docker rm manga-shelf-db
```
