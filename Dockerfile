FROM node:8.11.1
WORKDIR /app
# RUN useradd --user-group --create-home --shell /bin/false nupp && apt-get clean
ADD . /app
RUN node -v && npm -v && npm install
ENV HOME '/home/nupp'
ENV NAME world
RUN echo $HOME
RUN echo $NAME
# COPY package.json package-lock.json index.js server.js $HOME/app/
# RUN chown -R nupp:nupp $HOME/* /usr/local/
# Create app directory
# RUN npm install
# RUN chown -R nupp:nupp $HOME/*
# USER nupp
CMD [ "node", "server" ]
EXPOSE 8080
