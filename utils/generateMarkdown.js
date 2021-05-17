// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string

const renderLicenseBadge = (data) => {

    if (!data.license){
        return '';
    }else if (data.license == 'Apache License 2.0'){
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }else if (data.license == 'GNU GPL v3'){
        return'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    }else if (data.license == 'MIT'){
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }else if (data.license == 'ISC'){
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    }else if (data.license == 'Mozilla Public License 2.0'){
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    }else if (data.license == 'Boost Software License 1.0'){
        return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    } this.toString();    
}

// // // TODO: Create a function that returns the license link
// // // If there is no license, return an empty string

const renderLicenseLink = (data) => {
    if (!data.license){
        return '';
    }else if (data.license == 'Apache License 2.0'){
        return 'https://choosealicense.com/licenses/apache-2.0/';
    }else if (data.license == 'GNU GPL v3'){
        return 'https://choosealicense.com/licenses/gpl-3.0/';
    }else if (data.license == 'MIT'){
        return 'https://choosealicense.com/licenses/mit/';
    }else if (data.license == 'ISC'){
        return 'https://choosealicense.com/licenses/isc/';
    }else if (data.license == 'Mozilla Public License 2.0'){
        return 'https://choosealicense.com/licenses/mpl-2.0/';
    }else if (data.license == 'Boost Software License 1.0'){
        return 'https://choosealicense.com/licenses/bsl-1.0/';
    }    
}

// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string

const renderLicenseSection = (data) => {
    
    if (!data.license){
        return '';
    }
    return `## License

'${data.license}'

${renderLicenseBadge(data)}

${renderLicenseLink(data)}`
    
};

// // TODO: Create a function to generate markdown for README

const generateMarkdown = (data, err) => {
    
    
    if (err) return new Error(err)

        
        return `# ${data.title}
        
## Description
        
${data.description}
        
## Table of Contents
        
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
        
## Installation
        
${data.install}
        
## Usage
        
${data.usage}
        
## Credits
        
${data.credits}
                        
${renderLicenseSection(data)}
        
## Contributing

${data.contribute}

## Questions

Please reach out with any further questions regarding this application, general questions or potential collaboration opportunities.

Github: ${data.github}
[Visit my Github](https://www.github.com/${data.github})

Email: ${data.email}`;
}
    
    module.exports = generateMarkdown