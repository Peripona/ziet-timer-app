FROM mhart/alpine-node:latest
COPY index.js package.json package-lock.json ./
RUN npm i
CMD ["node", "index"]