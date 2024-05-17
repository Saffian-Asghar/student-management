# pull official base image
FROM node:14 as builder

# set working directory
WORKDIR /app

# install app dependencies
COPY web/student_management/package.json ./
COPY web/student_management/package-lock.json ./
RUN npm ci

# build app
COPY . ./
RUN npm run build

# start new stage
FROM node:14-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy from builder
COPY --from=builder /app ./

# start app
CMD ["npm", "start"]