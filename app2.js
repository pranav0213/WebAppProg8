
const http = require("http");

const hostname = "127.0.0.1";
const port = 3001;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.write("<!DOCTYPE html>");
  res.write("<html><head><title>Pranav's Table</title>");
  res.write(`
    <style>
      body { font-family: Arial; margin: 40px; }
      table { border-collapse: collapse; width: 70%; }
      th, td { border: 1px solid black; padding: 12px; }
      th { background: #dbeafe; }
    </style>
  `);
  res.write("</head><body>");

  res.write("<h1>Pranav's HTML Table</h1>");
  res.write("<table>");
  res.write("<tr><th>Subject</th><th>Technology</th></tr>");
  res.write("<tr><td>Web Apps</td><td>HTML, CSS, JavaScript</td></tr>");
  res.write("<tr><td>Backend</td><td>Node.js</td></tr>");
  res.write("<tr><td>Database</td><td>PostgreSQL</td></tr>");
  res.write("</table>");

  res.write("</body></html>");
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
