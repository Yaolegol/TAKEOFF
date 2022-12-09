FROM ubuntu:18.04

RUN apt update && apt install nginx -y && apt install mc -y
RUN rm /etc/nginx/sites-enabled/default

COPY ./configs/nginx /etc/nginx/sites-enabled
