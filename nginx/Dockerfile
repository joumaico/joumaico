FROM nginx:stable-alpine3.19-slim

RUN rm /etc/nginx/conf.d/default.conf

COPY joumaico.com.conf /etc/nginx/conf.d/

COPY www.joumaico.com/www.joumaico.com.pem /etc/ssl/certs/www.joumaico.com.pem
COPY www.joumaico.com/www.joumaico.com.key /etc/ssl/private/www.joumaico.com.key
