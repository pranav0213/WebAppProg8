
const http = require("http");

const ingredients = [
  { name: "Peanut Butter", amount: 1, unit: "cup" },
  { name: "Sugar", amount: 1, unit: "cup" },
  { name: "Egg", amount: 1, unit: "piece" },
  { name: "Flour", amount: 1.5, unit: "cups" },
  { name: "Vanilla", amount: 1, unit: "teaspoon" }
];

const used = Array(ingredients.length).fill(false);

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  let message = "";

  if (used.every(value => value === true)) {
    message = "nothing left";
  } else {
    let index = Math.floor(Math.random() * ingredients.length);

    while (used[index]) {
      index = (index + 1) % ingredients.length;
    }

    used[index] = true;

    const item = ingredients[index];

    message = `
      <p>Ingredient Index: ${index}</p>
      <p>Ingredient: ${item.name}</p>
      <p>Amount: ${item.amount} ${item.unit}</p>
    `;
  }

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Pranav lists an ingredient</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 40px;
          background: #f4f7fb;
        }
        .container {
          background: white;
          padding: 25px;
          border-radius: 10px;
          max-width: 500px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Pranav's Peanut Butter Cookies</h1>
        <h2>Random Ingredient Generator</h2>
        ${message}
      </div>
    </body>
    </html>
  `);
});

server.listen(3001, "127.0.0.1", () => {
  console.log("Bonus server running at http://127.0.0.1:3001/");
});
