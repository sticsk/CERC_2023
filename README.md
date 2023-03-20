## Run on Docker

There are two ways to make this web application running :

**1. Directly running the container from Docker Hub**

https://hub.docker.com/r/sticsk/freqsort-cerc

Simply run the following : 

`docker run --name freqsort -p 3000:3000 sticsk/freqsort-cerc:latest` for **amd64** architecture

**2. Build the image**

*To build :*
```bash
docker build -t freqsort .
```
*To run :*
```bash
docker run --name freqsort -p 3000:3000 freqsort
```

**In order to see the web application open any browser and access `http://localhost:3000` or `http://host-ip:3000`**
