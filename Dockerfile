ARG nodeVersion=13
FROM node:${nodeVersion}-alpine AS base
WORKDIR /usr/local/src
ONBUILD COPY package.json *lock /tmp/
ONBUILD RUN cd /tmp \
 && yarn --ignore-scripts --prefer-offline \
 && cd /usr/local/src \
 && ln -s /tmp/node_modules
ONBUILD COPY . .
ONBUILD RUN yarn build

FROM base AS build

FROM caddy:alpine
WORKDIR /var/www/html
COPY --from=build /usr/local/src/build/ ./
COPY Caddyfile /etc/caddy/
