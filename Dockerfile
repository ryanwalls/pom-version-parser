FROM node:6.9-onbuild

RUN mkdir /project

CMD ["node", "index.js"]
