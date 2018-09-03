FROM mhart/alpine-node:base-10
COPY backend/server.js .
CMD ["node", "server"]