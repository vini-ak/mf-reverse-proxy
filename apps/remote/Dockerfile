# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copia os arquivos de projeto
COPY package.json ./
COPY . .

# Instala dependências e gera a build
RUN yarn install
RUN yarn build

# Etapa 2: Preview
FROM node:20-alpine

WORKDIR /app

# Apenas os arquivos necessários para servir
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

# Instala apenas vite globalmente para rodar preview
RUN yarn global add vite

EXPOSE 8080

CMD ["vite", "preview", "--host", "--port", "8080"]
