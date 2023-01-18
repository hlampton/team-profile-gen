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
