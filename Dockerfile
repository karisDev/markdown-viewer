FROM joseluisq/static-web-server:latest AS runtime
FROM oven/bun:alpine AS build
COPY --from=runtime /static-web-server /
WORKDIR /app

COPY package*.json bun.lockb ./
RUN bun install
COPY . .

ENTRYPOINT ["/app/entrypoint.sh"]
