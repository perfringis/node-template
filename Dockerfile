FROM alpine

RUN apt-get update && apt-get install -y \
       curl \
       wget \
       nano \
       git \
       build-essential \
       libssl-dev

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

ENV NVM_DIR /usr/local/nvm

ENV NODE_VERSION 15.2.0

# NVM Manager
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash \
   && source $NVM_DIR/nvm.sh \
   && nvm install $NODE_VERSION \
   && nvm alias default $NODE_VERSION \
   && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules

ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

COPY . /var/www/backend
WORKDIR /var/www/backend

EXPOSE 8080

CMD rm -rf ./node_modules \
   && source $NVM_DIR/nvm.sh \
# install packages used globaly
   && npm install -g eslint jest snyk \
   && npm install \
   bash