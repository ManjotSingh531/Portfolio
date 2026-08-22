# Manjot Singh Portfolio

Portfolio website for Manjot Singh, a DevOps-focused personal portfolio built with HTML, CSS, and JavaScript.

## Run Locally

Open `index.html` directly in a browser, or serve the project with a local web server:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Run with Docker

Build the image from the project directory:

```bash
docker build -t manjot-portfolio .
```

Run the container:

```bash
docker run --rm -p 8080:80 manjot-portfolio
```

Then visit <http://localhost:8080>.
