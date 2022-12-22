
// data is the array of employees
function generateHtml(data) {
    const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      ${data}
  </body>
  </html>`;
  }

  module.exports = generateHtml;