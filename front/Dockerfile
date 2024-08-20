# Etapa de construcción
FROM node:lts-bullseye as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .   
RUN npm -v
RUN node -v
RUN ls -la
RUN npm run build
RUN ls -la /app

# Etapa de producción
FROM nginx:alpine
COPY --from=build /app/public /usr/share/nginx/html  
COPY --from=build /app/dist /usr/share/nginx/html     
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
