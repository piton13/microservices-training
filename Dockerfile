FROM node:10.4.0
# Create app directory
WORKDIR ./
COPY package*.json ./
RUN npm install
COPY . ./
CMD [ "node", "server" ]
EXPOSE 8080

