`docker build -t node-app:0.1 .`

`docker run -p 4000:3000 --name my-app -d node-app:0.1`

`docker logs -f [container_id]`

`docker exec -it [container_id] bash`

`docker stop my-app && docker rm my-app`