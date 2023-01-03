// need to add mailto: to email, find out why phone number isn't showing up, target=_blank for github link, add https://www.github.com/"username"

// data is the array of employees
function generateHtml(data) {
  let htmlMarkup = "";
  for (let i = 0; i < data.length; i++) {
    // getRole is a method I'll create in classes that will return the type of employee
    if (data[i].getRole() === "Intern") {
      htmlMarkup += `
      <div class="col-4">
      <div class="card">
  <div class="card-body col">
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-person-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"/>
</svg>
<br>
    <h5 class="card-title fw-semibold">${data[i].getRole()}</h5>
    <h6>${data[i].getName()}</h6>
    <p class="card-text">ID: ${data[i].getId()}</p>
    <p class="card-text">School: ${data[i].getSchool()}</p>
    <a href='mailto:${data[i].getEmail()}' class="btn btn-primary">${data[
        i
      ].getEmail()}</a>
  </div>
  </div>
</div>
`;
    }
    if (data[i].getRole() === "Engineer") {
      htmlMarkup += `
      <div class="col-4">
      <div class="card">
  <div class="card-body col">
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
</svg>
    <h5 class="card-title fw-semibold">${data[i].getRole()}</h5>
    <h6>${data[i].getName()}</h6>
    <p class="card-text">ID: ${data[i].getId()}</p>
    <a href='mailto:${data[i].getEmail()}' class="btn btn-primary">${data[
        i
      ].getEmail()}</a>
    <br>
    <a class="card-text text-decoration-none fw-semibold" target="_blank"
    href="https://github.com/${data[i].getGithub()}">Github</a> 
  </div>
</div>
</div>
`;
    }
    if (data[i].getRole() === "Manager") {
      htmlMarkup += `
      <div class="col-4">
      <div class="card">
  <div class="card-body col">
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
</svg>
    <h5 class="card-title fw-semibold">${data[i].getRole()}</h5>
    <h6>${data[i].getName()}</h6>
    <p class="card-text">ID: ${data[i].getId()}</p>
    <a href='mailto:${data[i].getEmail()}' class="btn btn-primary">${data[
        i
      ].getEmail()}</a>
    <p class="card-text">Office number: ${data[i].getOffice()}</p>
  </div>
</div>
</div>
`;
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
  <div class="container">
  <div class="row">
  <header class="fs-1 text-center m-2 p-2 fw-bold bg-info text-primary border rounded-pill">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-file-code" viewBox="0 0 16 16">
  <path d="M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
</svg>
  My Team</header>
      ${htmlMarkup}
      </div>
      <div>
  </body>
  </html>`;
  return html;
}

module.exports = generateHtml;
