# Imagen base ligera de Node.js
FROM node:18-alpine 

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json package-lock.json ./

# Instala TODAS las dependencias (incluyendo desarrollo)
RUN npm install

# Copia el código fuente
COPY . .

# Expone el puerto para acceder a la app
EXPOSE 3000

# Comando de inicio para desarrollo con hot reload
CMD ["npm", "run", "dev"]
