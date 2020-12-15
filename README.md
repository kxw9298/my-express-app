`docker build -t node-app:0.1 .`

`docker run -p 4000:3000 --name my-app -d node-app:0.1`

`docker logs -f [container_id]`

`docker exec -it [container_id] bash`

`docker stop my-app && docker rm my-app`

```
kubectl create secret generic tls-certs --from-file tls/
kubectl create configmap nginx-proxy-conf --from-file nginx/proxy.conf
```

```
kubectl get pods -l "app=monolith,secure=enabled"
```