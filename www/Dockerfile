FROM python:3.11.9-alpine

RUN apk update && \
    apk add --no-cache git

RUN mkdir -p /home/ubuntu/joumaico/www/requirements

WORKDIR /home/ubuntu/joumaico/www
COPY requirements/docker.txt /home/ubuntu/joumaico/www/requirements/docker.txt
RUN pip install --no-cache-dir -r requirements/docker.txt

COPY . /home/ubuntu/joumaico/www
