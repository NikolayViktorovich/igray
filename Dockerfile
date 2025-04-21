# Стадия сборки
FROM node:18.19-slim AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM node:18.19-slim

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

RUN yarn install --production --frozen-lockfile

ENV PORT=3000
EXPOSE 3000


CMD ["yarn", "start"]