#!/bin/sh
bun run build && /static-web-server --index-files="index.html" --root /app/dist
