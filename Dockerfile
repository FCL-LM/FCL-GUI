FROM node as builder
WORKDIR /app

COPY . .

RUN npm install && \
    npm run build

FROM node
WORKDIR /app
RUN rm -rf ./*

COPY --from=builder /app/package.json .
COPY --from=builder /app/build .

ENTRYPOINT [ "node", "index.js" ]