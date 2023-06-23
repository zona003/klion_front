FROM node:18.10-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4200 49153
CMD npm run start

FROM nginx as runtime

ERROR: failed to solve: failed to compute cache key: failed to calculate checksum of ref 3629a2a8-e477-49f0-a2ba-0488f2e1c9f7::stf3nqu680bv0f3436d5nm03t: failed to walk /var/lib/docker/tmp/buildkit-mount928271766/usr/src/app/dist: lstat /var/lib/docker/tmp/buildkit-mount928271766/usr/src/app/dist: no such file or directory
root@vps-43611:~/klion-test/klion_front#