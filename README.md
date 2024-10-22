# markdown-preview

Static html generator out of markdown files and serves them with [static-web-server](https://github.com/static-web-server/static-web-server/)

### how to run

```yaml
services:
  markdown_viewer:
    image: ghcr.io/karisDev/markdown-viewer:latest
    volumes:
      - ./favicon.svg:/app/public/favicon.svg
      - ./md:/app/src/content/md:ro
    environment:
      TITLE: "Markdown Viewer"
    ports:
      - "8080:80"
```
