FROM node:8-alpine

ADD ./ /aws-pipe

RUN cd /aws-pipe && npm install

WORKDIR /aws-pipe
CMD ["npm", "start"]
EXPOSE 80