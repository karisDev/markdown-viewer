FROM joseluisq/static-web-server:latest AS runtime
FROM oven/bun:slim AS build
COPY --from=runtime /static-web-server /
WORKDIR /app

COPY package*.json ./
RUN bun install
COPY . .

ENTRYPOINT ["/app/entrypoint.sh"]
