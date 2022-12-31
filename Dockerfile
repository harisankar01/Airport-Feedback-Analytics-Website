FROM node:15.13-alpine
WORKDIR /feedback_analysis
COPY . .
RUN npm run build