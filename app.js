
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = ('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt([
        {
           type: 'input',
           name: 'title',
           message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a detailed description of your project'
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information for your application?'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter collaborator info here.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like for your project',
            choices: [
                'Apache License 2.0',
                'GNU GPL v3',
                'MIT',
                'ISC',
                'Mozilla Public License 2.0',
                'Boost Software License 1.0'
            ]
        }
    ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

module.exports = questions