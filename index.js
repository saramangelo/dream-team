// three functions for intern, engineer, manager prompt questions
// referring to question with name: firstName, lastName, etc
// push this variable into an empty array
// separate files for intern class, engineer class, manager class, employee class
// employee class is parent, all others extend from it

const inquirer = require("inquirer");
const fs = require("fs");
// require classes (files) main class will be employee class
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./utils/generatehtml");

// every time I make a class, push data into this array
const employees = [];


// function to write html file
function writeToFile(fileName, data) {
  

  fs.writeFile(fileName, generateHtml(employees), (err) =>
    err ? console.error(err) : console.log("index.html successfully created!")
  );
}

// array of questions to prompt
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

// function to prompt manager questions
// name, employee ID, email address, and office number
function init() {
  inquirer.prompt(managerQuestions).then((answers) => {
    const manager = new Manager(
      answers.firstName + " " + answers.lastName,
      answers.id,
      answers.email,
      answers.office
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
      if (answers.employeeType === "Exit") {
        exit();
        // end program when select exit
      }
    });
}

// function to prompt intern questions
function promptInternQuestions() {
  // 4 questions: intern’s name, ID, email, and school
  const internQuestions = [
    {
      type: "input",
      message: "What is your intern's first name?",
      name: "firstName",
    },

    {
      type: "input",
      message: "What is your intern's last name?",
      name: "lastName",
    },

    {
      type: "input",
      message: "What is your intern's ID?",
      name: "id",
    },

    {
      type: "input",
      message: "What is your intern's email address?",
      name: "email",
    },

    {
      type: "input",
      message: "What is your intern's school?",
      name: "school",
    },
  ];
  inquirer.prompt(internQuestions).then((answers) => {
    const intern = new Intern(
      answers.firstName + " " + answers.lastName,
      answers.id,
      answers.email,
      answers.school
    );
    
    employees.push(intern);
    return askPromptQuestions();
  });
}

// function to prompt engineer questions
function promptEngineerQuestions() {
  // name, ID, email, and GitHub username
  const engineerQuestions = [
    {
      type: "input",
      message: "What is your engineer's first name?",
      name: "firstName",
    },

    {
      type: "input",
      message: "What is your engineer's last name?",
      name: "lastName",
    },
    {
      type: "input",
      message: "What is your engineer's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your engineer's email address?",
      name: "email",
    },

    {
      type: "input",
      message: "What is your engineer's Github username?",
      name: "github",
    },
  ];
  inquirer.prompt(engineerQuestions).then((answers) => {
    const engineer = new Engineer(
      answers.firstName + " " + answers.lastName,
      answers.id,
      answers.email,
      answers.github
    );
    employees.push(engineer);
    return askPromptQuestions();
  });
}


// function that exits questions, writes to html file
function exit() {
  writeToFile("index.html", employees);
}


// function to ask prompt questions for intern, engineer, manager
init();
