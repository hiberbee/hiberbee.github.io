ARG nodeVersion=13
FROM node:${nodeVersion}-alpine AS base
WORKDIR /usr/local/src
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=false
ONBUILD COPY package.json *lock /tmp/
ONBUILD RUN cd /tmp \
 && yarn --production --ignore-scripts --prefer-offline \
 && cd /usr/local/src \
 && ln -s /tmp/node_modules
ONBUILD COPY . .
ONBUILD RUN yarn build

FROM base AS build

FROM caddy:alpine
WORKDIR /var/www/html
RUN addgroup -S hiberbee -g 1000 && adduser -S -G hiberbee -u 1000 hiberbee
COPY --chown=hiberbee --from=build  /usr/local/src/build/ ./
COPY --chown=hiberbee Caddyfile /etc/caddy/
EXPOSE 8080
