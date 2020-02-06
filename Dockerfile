FROM node:12.6.0-buster as build-deps

LABEL maintainer="Penn Labs"

ARG GHOST_API_KEY
ENV GHOST_API_KEY ${GHOST_API_KEY}

WORKDIR /app/

# Copy project dependencies
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install --production=true

COPY . /app/
RUN yarn build

ENV GHOST_API_KEY ""

FROM nginx:1.12

LABEL maintainer="Penn Labs"

COPY --from=build-deps /app/public/ /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
