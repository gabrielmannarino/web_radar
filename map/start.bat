docker build -t radar_app:1.0.0 .
docker run -p 8001:8080 radar_app:1.0.0
timeout 5
