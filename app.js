
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
           type: 'input',
           name: 'title',
           message: 'What is the name of your project?(Required)',
           validate: titleInput => {
            if (titleInput){
                return true;
            }else{
                console.log('Please enter a title for your project!');
                return false;
            }
           }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a detailed description of your project(Required)',
            validate: descriptionInput => {
                if (descriptionInput){
                    return true;
                }else{
                    console.log('You must provide a description for your project!');
                    return false;
                }
            }
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
            choices: ['Apache License 2.0', 'GNU GPL v3', 'MIT', 'ISC', 'Mozilla Public License 2.0', 'Boost Software License 1.0']
        }
    ])
    .then(data => {
        console.log('=================');
        console.log(data.license);
        return (data);
        
    })
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileName, data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
              reject(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
            }
      
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
              ok: true,
              message: 'File created!'
            });
          });   
    });
}
// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then(data => {
            return generateMarkdown(data);            
        })
        .then(writeToFile)
    }

// Function call to initialize app
init();

