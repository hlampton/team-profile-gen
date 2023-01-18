// import libraries
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");

// import staff class
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// array for new staff member data
const staffData = [];

// function to ask user input information
async function addStaffMember() {
  // prompt user for basic information
  const answers = await inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your ID number?",
      name: "id"
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email"
    },
    {
      type: "list",
      message: "What is your role?",
      name: "role",
      choices: ["Engineer", "Intern", "Manager"]
    }
  ]);

// prompt user for role-specific information
  let staff;
  if (answers.role === "Manager") {
    const managerAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
      }
    ]);

staff = new Manager(answers.name, answers.id, answers.email, managerAns.officeNumber);
  } else if (answers.role === "Engineer") {
    const githubAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
      }
    ]);
    staff = new Engineer(answers.name, answers.id, answers.email, githubAns.github);
  } else if (answers.role === "Intern") {
    const schoolAns = await inquirer.prompt([
      {
        type: "input",
        message: "What university did you attend?",
        name: "school"
      }
    ]);
    staff = new Intern(answers.name, answers.id, answers.email, schoolAns.school);
  }

// add new staff to array
  staffData.push(staff);

  // prompt user to add more staff or generate team
  const moreAns = await inquirer.prompt([
    {
      name: "more",
      type: "list",
      choices: ["Add more staff", "Generate team"],
      message: "What would you like to do next?"
      }
      ]);
      
      if (moreAns.more === "Add more staff") {
      return addStaffMember();
      } else {
      return generateTeam();
      }
      }
      
      // function to generate team page
      function generateTeam() {
      console.log("New staff members:", staffData);
      fs.writeFileSync(
      "./output/team.html",
      generateTeam(staffData),
      "utf-8"
      );
      }
      
      // start the program
      addStaffMember();
