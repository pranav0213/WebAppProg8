
const http = require("http");

const hostname = "127.0.0.1";
const port = 3001;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${hostname}:${port}`);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  if (req.method !== "GET") {
    res.writeHead(404);
    res.end("Only GET requests are supported.");
    return;
  }

  const x = Number(url.searchParams.get("x"));
  const y = Number(url.searchParams.get("y"));

  if (
    !url.searchParams.has("x") ||
    !url.searchParams.has("y") ||
    !Number.isFinite(x) ||
    !Number.isFinite(y) ||
    x <= 0 ||
    y <= 0
  ) {
    res.writeHead(400);
    res.end("Please provide positive numbers for x and y.");
    return;
  }

  const resultX = Math.log2(x);
  const resultY = Math.log2(y);

  const message =
    `Math.log2(${x}) is ${resultX} and Math.log2(${y}) is ${resultY}`;

  console.log(message);

  res.writeHead(200);
  res.end(message);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
