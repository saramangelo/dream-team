const inquirer = require("inquirer");
// require classes (files) main class will be employee class
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("file that has Intern class");

// every time I make a class, push data into this array
const employees = [];
// array of questions to prompt



// function to write html file
function writeToFile(fileName, data) {
  let htmlMarkup = "";
  for (let i = 0; i < employees.length; i++) {
    // getRole is a method I'll create in classes that will return the type of employee
    if (employees[i].getRole() === "Intern") {
      htmlMarkup += `<h2>Intern</h2>`;
    }
    if (employees[i].getRole() === "Engineer") {
      htmlMarkup += `<h2>Engineer</h2>`;
    }
    if (employees[i].getRole() === "Manager") {
      htmlMarkup += `<h2>Manager</h2>`;
    }
  }

  fs.writeFile(fileName, generateHtml(htmlMarkup), (err) =>
    err ? console.error(err) : console.log("index.html successfully created!")
  );
}

const managerQuestions = [
  {
    type: "input",
    message: "What is your first name?",
    name: "firstName",
  },

  {
    type: "input",
    message: "What is your last name?",
    name: "lastName",
  },

  {
    type: "input",
    message: "What is your ID?",
    name: "id",
  },

  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },

  {
    type: "input",
    message: "What is your office number?",
    name: "office",
  },
];

function init(){
  inquirer.prompt(managerQuestions).then((answers) => {
    const manager = new Manager(
      answers.firstName,
      answers.lastName,
      answers.id,
      answers.email,
      answers.office,
    );
    employees.push(manager);
    return askPromptQuestions();
  });
}

const mainQuestions = [
  {
    type: "list",
    message: "Which kind of employee would you like to add",
    choices: ["Intern", "Engineer", "Exit"],
    name: "employeeType",
  },
];
// function to ask prompt questions for intern, engineer, manager based on answers of main question
function askPromptQuestions() {
  inquirer
    .prompt(mainQuestions)

    // data = giant object (answers from input)
    .then((answers) => {
      // console.log(answers);
      if (answers.employeeType === "Intern") {
        promptInternQuestions();
      }
      if (answers.employeeType === "Engineer") {
        promptEngineerQuestions();
      }
      if (answers.employeeType === "Exit"){
        return generateHtml();
        // end program when select exit
      }
    });
}

// three functions for intern, engineer, manager prompt questions
// referring to question with name: firstName, lastName, etc
// push this variable into an empty array
// separate files for intern class, engineer class, manager class, employee class
// employee class is parent, all others extend from it

// function to prompt manager questions

  // name, employee ID, email address, and office number
  
  

// function to prompt engineer questions
function promptEngineerQuestions() {
  // name, ID, email, and GitHub username
  const engineerQuestions = [
    {
      type: "input",
      message: "What is your first name?",
      name: "firstName",
    },

    {
      type: "input",
      message: "What is your last name?",
      name: "lastName",
    },
    {
      type: "input",
      message: "What is your ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },

    {
      type: "input",
      message: "What is your Github username?",
      name: "github",
    },
  ];
  inquirer.prompt(engineerQuestions).then((answers) => {
    const engineer = new Engineer(
      answers.firstName,
      answers.lastName,
      answers.email,
      answers.github
    );
    employees.push(engineer);
    return askPromptQuestions();
  });
}
// function to prompt intern questions
function promptInternQuestions() {
  // 4 questions: intern’s name, ID, email, and school
  const internQuestions = [
    {
      type: "input",
      message: "What is your first name?",
      name: "firstName",
    },

    {
      type: "input",
      message: "What is your last name?",
      name: "lastName",
    },

    {
      type: "input",
      message: "What is your ID?",
      name: "id",
    },

    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },

    {
      type: "input",
      message: "What is your school?",
      name: "school",
    },
  ];
  inquirer.prompt(internQuestions).then((answers) => {
    const intern = new Intern(
      answers.firstName,
      answers.lastName,
      answers.id,
      answers.email,
      answers.school,
    );
    employees.push(intern);
      return askPromptQuestions();
  });
}

// function that exits questions, writes to html file
function exit() {
  writeToFile("index.html", employees);
}

// function to ask prompt questions for intern, engineer, manager
init();
