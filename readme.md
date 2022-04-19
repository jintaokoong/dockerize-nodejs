# Hello World App

A simple express server that loads configuration from shared volume. A small repository to test dockerizing nodejs.

## Usage

```bash
$ docker build -t hello-app .
$ docker build run -p 3000:4689 -v /data/hello-app:/data --name hello -d hello-app
```