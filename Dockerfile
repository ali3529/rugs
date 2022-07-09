FROM node:14

RUN mkdir /tornado_next

WORKDIR /tornado_next

COPY ./package.json /tornado_next

RUN npm install

COPY . /tornado_next

ENV PORT 3000

EXPOSE 3000

RUN npm run build


CMD ["npm" , "start"]

