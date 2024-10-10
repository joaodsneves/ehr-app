# Dockerfile para o frontend
FROM node:14

WORKDIR /app

# Copiar arquivos package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instalar dependências incluindo axios
RUN npm install

# Copiar todos os arquivos do projeto para o container
COPY . .

# Comando para iniciar o projeto
CMD ["npm", "start"]
