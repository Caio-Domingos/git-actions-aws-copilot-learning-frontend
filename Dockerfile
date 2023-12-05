# Etapa 1: Construir a aplicação Angular
# Usar uma versão específica do Node.js, neste caso, uma versão alpine
FROM node:18-alpine as build-step

# Definir o diretório de trabalho no container
WORKDIR /usr/src/app

# Copiar os arquivos de definição de pacote
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Construir a aplicação para produção
RUN npm run build -- --output-path=./dist/out

# Etapa 2: Servir a aplicação Angular
# Usar o servidor web nginx para servir a aplicação
FROM nginx:alpine

# Copiar o conteúdo construído da etapa anterior para a pasta de servir do nginx
COPY --from=build-step /usr/src/app/dist/out/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf


# Expõe a porta 80 para o servidor web
EXPOSE 80

# O nginx inicia automaticamente quando o container é executado
