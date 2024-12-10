FROM node:20.9.0-alpine

WORKDIR /app

COPY src .
COPY package.json .
COPY .env .

RUN npm i -g pnpm
RUN pnpm install --prod

CMD ["pnpm", "start"]
