FROM joseluisq/static-web-server:latest AS runtime
FROM oven/bun:slim AS build
COPY --from=runtime /static-web-server /
WORKDIR /app

COPY package*.json bun.lockb ./
RUN bun install
COPY . .

RUN bun astro telemetry disable

ENTRYPOINT ["/app/entrypoint.sh"]
