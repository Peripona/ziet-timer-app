FROM mhart/alpine-node:latest
COPY index.js package.json package-lock.json serviceAccountKeys.json ./
RUN npm i
RUN npm audit fix
CMD ["node", "index"]