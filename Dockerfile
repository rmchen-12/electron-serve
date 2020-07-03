FROM node:slim
RUN mkdir /myapp
WORKDIR /myapp
COPY package.json /myapp/package.json
RUN npm i --registry=http://10.1.10.34:4873
COPY . /myapp
CMD echo "local" > ./config/env && npm run start