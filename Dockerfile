from nginx:alpine

run rm -rf /usr/share/nginx/html/*

copy . /usr/share/nginx/html

cmd ["nginx", "-g", "daemon off;"]
