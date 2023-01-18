// import libraries
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");

// import staff class
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
