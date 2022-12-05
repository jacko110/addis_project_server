FROM node:latest
ENV NODE_ENV=production
WORKDIR /usr/src/api
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install && npm cache clean --force
COPY . .
EXPOSE 8000
RUN chown -R node /usr/src/api
USER node
CMD ["npm", "run", "dev"]
