FROM ubuntu:18.04

ARG NGINX_CONFIG_PATH

RUN apt update && apt install nginx -y && apt install mc -y
RUN rm /etc/nginx/sites-enabled/default

COPY $NGINX_CONFIG_PATH /etc/nginx/sites-enabled
