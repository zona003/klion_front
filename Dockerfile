FROM node:18.10-alpine AS build
WORKDIR /src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4200 49153
CMD npm run start

FROM nginx as runtime

COPY --from=build /app/dist/klion /usr/share/nginx/html