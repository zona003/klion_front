FROM node:18.10-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4200 49153
RUN npm run build
CMD npm run start

FROM nginx as runtime

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/klion /usr/share/nginx/html