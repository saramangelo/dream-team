// need to add mailto: to email, find out why phone number isn't showing up, target=_blank for github link, add https://www.github.com/"username"

// data is the array of employees
function generateHtml(data) {
    let htmlMarkup = '';
  for (let i = 0; i < data.length; i++) {
    // getRole is a method I'll create in classes that will return the type of employee
    if (data[i].getRole() === "Intern") {
      htmlMarkup += `<div class="card" style="width: 18rem;">
   
      <div class="card-body">
        <h5 class="card-title">${data[i].getRole()}</h5>
        <h6>${data[i].getName()}</h6>
        <p class="card-text">ID: ${data[i].getId()}</p>
        <a class="card-text" href='mailto:${data[i].getEmail()}'>${data[i].getEmail()}</a>
        <p class="card-text">School: ${data[i].getSchool()}</p>
     
      </div>
    </div>`;
    }
    if (data[i].getRole() === "Engineer") {
      htmlMarkup += `<div class="card" style="width: 18rem;">
   
      <div class="card-body">
        <h5 class="card-title">${data[i].getRole()}</h5>
        <h6>${data[i].getName()}</h6>
        <p class="card-text">ID: ${data[i].getId()}</p>
        <a class="card-text" href='mailto:${data[i].getEmail()}'>${data[i].getEmail()}</a>
        <a class="card-text" target="_blank"
        href="https://github.com/${data[i].getGithub()}">Github</a>
     
      </div>
    </div>`;
    }
    if (data[i].getRole() === "Manager") {
      htmlMarkup += `<div class="card" style="width: 18rem;">
   
      <div class="card-body">
        <h5 class="card-title">${data[i].getRole()}</h5>
        <h6>${data[i].getName()}</h6>
        <p class="card-text">ID: ${data[i].getId()}</p>
        <a class="card-text" href='mailto:${data[i].getEmail()}'>${data[i].getEmail()}</a>
        <p class="card-text">Office number: ${data[i].getOffice()}</p>
     
      </div>
    </div>`;
    }
  }
    const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

  </head>
  <body>
  
      ${htmlMarkup}
  </body>
  </html>`;
  return html;
  }

  module.exports = generateHtml;