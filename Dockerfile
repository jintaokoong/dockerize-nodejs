FROM node:16

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /usr/src/app

ENV TS_NODE_BASEURL=./

COPY tsconfig.json ./
copy package*.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install --production

ADD ./dist/ ./

EXPOSE 4689

CMD [ "node", "-r", "tsconfig-paths/register", "index.js" ]
