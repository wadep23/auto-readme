
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

// Adding Title
if (input.title == '') {
    readmeTitle = '# TITLE';
} else {
    readmeTitle = `# ${input.title}`;
}
completeREADME.push(readmeTitle);

//Add in license badge here!!
let badge = `![](https://img.shields.io/badge/license-${readmeLicence.replace(/ /g, "%20")}-blue?style=flat-square)`;
completeREADME.push(badge);
    
    
// Adding description
if (input.description == '') {
   readmeDescription = `${descriptionHeading}\n Enter project description here.`;
} else {
   readmeDescription = `${descriptionHeading}\n${input.description}`;
}
completeREADME.push(readmeDescription);
    
    
//Adding Table of Contents
tableOfContents = `${tableOfContentsHeading}\n* [Installation](#installation)\n* [Usage](#usage)\n* [Contribution](#contribution)\n* [Tests](#tests)\n* [License](#license)\n* [Questions](#questions)\n`;
completeREADME.push(tableOfContents);
    
    
//Adding installation instructions
completeREADME.push(`${installHeading}`);
    
installArr = input.install.split(',').map(item => {
    return `${item.trim()}`;
});
    
for (var i = 0; i < installArr.length; i++) {
    completeREADME.push(`${i + 1}. ${installArr[i]}`);
}
    
    
//Adding Usage
if (input.usage == '') {
    readmeUsage = `\n${usageHeading}\n Enter project usage here.`;
} else {
    readmeUsage = `\n${usageHeading}\n${input.usage}`;
}
completeREADME.push(readmeUsage);
    
    
//Adding Contributing
if (input.contribution == '') {
    readmeContribution = `\n${contributionHeading}\n Enter project contribution information here.`;
} else {
    readmeContribution = `\n${contributionHeading}\n${input.contribution}`;
}
completeREADME.push(readmeContribution);

//License info
readmeLicence = `\n${licenseHeading}\nThis project is covered under the ${input.license}.`;
completeREADME.push(readmeLicence);
     
     
//Questions section with github link
readmeQuestions = `\n${questionsHeading}\nFor questions about this project, please see my GitHub at [${input.github}](https://github.com/${input.github}), or reach out by email at ${input.email}.`;
completeREADME.push(readmeQuestions);
     
     
//Joining the created README Array with a newline separator
const README = completeREADME.join('\n');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


    
    
function createREADMEFile(input) {}