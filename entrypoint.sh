#!/bin/sh
bun run build && /static-web-server --index-files="index.html" --page404="404.html" --root /app/dist
