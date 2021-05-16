
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project:'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information for your project:'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter collaborators, include links to their Github profiles:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license does this project fall under?',
            choices: [
                'True open source, MIT License',
                'ISC',
                'Apache License, Version 2.0',
                'GNU license, GNU GPLv3',
                'GNU GPLv2',
                'GNU AGPLv3',
                'GNU LGPLv3',
                'Mozilla Public License 2.0 (MPL 2.0)',
                'Boost Software License 1.0'
            ]
        }
    ])
    .then((res) => {
        console.log('Creating README file...');
        createREADMEFile(res);
        
    })
    .catch((err) => {
        console.log(err);
    })
let readmeTitle;
let readmeDescription;
const descriptionHeading = '## Description';
let tableOfContents;
const tableOfContentsHeading = '## Table of Contents';
let installArr;
const installHeading = '## Installation';
let readmeUsage;
const usageHeading = '## Usage';
let readmeContribution;
const contributionHeading = '## Contribution';
let readmeLicence = input.license;
const licenseHeading = '## License';
let readmeQuestions;
const questionsHeading = '## Questions';
let completeREADME = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


    
    
function createREADMEFile(input) {}